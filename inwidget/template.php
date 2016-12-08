<?php 
if(!$inWidget) die('inWidget object was not initialised.');
if(!is_object($inWidget->data)) die('<b style="color:red;">Cache file contains plain text:</b><br />'.$inWidget->data);

if(!empty($inWidget->data->images)){
	if($inWidget->config['imgRandom'] === true) shuffle($inWidget->data->images);
	$inWidget->data->images = array_slice($inWidget->data->images,0,$inWidget->view);
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
		$foo1 .= '<a href="'.$item->link.'" class="image" target="_blank"><img src="'.$thumbnail.'" alt="" /></a>';
	}


	if($inWidget->config['imgRandom'] === true) shuffle($inWidget->data->images);
	$inWidget->data->images = array_slice($inWidget->data->images,0,$inWidget->view);
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
		$foo2 .= '<a href="'.$item->link.'" class="image" target="_blank"><img src="'.$thumbnail.'" alt="" /></a>';
	}


	if($inWidget->config['imgRandom'] === true) shuffle($inWidget->data->images);
	$inWidget->data->images = array_slice($inWidget->data->images,0,$inWidget->view);
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
		$foo3 .= '<a href="'.$item->link.'" class="image" target="_blank"><img src="'.$thumbnail.'" alt="" /></a>';
	}		
}
else echo '<div class="empty">'.$inWidget->lang['imgEmpty'].'</div>';

?>

	<div class="carousel owl-carousel" id="foo1">
		<?php echo $foo1 ?>
	</div>
	<div class="carousel owl-carousel" id="foo2">
		<?php echo $foo2 ?>
	</div>
	<div class="carousel owl-carousel" id="foo3">
		<?php echo $foo3 ?>
	</div>
