
function createMenuSection(id,text){
    const menuList = document.createElement('menu-section');
    menuList.setAttribute('id',id);
    const h3 = document.createElement('h3');
    h3.innerHTML = text;
    menuList.appendChild(h3);
    return menuList;
}

function newMenuItem(name, price, description){
    const item = document.createElement('div');
    item.setAttribute('id','menuItem')
    const nameEl = document.createElement('h5');
    nameEl.innerText = name;
    const priceEl = document.createElement('h6');
    priceEl.innerText = price;
    const descriptionEl = document.createElement('p');
    descriptionEl.innerText = description;

    item.appendChild(nameEl);
    item.appendChild(priceEl);
    item.appendChild(descriptionEl);

    return item;
}

function createMenu(){

    const startersAr = [
        newMenuItem('Garlic Bread','£3.95','Sourdough crystal baguette with garlic butter'),
        newMenuItem('Garlic Bread with Cheese','£4.95','Sourdough crystal baguette with garlic butter topped with mozarella'),
        newMenuItem('Bread and Dips','£3','A selection of bread and dips'),
    ]
    const mainsAr = [
        newMenuItem('Steak and Ale Pie','£7.05','pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing'),
        newMenuItem('Gammon, Egg and Chips','£10.40','pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing'),
        newMenuItem('Fish and Chips','£9.55','pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing'),
        newMenuItem('Lasagne','£8.95','pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing'),
        newMenuItem('Hunters Chicken','£12.95','pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing'),
    ]
    const dessertsAr = [
        newMenuItem('Apple Pie','£5.95','pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing'),
        newMenuItem('Eton Mess','£4.55','pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing'),
        newMenuItem('Brownie and Ice Cream','£4','pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing'),
        newMenuItem('3 Scoops of Ice Cream','£3','pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing'),
    ]
    const drinksAr = [
        newMenuItem('Beer','£3',''),
        newMenuItem('Beer','£3',''),
        newMenuItem('Beer','£3',''),
        newMenuItem('Beer','£3',''),
        newMenuItem('Beer','£3',''),
    ]



    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('class','menu-container');

    const startersEl = createMenuSection('starters','Starters')
    startersAr.forEach(newMenuItem => {
        startersEl.appendChild(newMenuItem);
    });
    const mainsEl = createMenuSection('mains','Mains')
    mainsAr.forEach(newMenuItem => {
        mainsEl.appendChild(newMenuItem);
    });
    const dessertsEl = createMenuSection('desserts','Desserts')
    dessertsAr.forEach(newMenuItem => {
        dessertsEl.appendChild(newMenuItem);
    });
    const drinksEl = createMenuSection('drinks','Drinks')
    drinksAr.forEach(newMenuItem =>{
        drinksEl.appendChild(newMenuItem);
    });

    menuContainer.appendChild(startersEl);
    menuContainer.appendChild(mainsEl);
    menuContainer.appendChild(dessertsEl);
    menuContainer.appendChild(drinksEl);

    return menuContainer;
}

function loadMenu(){
    const content = document.getElementById("contentContainer");
    content.innerHTML = '';
    const renderMenu = createMenu();
    content.appendChild(renderMenu);
}

export default loadMenu