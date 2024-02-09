const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
input.focus();

button.addEventListener("click", function () {
  if (input.value != "") {
    const newItem = document.createElement("li");
    const deleteButton = document.createElement("button");

    newItem.textContent = input.value;
    deleteButton.textContent = "❌";
    newItem.append(deleteButton);
    list.append(newItem);

    deleteButton.addEventListener("click", function () {
      list.removeChild(newItem);
      input.focus();
    });

    deleteButton.ariaLabel = `Close ${input.value}`;

    input.focus();
    input.value = '';
  } else {
    alert("Please write a book and chapter!!");
  }
});
