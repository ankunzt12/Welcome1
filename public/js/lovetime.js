const Safeguard = `

<div class="page page1">

<div class="title">

  <p id="abcxyz"></p>

</div>

  <div class="swiper-container swiper-container-lovexhj1">

      <div class="swiper-wrapper">

          <div class="swiper-slide" >

              <div class="page1-lovexhj1">

                  <img class="avt avt-boy" src="https://i.imgur.com/XdvlxdJ.jpg" alt="">

                  <span onclick="window.location.href='https://www.facebook.com/profile.php?id=100064171427986';" class="name-boy">Nguyễn Hoàng Minh<img class="TichXanh__" src="./public/images/tick-green.gif"></span>

                  <img class="decor-avatar" src="./public/images/heart-gif.gif" alt="">

                  <img class="decor-avatar avt avt-girl" src="https://i.imgur.com/x0X79ec.jpg" alt="">

                  <span onclick="window.location.href='https://www.facebook.com/profile.php?id=100073379756185';" class="name-girl">Nguyễn Quỳnh Như<img class="TichXanh__" src="./public/images/tick-pink.gif"></span>

                  <div class="td-focus">

                  <p class="title-font">Chúng Tôi Yêu Nhau Được: </p><p class="title-font rainbowabc" id="lovetime"></p>

                  <br>

                  <p class="title-font">‟&ensp;Ớt dù cay anh vẫn ăn cả vỏ</p>

                  <p class="title-font">Ngực em có nhỏ anh không bỏ em đâu 😎 „</p>

                  <br>

                  <span class="right">Vuốt sang phải →</span>

              </div>

              </div>

         </div>

         <div class="swiper-slide">

          <div class="lovexhj1">

              <img class="stickerxnxx" src="./public/images/love-tonton.gif" alt="Love TonTon">

              <p class="catText">The icons that you frequently send to me ↑</p>

               <br>

              <p class="title-font0">Gặp nhau rồi thật khó lìa xa...bao tâm sự còn đang dang dở !</p>

              <p class="title-font0">Tình ta mênh mông như biển trời, Nhưng chí nàng còn rộng lớn hơn.</p>

              <p class="title-font0">Kiếp này đôi ta không duyên phận, đành lặng lẽ chúc nàng bình an.</p>

              <span class="right">Tiếp tục vuốt →</span>

          </div>

      </div>

      <div class="swiper-slide">

          <div class="lovexhj1">

              <img class="stickerxnxx" src="./public/images/i-love-u.gif" alt="">

              <p class="catText">Sending hearts to you ↑</p>

              <br>

              <p class="title-font1">‟ Yêu em nhiều như muối biển, nhiều như số cát trên trái đất „</p>

              <p class="title-font1">&mdash; Nghe có vẻ hơi điêu nhỉ ^^ &mdash;</p>

              <p class="title-font1">Chẳng thể nào diễn tả được từ

                  <span style="color: red; font-size: 16px;">- Yêu Em -</span>

                  với tình cảnh này :v

              </p>

              <span class="right">Vuốt cái nữa →</span>

          </div>

      </div>

      <div class="swiper-slide">

          <div class="lovexhj1">

              <img class="stickerxnxx" src="./public/images/facebook-emoji.gif" alt="">

              <p class="catText">Hug you close ↑</p>

              <br>

              <p class="title-font2">&mdash; Hi Vọng Bạn Thích Nó &mdash;</p>

              <p class="title-font2">Tôi Sẽ Lưu Giữ Kĩ Niệm Này Tại Website 😋</p>

              <p class="title-font2">Yêu em (๑′ᴗ‵๑)</p>

              <b class="title-font2">Babie<span style="font-family: Sriracha;color: rgb(207, 0, 190);"> của tôi 💞</span></b>

          </div>

      </div>

  </div>

  <div class="swiper-pagination swiper-pagination-lovexhj1"></div>

</div>

</div>

<div class="anime-cb">

  <img src="https://media1.giphy.com/media/1lKRbcFuzyv3q8zyqr/giphy.gif?cid=6c09b9525uoa2z5x9r4h4bn1f1r4oikrgdyrf8qu9uempoq1&ep=v1_gifs_search&rid=giphy.gif&ct=s" alt="pig1" class="pig1">

  <img src="./public/images/dick_.GIF" alt="pig2" class="pig2">

</div>

`

const Denfender =  document.getElementById("safeguard");

Denfender.innerHTML = Safeguard;

function lovetime() {

    window.setTimeout(lovetime, 1000);

    var seconds = 1000;

    var minutes = seconds * 60;

    var hours = minutes * 60;

    var days = hours * 24;

    var years = days * 365;

    var today = new Date();

    var todayYear = today.getFullYear();

    var todayMonth = today.getMonth();

    var todayDate = today.getDate();

    var todayHour = today.getHours();

    var todayMinute = today.getMinutes();

    var todaySecond = today.getSeconds();

    var t1 = Date.UTC(2023, 1, 57, 2, 0, 0);



    var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);

    var diff = t2 - t1;

    var diffYears = Math.floor(diff / years);

    var diffDays = Math.floor((diff / days) - diffYears * 365);

    var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);

    var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes);

    var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) / seconds);

    document.getElementById("lovetime").innerHTML = "" + diffYears + " Năm " + diffDays + " Ngày " +

        diffHours + " Giờ " + diffMinutes + " Phút " + diffSeconds + " Giây";

}





lovetime();

document.addEventListener('DOMContentLoaded', function() {

    Notification();

    ThanhDieuAudio();

});

function Notification() {

Swal.fire(

    'Relationship ',

    'Điếm ngày yêu - lưu giữ kĩ niệm.\nSử dụng pc để có góc nhìn bao quát',

    'success'

  )

}

const ThanhDieu_List = [

"https://files.catbox.moe/1ipgbp.mp3",

  ];

  //Random music

  let index = Math.floor(Math.random() * ThanhDieu_List.length);

  const audio = new Audio(ThanhDieu_List[index]);

  function ThanhDieuAudio() {audio.play();}

  document.addEventListener("click", ThanhDieuAudio);

  audio.addEventListener("ended", function() {

    index = (index + 1) % ThanhDieu_List.length;

    audio.src = ThanhDieu_List[index];

    audio.play();

  });
