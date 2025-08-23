let index = 0;
  const slides = document.querySelectorAll(".carousel img");
  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);

  let catIndex = 0;
const catsPerPage = 5;

function changeCategory(step) {
  const container = document.getElementById("categories");
  const items = container.querySelectorAll("img");
  const total = items.length;

  catIndex += step;
  if (catIndex < 0) catIndex = 0;
  if (catIndex > total - catsPerPage) catIndex = total - catsPerPage;

  const offset = -(catIndex * (items[0].offsetWidth + 15)); 
  container.style.transform = `translateX(${offset}px)`;
}


  function showSubcategory(cat) {
    document.querySelectorAll('.subcategories').forEach(el => el.style.display='none');
    document.getElementById(cat).style.display = 'grid';
    document.getElementById('itemDetails').style.display='none';
  }


function showItem(name, price) {
  document.getElementById("modalItemName").innerText = name;
  document.getElementById("modalItemPrice").innerText = "Price: Rs. " + price;
  document.getElementById("portionCount").value = 1;
  document.getElementById("itemModal").style.display = "flex";
}

function confirmOrder(type) {
  const item = document.getElementById("modalItemName").innerText;
  const portions = document.getElementById("portionCount").value;
  const msg = `${item} (x${portions}) added for ${type}`;
  document.getElementById("confirmationMsg").innerText = "✅ " + msg;


  setTimeout(() => {
    closeModal();
    document.getElementById("confirmationMsg").innerText = "";
  }, 8000);
}


function closeModal() {
  document.getElementById("itemModal").style.display = "none";
}


window.onclick = function(e) {
  const modal = document.getElementById("itemModal");
  if (e.target === modal) {
    closeModal();
  }
}

const feedbackContainer = document.getElementById("feedbackList"); 
  document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;

  const card = document.createElement("div");
  card.className = "feedback-card";
  card.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;

  feedbackContainer.appendChild(card);

  
  while (feedbackContainer.children.length > 5) {
    feedbackContainer.removeChild(feedbackContainer.firstChild);
  }

  this.reset();
});

const sections = document.querySelectorAll("section, .carousel");


window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 100; 
    const secHeight = sec.clientHeight;
    if (scrollY >= secTop && scrollY < secTop + secHeight) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuToggle.classList.toggle("active"); 
});


document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("show"));
  menuToggle.classList.remove("active"); 
});


window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});



function openModal(title) {
  document.getElementById("popupTitle").innerText = title;
  document.getElementById("bookingPopup").style.display = "flex";

  
  let today = new Date();
  today.setDate(today.getDate() + 2);
  let minDate = today.toISOString().split("T")[0];
  document.getElementById("date").setAttribute("min", minDate);
}

function closePopup() {
  document.getElementById("bookingPopup").style.display = "none";
}

function confirmBooking() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let date = document.getElementById("date").value;

  
  if (name === "") {
    alert("⚠️ Please enter your name.");
    return;
  }

 
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("⚠️ Please enter a valid email address.");
    return;
  }

  
  if (date === "") {
    alert("⚠️ Please select a booking date.");
    return;
  }
 let today = new Date();
  today.setDate(today.getDate() + 2); 
  let minDate = today.toISOString().split("T")[0];
  if (date < minDate) {
    alert("⚠️ You can only select future dates (not today or past).", "error");
    return;
  }

  
  alert("🎉 Booking confirmed!");

  document.getElementById("bookingForm").reset();

  closePopup();
}


window.onclick = function(event) {
  let popup = document.getElementById("bookingPopup");
  if (event.target === popup) {
    closePopup();
  }
}
