/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(
  `.home__title, .popular__container, .subscribe__container, .footer__container`
);
sr.reveal(`.home__description, .footer__info`, { delay: 500 });
sr.reveal(`.home__search`, { delay: 600 });
sr.reveal(`.home__value`, { delay: 700 });
sr.reveal(`.home__images`, { delay: 800, origin: "bottom" });
sr.reveal(`.logos__img`, { interval: 100 });
sr.reveal(`.value__images, .contact__content`, { origin: "left" });
sr.reveal(`.value__content, .contact__images`, { origin: "right" });

/*=============== SEARCH BAR ===============*/
function search() {
  let filter = document.getElementById("find").value.toUpperCase();
  let item = document.querySelectorAll(".box");
  let l = document.getElementsByTagName("h3");

  for (var i = 0; i <= l.length; i++) {
    let a = item[i].getElementsByTagName("h3")[0];
    let value = a.innerHTML || a.innerText || a.textContent;

    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}

/*=============== SIDE BAR ===============*/
const openNav = () => {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("lines").style.display = "none";
};

const closeNav = () => {
  document.getElementById("sidebar").style.width = "0px";
  document.getElementById("lines").style.display = "block";
};

function fillForm() {
  document.getElementById("book").style.display = "grid";
  document.getElementById("nus").style.display = "none";
  document.getElementById("header").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementById("cross").style.display = "block";
  var h3Content = document.getElementById("title1").innerText;

  document.getElementById("property1").value = h3Content;
}

function crossButton() {
  document.getElementById("book").style.display = "none";
  document.getElementById("nus").style.display = "block";
  document.getElementById("header").style.display = "block";
  document.getElementById("footer").style.display = "block";
  document.getElementById("cross").style.display = "none";
}

function fillForm2() {
  document.getElementById("book-2").style.display = "grid";
  document.getElementById("nus").style.display = "none";
  document.getElementById("header").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementById("cross2").style.display = "block";
  var h3Content2 = document.getElementById("title2").innerText;

  document.getElementById("property2").value = h3Content2;
}


function crossButton2() {
  document.getElementById("book-2").style.display = "none";
  document.getElementById("nus").style.display = "block";
  document.getElementById("header").style.display = "block";
  document.getElementById("footer").style.display = "block";
  document.getElementById("cross2").style.display = "none";
}


// let showFunctionEnabled = true;

// document.getElementById('showButton').addEventListener('click', function() {
//   if (showFunctionEnabled) {
//       // Show the div
//       document.getElementById("book2").style.display = "grid";
//       document.getElementById("nus").style.display = "none";
//       document.getElementById("header").style.display = "none";
//       document.getElementById("footer").style.display = "none";
//       document.getElementById("cross").style.display = "block";
//       var h3Content2 = document.getElementById("title2").innerText;

//       document.getElementById("property2").value = h3Content2;
      
//   }
// });

// document.getElementById('cancelButton').addEventListener('click', function() {
//   // Disable the show function
//   showFunctionEnabled = false;
// });




function fillForm3() {
  document.getElementById("book3").style.display = "grid";
  document.getElementById("nus").style.display = "none";
  document.getElementById("header").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementById("cross3").style.display = "block";
  var h3Content3 = document.getElementById("title3").innerText;

  document.getElementById("property3").value = h3Content3;
}

function crossButton3() {
  document.getElementById("book3").style.display = "none";
  document.getElementById("nus").style.display = "block";
  document.getElementById("header").style.display = "block";
  document.getElementById("footer").style.display = "block";
  document.getElementById("cross3").style.display = "none";
}

function fillForm4() {
  document.getElementById("book4").style.display = "grid";
  document.getElementById("nus").style.display = "none";
  document.getElementById("header").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementById("cross4").style.display = "block";
  var h3Content4 = document.getElementById("title4").innerText;

  document.getElementById("property4").value = h3Content4;
}

function crossButton4() {
  document.getElementById("book4").style.display = "none";
  document.getElementById("nus").style.display = "block";
  document.getElementById("header").style.display = "block";
  document.getElementById("footer").style.display = "block";
  document.getElementById("cross4").style.display = "none";
}

function fillForm5() {
  document.getElementById("book5").style.display = "grid";
  document.getElementById("nus").style.display = "none";
  document.getElementById("header").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementById("cross5").style.display = "block";
  var h3Content5 = document.getElementById("title5").innerText;

  document.getElementById("property5").value = h3Content5;
}

function crossButton5() {
  document.getElementById("book5").style.display = "none";
  document.getElementById("nus").style.display = "block";
  document.getElementById("header").style.display = "block";
  document.getElementById("footer").style.display = "block";
  document.getElementById("cross5").style.display = "none";
}

function fillForm6() {
  document.getElementById("book6").style.display = "grid";
  document.getElementById("nus").style.display = "none";
  document.getElementById("header").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementById("cross6").style.display = "block";
  var h3Content6 = document.getElementById("title6").innerText;

  document.getElementById("property6").value = h3Content6;
}

function crossButton6() {
  document.getElementById("book6").style.display = "none";
  document.getElementById("nus").style.display = "block";
  document.getElementById("header").style.display = "block";
  document.getElementById("footer").style.display = "block";
  document.getElementById("cross6").style.display = "none";
}

function fillForm7() {
  document.getElementById("book7").style.display = "grid";
  document.getElementById("nus").style.display = "none";
  document.getElementById("header").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementById("cross7").style.display = "block";
  var h3Content7 = document.getElementById("title7").innerText;

  document.getElementById("property7").value = h3Content7;
}

function crossButton7() {
  document.getElementById("book7").style.display = "none";
  document.getElementById("nus").style.display = "block";
  document.getElementById("header").style.display = "block";
  document.getElementById("footer").style.display = "block";
  document.getElementById("cross7").style.display = "none";
}

function fillForm8() {
  document.getElementById("book8").style.display = "grid";
  document.getElementById("nus").style.display = "none";
  document.getElementById("header").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementById("cross8").style.display = "block";
  var h3Content8 = document.getElementById("title8").innerText;

  document.getElementById("property8").value = h3Content8;
}

function crossButton8() {
  document.getElementById("book8").style.display = "none";
  document.getElementById("nus").style.display = "block";
  document.getElementById("header").style.display = "block";
  document.getElementById("footer").style.display = "block";
  document.getElementById("cross8").style.display = "none";
}

function fillForm9() {
  document.getElementById("book9").style.display = "grid";
  document.getElementById("nus").style.display = "none";
  document.getElementById("header").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementById("cross9").style.display = "block";
  var h3Content9 = document.getElementById("title9").innerText;

  document.getElementById("property9").value = h3Content9;
}

function crossButton9() {
  document.getElementById("book9").style.display = "none";
  document.getElementById("nus").style.display = "block";
  document.getElementById("header").style.display = "block";
  document.getElementById("footer").style.display = "block";
  document.getElementById("cross9").style.display = "none";
}
