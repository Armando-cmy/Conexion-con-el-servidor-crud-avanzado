<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

if($_SERVER["REQUEST_METHOD"]=="OPTIONS"){
    http_response_code(200);
    exit();
}

//datos de conexion a la bd
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "doguito";


$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error) {
    http_response_code(500);
    die(json_encode(["error"=>"Error de conexión a la base de datos: " . $conn->connect_error]));
}


$method = $_SERVER["REQUEST_METHOD"];

switch($method){
    case 'GET':
        $id = $_GET["id"] ?? null;
        if($id){
            $stmt = $conn->prepare("SELECT * FROM Clientes WHERE id = ?");
            $stmt->bind_param("s", $id); // Corregido: $stmt_> por $stmt->
            $stmt->execute();
            $result = $stmt->get_result();
            $cliente = $result->fetch_assoc();
            echo json_encode($cliente);
        } else {
            $result = $conn->query("SELECT * FROM Clientes");
            $clientes = [];
            while($row = $result->fetch_assoc()){ 
                $clientes[] = $row;
            }
            echo json_encode($clientes);
        }
        break;

    case 'PUT':
        $input = json_decode(file_get_contents("php://input"), true);
        $id = $input['id'] ?? null;
        $nombre = $input['nombre'];
        $email = $input['email'];
        
        $stmt = $conn->prepare("UPDATE Clientes SET nombre=?, email=? WHERE id=?");
        
        $stmt->bind_param("sss", $nombre, $email, $id);
        
        if($stmt->execute()){
            http_response_code(200);
            echo json_encode(["message"=>"Cliente actualizado exitosamente","id"=>$id]);
        } else {
            http_response_code(500);
            echo json_encode(["message"=>"todo mal "]);
        }
        break;

    case 'DELETE':
        $id = $_GET["id"] ?? null;
        $stmt = $conn->prepare("DELETE FROM Clientes WHERE id=?");
        $stmt->bind_param("s", $id);
        
        if($stmt->execute()){
            echo json_encode(["message"=>"Cliente eliminado exitosamente","id"=>$id]);
        } else {
            http_response_code(500);
            echo json_encode(["message"=>"todo mal "]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(["message"=>"Metodo no permitido"]);
        break;
}

$conn->close();
?>