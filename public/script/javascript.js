if(innerWidth<700){
  let menu=document.createElement('p');
  menu.setAttribute('id','menu');
  menu.style.cssText=`z-index:9;position:fixed;top:17px;`;
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
}else{
  console.log('thre')
}
let countClick=+0;
document.querySelector('#menu').addEventListener('click',()=>{
  countClick++;
  if(countClick==1){
    let newBox=document.createElement('div');
    newBox.style.cssText=`
      display:flex;
      position:fixed;
      justify-content:center;
      align-items:center;
      width:100%;
      height:100vh;
      background:black;
      top:0;
      z-index:0;
      background:white;
      flex-direction:column;
    `;
    newBox.innerHTML=`
      <h1 id="ok-menu">ok</h1>
      <h1 id="photo-menu">photo</h1>
      <h1 id="home-menu">home</h1>
      <h1 id="footer-menu">footer</h1>
    `;
    document.querySelector('body').append(newBox);
    document.querySelector('body > div').addEventListener('click',()=>{
      document.querySelector('body > div').remove();
      countClick=0;
    });
    document.querySelector('#ok-menu').addEventListener('click',()=>{
      console.log('ok');
      window.location.href='#oks';
    });
    document.querySelector('#footer-menu').addEventListener('click',()=>{
      console.log('footer');
      window.location.href='#footer';
    });
    document.querySelector('#home-menu').addEventListener('click',()=>{
      console.log('home');
      window.location.href='#';
    });
    document.querySelector('#photo-menu').addEventListener('click',()=>{
      console.log('photo');
      window.location.href='#photos';
    });
  }else if(countClick==2){
    document.querySelector('body > div').remove();
    countClick=0;
  }
  console.log('click');
});
