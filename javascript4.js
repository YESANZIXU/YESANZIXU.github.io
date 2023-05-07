function createText(content){
  var newText = document.createElement("li");
  newText.setAttribute('class','chatText');
  newText.innerHTML = '<span>'+content+'</span>';
  document.getElementById('chat').appendChild(newText);
};

function clearChat(){
  chat = document.getElementById('chat');
  chat.innerHTML = '';
};
function back(){
  window.back("主页.html");
  alert(window.location);
}
//-----------------------------------
function p00(){
  createText('欢迎来到"air"!');
  onclick = function(){p01()};
}
function p01(){
   clearChat();
    createText('这里其实是一个待完成的网页，');
  onclick = function(){p02()};
  }

function p02(){
  clearChat();
  createText('我本来想要写一个剧本杀一样的对话，');
  onclick = function(){p03()};
  }
function p03(){
  clearChat();
  createText('但是因为本人太笨的缘故，');
  onclick = function(){p04()};
  }
  function p04(){
    clearChat();
    createText('五一期间反复挣扎了很久很久，效果很糟糕，遂 最终在最后一天决定放弃它另作个其他的……😔');
  onclick = function(){p05()};
    }
    function p05(){
      clearChat();
      createText('很可惜的是，为了这个特地去请教了师哥，自以为理解了，回来写了很长的代码，妄图凭着自己对其的一知半解完成它……但是还是运作不了，最终没有呈现出来，总感觉愧对师哥手把手一个半小时的教学😭');
  onclick = function(){p06()};
      }
      function p06(){
    clearChat();
    createText('主要感觉可能很多东西已经超出了我目前的接受范围，越看越晕，我决定再等等……');
    onclick = function(){p07()};

  }
  function p07(){
clearChat();
createText('所以我在这里留下一个位置，我总有一天会填上它的！哼哼！😎😎😎');

}
//----------------------------
p00();
