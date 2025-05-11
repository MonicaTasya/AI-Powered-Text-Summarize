function ringkas(){
    const input = document.getElementById("inputText").value.trim();

    if(input === "") return;

    const summary= input;
    document.getElementById("hasilRingkasan").innerText = summary;
    
    let history = JSON.parse(localStorage.getItem("summaryHistory")) || [];
    history.push(summary);
    localStorage.setItem("summaryHistory", JSON.stringify(history))

    renderHistory();
}

function reset(){
    document.getElementById("inputText").value= "";
    document.getElementById("hasilRingkasan").innerText = "belum ada teks";
}

function renderHistory(){
    const riwayatList= document.getElementById("riwayat");
    riwayatList.innerHTML="";

    let history = JSON.parse(localStorage.getItem("summaryHistory"))|| [];
   
    if(history.length === 0)
        return (riwayatList.innerHTML = "Belum ada riwayat ringkasan");

    history.forEach((item, index) => {
        let li = document.createElement("li");
        li.className= "flex justify-between items-center";
        li.innerText= item;

        let delButton = document.createElement("button");
        delButton.className="bg-cyan-400 px-[10px] my-[5px] rounded-md hover:bg-red-500 transition duration-300"
        delButton.innerHTML= "Delete";

        delButton.onclick= function(){
            deleteHistory(index);
        };
        
        li.appendChild(delButton);
        riwayatList.appendChild(li);

    });
}

function deleteHistory(index){
    let history= JSON.parse(localStorage.getItem("summaryHistory")) || [];
    history.splice(index,1);

    localStorage.setItem("summaryHistory", JSON.stringify(history));
    renderHistory();
}
window.onload = renderHistory;