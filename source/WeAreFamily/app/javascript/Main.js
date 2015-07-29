var Main = { // Main object 
}

var widgetAPI = new Common.API.Widget(); // Create Common module 
var tvKey = new Common.API.TVKeyValue();
 var map;
var geocoder;
var address;

var lat1 = 37.503926;
var lang1 = 127.044846;

var lat2 = 14.239932;
var lang2 = 125.044234;

var lat3 = 14.239935;
var lang3 = 125.044234;

var lat4 = 14.239940;
var lang4 = 125.044234;


Main.onLoad = function(){ // called by <body>'s onload event 
	alert("Main.onLoad()"); 
	widgetAPI.sendReadyEvent(); // Send ready message to Application Manager 
	document.getElementById("anchor").focus(); // Focus to Anchor for handling key inputs 
	map = new GMap2(document.getElementById("map_canvas"));

	map.setCenter(new GLatLng(lat1,lang1), 15);
	
	point1 = new GLatLng(lat1,lang1);
	point2 = new GLatLng(lat2,lang2);
	point3 = new GLatLng(lat3,lang3);
	point4 = new GLatLng(lat4,lang4);
	
	marker1 = new GMarker(point1);
	marker2 = new GMarker(point2);
	marker3 = new GMarker(point3);
	marker4 = new GMarker(point4);
	
	
    map.addOverlay(marker1);
    map.addOverlay(marker2);
    map.addOverlay(marker3);
    map.addOverlay(marker4);
    map.openInfoWindow(map.getCenter(),document.createTextNode("아남타워"));
  
    map.setUIToDefault();                                                                              // from remote controller 
   /** 
    * JavaScript code Here! 
    */ 
}

var mapZoomFlag = true;

Main.keyDown = function(){ // Key handler 
   var keyCode = event.keyCode;
   alert("Main Key code : " + keyCode); 
   
   switch (keyCode) { 
	case tvKey.KEY_LEFT: 
		alert("left"); 
		map.panDirection(-1, 0);
        break; 
     
	case tvKey.KEY_RIGHT: 
		alert("right"); 
		map.panDirection(1, 0);			 
		break; 
      
	 case tvKey.KEY_UP: 
		alert("up"); 
		if(mapZoomFlag)
			map.setZoom(map.getZoom() + 1);					// zoom in when mapZoomFlag is true
		else
			map.panDirection(0, -1);						//moving map up when mapZoomFlag is false
		break;
      
	 case tvKey.KEY_DOWN: 
        alert("down"); 
		if(mapZoomFlag)
			map.setZoom(map.getZoom() - 1);					//zoom out when mapZoomFlag is true
		else
			map.panDirection(0, 1);							//moving map down when mapZoomFlag is false
		break; 
     
	 case tvKey.KEY_ENTER: 
         alert("enter"); 
		 mapZoomFlag = (mapZoomFlag) ? false : true;		//toggling mapZoomFlag's value
         break; 
     
	 case tvKey.KEY_RETURN: 
		
        break; 
   } 
}   