 var moves=0;
  var first=0;
  var second=0;
  var firstno=0;
  var secondno=0;
  
  function dochange(c){
    moves++;
    if(moves%2===1){
      first=document.getElementById(c.toString());
      firstno=c;
    }
    else{
     
secondno=c;      second=document.getElementById(c.toString());
if(second.className==="parts"){alert("MOVE NOT ALLOWED!!");}
else{     
 domidle(firstno,secondno);
    }}
}

function domidle(x,y){
  reqd=-1;
  if(y===x+2 || x===y+2){
    reqd=(x+y)/2;}
  else if(y===x+8 && x<=3){
    reqd=x+3;
  }
  else if(y===x+14 || x===y+14){
    reqd=(x+y)/2;
  }
  else if(y===x+12 && x<=6){
    reqd=x+5;
  }
  else if(y===x+12 && y>=28){
    reqd=x+7;
  }
  else if(y===x+8 && y>=31){
    reqd=x+5;
  }
  else if(x===y+8 && y<=3){
    reqd=y+3;
  }
  else if(x===y+12 && y<=6){
    reqd=y+5;
  }
  else if(x===y+12 && x>=28){
    reqd=y+7;
  }
  else if(x===y+8 && x>=31){
    reqd=y+5;
  }
  else{alert("MOVE NOT ALLOWED!!");
      }
  var q=reqd.toString();
    var w=document.getElementById(q);
    w.setAttribute("class","unfilled");
if(reqd!==-1) { first.setAttribute("class","unfilled");
second.setAttribute("class","parts");
}
}

function result(){
  var count=0;
  for (var x=1;x<=33;x++){
    if (document.getElementById(x.toString()).className==="parts"){count++;}
  }
  var s=document.getElementById("declare_result");
  if(count>=6){
  s.innerHTML=count.toString()+"pegs left.You are a fool";}
  else if(count===5 || count===4){
    s.innerHTML=count.toString()+"pegs left.You can do better";
  }
  else if(count===3){
    s.innerHTML=count.toString()+"pegs left. Good!!";
  }
  else if(count===2){
    s.innerHTML=count.toString()+"pegs left. Very Good!!";
  }
  else{
    s.innerHTML="Excellent. You did it.";
  }}


function clearBoard(){
  for (var s=1;s<=33;s++){
    if(s===17){
      document.getElementById(s.toString()).className="unfilled";
    }
    else{
      document.getElementById(s.toString()).className="parts";
    }
  }
}