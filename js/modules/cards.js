function createCardsMenu() {

    // getResource('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({ img, altimg, title, descr, price }) => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu__field .container').render();
    //         });
    //     });

    axios.get('http://localhost:3000/menu')
        .then(data => {
            // console.log(data);
            data.data.forEach(({ img, altimg, title, descr, price }) => {
                new MenuCard(img, altimg, title, descr, price, '.menu__field .container').render();
            });
        });

    class MenuCard {
        constructor(image, alt, title, text, price) {
            this.image = image;
            this.alt = alt;
            this.title = title;
            this.text = text;
            this.price = price;
        }

        render() {
            const cardsParrent = document.querySelector('.menu__field .container'),
                element = document.createElement('div');
            element.classList.add('menu__item');
            element.innerHTML = `
            <img src="${this.image}" alt="${this.alt}">
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.text}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
          `;
            cardsParrent.append(element);
        }
    }
}

module.exports = createCardsMenu;