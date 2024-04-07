const baseUrl = "https://ernesto-quispe.github.io/wdd230/project/data/pricing.json";
//const baseUrl = "./data/pricing.json";
const verhiclesGrid = document.querySelector(".verhicles-grid");
const dataTable = document.querySelector(".dataTable");
dataTable.innerHTML = ""
verhiclesGrid.innerHTML = ""
async function getRentals(baseUrl) {
    const response = await fetch(baseUrl);
    const data = await response.json();
    createRentalCards(data);
    createTable(data);
  }


function createRentalCards(data) {
    data.rentalPricing.forEach((rental) => {
      let card = document.createElement("article");
      card.classList.add("vehicle");


  
      let img = document.createElement("img");
      img.src = `images/rentals/${rental.type}/${rental.image}`;
      card.appendChild(img);
        
      let title = document.createElement("h3");
      title.textContent = rental.rentalModel;
      card.appendChild(title);

      let overlay = document.createElement("div");
      overlay.classList.add('overlay')
      let text = document.createElement("div");
      text.classList.add('text')

      let maxPersons = document.createElement("p");
      maxPersons.textContent = `Max Persons: ${rental.maxPersons}`;
      text.appendChild(maxPersons);

  
      let pricingDiv = document.createElement("div");
      pricingDiv.classList.add("pricing");
      ["reservation", "walkIn"].forEach((type) => {
        let typeDiv = document.createElement("div");
        typeDiv.classList.add(type);
        let halfDay = document.createElement("p");
        if (type == "reservation"){
        halfDay.textContent = `Reservation price from: $${rental.pricing[type].halfDay}`;
        }
        else if (type == "walkIn"){
          halfDay.textContent = `Walk-In price from: $${rental.pricing[type].halfDay}`;

        }
        typeDiv.appendChild(halfDay);
        pricingDiv.appendChild(typeDiv);
      });
      text.appendChild(pricingDiv);
  overlay.appendChild(text);
  card.appendChild(overlay);

  verhiclesGrid.appendChild(card);
    });
  }




  function createTable(data) {
    // Create the table element
    var table = document.createElement('table');
  
    // Create the table header
    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    ['Rental Model', 'Max Persons', 'Reservation Half Day', 'Reservation Full Day', 'Walk-In Half Day', 'Walk-In Full Day'].forEach(function(header) {
      var th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
  
    // Create the table body
    var tbody = document.createElement('tbody');
    data.rentalPricing.forEach(function(item) {
      var row = document.createElement('tr');
      [item.rentalModel, item.maxPersons, item.pricing.reservation.halfDay, item.pricing.reservation.fullDay, item.pricing.walkIn.halfDay, item.pricing.walkIn.fullDay].forEach(function(cellData) {
        var td = document.createElement('td');
        td.textContent = cellData;
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
  
    // Append the table to the body (or any other container)
    dataTable.appendChild(table);
  }

  getRentals(baseUrl);




  
