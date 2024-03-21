//const membersURL = "https://ernesto-quispe.github.io/wdd230/chamber/data/members.json";

const membersURL = "./data/members.json";

async function getMembers(membersURL) {
  const response = await fetch(membersURL);
  const data = await response.json();
  displayMembers(data);
}

function displayMembers(data) {
  console.log(data);
  const container = document.querySelector(".businesses");
  container.innerHTML = ""; // Clear existing content

  // Filter the members array
  const filteredMembers = data.members.filter(
    (business) =>
      business.membership === "Silver" || business.membership === "Gold"
  );

  // Shuffle the array and get the first 3 members
  const randomizedMembers = filteredMembers
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  randomizedMembers.forEach((business) => {
    if (business.membership === "Silver" || business.membership === "Gold") {
      const card = document.createElement("section");
      card.classList.add("business-card");
      card.classList.add(business.membership);

      const link = document.createElement("a");
      link.href = business.url;
      link.setAttribute("target", "_blank");
      //link.classList.add("member-card-link");
      card.appendChild(link);
      const logo = document.createElement("img");
      logo.setAttribute("src", `images/directory/${business.image}`);
      logo.setAttribute("alt", business.name);
      logo.setAttribute("loading", "lazy");
      link.appendChild(logo);
      card.appendChild(link);
      const name = document.createElement("h3");
      name.textContent = business.name;
      card.appendChild(name);
      const description = document.createElement("p");
      description.textContent = business.description;
      card.appendChild(description);

      container.appendChild(card);
    }
  });
}

getMembers(membersURL);
