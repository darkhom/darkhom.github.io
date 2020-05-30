function Sidebar(a){
	var A=[1,1,1]; A[a]=2;
	document.getElementById("sload").innerHTML="<div class=\"sidebar\">"+
		"<div class=\"sidebar_element\"><a href=\"index.html\"><img src=\"img/back"+A[0]+".png\"></img>Main Menu</a></div>"+
		"<div class=\"sidebar_element\"><a href=\"symbol.html\"><img src=\"img/symb"+A[1]+".png\"></img>Magic Symbol</a></div>"+
		"<div class=\"sidebar_element\"><a href=\"card.html\"><img src=\"img/skill"+A[2]+".png\"></img>Passive Card</a></div>"+
		
		"</div>";
}