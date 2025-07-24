// アルバムデータの作成
let album = [
    { src: 'img/img1.jpg', msg: 'Kinkakuji Temple (Kyoto)'},
    { src: 'img/img2.jpg', msg: 'Kiyomizudera Temple, Kyoto'},
    { src: 'img/img3.jpg', msg: 'Todai-ji Temple, Nara'},
    { src: 'img/img4.jpg',  msg:'osaka castle,osaka' },
    { src: 'img/img5.jpg',  msg:'Itsukushima Shrine,Hiroshima'}
   ];
  
  
  let mainImage = document.createElement('img');
  mainImage.setAttribute('src', album[0].src);
  mainImage.setAttribute('alt', album[0].msg);
  
  let mainMsg = document.createElement('p');
  mainMsg.innerText = mainImage.alt;
  
  let mainFlame = document.querySelector('#gallery .main');
  mainFlame.insertBefore(mainImage, null);
  mainFlame.insertBefore(mainMsg, null);
  
  
  let thumbFlame = document.querySelector('#gallery .thumb');
  for (let i = 0; i < album.length; i++) {
    let thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', album[i].src);
    thumbImage.setAttribute('alt', album[i].msg);
    thumbFlame.insertBefore(thumbImage, null);
  }
  
  
  thumbFlame.addEventListener('click', function(event) {
    if (event.target.src) {
      mainImage.src = event.target.src;
      mainMsg.innerText = event.target.alt;
    }
  });
  



