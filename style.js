


const languageDropdown = document.getElementById("language-dropdown");

languageDropdown.addEventListener("change", function () {
    const selectedLanguage = this.value;
    switch (selectedLanguage) {
        case "lo":
            // Code to set language to Location
            console.log("Language set to Location");
            break;
        case "en":
            // Code to set language to English
            console.log("Language set to English");
            break;
        case "es":
            // Code to set language to Spanish
            console.log("Language set to Spanish");
            break;
        case "fr":
            // Code to set language to French
            console.log("Language set to French");
            break;
        default:
            // Default behavior
            console.log("Default behavior");
    }
});


const searchbar = document.querySelector(".search");
document.querySelector('#search-i').onclick = () => {
    searchbar.classList.toggle('search-active');
}

document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartQuantity = document.getElementById('cart-quantity');

    let total = 0;
    let quantity = 0;

    // Add product to cart
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const product = button.parentElement;
            const productId = product.getAttribute('data-id');
            const productName = product.querySelector('h2').innerText;
            const productPrice = parseFloat(product.querySelector('p').innerText.replace('$', ''));
            const productImage = product.querySelector('img').src;

            const li = document.createElement('li');
            li.setAttribute('data-id', productId);
            li.innerHTML = `<div id="data-p">
                          <img src="${productImage}" alt="${productName}">
                          <span>${productName}</span>
                          <span>$${productPrice.toFixed(2)}</span>
                          <div class="quantity">
                              <button class="decrease" id="dot">-</button>
                              <input type="text" class="quantity-input" value="0">
                              <button class="increase" id="dot">+</button>
                          </div>
                          <button class="remove-from-cart">Remove</button>
                          </div>
                          `;
            cartItemsList.appendChild(li);

            total += productPrice;
            cartTotal.innerText = `$${total.toFixed(2)}`;

            updateCartQuantity(1);
        });
    });

    // Remove product from cart
    cartItemsList.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-from-cart')) {
            const li = event.target.parentElement;
            const productId = li.getAttribute('data-id');
            const productPrice = parseFloat(li.querySelector('span:nth-child(3)').innerText.replace('$', ''));

            total -= productPrice;
            cartTotal.innerText = `$${total.toFixed(2)}`;

            li.remove();

            updateCartQuantity(-1);
        }
    });

    // Quantity buttons
    cartItemsList.addEventListener('click', function (event) {
        if (event.target.classList.contains('decrease')) {
            const quantityInput = event.target.nextElementSibling;
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        }

        if (event.target.classList.contains('increase')) {
            const quantityInput = event.target.previousElementSibling;
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        }
    });

    function updateCartQuantity(change) {
        quantity += change;
        cartQuantity.innerText = quantity;
    }
});

const sidebar = document.querySelector(".cart");
document.querySelector('#Cart').onclick = () => {
    sidebar.classList.toggle('open-cart');
}

const closebtn = document.getElementById('close');
closebtn.addEventListener('click', () => {
    sidebar.classList.remove('open-cart');
});
$(document).ready(function () {
    $("#menu").click(function () {
        $(".link").slideToggle("slow");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const slides = slider.getElementsByClassName('slide');
    const totalSlides = slides.length;
    let currentSlideIndex = 0;
    let autoSlideInterval;

    document.getElementById('next').addEventListener('click', function () {
        showSlide(currentSlideIndex + 1);
    });

    document.getElementById('prev').addEventListener('click', function () {
        showSlide(currentSlideIndex - 1);
    });

    function showSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        slider.style.transform = `translateX(-${index * 100}%)`;
        currentSlideIndex = index;
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(function () {
            showSlide(currentSlideIndex + 1);
        }, 3000); // Change interval as needed (e.g., 3000 for 3 seconds)
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Start auto sliding on page load
    startAutoSlide();

    // Pause auto sliding on mouse hover
    slider.addEventListener('mouseover', stopAutoSlide);

    // Resume auto sliding on mouse leave
    slider.addEventListener('mouseleave', startAutoSlide);
});

var swiper = new Swiper(".cat-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        350: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1500: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1800: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});

var swiper = new Swiper(".pro-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        350: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        690: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1500: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1800: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

let loader = document.querySelector(".loading");

window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("dispper");
}

