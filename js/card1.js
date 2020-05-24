var lvl=[0,0];
var att1=[0,0];
var att2=[0,0];
var card=0;

function Open(c){
	if (lvl[c]==8) return;
	document.getElementById("card_fullwrap").style.display="block";
	card=c;
}
function Reroll(c){
	var proc=0; card=c;
	att1[card]=att2[card]=0; lvl[card]=1;
	if (card==0) {
		att1[card]+=Math.floor(Math.random()*200)+1;
		att2[card]+=Math.floor(Math.random()*30)+1;
		proc=Number(100*(att1[card]/200+att2[card]/30)/2);
	} else if (card==1) {
			att1[card]+=Math.floor(Math.random()*300)+1;
			att2[card]+=Math.floor(Math.random()*70)+1;
			proc=Number(100*(att1[card]/300+att2[card]/70)/2);
	}/*next*/
	Output(proc);
}
function Upgrade(){
	var lvin = document.getElementById("level").value;
	var proc=0,i;
	var errid = document.getElementById("card_error");
	if (lvin>8-lvl[card]){
		errid.innerHTML = "Maximum lvl is 8.";
		return;
	} else if (lvin<=0){
		errid.innerHTML = "Level can not be equal or less than 0.";
		return;
	} else {
		lvl[card]+=Number(lvin);
	}
	
	for (i=lvl[card]-lvin;i<lvl[card];i++) {
		if (card==0) {
			att1[card]+=Math.floor(Math.random()*200)+1;
			att2[card]+=Math.floor(Math.random()*30)+1;
			proc=Number(100*(att1[card]/(200*(i+1))+att2[card]/(30*(i+1)))/2);
		} else if (card==1) {
			att1[card]+=Math.floor(Math.random()*300)+1;
			att2[card]+=Math.floor(Math.random()*70)+1;
			proc=Number(100*(att1[card]/(300*(i+1))+att2[card]/(70*(i+1)))/2);
		}/*next*/
	}
	
	Output(proc);
	document.getElementById("card_fullwrap").style.display="none";
}
function Output(proc){
	var out = document.getElementById(card);
	var P="", Frame="", S="";
	if (proc>=80) {P="red\">Legendary"; Frame="05";}
	else if (proc>=60) {P="orange\">Epic"; Frame="04";}
	else if (proc>=40) {P="lightblue\">Magic"; Frame="03";}
	else if (proc>=20) {P="green\">Normal"; Frame="02";}
	else {P="white\">Basic"; Frame="01";}
	P+=" ("+proc.toFixed(2)+"%)";
	
	S+="<img src=\"img/card_frame_"+Frame;
	
	S+=".png\"><table><tr><th><p>Lv."+(lvl[card])+"</p></th><th style=\"color:";
	
	S+=P+"</th></tr><tr><th>";
	
	if (card==0) S+="Attribute1";
	else if (card==1) S+="Attribute1";//next
	
	S+="</th><th>"+att1[card]+"</th></tr><tr><th>";
	
	if (card==0) S+="Attribute2";
	else if (card==1) S+="Attribute2";//next
	
	S+="</th><th>"+att2[card]+"</th></tr><tr><th></table>";
	
	out.innerHTML=S;
}
function Max(){
	document.getElementById("level").value=Number(8-lvl[card]);
}