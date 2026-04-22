function stilusValtas() {
    let ertekJust = document.getElementById("align_content").value;
    let div = document.getElementById("kepekContainer");
    div.style.alignContent = ertekJust;
    
    

    let ertekAlign = document.getElementById("align_items").value;
    document.getElementById("kepekContainer").style.alignItems = ertekAlign;
}


function kepekFeltoltese() {
    let fileInput = document.getElementById("fileInput");
    let kepekContainer = document.getElementById("kepekContainer"); 
    // Töröljük a korábbi képeket
    kepekContainer.innerHTML = "";
    for (let i = 0; i < fileInput.files.length; i++) {
        let file = fileInput.files[i];
        let img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        // img.style.width = "220px";
        kepekContainer.appendChild(img);
    }
}








function meretValtas(){
    let meret = document.getElementById("meretValaszto").value;
    let kepek = document.getElementsByTagName("img");

    for (let i = 0; i < kepek.length; i++) {
        kepek[i].style.width = meret + "px";
    }
}