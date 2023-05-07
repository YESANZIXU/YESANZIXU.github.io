function createText(content){
  var newText = document.createElement("li");
  newText.setAttribute('class','chatText');
  newText.innerHTML = '<span>'+content+'</span>';
  document.getElementById('chat').appendChild(newText);
};

function creatButton(name,content){
    var newB = document.createElement('button');
    newB.id = name;
    newB.setAttribute('class','buttons');
    newB.innerHTML = content;
    document.getElementById('panic').appendChild(newB);
};

function clearChat(){
  chat = document.getElementById('chat');
  chat.innerHTML = '';
};

function clearPanic(){
  panic = document.getElementById('panic');
  panic.innerHTML = '';
};

function back(){
  window.back("主页.html");
  alert(window.location);
};
//-----------------------------------
function p00(){
  createText('欢迎来到"vision"!');
  createText('让我看看你的人生乐趣是什么！ 准备好测试了吗？');
  creatButton('a10','我准备好了！');
  creatButton('a11','我后悔了，我想再逛逛其他的……');
  document.getElementById('a10').onclick = function(){p01()};
  document.getElementById('a11').onclick = function(){c04()};
}
function p01(){
  clearChat();
  clearPanic();
  createText('你不可能在加班的时候做什么呢？');
  creatButton('a11','聊电话');
  creatButton('a12','吃东西');
  creatButton('a13','看情况');
  document.getElementById('a11').onclick = function(){p02()};
  document.getElementById('a12').onclick = function(){p04()};
  document.getElementById('a13').onclick = function(){p03()};
}
function c04(){
  clearChat();
  clearPanic();
  createText('你已经没有回头路啦！没有准备好也要继续哦嘿嘿嘿😎');
  creatButton('a33','好吧我继续……');
  document.getElementById('a33').onclick = function(){p01()};
}

function p02(){
  clearChat();
  clearPanic();
  createText('你不想自己的生活变成什么样子呢？')
  creatButton('a21','碌碌无为');
  creatButton('a22','忙忙碌碌');
  creatButton('a23','随便都可以');
  document.getElementById('a21').onclick = function(){p04()};
  document.getElementById('a22').onclick = function(){p03()};
  document.getElementById('a23').onclick = function(){p06()};
}

 function p03(){
   clearChat();
   clearPanic();
   createText('你会放弃自己很喜欢的人吗？')
   creatButton('a31','当然会');
   creatButton('a32','偶然会');
   creatButton('a33','并不会');
   document.getElementById('a31').onclick = function(){p04()};
   document.getElementById('a32').onclick = function(){p07()};
   document.getElementById('a33').onclick = function(){p05()};
 }

 function p04(){
   clearChat();
   clearPanic();
   createText('你有勇气对暗恋的人说出自己的感情吗？')
   creatButton('a41','有的');
   creatButton('a42','没有');
   creatButton('a33','不好说');
   document.getElementById('a41').onclick = function(){p06()};
   document.getElementById('a42').onclick = function(){p07()};
   document.getElementById('a33').onclick = function(){p08()};
 }

 function p05(){
   clearChat();
   clearPanic();
   createText('你会质疑父母对你的爱吗？？')
   creatButton('a51','一直会');
   creatButton('a52','偶尔会');
   creatButton('a53','并不会');
   document.getElementById('a51').onclick = function(){p07()};
   document.getElementById('a52').onclick = function(){p08()};
   document.getElementById('a53').onclick = function(){p06()};
 }

 function p06(){
   clearChat();
   clearPanic();
   createText('你被忽略的时候怎么化解尴尬呢？')
   creatButton('a61','假作不在意');
   creatButton('a62','大方说出来');
   creatButton('a63','不好说');
   document.getElementById('a61').onclick = function(){p09()};
   document.getElementById('a62').onclick = function(){p07()};
   document.getElementById('a63').onclick = function(){p10()};
 }
 function p07(){
   clearChat();
   clearPanic();
   createText('你什么情况下愿意租房子呢？')
   creatButton('a71','没钱买房');
   creatButton('a72','不想被父母管束');
   creatButton('a73','不好说');
   document.getElementById('a71').onclick = function(){p08()};
   document.getElementById('a72').onclick = function(){p10()};
   document.getElementById('a73').onclick = function(){p08()};
 }
 function p08(){
   clearChat();
   clearPanic();
   createText('你是会熬夜追球的人吗？')
   creatButton('a81','是的');
   creatButton('a82','不是');
   creatButton('a83','看情况');
   document.getElementById('a81').onclick = function(){p09()};
   document.getElementById('a82').onclick = function(){p11()};
   document.getElementById('a83').onclick = function(){p10()};
 }
 function p09(){
   clearChat();
   clearPanic();
   createText('你能够理解身边的人对你的良苦用心吗？')
   creatButton('a91','能');
   creatButton('a92','不能');
   creatButton('a93','不好说');
   document.getElementById('a91').onclick = function(){p13()};
   document.getElementById('a92').onclick = function(){p13()};
   document.getElementById('a93').onclick = function(){p10()};
 }
 function p10(){
   clearChat();
   clearPanic();
   createText('你会把喜悦第一时间告诉谁呢？')
   creatButton('a101','父母');
   creatButton('a102','朋友');
   creatButton('a103','谁也不说');
   document.getElementById('a101').onclick = function(){p012()};
   document.getElementById('a102').onclick = function(){p13()};
   document.getElementById('a103').onclick = function(){p14()};
 }
 function p11(){
   clearChat();
   clearPanic();
   createText('你的人生乐趣是睡觉');
   createText('你是很情懒的人,你的人生乐趣是睡觉，这样的乐趣在别人看来是非常无聊的事情，或者是浪费时间的事情，但是在你看来却不是这样的。');
   createText('你是那种躺着就能够睡着的人，睡觉会让你觉得很放松的,醒来之后你的状态也会有所好转。');
 }

 function p12(){
   clearChat();
   clearPanic();
   createText('你的人生乐趣是赚钱');
   createText('你是喜欢赚钱的人,赚钱的事情你不会错过,你还会主动的去争取的。你的人生乐趣是赚钱,这样的乐趣给你带来了好的生活了。');
   createText('对你来说赚钱是非常有意思的事情，你不觉得辛苦也不觉得累,只有在赚钱的时候你才会觉得精神旺盛起来。');
 }
 function p13(){
   clearChat();
   clearPanic();
   createText('你的人生乐趣是吃喝');
   createText('你是十足的吃货了,吃就是你的人生乐趣,只要和吃有关的事情你都是感兴趣的。');
   createText('你在吃的面前只有好脾气和好心情，你会用吃喝来缓解自己的压力,改变自己的心情的。你对吃也是很有讲究的，你是大家眼里的美食家了，当然了,能吃也是一种福气。');
 }
 function p14(){
   clearChat();
   clearPanic();
   createText('你的人生乐趣是旅游');
   createText('你是很喜欢旅游的人,你觉得旅游会让自己的眼界变得更快,心胸也会变得宽广起来的。');
   createText('你在忙碌了一段时间之后就会去旅行的,你觉得这样做会让自己的疲劳感大大的减少的。旅游就是你的人生乐趣,你希望自己有能力保持这样的乐趣。');
 }

//----------------------------
p00();
