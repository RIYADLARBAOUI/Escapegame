
function test(){
    setTimeout("alert('tes nul')",3000);
}

document.getElementById('test').onclick(test());


cercle = document.getElementById('cercle');
function timer(){
    let i = 30;
    while(i != 0){
        cercle.innerHTML=`${i}`;
        --i;
    }
}


setInterval("timer()",1000);







