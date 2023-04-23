const categories = document.querySelector("#categories");
const items = categories.querySelectorAll("li.item");

// Liczba kategorii
console.log(`Liczba kategorii: ${items.length}`);

// Dla każdego elementu li.item
items.forEach((item) => {
  const heading = item.querySelector("h2"); 
  const elements = item.querySelectorAll("li"); 
  console.log(`${heading.textContent} (${elements.length})`); 
});
1