const ThanhDieu_List = [
"https://files.catbox.moe/zuwsxa.mp3",
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
