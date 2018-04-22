
function Tiptool(selector,usersettings){
    var elements= document.querySelectorAll(selector);
    var defaults ={
        width:"20%",
        height: "20%",
        borderRadius: "5px"
    }
}

var settings= extend(defaults,usersettings);

for(var element of elements)
{

    element.style.border="1px solid black";
    element.style.margin= "10px";
}