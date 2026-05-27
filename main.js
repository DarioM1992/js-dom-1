const btn = document.querySelector('button');
const img = document.querySelector('img');
const imgOff = "img/white_lamp.png";
const imgOn = "img/yellow_lamp.png";

btn.addEventListener('click' , () => {
   if (btn.textContent === "\"Accendi\"") {
    btn.textContent = "\"Spegni\"";
   } else {
    btn.textContent = "\"Accendi\"";
   }

   img.src = img.src.includes (imgOff) ? imgOn : imgOff ;
});
