<?php
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app->get('/players/bio/:lahmanID',	'getPlayerBio');

$app->run();

function getPlayerBio($id) {
	$sql = "SELECT playerID, birthYear, birthMonth, birthDay, birthCountry,"
		. " birthState, birthCity, deathYear, deathMonth, deathDay, deathCountry,"
		. " deathState, deathCity, nameFirst, nameLast, nameNote, nameGiven, nameNick, weight, height, bats, throws, debut, finalGame, college"
		. " FROM master WHERE lahmanID=:id";
	
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$playerBio = $stmt->fetchObject();  
		$db = null;
		echo json_encode($playerBio); 
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function getConnection() {
	$dbhost="localhost";
	$dbuser="baseball";
	$dbpass="password";
	$dbname="lahman";
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbh;
}
