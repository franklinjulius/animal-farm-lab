const horsePic = document.getElementById('horse-picure');
const catPic = document.getElementById('cat-picture');
const dogPic = document.getElementById('dog-picture');
const horseSound = document.getElementById('horse-sound');
const catSound = document.getElementById('cat-meow');
const dogSound = document.getElementById('dog-bark');


console.log(horseSound);
console.log(catSound);
console.log(dogSound);


horsePic.addEventListener('click', () => {
  horseSound.play();

});

catPic.addEventListener('click', () => {
  catSound.play();
});

dogPic.addEventListener('click', () => {
  dogSound.play();
});
