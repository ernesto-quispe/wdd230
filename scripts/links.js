const baseURL = "https://ernesto-quispe.github.io/wdd230/";

// const linksURL = "https://yourgithubusername.github.io/wdd230/data/links.json";
const linksURL = "data/links.json";

async function getLinks(linksURL) {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.lessons[0].links);
    displayLinks(data);
  }

  getLinks(linksURL)
  
  function displayLinks(data) {
    let card = document.querySelector('#links')
    let h3 = document.createElement('h3');
    let ul = document.createElement('ul');

    data.forEach((lesson) => {
     
        lesson.forEach((link) => {

            let li = document.createElement('li');
            let a = document.createElement('a');
                    
            a.setAttribute('href', link.url);
            a.setAttribute('target', '_blank'); 
            
            li.textContent = `${link.title}`;
            // Append the section(card) with the created elements
            li.appendChild(a); //fill in the blank
    
        
            ul.appendChild(li);
          }); // end of arrow function and forEach loop

    });

      card.appendChild(ul)

  }