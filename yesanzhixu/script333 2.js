// let text = document.getElementById('text');
// let youshang = document.getElementById('youshang');
// let shang = document.getElementById('shang');
// let youxia = document.getElementById('youxia');
// let zuoxia = document.getElementById('zuoxia');
// let xia2 = document.getElementById('xia2');
// let xia3 = document.getElementById('xia3');

// window.addEventListener('scroll', () => {
//     let value = window.scrollY;

//     text.style.marginTop = value * 2 + 'px';
//     youshang.style.top = value * -1.5 + 'px';
//     youxia.style.left = value * 2 + 'px';
//     zuoxia.style.left = value * -2 + 'px';
//     shang.style.top = value * 0.5 + 'px';
//     xia2.style.left= value * 1.5 + 'px';
//     xia3.style.left= value * -1.5 + 'px';


// });
let ment=document.querySelector(".navbar-collapse")
let btn=document.querySelector('.navbar-toggler')
let i=0
btn.addEventListener('click',(e)=>{
    ment.style.display=(i++)%2?'none':'block'
})
 // 获取 .menu 元素
 var menu = document.querySelector(".menu");

 // 监听窗口大小变化事件
 window.addEventListener("resize", function() {
   // 获取当前窗口宽度
   var windowWidth = window.innerWidth;
    if(windowWidth>1000){return}
   // 设置字体大小为窗口宽度的 1/20
   var fontSize = windowWidth / 50 + "px";

   // 设置 .menu 内部所有元素的字体大小
   var elements = menu.querySelectorAll("*");
   for (var i = 0; i < elements.length; i++) {
     elements[i].style.fontSize = fontSize;
   }
 });

 // 页面加载完成时触发一次 resize 事件，以初始化字体大小
 window.dispatchEvent(new Event("resize"));