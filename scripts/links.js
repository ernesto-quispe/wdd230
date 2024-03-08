const baseURL = "https://ernesto-quispe.github.io/wdd230/";

const linksURL = "https://ernesto-quispe.github.io/wdd230/data/links.json";
//const linksURL = "data/links.json";

async function getLinks(linksURL) {
  const response = await fetch(linksURL);
  const data = await response.json();
  const lessons = data.lessons;
  displayLinks(lessons);
}

getLinks(linksURL);

function displayLinks(lessons) {
  let card = document.querySelector("#links");
  let h3 = document.createElement("h3");
  let ul = document.createElement("ul");
  h3.textContent = "Learning Activities";
  lessons.forEach((lesson) => {
    let li = document.createElement("li");
    const week = `Week ${lesson.lesson}: `;
    let weekTitle = document.createElement("h4")
    weekTitle.textContent = week
    li.appendChild(weekTitle);
    console.log(week);
    const links = lesson.links;
    console.log(links);

    links.forEach((link,index,arr) => {

      let a = document.createElement("a");
      let span = document.createElement("span");
      span.textContent = " | "
      a.textContent = link.title
      a.setAttribute("href", link.url);
      a.setAttribute("target", "_blank");
      li.appendChild(a); 
      if (index != arr.length - 1) {
        li.appendChild(span);
      }
    }); 

    ul.appendChild(li);
    card.appendChild(h3);
    card.appendChild(ul);
  });
}