
function getNumInnerText(id){
    return parseInt(document.getElementById(id).innerText)
}


//heart functionality

const hearts = document.getElementsByClassName("heart-icon");

for (const heart of hearts) {
    heart.addEventListener("click", function () {
        const cVal = getNumInnerText("heart-value")
        document.getElementById("heart-value").innerText=cVal+1;
    });
}

//call-button functionality

const callBtns= document.getElementsByClassName("call-buttons");

for(const btn of callBtns){
    btn.addEventListener("click",function(){
        const coinRem=getNumInnerText("coin-amount");

    if(coinRem<20){
        alert("Not Sufficient Coins")
        return
    }

    document.getElementById("coin-amount").innerText=coinRem-20;
    
    })
    
}
