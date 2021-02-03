<?php
require_once('config.php');
$data = json_decode(file_get_contents('php://input'), true)['campaigns'];
$campaigns = $db->get('campaigns', null, ['s_id', 'modify']);
$newArray = array_filter(
    $data,
    function ($e) use (&$campaigns) {
        return !array_search(["s_id" => $e['s_id'], "modify" => $e['modify']], $campaigns);
    }
);

echo json_encode($newArray);
