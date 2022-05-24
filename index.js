
let answers = ["A","D","C","A","B","C","D","C","C","B",
               "B","A","C","D","D","D","D","A","A","D",
               "A","A","B","D","A","B","D","C","C","C",
               "B","A","A","C","D","A","D","D","D","A",
               "B","D","B","D","A","D","D","B","B","D",
               "B","A","A","D","B","D","B","C","C","B",
               "D","C","A","B","B","B","A","C","D","B",
               "C","A","A","D","D","D","B","D","B","B",
               "C","A","A","C","D","C","D","A","D","C",
               "A","A","D","D","C","A","C","A","B","C","D"]

function randomm(){

    document.getElementById("ans").style.visibility = "hidden";

    let r1 = parseInt(document.forms["myform"]["first"].value);
    let r2 = parseInt(document.forms["myform"]["second"].value);

    if(r1<=0 || r1>115 || isNaN(r1)){
        r1 = 1;
    }
    if(r2<=0 || r2>115 || isNaN(r2)){
        r2 = 101;
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