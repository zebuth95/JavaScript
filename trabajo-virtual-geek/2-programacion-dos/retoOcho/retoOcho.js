const listElement = document.querySelector('.lista');

const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

const content = `<li><img src="${firstDogImage}" alt=""><h2>${firstDogName}</h2></li>
<li><img src="${secondDogImage}" alt=""><h2>${secondDogName}</h2></li>
<li><img src="${thirdDogImage}" alt=""><h2>${thirdDogName}</h2></li>`;

listElement.innerHTML = content;