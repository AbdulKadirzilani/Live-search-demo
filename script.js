// 		for (var i = 0 ; i<100;i++){
// 		var request = new XMLHttpRequest();
// 		request.open('GET','data.txt',false);

// 		request.send();

// 		if (request.status ===200){

// 				console.log(request);
// 				document.writeln(request.responseText);
//}}  


//________________________2nd rule bt no possibity to wrong(better Rule )


// var request = new XMLHttpRequest();
// request.open('GET','data.txt');

// request.onreadystatechange= function(){

// 		if ((request.readyState===4)&&(request.status ===200)){

// 				console.log(request);
// 				document.writeln(request.responseText);


// 		}
// 	}
// request.send();


//________________________3nd rule bt no possibity to wrong (best Rule )
// support for all browser specially internet explore

// var request;
//  if(window.XMLHttpRequest) {
// 		 request = new XMLHttpRequest
//  }
//   else{
// 		request= ActiveXObject("Microsoft.XMLHTTP");
// 		 }
// request.open('GET','data.txt');

// request.onreadystatechange= function(){

// 		if ((request.readyState===4)&&(request.status ===200)){

// 				console.log(request);
// 				document.writeln(request.responseText);


// 		}
// 	}
// request.send();

//___________________________json format_____

// var request;
//  if(window.XMLHttpRequest) {
// 	request = new XMLHttpRequest();
//  }
//   else{
// 	request= ActiveXObject("Microsoft.XMLHTTP");
// 		 }
// request.open('GET','data.json');

// request.onreadystatechange= function(){

// 		if ((request.readyState===4)&&(request.status ===200)){


// 			var items =JSON.parse(request.responseText);

// 			var output = '<ul>';
// 			for(var key in items ){

// 				output += '<li>'+ items(key).name+ '</li>';
// 			}
// 			output += '</ul>';

// 			document.getElementById('update').innerHTML =output;



// 		}
// 	}
// request.send();





//Successful run json data


// var request;
//  if(window.XMLHttpRequest) {
// 	request = new XMLHttpRequest();
//  }
//   else{
// 	request= ActiveXObject("Microsoft.XMLHTTP");
// 		 }
// request.open('GET','data.json');

// request.onreadystatechange= function(){

// 	if ((request.readyState===4)&&(request.status ===200)){



// 		var modify = document.getElementsByTagName('li');
// 		for (var i =0; i<modify.length ; i++){
// 			modify[i].innerHTML = request.responseText;
// 		}


// 		}
// 	}




// request.send();





//___________________________json format_____

// var request;
//  if(window.XMLHttpRequest) {
// 	request = new XMLHttpRequest();
//  }
//   else{
// 	request= ActiveXObject("Microsoft.XMLHTTP");
// 		 }
// request.open('GET','data.json');

// request.onreadystatechange= function(){

// 		if ((request.readyState===4)&&(request.status ===200)){


// 			var items =JSON.parse(request.responseText);

// 			var output = '<ul>';
// 			for(var key in items ){

// 				output =output+ '<li>' + items[key].name + '</li>';
// 			}
// 			output = output+ '</ul>';

// 			document.getElementById('update').innerHTML =output;



// 		}
// 	}
// request.send();


//work with load buuton by ajson


	//alert("Hi");
	//var request;
	//  if(window.XMLHttpRequest) {
	// 	request = new XMLHttpRequest();
	//  }
	//   else{
	// 	request= ActiveXObject("Microsoft.XMLHTTP");
	// 		 }
	// request.open('GET','data.json');
	
	// request.onreadystatechange= function(){
	
	// 		if ((request.readyState===4)&&(request.status ===200)){
	
	
	// 			var items =JSON.parse(request.responseText);
	
	// 			var output = '<ul>';
	// 			for(var key in items ){
	
	// 				output =output+ '<li>' + items[key].name + '</li>';
	// 			}
	// 			output = output+ '</ul>';
	
	// 			document.getElementById('update').innerHTML =output;
	
	
	
	// 		}
	// 	}
	// request.send();

	



	// var request;
	//  if(window.XMLHttpRequest) {
	// 	request = new XMLHttpRequest();
	//  }
	//   else{
	// 	request= ActiveXObject("Microsoft.XMLHTTP");
	// 		 }
	// request.open('GET','data.json');
	
	// request.onreadystatechange= function(){
	
	// 		if ((request.readyState===4)&&(request.status ===200)){
	
	
	// 			var items =JSON.parse(request.responseText);
	
	// 			var output = '<ul>';
	// 			for(var key in items ){
	
	// 				output =output+ '<li>' + items[key].name + '</li>';
	// 			}
	// 			output = output+ '</ul>';
	
	// 			document.getElementById('update').innerHTML =output;
	
	
	
	// 		}
	// 	}

	// 	function show(){
	// request.send();
	// 	}
	



	//________________jquery Ajax test

	// $('.update').load('data.txt');



	// $.getJSON('data.json', function(data){



	// 	var output = '<ul>';

	// 	$.each(data,function(key,val){

	// 		output +=  '<li>' + val.name+'</li>' ;
	// 	});
	// 	output += '</ul>';
	// 	$('update').prepend(output);
	// });


// Live search =1

// 	$('#search').keyup(function(){
// 	$.getJSON('data.json', function(data){



// 		var output = '<ul>'
// 		$.each(data,function(key,val){

// 			output +=  '<h2>' + val.name+'</h2>' ;

			
// 			output +=  '<p>' + val.username+'</p>' ;
			
// 			output +=  '<p>' + val.email+'</p>' ;
// 		});
// 		output += '</ul>';

// 		$('#update').html(output);
// 	});

// });




$('#search').keyup(function(){
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, 'i');
	$.getJSON('data.json', function(data){



		var output = '<ul>'
		$.each(data,function(key,val){
			if (val.name.search(myExp) != -1){

			output +=  '<h2>' + val.name+'</h2>' ;

			
			output +=  '<p>' + val.username+'</p>' ;
			
			output +=  '<p>' + val.email+'</p>' ;

			}
		});
		output += '</ul>';

		$('#update').html(output);
	});

});
