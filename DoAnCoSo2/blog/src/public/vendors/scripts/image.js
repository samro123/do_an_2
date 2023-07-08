let fileInput = document.getElementById("file-input");
let imgeCon = document.getElementById("imagess");
let numOfFile = document.getElementById("num-of-files");

function preview(){
    imgeCon.innerHTML = "";
    numOfFile.textContent = `${fileInput.files.length}
    File Selected`;

    for(i of fileInput.files){
        let reader = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");
        figCap.innerText = i.name;
        figure.appendChild(figCap);
        reader.onload=()=>{
            let img = document.createElement("img");
            img.setAttribute("src",reader.result);
            figure.insertBefore(img,figCap);
        }
        imgeCon.appendChild(figure);
        reader.readAsDataURL(i);
    }
}