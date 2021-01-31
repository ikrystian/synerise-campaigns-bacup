<?php
require_once('config.php');
$data = json_decode(file_get_contents('php://input'), true);
$d = array($data['campaigns'])[0];

$cols = ['link', 'status', 's_id', 'modify', 'name'];
$db->orderBy('id', 'asc');
$campaigns = $db->get("campaigns", null, $cols);

$obj = array_unique(array_merge($d, $campaigns));

echo json_encode($obj);