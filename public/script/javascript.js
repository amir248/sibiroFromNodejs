const state={};
if(localStorage.themes=='black'){
  state.checkbox="true";
    state.line="white";
    blackWhite();
}else{

    state.checkbox="false";
    state.line="black";

}
// console.log('click '+state);
// window.addEventListener('DOMContentLoaded',()=>{
//   console.log('DOMContentLoaded');
//   if(localStorage.themes=='black'){
//       blackWhite();
//     }else{
//         // blackWhite();
//         console.log("ELSE!!!!!!!!!!!!!!!!!!!!!!!!!");
//
//       }
// });
// function mutation(){
//   localStorage.setItem('themes','black');
//   if(localStorage.themes=='white'){
//     state.line='white';
//     localStorage.themes='black';
//     blackWhite();
//     console.log('localStorage.theme WHITE--and '+state.checkbox);
//   }else if(localStorage.themes=='black'){
//     console.log('localStorage.themes BLACK');
//     // localStorage.themes='white';
//     // if(state.countClick==1){
//     //   document.querSelector('checkbox').addEventListener('click',()=>{
//     //     console.log('oKkk');
//     //   });
//     // }
//     window.location.href=`index.html`;
//   }else{
//     console.log('localStorage.ELSE');
//   }
//
// }

function blackWhite(){
  //--------------------------------------------------------
  //-------------------Black themes-------------------------
  //--------------------------------------------------------
  if(localStorage.themes=="black"){
    state.background='black';
    state.color='white';
    state.line='yellow';
    console.log('blackThemes'+"_"+state.countClick);
    // window.addEventListener('')
    if(state.countClick==2){
      document.querSelector('.openMenu').style.sccText=`
      background:balck;color:white;
      `;
      document.querSelector('#menu > span:nth-child(1)').style.cssText=`
      background:white;
      `;
    }
    document.querySelector('body').style.cssText=`
      background:black;
      color:white;
    `;
    document.querySelector('.buttonOnNextPhoto > button:nth-child(1)').style.cssText=`color:black;background:white;border:1px solid black;`;
    document.querySelector('.buttonOnNextButton > button:nth-child(1)').style.cssText=`color:black;background:white;border:1px solid black;`;
    document.querySelector('.buttonOnNextButton > button:nth-child(2)').style.cssText=`color:black;background:white;border:1px solid black;`;
    document.querySelector('body > main:nth-child(2) > button:nth-child(4)').style.cssText=`color:black;background:white;border:1px solid black;`;
    document.querySelector('.discount').style.cssText=`color:black;background:white;border:1px solid black;`;
    document.querySelector('button.getConsultation:nth-child(11)').style.cssText=`color:black;background:white;border:1px solid black;
    `;
    document.querySelector('button.getConsultation:nth-child(2)').style.cssText=`color:black;background:white;border:1px solid black;`;

  }else if(localStorage.themes=="white"){
    console.log("whiteThemes");
    state.background='white';
    state.color='violet';
    state.line='black';
  }else{
    console.log("elseThemes");
    state.background='white';
    state.color='violet';
    state.line='black';
  }
  // const blackThemes={
  //   color: "white"
  // };
  // if(localStorage.themes=='white'){
  //   // console.log('themes-CHECKBOX---TRUE');
  //   // localStorage.setItem('themes','black');
  //   // localStorage.themes='black';
  // }else{
  //   console.log('themes-BLACK---TRUE');
  //   // localStorage.themes=='thite';
  //   // localStorage.setItem('themes','white');
  //
  // }
};


