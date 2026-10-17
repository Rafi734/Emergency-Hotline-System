

const dataContainer=[];


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
    const card=btn.closest(".card");
    const Sname=card.querySelector(".service-name").innerText;
    const serviceNum=card.querySelector(".service-number").innerText;

    document.getElementById("coin-amount").innerText=coinRem-20;
    

    alert(`Calling ${Sname} \nNumber: ${serviceNum}`);

    const data={
        name: Sname,
        number: serviceNum,
        time: new Date().toLocaleTimeString()
    }
    
    dataContainer.push(data);
    
    const container=document.getElementById("content-contain");
    container.innerHTML="";
    for(const d of dataContainer){
    const div=document.createElement("div")
    div.innerHTML=`
        <div class="gap-y-2 relative w-full h-auto p-4 bg-[#fafafaFF] flex justify-between items-center font-[inter] rounded-lg mb-[8px] " id="history-content-box ">
                    <div>
                        <h1 class="font-bold ">${d.name}</h1>
                        <p class="text-gray-400">${d.number}</p>
                    </div>
                    <div>
                        <p>${d.time}</p>
                    </div>
                </div>
    `;
    container.appendChild(div)
    }
    
    })
    
}

document.getElementById("clear-btn").addEventListener("click",function(){
    dataContainer.length = 0;
    document.getElementById("content-contain").innerHTML = "";
})

//copy button functionality

const copyBtns= document.getElementsByClassName("copy-buttons");

for(const cBtn of copyBtns){
    cBtn.addEventListener("click",function(e){
        e.preventDefault();
        const copyData= parseInt(document.getElementById("copy-counter").innerText)
        

        const card=cBtn.closest(".card");
        const num=card.querySelector(".service-number").innerText

         navigator.clipboard.writeText(num)
            .then(function () {
                alert(`Copied: ${num}`);
                document.getElementById("copy-counter").innerText=copyData+1;
            })
            .catch(function () {
                alert("Copy failed");
            });
    })
}