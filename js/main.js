
let lista = document.querySelector(".section__contenedor");
let cont = 0;

for (i = 0; i< lista.childNodes.length; i++){
    if (lista.childNodes[i].firstChild !== null){
        cont = cont+1;
        if (cont % 2 == 0){
            lista.childNodes[i].classList.toggle("color__impar");
        }else{
            lista.childNodes[i].classList.toggle("color__par");
        }
        console.log(lista.childNodes[i]);
        console.log(i);
    }
}

function cambiarColor(){
    for (i = 0; i< lista.childNodes.length; i++){
        if (lista.childNodes[i].firstChild !== null){
            cont = cont+1;
            if (cont % 2 == 0){
                lista.childNodes[i].classList.toggle("color__impar");
                lista.childNodes[i].classList.toggle("color__par");
            }else{
                lista.childNodes[i].classList.toggle("color__par");
                lista.childNodes[i].classList.toggle("color__impar");
            }

        }
    }
}
