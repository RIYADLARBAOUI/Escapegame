





let time = 10;

const cercle = document.getElementById('cercle');

setInterval(timer,1000);

function timer(){
    cercle.innerHTML=`${time}`;
    --time;
    if(time===-2){ // -2 car latence
        alert("temps écoulé");
        location.replace("https://twitter.com/home");
    }
}








