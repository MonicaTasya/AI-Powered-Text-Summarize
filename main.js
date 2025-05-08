function ringkas(){
    const input = document.getElementById("inputText").value.trim();

    if(input === " ") return;

    const summary= input;
    document.getElementById("hasilRingkasan").innerText = summary;
}

function reset(){
    document.getElementById("inputText").value= " ";
    document.getElementById("hasilRingkasan").innerText = "belum ada teks";
}