function hideIconBar(){
    var iconBar =document.getElementById("iconBar");
    var navegacion =document.getElementById("navegacion");
    iconBar.setAttribute("style" , "display:.none;");
    navegacion.classList.remove("hide");
}
function showIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navegacion = document.getElementById("navegacion");
    iconBar.setAttribute("style", "display:block;");
    navegacion.classList.add("hide");
}