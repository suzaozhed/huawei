var btn = document.getElementsByClassName("dda_left_buttom_ul_li");
var box = document.getElementsByClassName("dda_left_top_li");
for(var i = 0;i<btn.length;i++){
    btn[i].style.border = "none";
    btn[i].onmouseover = function(){
        this.style.border = "1px solid #ca141d";
        return btn[i].onmouseout = function(){
            btn[i].style.border = "none";
        }
    }
    
    btn[i].onclick = function(){
        box[i].style.z-index == "999"
    }
}