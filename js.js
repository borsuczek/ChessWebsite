function walidate(){
	$( "#dialog-1" ).dialog({  
         autoOpen: false		   
    }); 
}
function jquery() {
	$( "#ukryj1" ).click(function() {
		$("#tekst1").toggle("fast");
		if($('#ukryj1').text()=="[ukryj]")
			$('#ukryj1').text("[odkryj]");
		else
			$('#ukryj1').text("[ukryj]");
	});
	$( "#ukryj2" ).click(function() {
		$("#tekst2").toggle("fast");
		if($('#ukryj2').text()=="[ukryj]")
			$('#ukryj2').text("[odkryj]");
		else
			$('#ukryj2').text("[ukryj]");
	});
	$( "#ukryj3" ).click(function() {
		$("#tekst3").toggle("fast");
		if($('#ukryj3').text()=="[ukryj]")
			$('#ukryj3').text("[odkryj]");
		else
			$('#ukryj3').text("[ukryj]");
	});
	$( "#ukryj4" ).click(function() {
		$("#tekst4").toggle("fast");
		if($('#ukryj4').text()=="[ukryj]")
			$('#ukryj4').text("[odkryj]");
		else
			$('#ukryj4').text("[ukryj]");
	});
}
function jquery2(){
	$("#move").draggable();  
    $("#move").bind('click', function( event ){  
		var cursor = $( "#move" ).draggable( "option", "cursor" );  
        var cursorAt = $( "#move" ).draggable( "option", "cursorAt" );  
        alert("Cursor type - " + cursor + ", cursorAt - " + cursorAt);  
    });  
}
function licznik(){
	if(window.localStorage){
		if(localStorage.number>=0)
			localStorage.number=Number(localStorage.number)+1;
		else
			localStorage.number=1;
		var p = document.createElement('P'); 
		p.innerHTML="Ile razy odwiedzona podstrona: "+localStorage.number;
		document.getElementById("art").appendChild(p);
	}
}
function formularz(){
	if(window.sessionStorage){
		var imie=document.getElementById("imie").value;
		var nazwisko=document.getElementById("nazwisko").value;
		var option=opt.options[opt.selectedIndex].value;
		var data=document.getElementById("data").value;
		if(document.getElementById("male").checked)
			sessionStorage.check=1;
		else
			sessionStorage.check=2;
		sessionStorage.imie=imie;
		sessionStorage.nazwisko=nazwisko;
		sessionStorage.option=option;
		sessionStorage.data=data;
	}
}
function spisz(){
	if(window.sessionStorage){
		if(!sessionStorage.imie && !sessionStorage.nazwisko && !sessionStorage.check && !sessionStorage.option && !sessionStorage.data)
			re();
		document.getElementById("imie").value=sessionStorage.imie;
		document.getElementById("nazwisko").value=sessionStorage.nazwisko;
		if(sessionStorage.check=="1")
			document.getElementById("male").checked=true;
		else
			document.getElementById("female").checked=true;
	
		opt.options[Number(sessionStorage.option)].selected=true;
		document.getElementById("data").value=sessionStorage.data;
	}
}
function re(){
	if(window.sessionStorage){
		sessionStorage.imie="";
		sessionStorage.nazwisko="";
		sessionStorage.check=1;
		sessionStorage.option=0;
		sessionStorage.data="dd.mm.rrrr";
	}
}
function sub(){
	if(document.getElementById("imie").value.length>0 && document.getElementById("nazwisko").value.length>0)
		re();
	else
		$( "#dialog-1" ).dialog( "open" );  	
}
function backcolor(){	
	var ust=document.getElementById("art");
	var color=document.getElementById("kolor").value;
	if(window.localStorage){
		localStorage.backgroundcolor=color;
		ust.style.background=localStorage.backgroundcolor;
		if(document.getElementById("kolor2").value=="#000000")
			addbutton();
	}
	else
		ust.style.background=color;
	console.log('background color: ' + color);
}

function textcolor(){
	var ust=document.getElementById("art");
	var color=document.getElementById("kolor2").value;
	if(window.localStorage){
		localStorage.fontcolor=color;
		ust.style.color=localStorage.fontcolor;
		if(document.getElementById("kolor").value=="#d9f7f2")
			addbutton();
	}
	else
		ust.style.color=color;
	console.log('font color: ' + color);
}

function ustawienia(){
	var ust=document.getElementById("art");
	if(window.localStorage){
		if(!localStorage.backgroundcolor)
			localStorage.backgroundcolor="#d9f7f2";
		if(!localStorage.fontcolor)
			localStorage.fontcolor="#000000";
		ust.style.background=localStorage.backgroundcolor;
		ust.style.color=localStorage.fontcolor;
		if(document.getElementById("kolor") && document.getElementById("kolor2")){
			document.getElementById("kolor").value=localStorage.backgroundcolor;
			document.getElementById("kolor2").value=localStorage.fontcolor;
		}
		if(!(localStorage.backgroundcolor=="#d9f7f2" && localStorage.fontcolor=="#000000"))
			addbutton();
	}
}
function addbutton(){
	if(localStorage.backgroundcolor!="#d9f7f2" || localStorage.fontcolor!="#000000"){
		if(!document.querySelector("BUTTON")){
			var button = document.createElement("BUTTON");
			var tekst = document.createTextNode("resetuj ustawienia strony");
			button.appendChild(tekst);
			document.querySelector(".spis").appendChild(button);
			button.addEventListener("click", reust);
		}
	}
}
function reust(){
	localStorage.backgroundcolor="#d9f7f2";
	localStorage.fontcolor="#000000";
	ustawienia();
	var spis = document.querySelector(".spis");
	var button=document.querySelector("BUTTON");
	spis.removeChild(button);
}