// console.log(state);
// if(state.checkbox==false){
//   document.querySelector('#themes').addEventListener('click',()=>{
//     console.log('\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\');
//     blackWhite();
//     state.checkbox==true;
//   });
//
// }else{
//   if(state.checkbox==true){
//     console.log('CHECKBOX TRUE-0------');
//   }else{
//     blackWhite();
//
//   }
//   // document.querySelector('#themes').addEventListener('click',()=>{
//   //   console.log('\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\');
//   // });
// }
function intersectionObserverClick(){
  console.log('intersectionObserverClick');
    let observerS = new MutationObserver(mutationRecords => {
      console.log(mutationRecords); // console.log(изменения)
    });
    // document.querySelector('#themes').addEventListener('click',()=>{
    //   if(localStorage.themes=='black'){
    //     cosole.log('themes-000000000000');
    //   }else{
    //     console.log('99999999');
    //     localStorage.themes='black';
    //     blackWhite();
    //     window.location.href='/';
    //   }
    // });

    // наблюдать за всем, кроме атрибутов
    observerS.observe(themes, {
      childList: true, // наблюдать за непосредственными детьми
      subtree: true, // и более глубокими потомками
      characterDataOldValue: true // передавать старое значение в колбэк
    });
// mutation();

  // if(document.querySelector('#themes')!==true){
  //   document.querSelector('#themes').addEventListener('click',()=>{
  //     console.log('oKfdfd');
  //   });
  // }
    if(document.querySelector('#themes').checked==true){
      // state.line='yellow';
      state.checkbox="true";
      localStorage.themes=='black';
      localStorage.setItem('themes','black');
      blackWhite();
      console.log('oK');
      console.log(state);
    // }else if(document.querSelector('#themes').checked==false){
    //   blackWhite();
    //   state.checkbox='true';
    }else{
      // localStorage.themes='white';
      // blackWhite();
      // state.checkbox='true';
      console.log(state);
    }
}//intersectionObserver
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// if(state.countClick==1){
//   // state.line='orange';
//   setTimeout(()=>{
//     console.log(localStorage.themes);
//     document.querSelector('#themes').addEventListener('click',()=>{
//       if(localStorage.themes=='black'){
//         conssole.log('CLICCKKKKKK');
//
//       }else if(localStorage.themes=='white'){
//         console.log('CLIDCK WHITE');
//       }else{
//         console.log('CLIDCK else');
//       }
//       clickThemes();
//       localStorage.setItem('themes',`${blackThemes.color}`);
//     });
//   },70);
//
//   console.log(state.countClick+"_!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//         // localStorage.setItem('test', 1);
//
//         blackThemes.color='black';
//         localStorage.themes='black';
//         function clickThemes(){
//           if(state.countClick==1){
//             if(document.querySelector('#themes').checked==true){
//               blackThemes.color="black";
//               // localStorage.themes='black';
//               localStorage.setItem('themes',`${blackThemes.color}`);
//               console.log(blackThemes.color);
//             }else{
//               localStorage.setItem('themes',`${blackThemes.color}`);
//               console.log(blackThemes.color);
//             }
//           }
//         }
//         clickThemes();
//         if(document.querySelector('#themes').checked==true){
//           console.log('BLACK');
//         }
//         if(localStorage.themes=="black"){
//           console.log(!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1);
//         }
//
//         if(blackThemes.themes=='black'){
//           document.querySelector('body').style.cssText=`
//           background:black;
//           color:white;
//           `;
//           // document.querySelector('.buttonOnNextPhoto > button:nth-child(1)').style.cssText=`color:black;background:white;border:1px solid black;`;
//           document.querSelector('.openMenu').style.sccText=`
//             background:balck;color:white;
//           `;
//         }else{
//           console.log("ELSE");
//         }
//       }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++








