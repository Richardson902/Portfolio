window.onload = function () {
  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });

  // Close mobile menu when clicking on a menu item
  const mobile_menu_items = document.querySelectorAll(".mobile-nav a");
  mobile_menu_items.forEach(function (item) {
    item.addEventListener("click", function () {
      mobile_menu.classList.remove("is-active");
      menu_btn.classList.remove("is-active");
    });
  });
};

//Animated project card
let originalColors = {
  backgroundColor: "#1c4551",
  borderColor: "#0a192f",
  textColor: "#7cc4b8",
};

let updatedColors = {
  backgroundColor: "#0a192f",
  borderColor: "#58e1c4",
  textColor: "#58e1c4",
};

function changeColors() {
  let elements = document.querySelectorAll(".bim-example");
  elements.forEach(function (element) {
    if (element.dataset.colorState === "original") {
      element.style.background = updatedColors.backgroundColor;
      element.style.border = "solid " + updatedColors.borderColor + " 1px";
      let paragraphs = element.querySelectorAll("p");
      paragraphs.forEach(function (paragraph) {
        paragraph.style.color = updatedColors.textColor;
      });
      element.dataset.colorState = "updated";
    } else {
      element.style.background = originalColors.backgroundColor;
      element.style.border = "solid " + originalColors.borderColor + " 1px";
      let paragraphs = element.querySelectorAll("p");
      paragraphs.forEach(function (paragraph) {
        paragraph.style.color = originalColors.textColor;
      });
      element.dataset.colorState = "original";
    }
  });
}

// Change colors every 0.7s
setInterval(changeColors, 700);

//change bookstore img on hover
// const bookstoreImg = document.getElementById("bookstore-img");
// const bookstoreImgSrc = bookstoreImg.src;

bookstoreImg.addEventListener("mouseover", function () {
  this.src = "media/BookstoreSite.png";
});

bookstoreImg.addEventListener("mouseout", function () {
  this.src = bookstoreImgSrc;
});

//Change education logo on hover
const nsccLogo = document.getElementById("nscc-logo");
const nsccLogoSrc = nsccLogo.src;

nsccLogo.addEventListener("mouseover", function () {
  this.src = "media/nscccolor.png";
});

nsccLogo.addEventListener("mouseout", function () {
  this.src = nsccLogoSrc;
});

//change skill icons on hover

//java icon
const javaIcon = document.getElementById("java-icon");
const javaIconSrc = javaIcon.src;

javaIcon.addEventListener("mouseover", function () {
  this.src = "media/javacolor.png";
});

javaIcon.addEventListener("mouseout", function () {
  this.src = javaIconSrc;
});

//c icon
const cIcon = document.getElementById("c-icon");
const cIconSrc = cIcon.src;

cIcon.addEventListener("mouseover", function () {
  this.src = "media/ccolor.png";
});

cIcon.addEventListener("mouseout", function () {
  this.src = cIconSrc;
});

//js icon
const jsIcon = document.getElementById("js-icon");
const jsIconSrc = jsIcon.src;

jsIcon.addEventListener("mouseover", function () {
  this.src = "media/jscolor.png";
});

jsIcon.addEventListener("mouseout", function () {
  this.src = jsIconSrc;
});

//html icon
const htmlIcon = document.getElementById("html-icon");
const htmlIconSrc = htmlIcon.src;

htmlIcon.addEventListener("mouseover", function () {
  this.src = "media/htmlcolor.png";
});

htmlIcon.addEventListener("mouseout", function () {
  this.src = htmlIconSrc;
});

//css icon
const cssIcon = document.getElementById("css-icon");
const cssIconSrc = cssIcon.src;

cssIcon.addEventListener("mouseover", function () {
  this.src = "media/css3color.png";
});

cssIcon.addEventListener("mouseout", function () {
  this.src = cssIconSrc;
});

//sql icon
const sqlIcon = document.getElementById("sql-icon");
const sqlIconSrc = sqlIcon.src;

sqlIcon.addEventListener("mouseover", function () {
  this.src = "media/sqlcolor.png";
});

sqlIcon.addEventListener("mouseout", function () {
  this.src = sqlIconSrc;
});

//git icon
const gitIcon = document.getElementById("git-icon");
const gitIconSrc = gitIcon.src;

gitIcon.addEventListener("mouseover", function () {
  this.src = "media/gitcolor.png";
});

gitIcon.addEventListener("mouseout", function () {
  this.src = gitIconSrc;
});

//gihub icon
const githubIcon = document.getElementById("github-icon");
const githubIconSrc = githubIcon.src;

githubIcon.addEventListener("mouseover", function () {
  this.src = "media/githubcolor.png";
});

githubIcon.addEventListener("mouseout", function () {
  this.src = githubIconSrc;
});

//vsc logo
const vscIcon = document.getElementById("vsc-icon");
const vscIconSrc = vscIcon.src;

vscIcon.addEventListener("mouseover", function () {
  this.src = "media/vsccolor.png";
});

vscIcon.addEventListener("mouseout", function () {
  this.src = vscIconSrc;
});

// Scroll to anchor links
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
}

// Add event listeners to navigation links excluding the resume link
document
  .querySelectorAll(".navbar a:not([href='media/Nick_Richardson_Resume.pdf'])")
  .forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default behavior
      const href = this.getAttribute("href");
      // Extract the section id from the href attribute
      const sectionId = href.startsWith("#") ? href : `#${href}`;
      scrollToSection(sectionId);
    });
  });

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
