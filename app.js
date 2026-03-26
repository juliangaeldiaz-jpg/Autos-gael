function mostrarSeccion(id){

document.querySelectorAll(".seccion").forEach(sec=>{
sec.style.display = "none";
});

document.getElementById(id).style.display = "block";
}

function comprar(auto, precio){
alert("Elegiste: " + auto + " 🚗 $" + precio);
}

window.onload = function(){
mostrarSeccion("inicio");
}