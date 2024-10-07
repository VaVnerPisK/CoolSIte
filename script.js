document.addEventListener('DOMContentLoaded', () => {
    console.log("Добро пожаловать в Iron Man Services!");

    let a = 5;
    let b = 4;

    let c = (a + b) * (b + a);
    console.log(c); 

    const promotionText = "Супер предложение! При покупке 4 ракет, вы получаете пятую в подарок!";
    document.getElementById('promotion-text').innerText = promotionText;

    const buyButton = document.getElementById('buy-button');
    const rocketImageContainer = document.getElementById('rocket-image');

    buyButton.addEventListener('click', () => {
        const colors = ['#28a745', '#ffc107', '#dc3545'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        buyButton.style.backgroundColor = randomColor;

        rocketImageContainer.style.display = 'block'; 
    });


    const urgentOrderButton = document.getElementById('urgent-order-button');
    const fbiLogo = document.createElement('img');
    fbiLogo.src = 'fbi-logo.png'; 
    fbiLogo.alt = 'FBI Logo';
    fbiLogo.id = 'fbi-logo';
    fbiLogo.style.display = 'none'; 
    document.body.appendChild(fbiLogo);

    const fbiSound = document.getElementById('fbi-sound');

    urgentOrderButton.addEventListener('click', () => {
        document.body.classList.toggle('black-theme');

        fbiLogo.style.display = 'block';

        fbiSound.play(); 

        const products = document.querySelectorAll('.products p'); 
        products.forEach(product => {
            product.style.color = 'white';
            product.innerText = 'СРОЧНО ЗАКАЗАТЬ, пока не поздно!'; 
        });
    });
});
