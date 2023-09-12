const btn = document.getElementById("btn");
const booklist = document.getElementById("booklist");

btn.addEventListener("click", () => {
  // fetching the details from api
  fetch("https://api.jsonbin.io/v3/b/65008e45d972192679c26113")
    .then((response) => response.json())
    .then((data) => {
      // initializing the html container
      booklist.innerHTML = "";

      // interating through the array and printing each record
      data.record.forEach((book) => {
        booklist.innerHTML += `
            <div class="book">
            <p>Author: ${book.author}</p>    
            <p>Name: ${book.name}</p>
            <p>Year: ${book.year}</p>
        </div>
            `;
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
