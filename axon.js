(function(){

	//call the UI page "home"
	App.load('home');
	
	setInterval(function(){
	
		$.getJSON( "http://localhost:8080/nervousnet-api/raw-sensor-data/Accelerometer", function( data ) {
			
			$("#sensordata").html(data.x);
						
		});
		
		
	}, 1000);
	

})();
