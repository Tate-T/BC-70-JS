const products = [
    {
        productName: "🍎",
        price: 5,
        quantity: 8,
        photo: 'https://static.wikia.nocookie.net/the-snack-encyclopedia/images/7/7d/Apple.png/revision/latest?cb=20200706145821',
        description: "Яблуко — це плід яблуні, рослини з родини трояндових. Воно має круглий або яйцеподібний вигляд і зазвичай має діаметр від 5 до 10 сантиметрів. Його шкірка може бути різного кольору — від зеленого до жовтого, червоного і навіть темно-фіолетового. М'якоть яблука зазвичай біла або жовта, соковита і має солодку або кисло-солодку смакову властивість. У центрі плоду зазвичай знаходяться насіння, які можуть бути білого або коричневого кольору"
    },
    {
        productName: "🍇",
        price: 2,
        quantity: 6,
        photo: 'https://img.imageboss.me/fourwinds/width/425/dpr:2/shop/products/blackmonukka.jpg?v=1538780984',
        description: "Виногра́д (Vitis) — рід рослин родини виноградових (Vitaceae), містить ≈ 75 видів, зростають у Євразії, Північної, Південної Америки. Україна є батьківщиною одного виду — виноград справжній"
    },
    {
        productName: "🍓",
        price: 1,
        quantity: 3,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/1200px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg',
        description: "Я́года — тип простого плоду, що має м'який їстівний м'якуш та насіння, що утворюються з єдиної зав'язі. У народі, проте, ягодами вважають невеликі плоди круглої або довгастої форми, кислі або солодкі."
    },
    {
        productName: "🍋",
        price: 4,
        quantity: 6,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9tr4PUstW0iIYkyJRXEvy3d4ujlIZ6pjTbrCOGJrF1w&s',
        description: 'Лимо́н[1] [2], цитри́на[3] [4] або лимо́нне де́рево (Citrus × limon) — штучний гібрид фруктових дерев роду цитрус (Citrus); також терміном «лимон» називають плід цього дерева.'
    },
    {
        productName: "🍒",
        price: 1,
        quantity: 3,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/640px-Cherry_season_%2848216568227%29.jpg',
        description: 'Вишня  — плід рослин підроду cerasus роду Prunus. Плід типу кістянка. Плоди підроду Cerasus відрізняються від інших підродів роду Prunus (Armeniaca — абрикос, Prunus — слива і Emplectocladus) тим, що вони гладкі, без нальоту.'
    },
    {
        productName: "🍎",
        price: 20,
        quantity: 8,
    },
    {
        productName: "🍌",
        price: 14,
        quantity: 11,
        photo: 'https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400',
        description: "Бана́н (Musa) — рід багаторічних трав'янистих рослин родини бананових. Станом на сьогодні різні сорти культигену Musa × paradisiaca[1], створеного на основі деяких видів цих рослин, культивуються в тропічних країнах і в багатьох з них складають найважливішу частку експорту."
    },
    {
        productName: "🍐",
        price: 7,
        quantity: 1,
        photo: 'https://florium.ua/media/catalog/product/cache/1/file/9df78eab33525d08d6e5fb8d27136e95/g/r/grusha-dyushes.jpg',
        description: 'Груша — плід дерева груша звичайна (лат. Pyrus communis). Достигає в помірних широтах восени, рідше наприкінці літа. У тепліших широтах достигає швидше. Плід містить багато соку. Найчастіше форма нагадує яблуко із конусом зверху.'
    },
    {
        productName: "🍊",
        price: 12,
        quantity: 13,
        photo: 'https://draxe.com/wp-content/uploads/2016/08/DrAxePeachFB.jpg',
        description: 'Пе́рсик (Prunus persica) — багаторічна рослина родини розових, споріднена з мигдалем. Вельми популярна і поширена плодова культура, яку також використовують як олійну, лікарську та декоративну.'
    },
    {
        productName: "🍓",
        price: 4,
        quantity: 10,
    },
];
const refs = {
    listElement: document.querySelector('.products-list'),
    closeBtn: document.querySelector('.close-modal'),
    modalElement: document.querySelector('.modal'),
    backdropElement: document.querySelector('.backdrop'),
}



const productsList = products.map(product => {
    return `<li class="products-item">
        <h2>Назва товару: ${product.productName}</h2>
        <p>Ціна: ${product.price} грн</p>
        <p>Кількість: ${product.quantity}</p>
    </li>`
}).join('')

refs.listElement.innerHTML = productsList


function createModal(product) {
    return `
        <img src="${product.photo}" alt="${product.productName}">
        <h2>${product.productName}</h2>
        <p>${product.description}</p>
    `
}

function openModal() {
    refs.backdropElement.classList.add('is-open')
}

function closeModal(event) {
    refs.backdropElement.classList.remove('is-open')
    console.log(event.target)
}

refs.listElement.addEventListener('click', (event) => {
    // if(event.target.nodeName !== 'LI' ) {
    //     return
    // } else {
    //     openModal()
    // }
    if(event.target.closest('.products-item') ) {
        openModal()
        createModal
    }
})


refs.closeBtn.addEventListener('click', closeModal)