<?php
require_once('config.php');

$data = json_decode(file_get_contents('php://input'), true);
$db->where('s_id', $data['campaign']['s_id']);
$db->where('modify', $data['campaign']['modify']);
$campaign = $db->getOne('campaigns');

if($db->count == 0) {
    $date = date('Y-m-d H:i:s');
    $insert = [
        's_id' => $data['campaign']['s_id'], 
        'name' => $data['campaign']['name'], 
        'css' => $data['campaign']['css'], 
        'date' => $date, 
        'html' => $data['campaign']['html'],
        'js' => $data['campaign']['js'], 
        'summary' => $data['campaign']['summary'], 
        'modify' => $data['campaign']['modify'],
        'status' => $data['campaign']['status'],
        'author' => $data['campaign']['author'],
        'link' => $data['campaign']['link'],
        'description' => $data['campaign']['description'],
        'modify_date' => date('Y-m-d H:i:s', strtotime($data['campaign']['modify'])),
    ];
    $id = $db->insert('campaigns', $insert);
    if($id) {
        echo json_encode(200);
    } else {
        $file = 'file.txt';
        $current = file_get_contents($file);
        $current .= $date .' - '. $data['campaign']['name'] . ' -' . $data['campaign']['s_id'] . $db->getLastError() .  "\n";
        file_put_contents($file, $current);
        echo json_encode($db->getLastError());
    }
} else {
    echo json_encode(666);
}

