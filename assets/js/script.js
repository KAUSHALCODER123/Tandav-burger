
'use strict';

const Beverage = [
  { Item: "Black Tea", Price: "₹25" },
  { Item: "Special Masala Tea", Price: "₹35" },
  { Item: "Adrak Chai", Price: "₹30" },
  { Item: "Green Tea Lemon Honey", Price: "₹40" },
  { Item: "Green Tea Tulsi Ginger Lemon", Price: "₹40" },
  { Item: "Lemon Mint Tea", Price: "₹35" },
  { Item: "Cold Coffee Classic", Price: "₹120" },
  { Item: "Vanilla Milkshake", Price: "₹130" },
  { Item: "Strawberry Milkshake", Price: "₹130" },
  { Item: "Chocolate Milkshake", Price: "₹130" },
  { Item: "Mango Milkshake", Price: "₹120" },
  { Item: "Oreo Milkshake", Price: "₹120" }
];

     const Burger=[
        {
          Item:"Aloo Tikki Burger",
          price:"90"
        },{
          Item:"Veg Crispy Burger",
          price:"100"
        },{
          Item:"Veg Hara Bhara Kabab Burger",
          price:"111"
        },{
          Item:"Spicy Schezwan Burger",
          price:"119"
        },{
          Item:"Bahubali Burger",
          price:"119"
        },{
          Item:"Lebanese Falafel Patty",
          price:"151"
        },{
          Item:"Tandav Special Burger",
          price:"151"
        },{
          Item:"Veg. Momos Burger",
          price:"202"
        },{
          Item:"Corn Cheese Burger",
          price:"202"
        },{
          Item:"Classic Cheese Burger",
          price:"102"
        },{
          Item:"Mexican Burger",
          price:"76"
        },{
          Item:"Tandoori Burger",
          price:"85"
        },{
          Item:"Firangi Burger",
          price:"59"
        },{
          Item:"Onion Peri Peri Fries",
          price:"117"
        },{
          Item:"Mayo Fries",
          price:"100"
        },{
          Item:"Mexican Spicy Fries",
          price:"100"
        },{
          Item:"Masala Fries",
          price:"100"
        },{
          Item:"Peri Peri Fries",
          price:"100"
        },{
          Item:"Salted Fries",
          price:"70"
        },{
          Item:"Cheesy Loaded Fries",
          price:"168"
        },{
          Item:"Chocolate Fries",
          price:"210"
        },{
          Item:"Tandoori Fries",
          price:"117"
        },{
          Item:"Mayo Fries",
          price:"100"
        },{
          Item:"Mexican Spicy Fries",
          price:"100"
        },{
          Item:"Masala Fries",
          price:"100"
        },{
          Item:"Peri Peri Fries",
          price:"100"
        },{
          Item:"Salted Fries",
          price:"70"
        },{
          Item:"Cheesy Loaded Fries",
          price:"168"
        },{
          Item:"Chocolate Fries",
          price:"210"
        },{
          Item:"Tandoori Fries",
          price:"117"
        },{
          Item:"Mayo Fries",
          price:"100"
        },{
          Item:"Mexican Spicy Fries",
          price:"100"
        },{
          Item:"Masala Fries",
          price:"100"
        },{
          Item:"Peri Peri Fries",
          price:"100"
        },
  
  
  {Item: "Chicken Burger", price: "Rs. 82"},
  {Item: "Chicken Crispy Burger", price: "Rs. 105"},
  {Item: "Chicken Spicy Burger", price: "Rs. 107"},
  {Item: "Chicken Tandoori Burger", price: "Rs. 103"},
  {Item: "Chicken Mexican Sp. Burger", price: "Rs. 102"}
]

   
const Pasta = [
  { Item: "Masala Cheese Maggi", price: "Rs. 109" },
  { Item: "Veggie Cheese", price: "Rs. 112" },
  { Item: "Spicy Red Sauce Pasta", price: "Rs. 168" },
  { Item: "White Sauce Pasta", price: "Rs. 203" },
  { Item: "Black Olive Mushroom Pasta", price: "Rs. 202" },
  { Item: "Onion Jalapeno Pasta", price: "Rs. 205" },
  { Item: "Chicken White Sauce Pasta", price: "Rs. 202" },
  { Item: "Chicken Red Sauce Pasta", price: "Rs. 205" },
  { Item: "Mixed Chicken Pasta", price: "Rs. 253" }
]

  
const Momos = [
  { Item: "Corn Cheese Momos", price: "₹134" },
  { Item: "Paneer Momos", price: "₹151" },
  { Item: "Peri Peri Momos", price: "₹151" },
  { Item: "Cheese Momos", price: "₹168" },
  { Item: "Chicken Momos", price: "₹134" },
  { Item: "Chicken Peri Peri Momos", price: "₹134" },
  { Item: "Chicken Cheese Momos", price: "₹168" },
  { Item: "Chicken Cheese Loaded Momos", price: "₹168" },
  { Item: "Chicken Tandoori Momos", price: "₹202" }
];


