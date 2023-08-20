function closeMenuSpan(){
  document.querySelector('#menu > span:nth-child(2)').style.cssText=`
  transition: all 1s ease-out;width:37px;height:3px;background:black;display:block;margin-top:17%;margin-bottom:17%;margin-right:17px;
  `;
  document.querySelector('#menu > span:nth-child(1)').style.cssText=`
  transition: all 1s ease-out;width:37px;height:3px;background:black;display:block;
  `;
  document.querySelector('#menu > span:nth-child(3)').style.cssText=`
  transition: all 1s ease-out;width:37px;height:3px;background:black;display:block
  `;
  document.querySelector('body > div').style.cssText=`
  width:1px;
  transition: all 1s ease-out;
  opacity:0;
  `;
}
if(innerWidth<700){
  let menu=document.createElement('p');
  menu.setAttribute('id','menu');
  menu.style.cssText=`z-index:9;position:fixed;top:17px;`;
  document.querySelector('nav').prepend(menu);

  let spanOne=document.createElement('span');
  spanOne.style.cssText=`transition: all 1s ease-out;width:37px;height:3px;background:black;display:block;`;
  document.querySelector('#menu').prepend(spanOne);
  let spanTwo=document.createElement('span');
  spanTwo.style.cssText=`transition: all 1s ease-out;width:37px;height:3px;background:black;display:block;margin-top:17%;margin-bottom:17%;margin-right:17px;`;
  document.querySelector('#menu').prepend(spanTwo);
  let spanThree=document.createElement('span');
  spanThree.style.cssText=`transition: all 1s ease-out;width:37px;height:3px;background:black;display:block`;
  document.querySelector('#menu').prepend(spanThree);
}else{
  console.log('thre');
  if(document.querySelector('body > div')==true){
    console.log('body > div TRUE');
  }
}
let countClick=+0;
document.querySelector('#menu').addEventListener('click',()=>{
  countClick++;
  if(countClick==1){
    document.querySelector('#menu > span:nth-child(2)').style.cssText=`
    margin-bottom:0;
    margin-top:0;
    display:none;
    margin:0;
    transition: all 1s ease-out;
    opacity:0;
    margin-right:17px;
    `;
    document.querySelector('#menu > span:nth-child(1)').style.cssText=`
      transition: all 1s ease-out;
      width:45px;
      height:3px;
      background:black;
      display:block;
      transition: all 1s ease-out;
      transform: rotate(50deg);
      margin-right:17px;
      margin-top:17px;

    `;
    document.querySelector('#menu > span:nth-child(3)').style.cssText=`
    transition: all 1s ease-out;
    width:45px;
    height:3px;
    background:black;
    display:block;
    transform: rotate(-50deg);
    margin-right:17px;
    `;
    let newBox=document.createElement('div');
    newBox.className='openMenu';
    newBox.innerHTML=`
    <h1 id="ok-menu">ok</h1>
    <h1 id="photo-menu">photo</h1>
    <h1 id="home-menu">home</h1>
    <h1 id="footer-menu">footer</h1>
    `;
    setInterval(()=>{
      newBox.style.cssText=`
      opacity:1;
      width:100%;
      transition: all 1s ease-out;
      display:flex;
      position:fixed;
      justify-content:center;
      align-items:center;
      height:100vh;
      // background:black;
      top:0;
      z-index:0;
      background:white;
      flex-direction:column;
      `
    },300);
    document.querySelector('body').append(newBox);
    document.querySelector('body > .openMenu').addEventListener('click',()=>{
      closeMenuSpan();
      // document.querySelector('body > div').remove();
      document.querySelector('body > .openMenu').remove();
      countClick=0;
    });
    document.querySelector('#ok-menu').addEventListener('click',()=>{
      console.log('ok');
      window.location.href='#oks';
      closeMenuSpan();
    });
    document.querySelector('#footer-menu').addEventListener('click',()=>{
      console.log('footer');
      window.location.href='#footer';
      closeMenuSpan();
    });
    document.querySelector('#home-menu').addEventListener('click',()=>{
      console.log('home');
      window.location.href='';
      window.scroll(0,0);
      closeMenuSpan();
    });
    document.querySelector('#photo-menu').addEventListener('click',()=>{
      console.log('photo');
      window.location.href='#photos';
      closeMenuSpan();
    });
  }else if(countClick==2){
    setTimeout(()=>{
      document.querySelector('body > .openMenu').remove();
      countClick=0;
      closeMenuSpan();
    },70);
  }
  console.log('click');
});
function displayWidth(){
    console.log('oooK');
}
window.addEventListener('DOMContentLoaded',displayWidth);
setInterval(displayWidth,7000);

let clickFlipping=document.createElement('span');
clickFlipping.innerHTML=`Фотографии листатается нажатием`;
document.querySelector('#photos').append(clickFlipping);
const arrayPhoto=['https://n1s2.hsmedia.ru/66/99/3d/66993d265ae81bfb2eac171053f2c010/1597x892_0xac120003_1644557031599829157.jpg','https://spb.stilkuhni.ru/upload/iblock/cea/029b18009d4fc63dcbce5c217f91c77a.png','https://ritzmebel.ru/wp-content/themes/provodnik/assets/images/production_1.jpg','https://geometria-loft.ru/wp-content/uploads/2018/10/1-2.jpg']
let clickPhoto=+0;
document.querySelector('body > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > img:nth-child(1)').addEventListener('click',()=>{
  clickPhoto++;
  if(clickPhoto>=arrayPhoto.length){
    clickPhoto=0;
  }
  document.querySelector('body > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > img:nth-child(1)').setAttribute('src', arrayPhoto[clickPhoto]);
})
