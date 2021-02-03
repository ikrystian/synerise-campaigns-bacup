<?php
require_once('config.php');
if(isset($_GET['s_id'])) {
    $db->where('s_id', $_GET['s_id']);
    $db->orderBy('id', 'desc');
    $campaigns = $db->get('campaigns');
    echo json_encode($campaigns);
} else if(isset($_GET['id'])){
    $db->where('id', $_GET['id']);
    echo json_encode($db->getOne('campaigns'));
} else {
    $campaigns = $db->rawQuery('SELECT * FROM campaigns GROUP BY s_id ORDER BY id DESC');
    echo json_encode($campaigns);
}