<?php
require_once('config.php');

$campaigns = $db->rawQuery('SELECT * FROM campaigns GROUP BY s_id ORDER BY date DESC');
echo json_encode($campaigns);