
//

const createRestaurantHomePage = () =>{
    const content = document.querySelector(".content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('.content');
        
    // create a header for the home page
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to our restaurant";
    pageContent.appendChild(headline)
  

    //create the image for the home page of the site
    const image = document.createElement('img');
    image.src = "../images/foody.png";
    image.height = "300";
    pageContent.appendChild(image);


    //create sentence for the home page of the site
    const phrase = document.createElement("p");
    phrase.textContent = "Here at wonder foods, you can get premium fresh seafood at your schedule";
    pageContent.appendChild(phrase);


    //this single line allows everything else to be shown.
    content.appendChild(pageContent) 
}

export default createRestaurantHomePage

