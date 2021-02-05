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
if(count($newArray) > 0) {
    $db->insert('stats',['date' => date('Y-m-d H:i:s'),'count' => count($newArray)]);
}
echo json_encode(array_reverse($newArray));
