<?php
class PlayerBatting
{
	protected $_db;
	protected $_result;
	public $results;
	
	public function __construct()
	{
		$_db = new mysqli('localhost', 'baseball' ,'password', 'lahman');

        if ($_db->connect_error) {
			die('Connection Error (' . $_db->connect_errno . ') ' . $_db->connect_error);
		}
		
		return $_db;
	}
	
	public function getResults(stdClass $params)
	{
		$start = $params->start;
	    $end = $params->limit;
		$sort = $params->sort;
		$property = $sort[0]->property;
		$direction = $sort[0]->direction;
		
		$_db = $this->__construct();
		
		$selectSQL = "SELECT playerID, yearID, stint, teamID, lgID, G, G_batting, AB, R, H, 2B, 3B, HR, RBI, SB, CS, BB, SO, IBB, HBP, SH, SF, GIDP, G_old";
		$fromSQL =' FROM batting';
		$orderBySQL = " ORDER BY " . $property . " " . $direction;
		$limitSQL = "  LIMIT " . $start . ", " . $end;
			
		$whereSQL = " WHERE 1=1";
		
		if(isset($params->playerID) && $params->playerID != '')
			$whereSQL .= " AND playerID='" . $_db->real_escape_string($params->playerID) . "'";
		
		$_result = $_db->query($selectSQL . $fromSQL . $whereSQL . $orderBySQL . $limitSQL)
			or die('Connect Error (' . $_db->connect_errno . ') ' . $_db->connect_error);
		
		$_total_count_result = $_db->query("SELECT COUNT(*) FROM batting" . $whereSQL) 
			or die('Connect Error (' . $_db->connect_errno . ') ' . $_db->connect_error);
		
		$_total = $_total_count_result->fetch_row();
			
		$results = array();
		
		while ($row = $_result->fetch_assoc()) {
			array_push($results, $row);
		}
		
		return array('total'=>$_total, 'data'=>$results);
	}
		
	public function __destruct()
	{
		$_db = $this->__construct();
		$_db->close();
		
		return $this;
	}
}