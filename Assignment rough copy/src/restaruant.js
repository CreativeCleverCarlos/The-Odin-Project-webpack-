
//resturant.js

const createRestaurantHomePage = () =>{
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    //create and append image element
    const image = document.createElement('img');
    image.src = "/images/250.jpg" ;
    image.height= '300';
    pageContent.appendChild(image);

    //create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = "welcome to our restarurant!";
    pageContent.appendChild(headline);

    //Create and append copy element
    const copy = document.createElement('p');
    copy.textContent = 'We serve the best food in town. come and eat it!'
    pageCOntent.appendCHild(copy)
    content.appendCHild(pageContent);
}

export default createRestaurantHomePage;