var lvl=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var att1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var att2=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var card=0;
var pcard=0, sbook=0, gold=0, diam=0, rubi=0;

function OpenUpg(c){
	if (lvl[c]==8) return; card=c;
	document.getElementById("card_fullwrap1").style.display="block";
	
	document.getElementById("card_checklevel").innerHTML="Current Level: "+lvl[c]+"/8";
}
function OpenReset(c){
	document.getElementById("card_fullwrap2").style.display="block";
	card=c;
}
function Close(){
	document.getElementById("card_fullwrap1").style.display="none";
	document.getElementById("card_fullwrap2").style.display="none";
	card=0;
}
function NewCard(c){
	card=c; gold+=500000; sbook+=10;
	document.getElementById(card+"_new").style.display="none";
	document.getElementById(card+"_notnew").style.display="block";
	Reroll(-1);
}
function Reroll(g){
	var proc=0;
	att1[card]=att2[card]=0; lvl[card]=1;
	if (g==0) diam+=20;
	else if (g==1) rubi+=200;
	else if (g==2) gold+=100000;
	else if (g==3) pcard++;
	
	if (card==0) {
		att1[card]+=Math.floor(Math.random()*200)+1;
		att2[card]+=Math.floor(Math.random()*30)+1;
		proc=Number(100*(att1[card]/200+att2[card]/30)/2);
	}/*Velletrin*/ else if (card==1) {
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
	}/*Kyle*/ else if (card==6) {
		att1[card]+=Math.floor(Math.random()*411)+46;
		att2[card]+=Math.floor(Math.random()*14)+2;
		proc=Number(100*(att1[card]/456+att2[card]/15)/2);
	} else if (card==7) {
		att1[card]+=Math.floor(Math.random()*460)+51;
		att2[card]+=Math.floor(Math.random()*15)+2;
		proc=Number(100*(att1[card]/510+att2[card]/16)/2);
	} else if (card==8) {
		att1[card]+=Math.floor(Math.random()*946)+105;
		att2[card]+=Math.floor(Math.random()*11)+2;
		proc=Number(100*(att1[card]/1050+att2[card]/12)/2);
	} else if (card==9) {
		att1[card]+=Math.floor(Math.random()*2870)+319;
		att2[card]+=Math.floor(Math.random()*14)+2;
		proc=Number(100*(att1[card]/3188+att2[card]/15)/2);
	} else if (card==10) {
		att1[card]+=Math.floor(Math.random()*670)+75;
		att2[card]+=Math.floor(Math.random()*15)+2;
		proc=Number(100*(att1[card]/744+att2[card]/16)/2);
	}/*Pell*/ else if (card==11) {
		att1[card]+=Math.floor(Math.random()*474)+53;
		att2[card]+=Math.floor(Math.random()*46)+6;
		proc=Number(100*(att1[card]/526+att2[card]/51)/2);
	} else if (card==12) {
		att1[card]+=Math.floor(Math.random()*345)+39;
		att2[card]+=Math.floor(Math.random()*57)+7;
		proc=Number(100*(att1[card]/383+att2[card]/63)/2);
	} else if (card==13) {
		att1[card]+=Math.floor(Math.random()*464)+52;
		att2[card]+=Math.floor(Math.random()*55)+7;
		proc=Number(100*(att1[card]/515+att2[card]/61)/2);
	} else if (card==14) {
		att1[card]+=Math.floor(Math.random()*1722)+192;
		att2[card]+=Math.floor(Math.random()*55)+7;
		proc=Number(100*(att1[card]/1913+att2[card]/61)/2);
	} else if (card==15) {
		att1[card]+=Math.floor(Math.random()*670)+75;
		att2[card]+=Math.floor(Math.random()*52)+6;
		proc=Number(100*(att1[card]/744+att2[card]/57)/2);
	}/*Aizen*/ else if (card==16) {
		att1[card]+=Math.floor(Math.random()*442)+50;
		att2[card]+=Math.floor(Math.random()*45)+6;
		proc=Number(100*(att1[card]/491+att2[card]/50)/2);
	} else if (card==17) {
		att1[card]+=Math.floor(Math.random()*229)+26;
		att2[card]+=Math.floor(Math.random()*50)+6;
		proc=Number(100*(att1[card]/254+att2[card]/55)/2);
	} else if (card==18) {
		att1[card]+=Math.floor(Math.random()*497)+56;
		att2[card]+=Math.floor(Math.random()*52)+6;
		proc=Number(100*(att1[card]/552+att2[card]/57)/2);
	} else if (card==19) {
		att1[card]+=Math.floor(Math.random()*2009)+224;
		att2[card]+=Math.floor(Math.random()*51)+6;
		proc=Number(100*(att1[card]/2232+att2[card]/56)/2);
	} else if (card==20) {
		att1[card]+=Math.floor(Math.random()*670)+75;
		att2[card]+=Math.floor(Math.random()*49)+6;
		proc=Number(100*(att1[card]/744+att2[card]/54)/2);
	}
	document.getElementById("card_fullwrap2").style.display="none";
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
		}/*Velletrin*/ else if (card==1) {
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
		}/*Kyle*/ else if (card==6) {
			att1[card]+=Math.floor(Math.random()*411)+46;//46-456
			att2[card]+=Math.floor(Math.random()*14)+2;//2-15
			proc=Number(100*(att1[card]/(456*(i+1))+att2[card]/(15*(i+1)))/2);
		} else if (card==7) {
			att1[card]+=Math.floor(Math.random()*460)+51;//51-510
			att2[card]+=Math.floor(Math.random()*15)+2;//2-16
			proc=Number(100*(att1[card]/(510*(i+1))+att2[card]/(16*(i+1)))/2);
		} else if (card==8) {
			att1[card]+=Math.floor(Math.random()*946)+105;//105-1050
			att2[card]+=Math.floor(Math.random()*11)+2;//2-12
			proc=Number(100*(att1[card]/(1050*(i+1))+att2[card]/(12*(i+1)))/2);
		} else if (card==9) {
			att1[card]+=Math.floor(Math.random()*2870)+319;//319-3188
			att2[card]+=Math.floor(Math.random()*14)+2;//2-15
			proc=Number(100*(att1[card]/(3188*(i+1))+att2[card]/(15*(i+1)))/2);
		} else if (card==10) {
			att1[card]+=Math.floor(Math.random()*670)+75;//75-744
			att2[card]+=Math.floor(Math.random()*15)+2;//2-16
			proc=Number(100*(att1[card]/(744*(i+1))+att2[card]/(16*(i+1)))/2);
		}/*Pell*/ else if (card==11) {
			att1[card]+=Math.floor(Math.random()*474)+53;//53-526
			att2[card]+=Math.floor(Math.random()*46)+6;//6-51
			proc=Number(100*(att1[card]/(526*(i+1))+att2[card]/(51*(i+1)))/2);
		} else if (card==12) {
			att1[card]+=Math.floor(Math.random()*345)+39;//39-383
			att2[card]+=Math.floor(Math.random()*57)+7;//7-63
			proc=Number(100*(att1[card]/(383*(i+1))+att2[card]/(63*(i+1)))/2);
		} else if (card==13) {
			att1[card]+=Math.floor(Math.random()*464)+52;//52-515
			att2[card]+=Math.floor(Math.random()*55)+7;//7-61
			proc=Number(100*(att1[card]/(515*(i+1))+att2[card]/(61*(i+1)))/2);
		} else if (card==14) {
			att1[card]+=Math.floor(Math.random()*1722)+192;//192-1913
			att2[card]+=Math.floor(Math.random()*55)+7;//7-61
			proc=Number(100*(att1[card]/(1913*(i+1))+att2[card]/(61*(i+1)))/2);
		} else if (card==15) {
			att1[card]+=Math.floor(Math.random()*670)+75;//75-744
			att2[card]+=Math.floor(Math.random()*52)+6;//6-57
			proc=Number(100*(att1[card]/(744*(i+1))+att2[card]/(57*(i+1)))/2);
		}/*Aizen*/ else if (card==16) {
			att1[card]+=Math.floor(Math.random()*442)+50;//50-491
			att2[card]+=Math.floor(Math.random()*45)+6;//6-50
			proc=Number(100*(att1[card]/(491*(i+1))+att2[card]/(50*(i+1)))/2);
		} else if (card==17) {
			att1[card]+=Math.floor(Math.random()*229)+26;//26-254
			att2[card]+=Math.floor(Math.random()*50)+6;//6-55
			proc=Number(100*(att1[card]/(254*(i+1))+att2[card]/(55*(i+1)))/2);
		} else if (card==18) {
			att1[card]+=Math.floor(Math.random()*497)+56;//56-552
			att2[card]+=Math.floor(Math.random()*52)+6;//6-57
			proc=Number(100*(att1[card]/(552*(i+1))+att2[card]/(57*(i+1)))/2);
		} else if (card==19) {
			att1[card]+=Math.floor(Math.random()*2009)+224;//224-2232
			att2[card]+=Math.floor(Math.random()*51)+6;//6-56
			proc=Number(100*(att1[card]/(2232*(i+1))+att2[card]/(56*(i+1)))/2);
		} else if (card==20) {
			att1[card]+=Math.floor(Math.random()*670)+75;//75-744
			att2[card]+=Math.floor(Math.random()*49)+6;//6-54
			proc=Number(100*(att1[card]/(744*(i+1))+att2[card]/(54*(i+1)))/2);
		}
	}
	
	Output(proc);
	document.getElementById("card_fullwrap1").style.display="none";
}
function Output(proc){
	var out = document.getElementById(card);
	var total = document.getElementById("card_gold");
	var P="", Frame="", S="", C=["","Passive_Card_Attack01"];
	if (proc>=80) {P="red\">Legendary"; Frame="05";}
	else if (proc>=60) {P="orange\">Epic"; Frame="04";}
	else if (proc>=40) {P="lightblue\">Normal"; Frame="03";}
	else if (proc>=20) {P="lightgreen\">Flawed"; Frame="02";}
	else {P="white\">Poor"; Frame="01";}
	P+=" ("+proc.toFixed(2)+"%)";
	
	S+="<div class=\"card_img\"><img src=\"img/card_frame_"+Frame+".png\"><img src=\"img/card/";
	
	if (card==0) C[0]="Attribute1";
	else if (card==1||card==6||card==11||card==16) {C[0]="ATK"; C[1]="Passive_Card_Attack01";}
	else if (card==2) {C[0]="Critical Damage"; C[1]="Passive_Card_CriticalAttack01";}
	else if (card==3) {C[0]="Evasion"; C[1]="Passive_Card_Dodge01";}
	else if (card==4||card==9||card==14||card==19) {C[0]="HP"; C[1]="Passive_Card_MaxHP01";}
	else if (card==5||card==10||card==15||card==20) {C[0]="Reduced PVP Damage"; C[1]="Passive_Card_PvPDamageReduce";}
	else if (card==7) {C[0]="Critical Resist"; C[1]="Passive_Card_PvPDefence01";}
	else if (card==8) {C[0]="DEF"; C[1]="Passive_Card_Defence01";}
	else if (card==12) {C[0]="Critical Resist"; C[1]="Passive_Card_PvPDefence01";}
	else if (card==13) {C[0]="Fixed Damage"; C[1]="Passive_Card_SkillAttack01";}
	else if (card==17) {C[0]="Critical"; C[1]="Passive_Card_Critical01";}
	else if (card==18) {C[0]="Fixed Damage"; C[1]="Passive_Card_SkillAttack01";}
	
	S+=C[1]+".png\" id=\"cimg2\"></div>";
	S+="<table><tr><th><p>Lv."+lvl[card]+"</p></th><th style=\"color:";
	
	S+=P+"</th></tr></table><table><tr><th>"+C[0];
	
	S+="</th><th>"+att1[card]+"</th></tr><tr><th>";
	
	if (card==0) S+="Attribute2";
	else if (card==1||card==6||card==11||card==16) S+="Fire ATK";
	else if (card==2||card==7||card==12||card==17) S+="Water ATK";
	else if (card==3||card==8||card==13||card==18) S+="Earth ATK";
	else if (card==4||card==9||card==14||card==19) S+="Wind ATK";
	else if (card==5||card==10||card==15||card==20) S+="Poison ATK";//next
	
	S+="</th><th>"+att2[card]+"</th></tr><tr><th></table>";
	out.innerHTML=S; S="";
	
	S+="You have spent: "+pcard+" Passive cards; "+sbook+" Skill Books. "+
		gold+" Gold; "+rubi+" Rubbies; "+diam+" Diamonds.";
	total.innerHTML=S;
}
function Max(){
	document.getElementById("level").value=Number(8-lvl[card]);
}
function Min(){
	document.getElementById("level").value=1;
}
function Plus(){
	var a=document.getElementById("level").value;
	if (a<Number(8-lvl[card])) document.getElementById("level").value=++a;
}
function Minus(){
	var a=document.getElementById("level").value;
	if (a>1) document.getElementById("level").value=--a;
}