<?php
require_once('config.php');
$data = json_decode(file_get_contents('php://input'), true);
$campaigns = $db->get("campaigns", null, $cols);

foreach($data as $campaign) {
    $a = array_filter(
        $campaigns,
        function ($e) use ($campaign) {
            return !($e['s_id'] == $campaign['s_id'] && $e['modify'] == $campaign['modify']);
        }
    );
}

echo json_encode($a);