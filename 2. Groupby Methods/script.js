document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

AOS.init();

document.getElementById("search").addEventListener("input", function () {
  let filter = this.value.toLowerCase();
  let sections = document.querySelectorAll("section");
  sections.forEach(function (section) {
    let title = section.querySelector("h2").textContent.toLowerCase();
    if (title.includes(filter)) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
});

function copyToClipboard(button) {
  const preElement = button.nextElementSibling;
  const codeText = preElement.innerText;

  navigator.clipboard
    .writeText(codeText)
    .then(() => {
      button.innerText = "Copied!";
      setTimeout(() => {
        button.innerText = "Copy";
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}
