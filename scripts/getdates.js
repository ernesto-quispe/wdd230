const lastmod = document.querySelector("#lastmod");
const copywriteyear = document.querySelector("#copywriteyear");
const d = new Date();
const year = d.getFullYear();

copywriteyear.innerHTML = `${year} `;
lastmod.textContent = `Last Modification: ${document.lastModified}`;