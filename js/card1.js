var lvl=[0,0,0,0,0,0];
var att1=[0,0,0,0,0,0];
var att2=[0,0,0,0,0,0];
var card=0;
var pcard=0, sbook=0;

function Open(c){
	if (lvl[c]==8) return;
	document.getElementById("card_fullwrap").style.display="block";
	card=c;
}
function Reroll(c){
	var proc=0; card=c; pcard++;
	att1[card]=att2[card]=0; lvl[card]=1;
	if (card==0) {
		att1[card]+=Math.floor(Math.random()*200)+1;
		att2[card]+=Math.floor(Math.random()*30)+1;
		proc=Number(100*(att1[card]/200+att2[card]/30)/2);
	} else if (card==1) {
			att1[card]+=Math.floor(Math.random()*442)+50;
			att2[card]+=Math.floor(Math.random()*48)+6;
			proc=Number(100*(att1[card]/491+att2[card]/53)/2);
	} else if (card==2) {
			att1[card]+=Math.floor(Math.random()*261)+30;
			att2[card]+=Math.floor(Math.random()*53)+7;
			proc=Number(100*(att1[card]/290+att2[card]/59)/2);
	} else if (card==3) {
			att1[card]+=Math.floor(Math.random()*58)+7;
			att2[card]+=Math.floor(Math.random()*67)+8;
			proc=Number(100*(att1[card]/64+att2[card]/74)/2);
	} else if (card==4) {
			att1[card]+=Math.floor(Math.random()*2296)+255;
			att2[card]+=Math.floor(Math.random()*52)+7;
			proc=Number(100*(att1[card]/2550+att2[card]/58)/2);
	} else if (card==5) {
			att1[card]+=Math.floor(Math.random()*670)+75;
			att2[card]+=Math.floor(Math.random()*52)+7;
			proc=Number(100*(att1[card]/744+att2[card]/58)/2);
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
		sbook++;
		if (card==0) {
			att1[card]+=Math.floor(Math.random()*200)+1;
			att2[card]+=Math.floor(Math.random()*30)+1;
			proc=Number(100*(att1[card]/(200*(i+1))+att2[card]/(30*(i+1)))/2);
		} else if (card==1) {
			att1[card]+=Math.floor(Math.random()*442)+50;//50-491
			att2[card]+=Math.floor(Math.random()*48)+6;//6-53
			proc=Number(100*(att1[card]/(491*(i+1))+att2[card]/(53*(i+1)))/2);
		} else if (card==2) {
			att1[card]+=Math.floor(Math.random()*261)+30;//30-290
			att2[card]+=Math.floor(Math.random()*53)+7;//7-59
			proc=Number(100*(att1[card]/(290*(i+1))+att2[card]/(59*(i+1)))/2);
		} else if (card==3) {
			att1[card]+=Math.floor(Math.random()*58)+7;//7-64
			att2[card]+=Math.floor(Math.random()*67)+8;//8-74
			proc=Number(100*(att1[card]/(64*(i+1))+att2[card]/(74*(i+1)))/2);
		} else if (card==4) {
			att1[card]+=Math.floor(Math.random()*2296)+255;//255-2550
			att2[card]+=Math.floor(Math.random()*52)+7;//7-58
			proc=Number(100*(att1[card]/(2550*(i+1))+att2[card]/(58*(i+1)))/2);
		} else if (card==5) {
			att1[card]+=Math.floor(Math.random()*670)+75;//75-744
			att2[card]+=Math.floor(Math.random()*52)+7;//7-58
			proc=Number(100*(att1[card]/(744*(i+1))+att2[card]/(58*(i+1)))/2);
		}/*next*/
	}
	
	Output(proc);
	document.getElementById("card_fullwrap").style.display="none";
}
function Output(proc){
	var out = document.getElementById(card);
	var total = document.getElementById("card_gold");
	var P="", Frame="", S="";
	if (proc>=80) {P="red\">Legendary"; Frame="05";}
	else if (proc>=60) {P="orange\">Epic"; Frame="04";}
	else if (proc>=40) {P="lightblue\">Normal"; Frame="03";}
	else if (proc>=20) {P="lightgreen\">Flawed"; Frame="02";}
	else {P="white\">Poor"; Frame="01";}
	P+=" ("+proc.toFixed(2)+"%)";
	
	S+="<img src=\"img/card_frame_"+Frame;
	
	S+=".png\"><table><tr><th><p>Lv."+(lvl[card])+"</p></th><th style=\"color:";
	
	S+=P+"</th></tr></table><table><tr><th>";
	
	if (card==0) S+="Attribute1";
	else if (card==1) S+="ATK";
	else if (card==2) S+="Critical Damage";
	else if (card==3) S+="Evasion";
	else if (card==4) S+="HP";
	else if (card==5) S+="Reduced PVP Damage";//next
	
	S+="</th><th>"+att1[card]+"</th></tr><tr><th>";
	
	if (card==0) S+="Attribute2";
	else if (card==1) S+="Fire ATK";
	else if (card==2) S+="Water ATK";
	else if (card==3) S+="Earth ATK";
	else if (card==4) S+="Wind ATK";
	else if (card==5) S+="Poison ATK";//next
	
	S+="</th><th>"+att2[card]+"</th></tr><tr><th></table>";
	out.innerHTML=S; S="";
	
	S+="You have spent: "+pcard+" Passive cards; "+sbook+" Skill Books. Or: "+
		(pcard*100000+sbook*10000)+" Gold; "+(pcard*200)+" Rubbies; "+(pcard*20)+" Diamonds.";
	total.innerHTML=S;
}
function Max(){
	document.getElementById("level").value=Number(8-lvl[card]);
}