const membersURL = "https://ernesto-quispe.github.io/wdd230/chamber/data/members.json";


//const membersURL = "./data/members.json";

async function getMembers(membersURL) {
  const response = await fetch(membersURL);
  const data = await response.json();
  displayMembers(data);
}

function displayMembers(data) {
      const container = document.querySelector('#directory-list');
      container.innerHTML = ''; // Clear existing content
      
      data.members.forEach(business => {
      const card = document.createElement('section');
      card.classList.add('member-card');
      
      
      const name = document.createElement('h3');
      name.textContent = business.name;
      name.classList.add("member-card-H3")
      card.appendChild(name);
      const logo = document.createElement('img');
      logo.setAttribute('src', `images/directory/${business.icon}`);
      logo.setAttribute('alt', business.name)
      card.appendChild(logo);
      
      const founded = document.createElement('p');
      founded.textContent = 'Founded: ' + business.founded;
      card.appendChild(founded);
      
      const address = document.createElement('p');
      address.textContent = 'Addr.: ' + business.address;
      address.title = 'Addr.: ' + business.address;
      card.appendChild(address);
      
      const telephone = document.createElement('p');
      telephone.textContent = 'Tel: ' + business.telephone;
      card.appendChild(telephone);
      
      const membership = document.createElement('p');
      membership.textContent = 'Membership: ' + business.membership;
      card.appendChild(membership);
      
      const link = document.createElement('a');
      link.href = business.url;
      link.textContent = 'Visit Website';
      link.setAttribute('target', '_blank')
      link.classList.add('member-card-link');
      card.appendChild(link);
  
      container.appendChild(card);
    });
  }
  
  getMembers(membersURL); 
  


  const gridbutton = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");
  const display = document.querySelector("#directory-list");

  
  gridbutton.addEventListener("click", () => {
    removeDark()
    display.classList.add("grid");
    display.classList.remove("list");
  });
  
  listbutton.addEventListener("click", () => {
    removeDark()
    display.classList.add("list");
    display.classList.remove("grid");
  });



function removeDark(){
      // Select all elements in the page
      const allElements = document.querySelectorAll('*');

      // Iterate over all elements and remove the 'some-class' class
      allElements.forEach(el => el.classList.remove('dark', 'dark-menu', 'dark-body','dark-link','dark-list', 'dark-list-h3' ));


      checkbox.checked = false; // Uncheck the checkbox
  slider.classList.remove('move'); // Remove the 'move' class to move the slider to the "off" position

  
}

  