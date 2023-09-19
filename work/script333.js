let text = document.getElementById('text');
let youshang = document.getElementById('youshang');
let shang = document.getElementById('shang');
let youxia = document.getElementById('youxia');
let zuoxia = document.getElementById('zuoxia');
let xia2 = document.getElementById('xia2');
let xia3 = document.getElementById('xia3');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2 + 'px';
    youshang.style.top = value * -1.5 + 'px';
    youxia.style.left = value * 2 + 'px';
    zuoxia.style.left = value * -2 + 'px';
    shang.style.top = value * 0.5 + 'px';
    xia2.style.left= value * 1.5 + 'px';
    xia3.style.left= value * -1.5 + 'px';
});

let ment=document.querySelector(".navbar-collapse")
let btn=document.querySelector('.navbar-toggler')
let i=0
btn.addEventListener('click',(e)=>{
    ment.style.display=(i++)%2?'none':'block'
})
function adjustFontSize() {
    var screenWidth = window.innerWidth;
    var fontSize = screenWidth / 30; // 根据屏幕宽度计算字体大小，这里使用简单的比例关系

    document.getElementById('text').style.fontSize = fontSize*3 + 'px';
  }

  // 初始加载时调用一次
  adjustFontSize();

  // 窗口大小改变时触发 resize 事件，调用 adjustFontSize 函数
  window.addEventListener('resize', adjustFontSize);