const snacks = [
  { Item: "Crispy Veggie Bites (10 pcs)", price: "₹151" },
  { Item: "Chilli Garlic Potato Shots (10 pcs)", price: "₹151" },
  { Item: "Veggie Nuggets (10 pcs)", price: "₹151" },
  { Item: "Potato Cheese Shots (10 pcs)", price: "₹202" },
  { Item: "Chicken Nuggets (10 pcs)", price: "₹168" },
  { Item: "Chicken Wings (4 pcs)", price: "₹168" },
  { Item: "Chicken Strips (4 pcs)", price: "₹202" },
  { Item: "Chicken Popcorn (10 pcs)", price: "₹219" },
  { Item: "Chicken Tandoori (3 pcs)", price: "₹219" },
  { Item: "Chicken Drum Strips (2 pcs)", price: "₹253" },
  { Item: "Veg Masala Wrap", price: "₹68" },
  { Item: "Veg Cheese Wrap", price: "₹85" },
  { Item: "Paneer Tikka Wrap", price: "₹102" },
  { Item: "Mayo Paneer Wrap", price: "₹119" },
  { Item: "Chicken Masala Wrap", price: "Rs. 119" },
  { Item: "Chicken Mayo Wrap", price: "Rs. 136" },
  { Item: "Chicken Mexican Wrap", price: "Rs. 153" },
  { Item: "Veg Cheese Pizza Wrap", price: "Rs. 170" }
];


     

        const select = document.querySelector(".food-menu-list"); // Use the correct selector

        function updateValue() {
          const selectBox = document.getElementById("mySelect");
          const selectedValue = selectBox.value;
          const a = parseInt(selectedValue, 10);
        
          const displayMenu = (menuItems) => {
            const menuHTML = menuItems.map((item) => `
              <div class="food-menu-card">
                <div class="card-banner">
                  <img src="./assets/images/hero-banner.png" width="300" height="300" loading="lazy" alt="Fried Chicken Unlimited" class="w-100">
                  <a href="https://wa.me/7506091750/?text=hi">
                    <button class="btn food-menu-btn">Order Now</button>
                  </a>
                </div>
                <div class="wrapper">
                  <p class="category">Chicken</p>
                  <div class="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
                <h3 class="h3 card-title">${item.Item}</h3>
                <div class="price-wrapper">
                  <p class="price-text">Price:</p>
                  <data class="price">${item.price}</data>
                </div>
              </div>
            `).join("");
        
            select.innerHTML = menuHTML;
          };
        
          if (a === 1) {
            const burgerMenuItems = Burger; // Assuming Burger is an array of menu items
            displayMenu(burgerMenuItems);
          } else if (a === 2) {
            const otherBurgerMenuItems = Pasta; // Replace with actual data
            displayMenu(otherBurgerMenuItems);
          } else if (a === 3) {
            const beverageMenuItems = Beverage; // Replace with actual data
            displayMenu(beverageMenuItems);
          }
          else if (a === 4) {
            const beverageMenuItems = Momos; // Replace with actual data
            displayMenu(beverageMenuItems);
          }
          else if (a === 5) {
            const beverageMenuItems = snacks; // Replace with actual data
            displayMenu(beverageMenuItems);
          }
        }
        
        // Set up the event listener once
        window.addEventListener("DOMContentLoaded", updateValue);
        


const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}



/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}



/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});


const slider = document.querySelector('.food-menu-list');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