function menuOpenClose(){
  function closeMenuSpan(){
    // state.line='green';
    console.log('F menuOpenClose_'+state.countClick);
    document.querySelector('#menu > span:nth-child(2)').style.cssText=`
    transition: all 1s ease-out;width:37px;height:3px;background:`+`${state.line}`+`;display:block;margin-top:17%;margin-bottom:17%;margin-right:17px;
    `;
    document.querySelector('#menu > span:nth-child(1)').style.cssText=`
    transition: all 1s ease-out;width:37px;height:3px;background:`+`${state.line}`+`;display:block;
    `;
    document.querySelector('#menu > span:nth-child(3)').style.cssText=`
    transition: all 1s ease-out;width:37px;height:3px;background:`+`${state.line}`+`;display:block
    `;
    document.querySelector('body > .openMenu').style.cssText=`
    display:flex;
    position:fixed;
    justify-content:center;
    align-items:center;

    height:100vh;
    // background:;
    top:100;
    z-index:0;
    background:`+`${state.background}`+`;
    flex-direction:column;
    opacity:0;
    transition: all 0.7s ease-out;

    `;
    // document.querySelector('body > .openMenu').className=`closeMenu`;
    // document.querySelector('body > .openMenu').style.cssText=`
    // width:1px;
    // transition: all 1s ease-out;
    // opacity:0;
    // `;
  }
  if(innerWidth<700){
    let menu=document.createElement('p');
    menu.setAttribute('id','menu');
    menu.style.cssText=`z-index:9;position:fixed;top:17px;`;
    document.querySelector('nav').prepend(menu);

    let spanOne=document.createElement('span');
    spanOne.style.cssText=`transition: all 1s ease-out;width:37px;height:3px;background:`+`${state.line}`+`;display:block;`;
    document.querySelector('#menu').prepend(spanOne);
    let spanTwo=document.createElement('span');
    spanTwo.style.cssText=`transition: all 1s ease-out;width:37px;height:3px;background:`+`${state.line}`+`;display:block;margin-top:17%;margin-bottom:17%;margin-right:17px;`;
    document.querySelector('#menu').prepend(spanTwo);
    let spanThree=document.createElement('span');
    spanThree.style.cssText=`transition: all 1s ease-out;width:37px;height:3px;background:`+`${state.line}`+`;display:block`;
    document.querySelector('#menu').prepend(spanThree);

  }else{
    console.log('thre');
    if(document.querySelector('body > .openMenu')==true){
      console.log('body > div TRUE');
    }
  }
  state.countClick=+0;


  console.log('menuOpenClose');
  document.querySelector('#menu').addEventListener('click',()=>{
    state.countClick++;
    if(state.countClick==1){
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
      background:`+`${state.line}`+`;
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
      background:`+`${state.line}`+`;
      display:block;
      transform: rotate(-50deg);
      margin-right:17px;
      `;
      let newBox=document.createElement('div');
      newBox.innerHTML=`
      <h1 id="ok-menu">ok</h1>
      <h1 id="photo-menu">photo</h1>
      <h1 id="home-menu">home</h1>
      <h1 id="footer-menu">footer</h1>
      <h1><span>Call me:</span><br><a href='tel:+79137870404' style='color:`+`${state.color}`+`;text-decoration:none;'>+7 913 787 04 04</a></h1>
      <h1 id="themes-menu">Black</h1>
      `;
      document.querySelector('body').append(newBox);
      console.log(state.countClick +" on set INterval");
      newBox.className='openMenu';
      setTimeout(()=>{
        document.querySelector('body > .openMenu').style.cssText=`
        transition: all 1s ease-out;
        opacity:1;
        width:100%;
        display:flex;
        position:fixed;
        justify-content:center;
        align-items:center;
        height:100vh;
        // bottom:0;
        z-index:0;
        background:`+`${state.background}`+`;
        flex-direction:column;
        right:0;
        `
      },70);
      document.querySelector('body > .openMenu').addEventListener('click',()=>{
        closeMenuSpan();
        //====================================================================
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // intersectionObserverClick();
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        //===================================================================
        setTimeout(()=>{
          // document.querySelector('body > div').remove();
          document.querySelector('body > .openMenu').remove();
        },300);
        state.countClick=0;
      });
      document.querySelector('#ok-menu').addEventListener('click',()=>{
        closeMenuSpan();
        console.log('ok');
        window.location.href='#oks';
      });
      document.querySelector('#footer-menu').addEventListener('click',()=>{
        closeMenuSpan();
        console.log('footer');
        window.location.href='#footer';
      });
      document.querySelector('#home-menu').addEventListener('click',()=>{
        closeMenuSpan();
        console.log('home');
        window.location.href='';
        window.scroll(0,0);
      });
      document.querySelector('#photo-menu').addEventListener('click',()=>{
        closeMenuSpan();
        console.log('photo');
        window.location.href='#photos';
      });
      if(document.querySelector('#themes-menu')!==null){
        if(localStorage.themes=='black'){
          document.querySelector('#themes-menu').innerHTML=`white theme`;
        }else if(localStorage.themes=='white'){
          document.querySelector('#themes-menu').innerHTML=`black theme`;
        }else{
          document.querySelector('#themes-menu').innerHTML=`theme black`;
        }
      }
      document.querySelector('#themes-menu').addEventListener('click',()=>{
         console.log('oKfdfd');
         //
         if(localStorage.themes=='black'){
           console.log('chickBOXfalse');
           // state.checkbox='true';
           localStorage.themes='white';
           blackWhite();
           window.location.href='./index.html';
         }else if(localStorage.themes=='white'){
           console.log('CheckboxTrue');
           localStorage.themes='black';
           blackWhite();
           // window.location.href='./index.html';
          // state.checkbox='false';
         }else{
           console.log('Else ');
           // localStorage.themes='black';
           localStorage.themes='black';
           blackWhite();
         }
       });
    }else if(state.countClick==2){
      closeMenuSpan();
      setTimeout(()=>{
        document.querySelector('body > .openMenu').remove();
        state.countClick=0;
      },700);
    }
    // it's a menu opening mistake - menu opening


          });//addEventListener Click Menu
}//menuOpenClose
if(window.innerWidth>700){
  console.log('loloooo');
}else{
  menuOpenClose();
}
// function displayWidth(){
//     console.log('oooK');
// }
// window.addEventListener('DOMContentLoaded',displayWidth);
// setInterval(displayWidth,7000);

//inscription more photos click flipping
let clickFlipping=document.createElement('span');
clickFlipping.innerHTML=`<span style='width:100%;max-width:700px;overflow:hidden;'>Фотографии листатается нажатием</span>`;
document.querySelector('#photos').append(clickFlipping);
const arrayPhoto=['https://n1s2.hsmedia.ru/66/99/3d/66993d265ae81bfb2eac171053f2c010/1597x892_0xac120003_1644557031599829157.jpg','https://spb.stilkuhni.ru/upload/iblock/cea/029b18009d4fc63dcbce5c217f91c77a.png','https://ritzmebel.ru/wp-content/themes/provodnik/assets/images/production_1.jpg','https://geometria-loft.ru/wp-content/uploads/2018/10/1-2.jpg']
let clickPhoto=+0;
document.querySelector('#photos > .imge > img').addEventListener('click',()=>{
  clickPhoto++;
  if(clickPhoto>=arrayPhoto.length){
    clickPhoto=0;
  }
  document.querySelector('body > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > img:nth-child(1)').setAttribute('src', arrayPhoto[clickPhoto]);
});

//first photo gallery
let firstGalleryCountClick=+0;
const arrayFirstGallery=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSbB_3OpxKCHZLJ60o9LHtjiLPZ5CfP6bBg&usqp=CAU','https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp','https://www.imgacademy.com/sites/default/files/boarding-homepage-row-2022-mobile.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAarQVfK-Bj9pho_3C2nShllmaDZlCaVCpXYwSXdtxIp0o43wP4aPRpifI0PDytAgRjY&usqp=CAU','https://www.imgworlds.com/_next/static/media/iron-man.628104a8.png'];
document.querySelector('.fivePhoto > .line > img').addEventListener('click',()=>{
  // console.log(firstGalleryCountClick);
  firstGalleryCountClick++;
  if(firstGalleryCountClick>=arrayFirstGallery.length){
    firstGalleryCountClick=0;
  }
  document.querySelector('.fivePhoto > .line > img').setAttribute('src',arrayFirstGallery[firstGalleryCountClick]);
});


//----------------------------------------
// big script with intersection Observer
//----------------------------------------
const lazyImages = document.querySelectorAll('.lazy-image');
const lazyImagesTwo = document.querySelectorAll('.lazy-imageTwo');
const lazyImagesThree = document.querySelectorAll('.lazy-imageThree');

const callback = (entries, observer) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      console.log('Пользователь почти докрутил до картинки!');
      setTimeout(()=>{
        document.querySelector('.lazy-imageTwo').style.cssText=`
        opacity:1;
        margin-left:0px;
        `;
      },100);
      document.querySelector('body > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > img:nth-child(1)').style.cssText=`
        opacity:1;
        margin-left:0px;
      `;

      document.querySelector('body > main:nth-child(2) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)').style.cssText=`margin-left: 0px;opacity:1`;

      // entry.target.src = entry.target.dataset.src
      // observer.unobserve(entry.target)
    // }else{
    //
    //         document.querySelector('.lazy-imageTwo').style.cssText=`
    //           opacity:0;
    //           margin-left:-330px;
    //         `;
    //         document.querySelector('.lazy-image > img:nth-child(1)').style.cssText=`margin-left: 330px;opacity:0`;
  }else{
    console.log('bye');
    document.querySelector('.lazy-imageTwo').style.cssText=`opacity:0;margin-left:230px;`;

    document.querySelector('body > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > img:nth-child(1)').style.cssText=`opacity:0;margin-left:330px;`;

  document.querySelector('body > main:nth-child(2) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)').style.cssText='opacity:0;margin-left:-330px;'

  }
  });
}

const options = {
  // root: по умолчанию window, но можно задать любой элемент-контейнер
  rootMargin: '0px 0px 5px 0px',
  threshold: [0.1, 1],
}

const observer = new IntersectionObserver(callback, options)

lazyImages.forEach((image) => observer.observe(image));
lazyImagesTwo.forEach((image) => observer.observe(image));
lazyImagesThree.forEach((image) => observer.observe(image));
