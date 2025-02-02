const { translations } = require("../1. Compine Methods/script");

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

function updatemenu() {
  if (document.getElementById("responsive-menu").checked == true) {
    document.getElementById("menu").style.borderBottomRightRadius = "0";
    document.getElementById("menu").style.borderBottomLeftRadius = "0";
  } else {
    document.getElementById("menu").style.borderRadius = "0px";
  }
}
export function changeLanguage(lang) {
  document.getElementById("pageTitle").textContent = translations[lang].title;
  document.getElementById("pageDescription").textContent =
    translations[lang].description;
  document.getElementById("tablesTitle").textContent =
    translations[lang].tablesTitle;
  document.getElementById("tablesDescription").textContent =
    translations[lang].tablesDescription;
  document.getElementById("table1").textContent = translations[lang].table1;
  document.getElementById("table2").textContent = translations[lang].table2;
  document.getElementById("concatBtn").textContent =
    translations[lang].concatBtn;
  document.getElementById("mergeBtn").textContent = translations[lang].mergeBtn;
  document.getElementById("joinBtn").textContent = translations[lang].joinBtn;

  document.getElementById("concatTitle").textContent =
    translations[lang].concatTitle;
  document.getElementById("concatDescription").textContent =
    translations[lang].concatDescription;
  document.getElementById("mergeTitle").textContent =
    translations[lang].mergeTitle;
  document.getElementById("works_with").innerHTML =
    translations[lang].works_with;
  document.getElementById("allows_concatenation").innerHTML =
    translations[lang].allows_concatenation;
  document.getElementById("handles_duplicates").innerHTML =
    translations[lang].handles_duplicates;
  document.getElementById("explanation1").innerHTML =
    translations[lang].explanation1;
  document.getElementById("purpose_merge").innerHTML =
    translations[lang].purpose_merge;
  document.getElementById("supports_join_types").innerHTML =
    translations[lang].supports_join_types;
  document.getElementById("merges_multiple_columns").innerHTML =
    translations[lang].merges_multiple_columns;
  document.getElementById("customizable_suffixes").innerHTML =
    translations[lang].customizable_suffixes;
  document.getElementById("inner_join").innerHTML =
    translations[lang].inner_join;
  document.getElementById("left_join").innerHTML = translations[lang].left_join;
  document.getElementById("merging_example").innerHTML =
    translations[lang].merging_example;
  document.getElementById("purpose_join").innerHTML =
    translations[lang].purpose_join;
  document.getElementById("join_default_behavior").innerHTML =
    translations[lang].join_default_behavior;
  document.getElementById("join_types").innerHTML =
    translations[lang].join_types;
  document.getElementById("join_suffixes").innerHTML =
    translations[lang].join_suffixes;
  document.getElementById("join_example_1").innerHTML =
    translations[lang].join_example_1;
  document.getElementById("join_example_2").innerHTML =
    translations[lang].join_example_2;
  document.getElementById("join_example_3").innerHTML =
    translations[lang].join_example_3;
  document.getElementById("summary").innerHTML = translations[lang].summary;
  document.getElementById("summaryTitle").innerHTML =
    translations[lang].summaryTitle;
  //   document.getElementById("functionHeader").innerHTML =
  //     translations[lang].functionHeader;
  //   document.getElementById("purposeHeader").innerHTML =
  //     translations[lang].purposeHeader;
  //   document.getElementById("featuresHeader").innerHTML =
  //     translations[lang].featuresHeader;
  //   document.getElementById("limitationsHeader").innerHTML =
  //     translations[lang].limitationsHeader;
  document.getElementById("concatPurpose").innerHTML =
    translations[lang].concatPurpose;
  //   document.getElementById("concatFeatures").innerHTML =
  //     translations[lang].concatFeatures;
  document.getElementById("concatLimitations").innerHTML =
    translations[lang].concatLimitations;
  document.getElementById("mergePurpose").innerHTML =
    translations[lang].mergePurpose;
  //   document.getElementById("mergeFeatures").innerHTML =
  //     translations[lang].mergeFeatures;
  document.getElementById("mergeLimitations").innerHTML =
    translations[lang].mergeLimitations;
  //   document.getElementById("joinPurpose").innerHTML =
  //     translations[lang].joinPurpose;
  //   document.getElementById("joinFeatures").innerHTML =
  //     translations[lang].joinFeatures;
  document.getElementById("joinLimitations").innerHTML =
    translations[lang].joinLimitations;
  document.getElementById("quizTitle").innerHTML = translations[lang].quizTitle;
  document.getElementById("question1").innerHTML = translations[lang].question1;
  document.getElementById("question2").innerHTML = translations[lang].question2;
  document.getElementById("question3").innerHTML = translations[lang].question3;
  document.getElementById("question4").innerHTML = translations[lang].question4;
  document.getElementById("question5").innerHTML = translations[lang].question5;
  document.getElementById("submit").innerHTML = translations[lang].submit;
  document.getElementById("downloadPDFBtn").innerHTML =
    translations[lang].downloadPDFBtn;

  document.getElementById("toggleLanguage").textContent =
    translations[lang].languageButton;

  const featuresElements = document.getElementsByClassName("features");
  for (let i = 0; i < featuresElements.length; i++) {
    featuresElements[i].textContent = translations[lang].features;
  }

  const limitationElements =
    document.getElementsByClassName("limitationsHeader");
  for (let i = 0; i < limitationElements.length; i++) {
    limitationElements[i].textContent = translations[lang].limitationsHeader;
  }

  const copyElements = document.getElementsByClassName("copy");
  for (let i = 0; i < copyElements.length; i++) {
    copyElements[i].textContent = translations[lang].copy;
  }

  const excodeElements = document.getElementsByClassName("excode");
  for (let i = 0; i < excodeElements.length; i++) {
    excodeElements[i].textContent = translations[lang].excode;
  }

  const outputElements = document.getElementsByClassName("output");
  for (let i = 0; i < outputElements.length; i++) {
    outputElements[i].textContent = translations[lang].output;
  }

  const explanationElements = document.getElementsByClassName("explanation");
  for (let i = 0; i < explanationElements.length; i++) {
    explanationElements[i].textContent = translations[lang].explanation;
  }

  localStorage.setItem("language", lang);
  document.body.classList.toggle("rtl", lang === "ar");
}
