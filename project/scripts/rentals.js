const baseUrl = "https://ernesto-quispe.github.io/wdd230/project/data/pricing.json";
//const baseUrl = "./data/pricing.json";

//const dataTable = document.querySelector(".dataTable");
//dataTable.innerHTML = ""

async function getRentals(baseUrl) {
    const response = await fetch(baseUrl);
    const data = await response.json();
    createRentalCards(data);
    //createTable(data);
    fillTable(data);
  }


function createRentalCards(data) {
  const verhiclesGrid = document.querySelector(".vehicles-grid");
verhiclesGrid.innerHTML = ""
    data.rentalPricing.forEach((rental) => {
      let card = document.createElement("article");
      card.classList.add("vehicle");


  
      let img = document.createElement("img");
      img.src = `images/rentals/${rental.type}/${rental.image}-500.webp`;
      img.setAttribute("loading","lazy");
      img.alt = rental.Model

      card.appendChild(img);
        
      let title = document.createElement("h3");
      title.textContent = rental.rentalModel;
      card.appendChild(title);

      let overlay = document.createElement("div");
      overlay.classList.add('overlay')
      let text = document.createElement("div");
      text.classList.add('text')

      let maxPersons = document.createElement("p");
      maxPersons.textContent = `Max Riders: ${rental.maxPersons}`;
      text.appendChild(maxPersons);

  
       let pricingDiv = document.createElement("div");
       pricingDiv.classList.add("pricing");
      ["reservation", "walkIn"].forEach((type) => {
      //  let typeDiv = document.createElement("div");
      //  typeDiv.classList.add(type);
        let halfDay = document.createElement("p");
        if (type == "reservation"){
        halfDay.textContent = `Reservations from: $${rental.pricing[type].halfDay}`;
        }
        else if (type == "walkIn"){
          halfDay.textContent = `Walk-Ins from: $${rental.pricing[type].halfDay}`;

        }
        // typeDiv.appendChild(halfDay);
        // pricingDiv.appendChild(typeDiv);

        pricingDiv.appendChild(halfDay);
      });
      text.appendChild(pricingDiv);
  overlay.appendChild(text);
  card.appendChild(overlay);

  verhiclesGrid.appendChild(card);
    });
  }




  // function createTable(data) {
  //   // Create the table element
  //   var table = document.createElement('table');
  
  //   // Create the table header
  //   var thead = document.createElement('thead');
  //   var headerRow = document.createElement('tr');
  //   ['Rental Model', 'Max Riders', 'Reservation Half Day', 'Reservation Full Day', 'Walk-In Half Day', 'Walk-In Full Day'].forEach(function(header) {
  //     var th = document.createElement('th');
  //     th.textContent = header;
  //     headerRow.appendChild(th);
  //   });
  //   thead.appendChild(headerRow);
  //   table.appendChild(thead);
  
  //   // Create the table body
  //   var tbody = document.createElement('tbody');
  //   data.rentalPricing.forEach(function(item) {
  //     var row = document.createElement('tr');
  //     [item.rentalModel, item.maxPersons, item.pricing.reservation.halfDay, item.pricing.reservation.fullDay, item.pricing.walkIn.halfDay, item.pricing.walkIn.fullDay].forEach(function(cellData) {
  //       var td = document.createElement('td');
  //       td.textContent = cellData;
  //       row.appendChild(td);
  //     });
  //     tbody.appendChild(row);
  //   });
  //   table.appendChild(tbody);
  
  //   // Append the table to the body (or any other container)
  //   dataTable.appendChild(table);
  // }


//   function createTable(data) {
//     // Create the table element
//     var table = document.createElement('table');

//     // Create the main table header
//     var thead = document.createElement('thead');
//     var mainHeaderRow = document.createElement('tr');
//     ['Rental Model', 'Max Riders', 'Reservation', 'Walk-In'].forEach(function(header) {
//       var th = document.createElement('th');
//       th.textContent = header;
//       if (header === 'Reservation' || header === 'Walk-In') {
//         th.setAttribute('colspan', '2');
//       }
//       mainHeaderRow.appendChild(th);
//     });
//     thead.appendChild(mainHeaderRow);

//     // Create the sub table header
//     var subHeaderRow = document.createElement('tr');
//     ['', '', 'Half Day', 'Full Day', 'Half Day', 'Full Day'].forEach(function(header) {
//       var th = document.createElement('th');
//       th.textContent = header;
//       subHeaderRow.appendChild(th);
//     });
//     thead.appendChild(subHeaderRow);
//     table.appendChild(thead);

//     // Create the table body
//     var tbody = document.createElement('tbody');
//     data.rentalPricing.forEach(function(item) {
//       var row = document.createElement('tr');
//       [item.rentalModel, item.maxPersons, item.pricing.reservation.halfDay, item.pricing.reservation.fullDay, item.pricing.walkIn.halfDay, item.pricing.walkIn.fullDay].forEach(function(cellData) {
//         var td = document.createElement('td');
//         td.textContent = cellData;
//         row.appendChild(td);
//       });
//       tbody.appendChild(row);
//     });
//     table.appendChild(tbody);

//     // Append the table to the body (or any other container)
//     dataTable.appendChild(table);
// }


function fillTable(data) {
  // Get the table body
  var tbody = document.querySelector('#dataTable tbody');

  // Clear the table body
  tbody.innerHTML = '';

  // Fill the table body
  data.rentalPricing.forEach(function(item) {
      var row = document.createElement('tr');
      [item.rentalModel, item.maxPersons, item.pricing.reservation.halfDay, item.pricing.reservation.fullDay, item.pricing.walkIn.halfDay, item.pricing.walkIn.fullDay].forEach(function(cellData) {
          var td = document.createElement('td');
          td.textContent = cellData;
          row.appendChild(td);
      });
      tbody.appendChild(row);
  });
}

  getRentals(baseUrl);




  
