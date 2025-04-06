<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Connexion BDD
$host = 'db';
$dbname = 'db';
$username = 'root';
$password = 'admin';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Connexion échouée']);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ($method === 'GET' && $path === 'messages') {
    $sender_id = $_GET['sender_id'] ?? null;
    $receiver_id = $_GET['receiver_id'] ?? null;

    if (!$sender_id || !$receiver_id) {
        echo json_encode(['status' => 'error', 'message' => 'IDs manquants']);
        exit;
    }

    $stmt = $pdo->prepare("SELECT * FROM messages 
        WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?)
        ORDER BY created_at ASC");
    $stmt->execute([$sender_id, $receiver_id, $receiver_id, $sender_id]);
    $messages = $stmt->fetchAll();

    echo json_encode(['status' => 'success', 'messages' => $messages]);
    exit;
}
if ($method === 'POST' && $path === 'messages') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (empty($data['sender_id']) || empty($data['receiver_id']) || empty($data['content'])) {
        echo json_encode(['status' => 'error', 'message' => 'Données manquantes']);
        exit;
    }

    $stmt = $pdo->prepare("INSERT INTO messages (sender_id, receiver_id, content) VALUES (?, ?, ?)");
    $stmt->execute([$data['sender_id'], $data['receiver_id'], $data['content']]);

    echo json_encode(['status' => 'success', 'message' => 'Message envoyé']);
    exit;
}


// Sinon
http_response_code(404);
echo json_encode(['status' => 'error', 'message' => 'Endpoint non trouvé']);
