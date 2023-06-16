/*lente ricerca*/
document.addEventListener("DOMContentLoaded", function () {
  var searchIcon = document.getElementById("search-icon");
  var searchInput = document.getElementById("search-input");

  searchIcon.addEventListener("click", function () {
    searchInput.style.display =
      searchInput.style.display === "block" ? "none" : "block";
  });
});

/*hamburger menu*/

let item = document.querySelector(".icon-hamburger");
item.addEventListener("click", function () {
  document.body.classList.toggle("menu-open");
});

/*torna a inizio pagina*/
window.addEventListener("scroll", function () {
  var button = document.querySelector(".back-to-top");
  if (window.pageYOffset > 300) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
});

document.querySelector(".back-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
