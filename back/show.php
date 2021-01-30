<?php
require_once('config.php');

$campaigns = $db->get('campaigns');
echo json_encode($campaigns);