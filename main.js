
$(function () {
  $("#framewrap")
  .resizable()
  .draggable();
});

var green = [49,76,14];
var yellow = [50, 100, 49];

//var myName = window.location.hash.slice(1);

var url = window.location.pathname;
var myName = url.split("/").slice(-1)[0];


if(myName === ""){ myName = prompt("What would ya like to write? (Type help to see what you can do with this tool!)");}
if(myName === "exit"){window.location.replace("http://trialandsucces.nu");}
if(myName === "help"){document.write("<br>These are the available commands:<br>(try them all!)<br>-orka<br>-orca<br>-shark<br>-nemo<br>-dolphin<br>-frog<br>-penguin<br>-pufferfish<br>-cat<br>-dog<br>-spider<br>-goldfish<br>-fish<br>-hamster<br>-newton<br>-time<br>-clock<br>-stingray<br>-cheese<br>-kaas<br>-square<br>-code<br>-exit")};
if(myName === "orka") {document.write("<iframe src='http://img0.liveinternet.ru/images/attach/c/5/3970/3970473_sprite198.swf' id='frame' frameBorder='0'></iframe>")}
if(myName === "orca") {document.write("<iframe src='http://img0.liveinternet.ru/images/attach/c/5/3970/3970473_sprite198.swf' id='frame' frameBorder='0'></iframe>")}
if(myName === "shark") {document.write("<iframe src='http://img0.liveinternet.ru/images/attach/c/5//3970/3970472_sprite154.swf' id='frame' frameBorder='0'></iframe>")}
if(myName === "nemo") {document.write("<iframe src='http://img0.liveinternet.ru/images/attach/c/5//3970/3970475_sprite278.swf' id='frame' frameBorder='0'></iframe>")}
if(myName === "dolphin") {document.write("<iframe src='http://img0.liveinternet.ru/images/attach/c/5//3970/3970474_sprite238.swf' id='frame' frameBorder='0'></iframe>")}
if(myName === "frog") {document.write("<iframe src='http://www.4kidz.org/timewasters/frog.html' scrolling='no' id='frame' frameBorder='0'></iframe>")}
if(myName === "penguin") {document.write("<iframe src='http://www.4kidz.org/timewasters/penguins.html' scrolling='no' id='frame' frameBorder='0'></iframe>")}
if(myName === "pufferfish") {document.write("<iframe src='http://img0.liveinternet.ru/images/attach/c/5//3970/3970477_sprite279.swf' id='frame' frameBorder='0'></iframe>")}
if(myName === "cat") {document.write("<iframe src='http://www.sundropcrystal.com/maukie/maukie2.swf' id='frame' frameBorder='0'></iframe>")}
if(myName === "dog") {document.write("<iframe src='http://www.funpic.hu/swf/monitor_cleaner.swf' id='dog' frameBorder='0'></iframe>")}
if(myName === "spider") {document.write("<iframe src='http://www.4kidz.org/timewasters/spider.html' scrolling='no' id='frame' frameBorder='0'></iframe>")}
if(myName === "fish") {document.write("<iframe src='http://www.4kidz.org/timewasters/fish.html' scrolling='no' id='frame' frameBorder='0'></iframe>")}
if(myName === "goldfish") {document.write("<iframe src='http://www.4kidz.org/timewasters/fish.html' scrolling='no' id='frame' frameBorder='0'></iframe>")}
if(myName === "hamster") {document.write("<iframe src='http://cdn.abowman.com/widgets/hamster/hamster.swf' id='frame' frameBorder='0'></iframe>")}
if(myName === "newton") {document.write("<iframe src='http://cdn.abowman.com/widgets/newtonscradle/newtonsCradle.swf' id='frame' frameBorder='0'></iframe>")}
if(myName === "turtle") {document.write("<iframe src='http://cdn.abowman.com/widgets/turtles/turtle.swf' id='frame' frameBorder='0'></iframe>")}
if(myName === "clock") {document.write("<iframe src='http://cdn.abowman.com/widgets/ballclock/ballclock.swf' id='frame' frameBorder='0'></iframe>")}
if(myName === "time") {document.write("<iframe src='http://cdn.abowman.com/widgets/ballclock/ballclock.swf' id='frame' frameBorder='0'></iframe>")}
if(myName === "stingray") {document.write("<iframe src='http://cdn.abowman.com/widgets/stingray/stingray.swf' id='frame' frameBorder='0'></iframe>")}
if(myName === "Allah Akbar") {window.location = "http://megaswf.com/file/2574412"}
if(myName ==="code"){window.location = "http://van-der-noord.nl/bubbles/main.js"}
if(myName === "blog"){window.location = "http://van-der-noord.nl/bubbles/blog.html"}
if(myName === "cheese") {var letterColors = [yellow];}
else if(myName === "kaas") {var letterColors = [yellow];}
  else {var letterColors = [green];}
if( myName === "square" ) {
bubbleShape = "square"; }
else { bubbleShape = "circle"; }


drawName(myName, letterColors);
bounceBubbles();
