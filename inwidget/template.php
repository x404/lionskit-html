<?php 
if(!$inWidget) die('inWidget object was not initialised.');
if(!is_object($inWidget->data)) die('<b style="color:red;">Cache file contains plain text:</b><br />'.$inWidget->data);

if(!empty($inWidget->data->images)){
	if($inWidget->config['imgRandom'] === true) shuffle($inWidget->data->images);
	$inWidget->data->images = array_slice($inWidget->data->images,0,$inWidget->view);
	echo '<div class="data">';
	foreach ($inWidget->data->images as $key=>$item){
		switch ($inWidget->preview){
			case 'large':
				$thumbnail = $item->large;
				break;
			case 'fullsize':
				$thumbnail = $item->fullsize;
				break;
			default:
				$thumbnail = $item->small;
		}


		echo '<a href="'.$item->link.'" class="image" target="_blank"><img src="'.$thumbnail.'" alt="" /></a>';


	}
	echo '</div>';
}
else echo '<div class="empty">'.$inWidget->lang['imgEmpty'].'</div>';
?>
