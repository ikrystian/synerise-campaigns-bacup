<?php
require_once('MysqliDb.php');
$db = new MysqliDb ('', '', '', '');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-type: application/json');