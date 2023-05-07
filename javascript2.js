var score=10;
function tips(){
}
function answer(){
  var response=prompt("问题：视频中一共出现了几种花？");
  if(response=="4"){
    alert("回答正确!你是这个👍");
    score+=30;
  }
  else {
    alert("好像不对哦，再看看？");
  }
}
function answer1(){
  var response=prompt("问题：视频中第4个镜头里有几个祈愿牌？");
  if(response=="4"){
    alert("回答正确!你是这个👍");
    score+=30;
  }
  else {
    alert("好像不对哦，再看看？");
  }
}
function answer2(){
  var response=prompt("猜猜视频最后一个镜头是中传吗");
  if(response=="不是"){
    alert("回答正确!你是这个👍");
    score+=30;
  }
  else {
    alert("好像不对哦，再看看？");
  }
}
function sayhello(){
  if(score==100){
    alert("你已获得 "+score+" 分!");
  }
  if(score>10&score<=99){
    alert("你已获得 "+score+" 分!");
  }
  if(score==10){
    alert("你已获得 "+score+" 分!继续加油！");
    alert("小提示:");
    alert("看一遍视频，再依次回答问题；视频可反复播放.");

  }
}
