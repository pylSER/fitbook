<?php
/**
 * Created by PhpStorm.
 * User: phoebegl
 * Date: 2017/4/12
 * Time: 14:46
 */
header('Access-Control-Allow-Origin: *');
require ("DBHelper.php");

$db=new MyDB();
$ssid=$_GET["ssid"];
Session_id($ssid);
session_start();

$userid=$_SESSION["id"];

$avatarurl="http://127.0.0.1:8888/fitbook/userdata/avatar/";
$avatar="";

$sql="select avatarlink from User WHERE userid=".$userid;
$ret = $db->query($sql);
$row = $ret->fetchArray(SQLITE3_ASSOC);
$avatar=$avatarurl.$row['avatarlink'];

echo $avatar;
