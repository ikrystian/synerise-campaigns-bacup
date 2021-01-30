<?php
require_once('config.php');

$data = json_decode(file_get_contents('php://input'), true);
$campaignsToUpdate = [];
foreach ($data as $campaign) {
    $db->where('s_id', $campaign['s_id']);
    $db->where('modify', $campaign['modify']);
    $db->getOne('campaigns');

    if(!$db->count) {
        array_push($campaignsToUpdate, $campaign);
    }
}

echo json_encode($campaignsToUpdate);