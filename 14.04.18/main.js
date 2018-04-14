
var drive= document.querySelector('drive');

document.addEventListener("contextmenu",function(e){
    
})
document.addEventListener("click", hideDrive);

document.addEventListener("keyup", function(e){
    if(e.which==27){
        hideDrive();
    }
})


function hideDrive(){
    if(drive.classList.contains("show")){
        drive.classList.remove("show");
    }
}