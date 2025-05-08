const smoothieBowls = [
    {
      name: "Tropical Sunrise",
      desc: "Mango, pineapple, banana, coconut flakes, and chia seeds.",
      price: "Rs.350",
      image: "_Banana Oatmeal with Honey and Walnuts_ A Warm, Nutritious Start 🍌🍯_.jpeg"
    },
    {
      name: "Berry Dream",
      desc: "Strawberries, blueberries, banana, almond butter, granola.",
      price: "Rs.400",
      image: "Berry Bliss Smoothie Bowl.jpeg"
    },
    {
      name: "Green Goddess",
      desc: "Spinach, avocado, green apple, kiwi, pumpkin seeds.",
      price: "Rs.420",
      image: "Tropical Green Smoothie Bowl.jpeg"
    },
    {
      name: "Choco Monkey",
      desc: "Banana, cacao, peanut butter, dark chocolate chips.",
      price: "Rs.350",
      image: "Chocolate Dream Smoothie Bowl (2).jpeg"
      
    },
  ];
  
  const menu = document.getElementById("menu");
  
  if (menu) {
    smoothieBowls.forEach(bowl => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${bowl.image}" alt="${bowl.name}">
        <div class="card-content">
          <h3>${bowl.name}</h3>
          <p>${bowl.desc}</p>
          <p class="price">${bowl.price}</p>
          <button class="order-btn" onclick="addToCart('${bowl.name}', '${bowl.price}')">Order Now</button>
        </div>
      `;
      menu.appendChild(card);
    });
  }
  
  function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html";
  }
  function addToCart(name) {
    const bowl = smoothieBowls.find(item => item.name === name);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(bowl);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html"; // Redirect to cart
  }
  const images = document.querySelectorAll(".card img");

images.forEach(img => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.05)";
  });

  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    alert("You pressed Enter!");
  }
});

const firstCard = document.querySelector('.card');  

firstCard.classList.add('highlight');  

const cardContainer = document.getElementById("menu");
const firstCardTitle = cardContainer.firstElementChild.querySelector("h3").textContent;
console.log("First smoothie bowl is:", firstCardTitle); 


const addNoteBtn = document.createElement("button");
addNoteBtn.textContent = "Click to Add Note";
addNoteBtn.className = "note-btn"; 
document.body.appendChild(addNoteBtn); 

addNoteBtn.addEventListener("click", () => {
  const note = document.createElement("p");
  note.textContent = "✨ A new note was added dynamically!";
  note.className = "dynamic-note";
  document.body.appendChild(note);
});



