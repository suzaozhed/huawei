// var arr = ['object string'];
//封装一个点击显示的功能
//两个参数，点击的元素，出现的元素，出现的位置之内的不管

 var btn = document.getElementsByClassName("bottom_form_a_right");
 var bun = document.getElementsByClassName("bottom_form_a_right_ul");//选项的父元素
 bun[0].style.display = "none";
 btn[0].onclick = function(){

            if(bun[0].style.display == "none"){
                bun[0].style.display = "block";  
             }
             else{
                bun[0].style.display = "none";
                //通过js设置css样式设置的是行内样式
                // 需要在点击一次后else给bun[0].style.display设置为 = "none"
                //才能判断出bun[0].style.display == "none"为true
                //
                // document = function fu(){
                //     console.log(3)
                //     bun[0].style.display = "none";
                // }
                
            } 
        }
      
        // document.onclick = function(){
        //     bun[0].style.display = "none";
        //     }  //直接放在document中的点击消失会与btn[0]的点击事件相抵消
var xuanze = document.getElementsByClassName("xianze");     //选项列表
var diqu = document.getElementsByClassName("bottom_form_a_right_span");//放置选项内容的元素
          
    bun[0].onclick = function(){
        for(var i = 0;i<xuanze.length;i++){
            xuanze[i].onclick = function(){
                diqu[0].innerHTML = this.innerHTML;
            }
        }
    }