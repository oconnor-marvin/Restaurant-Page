function createContact(title, address, number){
    const contact = document.createElement('div');
    contact.setAttribute('class','contact-container');

    const h2 = document.createElement('h2');
    h2.innerHTML = title;
    const addressEl = document.createElement('h4');
    addressEl.innerHTML = address;
    const numberEl = document.createElement('h4');
    numberEl.innerHTML = number;

    contact.appendChild(h2);
    contact.appendChild(addressEl);
    contact.appendChild(numberEl);
    return contact;
}

function loadContact(){
    const content = document.getElementById('contentContainer');
    content.innerHTML = '';
    const contactContent = createContact("Contact","Address - 10 Limlock Street, Dublin","Phone - 01955 555609");
    content.appendChild(contactContent);
}

export default loadContact