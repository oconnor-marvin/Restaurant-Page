function createHeader(id, text,imgSrc,imgAlt){
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const h1 = document.createElement('h1');
    h1.innerHTML = text
    const img = document.createElement('img')
    img.setAttribute('src', imgSrc)
    img.setAttribute('alt', imgAlt)
    header.appendChild(img)
    header.appendChild(h1)
    return header;
}

function createButton(id,text){
    const btn = document.createElement('button');
    btn.setAttribute('id',id);
    btn.setAttribute('class','btn-tab')
    btn.innerHTML = text;
    return btn;
}

function createNav(id){
    const navi = document.createElement('nav');
    navi.setAttribute('id',id);

    const aboutBtn = createButton('about','About')
    const menuBtn = createButton('menu','Menu')
    const contactBtn = createButton('contact','Contact')

    navi.appendChild(aboutBtn);
    navi.appendChild(menuBtn);
    navi.appendChild(contactBtn);

    return navi;
}

function createContentContainer(id){
    const contentContainer = document.createElement('contentContainer');
    contentContainer.setAttribute('id','contentContainer');

    return contentContainer;
}

function createMainContainer(id){
    const mainContainer = document.createElement('mainContainer');
    mainContainer.setAttribute('id','mainContainer');

    const navbar = createNav('navbar')
    const newContent = createContentContainer('contentContainer')

    mainContainer.appendChild(navbar);
    mainContainer.appendChild(newContent);

    return mainContainer;
}

function createFooter(id){
    const footer = document.createElement('footer')
    footer.setAttribute('id',id)
    footer.innerHTML = `<a href="https://freebiesupply.com/logos/obriens-irish-pub-logo-2/">Logo from freebiesupply</a><a href="#">Designed by Jacob Marvin</a>`

    return footer;
}

function pageLoad(){

    const content = document.getElementById('content');

    const header = createHeader('header',"O'Brien's Irish Pub",'/src/img/logo.png',"O'Brien's Pub Logo of the name with an Irish harp");
    content.appendChild(header);

    const main = createMainContainer('main');
    content.appendChild(main);

    const footer = createFooter('footer')
    content.appendChild(footer);
}

export default pageLoad