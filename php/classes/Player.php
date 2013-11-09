<?php
class Player
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
		
		$selectSQL = "SELECT lahmanID, playerID, nameFirst, nameLast, nameGiven, nameNick, debut, finalGame";
		$fromSQL =' FROM master';
		$orderBySQL = " ORDER BY " . $property . " " . $direction;
		$limitSQL = "  LIMIT " . $start . ", " . $end;
			
		$whereSQL = " WHERE 1=1";
		
		if(isset($params->nameFirst) && $params->nameFirst != '')
			$whereSQL .= " AND UPPER(nameFirst)='" . $_db->real_escape_string(strtoupper($params->nameFirst)) . "'";
		
		if(isset($params->nameLast) && $params->nameLast != '')
			$whereSQL .= " AND UPPER(nameLast)='" . $_db->real_escape_string(strtoupper($params->nameLast)) . "'";
		
		if(isset($params->nameGiven) && $params->nameGiven != '')
			$whereSQL .= " AND UPPER(nameGiven)='" . $_db->real_escape_string(strtoupper($params->nameGiven)) . "'";
		
		if(isset($params->nameNick) && $params->nameNick != '')
			$whereSQL .= " AND UPPER(nameNick)='" . $_db->real_escape_string(strtoupper($params->nameNick)) . "'";
		
		
		$_result = $_db->query($selectSQL . $fromSQL . $whereSQL . $orderBySQL . $limitSQL)
			or die('Connect Error (' . $_db->connect_errno . ') ' . $_db->connect_error);
		
		$_total_count_result = $_db->query("SELECT COUNT(*) FROM master" . $whereSQL) 
			or die('Connect Error (' . $_db->connect_errno . ') ' . $_db->connect_error);
		
		$_total = $_total_count_result->fetch_row();
			
		$results = array();
		
		while ($row = $_result->fetch_assoc()) {
			array_push($results, $row);
		}
		
		return array('total'=>$_total, 'data'=>$results);
	}
	
    public function showDetails($data){
        $first = $data->nameFirst;
        $last = $data->nameLast;
        return "Hi $first $last!";
    }
		
	public function __destruct()
	{
		$_db = $this->__construct();
		$_db->close();
		
		return $this;
	}
}