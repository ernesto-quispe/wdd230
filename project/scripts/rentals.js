const baseUrl = "https://ernesto-quispe.github.io/wdd230/project/data/pricing.json";
//const baseUrl = "./data/pricing.json";

async function getMembers(baseUrl) {
    const response = await fetch(baseUrl);
    const data = await response.json();
    createRentalCards(data);
  }


function createRentalCards(data) {
    data.rentalPricing.forEach((rental) => {
      let card = document.createElement("section");
      card.classList.add("rental-card");
  
      let title = document.createElement("h2");
      title.textContent = rental.rentalType;
      card.appendChild(title);
  
      let maxPersons = document.createElement("p");
      maxPersons.textContent = `Max Persons: ${rental.maxPersons}`;
      card.appendChild(maxPersons);
  
      let imagesDiv = document.createElement("div");
      imagesDiv.classList.add("images");
      Object.values(rental.images).forEach((image) => {
        let img = document.createElement("img");
        img.src = image;
        imagesDiv.appendChild(img);
      });
      card.appendChild(imagesDiv);
  
      let pricingDiv = document.createElement("div");
      pricingDiv.classList.add("pricing");
      ["reservation", "walkIn"].forEach((type) => {
        let typeDiv = document.createElement("div");
        typeDiv.classList.add(type);
        let halfDay = document.createElement("p");
        halfDay.textContent = `Half Day: $${rental.pricing[type].halfDay}`;
        typeDiv.appendChild(halfDay);
        let fullDay = document.createElement("p");
        fullDay.textContent = `Full Day: $${rental.pricing[type].fullDay}`;
        typeDiv.appendChild(fullDay);
        pricingDiv.appendChild(typeDiv);
      });
      card.appendChild(pricingDiv);
  
      document.body.appendChild(card);
    });
  }



  getMembers(membersURL);
