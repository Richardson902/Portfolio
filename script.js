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

//OLD CODE -- could be refactored to be A LOT cleaner lol

//java icon
const javaIcon = document.getElementById("java-icon");
const javaIconSrc = javaIcon.src;

javaIcon.addEventListener("mouseover", function () {
  this.src = "media/javacolor.png";
});

javaIcon.addEventListener("mouseout", function () {
  this.src = javaIconSrc;
});

//react icon
const reactIcon = document.getElementById("react-icon");
const reactIconSrc = reactIcon.src;

reactIcon.addEventListener("mouseover", function () {
  this.src = "media/react-color.png";
});

reactIcon.addEventListener("mouseout", function () {
  this.src = reactIconSrc;
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

//spring icon
const springIcon = document.getElementById("spring-icon");
const springIconSrc = springIcon.src;

springIcon.addEventListener("mouseover", function () {
  this.src = "media/spring-color.png";
});

springIcon.addEventListener("mouseout", function () {
  this.src = springIconSrc;
});

//vsc logo
const dockerIcon = document.getElementById("docker-icon");
const dockerIconSrc = dockerIcon.src;

dockerIcon.addEventListener("mouseover", function () {
  this.src = "media/docker-color.png";
});

dockerIcon.addEventListener("mouseout", function () {
  this.src = dockerIconSrc;
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
