var n= document.querySelectorAll("button").length;
for(var i=0;i<n;i++){
    var name='sounds/sound1.mp3';
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        switch (buttonInnerHTML) {
            case "w":
                var sound0= new Audio("sounds/sound0.mp3");
                sound0.play();
                break;
            case "a":
                var sound1= new Audio("sounds/sound1.mp3");
                sound1.play();
                break;
            case "s":
                var sound2= new Audio("sounds/sound2.mp3");
                sound2.play();
                break;
            case "d":
                var sound3= new Audio("sounds/sound3.mp3");
                sound3.play();
                break;
            case "j":
                var sound4= new Audio("sounds/sound4.mp3");
                sound4.play();
                break;    
            case "k":
                var sound5= new Audio("sounds/sound5.mp3");
                sound5.play();
                break;
            case "l":
                var sound6= new Audio("sounds/sound6.mp3");
                sound6.play();
                break;       
            default:
                // break;
        }
    }
);
}