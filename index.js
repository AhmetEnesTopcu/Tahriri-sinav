
let answers = ["D","A","D","C","D","A","B","A","C","D",
               "B","D","B","D","B","A","A","C","D","A",
               "B","C","A","D","A","B","C","B","C","D",
               "C","D","B","D","A","C","D","D","C","C",
               "D","A","A","B","A","D","D","C","D","B",
               "C","B","D","A","C","B","C","D","C","C",
               "D","C","C","B","D","A","A","A","B","D",
               "A","A","D","A","C","B","C","C","B","D",
               "B","D","C","B","A","B","A","D","B","A",
               "C","B","B","C","C","C","C","D","A","C",
	       "D","C","A","B","A","C","B","A","D","D",
               "D","D","C","C","D"]

function randomm(){

    document.getElementById("ans").style.visibility = "hidden";

    let r1 = parseInt(document.forms["myform"]["first"].value);
    let r2 = parseInt(document.forms["myform"]["second"].value);

    if(r1<=0 || r1>115 || isNaN(r1)){
        r1 = 1;
    }
    if(r2<=0 || r2>115 || isNaN(r2)){
        r2 = 115;
    }

    if(r1>r2){
        let temp = r1;
        r1 = r2;
        r2 = temp;
    }

    let res = Math.floor(Math.random() * (r2 - r1 + 1)) + r1;

    if(!isNaN(res)){
        document.getElementById("qs").src = "images/" + res + ".PNG";
    }
    else{
        console.log("Hata");
    }
    
    document.getElementById("ans").textContent = answers[res-1];
}

function showAnswer(){
    if(document.getElementById("ans").style.visibility == "hidden"){
        document.getElementById("ans").style.visibility = "visible";
    }
    else{
        document.getElementById("ans").style.visibility = "hidden";
    }
}