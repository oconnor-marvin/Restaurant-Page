
function createAbout(){
const about = document.createElement('div');
about.setAttribute('class','text-container-about')

const title = document.createElement('h2');
title.innerHTML = "About";
about.appendChild(title);

const para = document.createElement('p');
para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae natus, omnis molestias dolores blanditiis dolore sequi voluptatum optio aut, odit deleniti iure facilis cupiditate enim ex. Ducimus eveniet totam repellendus est minus nisi sed rem aut! Ad aperiam libero, sunt sint sed vero ea quidem obcaecati labore facere est dolor assumenda eum doloribus necessitatibus dicta quam officia alias cumque dolorum. A obcaecati aliquam distinctio doloribus consequuntur quo reprehenderit accusantium iure alias facilis optio provident, blanditiis magni voluptas ratione id exercitationem. Dolorem laborum maxime iure aliquam a ut? Aliquid sit a libero officiis corrupti vitae dolores doloribus fugit deleniti assumenda optio repellendus atque corporis accusantium sed doloremque voluptatibus ut, porro eius praesentium nemo. Repellendus perferendis, esse quia labore dicta amet aliquam nulla quos libero porro vel reiciendis cupiditate debitis officiis perspiciatis in fugiat numquam commodi cumque itaque repellat aliquid possimus maiores. Aspernatur cupiditate autem quasi reprehenderit illum quam obcaecati asperiores ad adipisci nostrum nesciunt incidunt beatae cumque, error delectus est accusantium libero repudiandae explicabo in consequatur dolorum quos sed quidem. Dolorum dignissimos aspernatur quisquam quod nihil, repellendus eius tempora perspiciatis laboriosam voluptatibus animi ab iste similique exercitationem illum ex doloremque recusandae eligendi sit. Ut, cum maiores minus modi, quam consectetur expedita sed incidunt labore natus dolorum."
about.appendChild(para);

return about;
}

function loadAbout(){
    const content = document.getElementById('contentContainer');
    content.innerHTML = '';
    const aboutContent = createAbout();
    content.appendChild(aboutContent);
}


export default loadAbout;




