<?php 
	// $userStr = file_get_contents('data/info.json');
	// $userObj = json_decode($userStr);
	$userObj = array("葫芦兄弟","柯南","水冰月","钢铁侠");
	$name = $_POST['name'];
	$isIn = in_array($name,$userObj);
	if ($isIn) {
		echo 'have';
	}else{
		echo 'no';
	}
 ?>