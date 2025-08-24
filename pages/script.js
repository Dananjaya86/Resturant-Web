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


document.addEventListener("DOMContentLoaded", function() {
  const feedbackForm = document.getElementById("feedbackForm");
  const feedbackList = document.getElementById("feedbackList");

  feedbackForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name1").value.trim();
    const email = document.getElementById("email").value.trim();
    const comment = document.getElementById("comment").value.trim();

  

    
    const card = document.createElement("div");
    card.className = "feedback-card";

      const strong = document.createElement("strong");
    strong.textContent = "Name:- "+name;

    const p = document.createElement("p");
    p.textContent = "Comment:- "+comment;

    card.appendChild(strong);
    card.appendChild(p);
      
       

    feedbackList.appendChild(card);

    
    while (feedbackList.children.length > 6) {
      feedbackList.removeChild(feedbackList.firstChild);
    }

    showPopup("✅ Thank you for your feedback!");
    feedbackForm.reset();
  });

  window.showPopup = function(message) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popupMessage");
    popupMessage.textContent = message;
    popup.style.display = "flex";

    setTimeout(() => { popup.style.display = "none"; }, 2000);
  };

  window.closePopup = function() {
    document.getElementById("popup").style.display = "none";
  };
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
