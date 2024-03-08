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
      card.classList.add('card');
  

      const name = document.createElement('h3');
      name.textContent = business.name;
      card.appendChild(name);
      const logo = document.createElement('img');
      logo.setAttribute('src', `images/directory/${business.icon}`);
      logo.setAttribute('alt', business.name)
      card.appendChild(logo);
  

      const owner = document.createElement('p');
      owner.textContent = 'Owner: ' + business.owner;
      card.appendChild(owner);
  
      const founded = document.createElement('p');
      founded.textContent = 'Founded: ' + business.founded;
      card.appendChild(founded);
  
      const address = document.createElement('p');
      address.textContent = 'Address: ' + business.address;
      card.appendChild(address);
  
      const telephone = document.createElement('p');
      telephone.textContent = 'Telephone: ' + business.telephone;
      card.appendChild(telephone);
  
      const membership = document.createElement('p');
      membership.textContent = 'Membership: ' + business.membership;
      card.appendChild(membership);
  
      const link = document.createElement('a');
      link.href = business.url;
      link.textContent = 'Visit Website';
      card.appendChild(link);
  
      container.appendChild(card);
    });
  }
  
  getMembers(membersURL); // Replace 'members.json' with the path to your JSON file
  