function openFun(){
    document.getElementById("menu").style.width="300px"
    document.getElementById("mainbox").style.marginLeft="300px"
    // document.getElementById("mainbox").innerHTML="click on Cross Element and Close Menu";
}
function closeFun(){
    document.getElementById("menu").style.width="0px";
    document.getElementById("mainbox").style.marginLeft="0px";
    document.getElementById("mainbox").style.innerHTML="&#9776; Open";
}