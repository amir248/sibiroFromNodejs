let menu=document.createElement('p');
menu.setAttribute('id','menu');
document.querySelector('nav').prepend(menu);

let spanOne=document.createElement('span');
spanOne.style.cssText=`width:37px;height:3px;background:black;display:block;`;
document.querySelector('#menu').prepend(spanOne);
let spanTwo=document.createElement('span');
spanTwo.style.cssText=`width:37px;height:3px;background:black;display:block;margin-top:17%;margin-bottom:17%;`;
document.querySelector('#menu').prepend(spanTwo);
let spanThree=document.createElement('span');
spanThree.style.cssText=`width:37px;height:3px;background:black;display:block`;
document.querySelector('#menu').prepend(spanThree);
