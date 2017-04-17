<?php
/**
 * Created by PhpStorm.
 * User: phoebegl
 * Date: 2017/4/10
 * Time: 11:22
 */
header('Access-Control-Allow-Origin: *');

require ("DBHelper.php");
$db=new MyDB();
$ssid=$_GET["ssid"];
Session_id($ssid);
session_start();

$postid=$_GET["postid"];
$userid = $_SESSION['id'];

$content=addmark($_GET["content"]);
$date=addmark(date("Y-m-d"));
$commentid=rand(1,100000);

$sql="INSERT INTO Comment VALUES ($commentid,$postid,$userid,$content,$date);";

$ret = $db->exec($sql);

if(!$ret){
    echo "0";
} else {
    echo "1";
}

function addmark($str){
    $nstr="\"".$str."\"";
    return $nstr;
}
