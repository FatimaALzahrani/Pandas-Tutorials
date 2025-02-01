let wrongAnswers = [];

const explanations = {
  quiz1: "Use merge() to combine two DataFrames based on a common column.",
  quiz2: "concat() is used to concatenate DataFrames along a particular axis.",
  quiz3: "join() is used to join DataFrames based on the index.",
  quiz4: "merge() allows you to specify the type of join (inner, outer, etc.).",
  quiz5:
    "join() is used to combine DataFrames with different columns but the same index.",
};

const questions = {
  quiz1:
    "Which function would you use to combine two DataFrames based on a common column?",
  quiz2:
    "Which function is best for combining DataFrames along a particular axis, without considering index or column labels?",
  quiz3:
    "Which function is more suited for combining DataFrames based on the index?",
  quiz4:
    "Which function allows you to specify the type of join (inner, outer, etc.)?",
  quiz5:
    "Which function would you use to combine DataFrames with different columns but the same index?",
};

function checkAnswers() {
  const feedback = document.getElementById("quizFeedback");
  let correct = 0;

  // Check answers and track wrong answers
  wrongAnswers = [];

  for (let q in questions) {
    const selectedOption = document.querySelector(`input[name="${q}"]:checked`);
    const correctAnswer = {
      quiz1: "merge",
      quiz2: "concat",
      quiz3: "join",
      quiz4: "merge",
      quiz5: "join",
    }[q];

    if (selectedOption && selectedOption.value === correctAnswer) {
      correct++;
    } else {
      wrongAnswers.push({
        question: questions[q],
        wrongAnswer: selectedOption ? selectedOption.value : "None selected",
        correctAnswer: correctAnswer,
        explanation: explanations[q],
      });
    }
  }

  // Display feedback based on the score
  if (correct === 5) {
    feedback.textContent = "Excellent! You got all the answers correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `You got ${correct} out of 5 correct.`;
    feedback.style.color = "orange";
    if (wrongAnswers.length > 0) {
      document.getElementById("downloadPDFBtn").style.display = "inline";
    }
  }
}

document
  .getElementById("downloadPDFBtn")
  .addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("Quiz Results Review", 20, 20);
    doc.setTextColor(0, 0, 128);

    let yPosition = 30;

    wrongAnswers.forEach((answer, index) => {
      doc.setTextColor(0, 0, 0);
      const questionText = `Question: ${answer.question}`;
      const margin1 = 20;
      const maxWidth1 = 170;

      doc
        .splitTextToSize(questionText, maxWidth1)
        .forEach((line, lineIndex) => {
          doc.text(line, margin1, yPosition + lineIndex * 10);
        });

      yPosition +=
        (doc.splitTextToSize(questionText, maxWidth1).length + 1) * 10;

      doc.setTextColor(255, 0, 0);
      doc.text(`Wrong Answer: ${answer.wrongAnswer}`, margin1, yPosition);
      yPosition += 10;

      doc.setTextColor(0, 128, 0);
      doc.text(`Correct Answer: ${answer.correctAnswer}`, margin1, yPosition);
      yPosition += 10;

      doc.setTextColor(95, 112, 178);
      const explanationText = `Explanation: ${answer.explanation}`;
      const maxWidth = 170;

      doc
        .splitTextToSize(explanationText, maxWidth)
        .forEach((line, lineIndex) => {
          doc.text(line, margin1, yPosition + lineIndex * 10);
        });

      yPosition +=
        (doc.splitTextToSize(explanationText, maxWidth).length + 1) * 10;
    });

    doc.save("quiz_review.pdf");
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
    document.getElementById("menu").style.borderRadius = "10px";
  }
}

const translations = {
  en: {
    title: "Comparing concat(), merge(), and join() in Pandas",
    description:
      "A comprehensive guide to understanding the differences between these three essential Pandas functions with detailed examples and explanations.",
    tablesTitle: "Tables Used in the Examples",
    concatTitle: "1. The concat() Function",
    concatDescription:
      "Purpose: The concat() function is used to concatenate two or more DataFrames along a specific axis, either rows or columns...",
    mergeTitle: "2. The merge() Function",
    mergeDescription:
      "Purpose: The merge() function is used to combine two DataFrames based on a common column or index...",
    languageButton: "العربية",
    tablesDescription:
      "The following tables will be used in all examples in this guide. They contain realistic and useful data to demonstrate the differences between concat(), merge(), and join()",
    table1: "Table 1: Employees",
    table2: "Table 2: Salaries",
    features: "Key Features:",
    copy: "copy",
    excode: "Example Code:",
    concatBtn: "Learn More",
    mergeBtn: "Learn More",
    joinBtn: "Learn More",
    output: "Output: ",
    explanation: "Explanation: ",
    works_with: "Works with both DataFrames and Series.",
    allows_concatenation:
      "Allows concatenation along rows (<code>axis=0</code>) or columns (<code>axis=1</code>).",
    handles_duplicates:
      "Handles duplicate indices by default, but you can reset or ignore them using the <code>ignore_index</code> parameter.",
    explanation1:
      "<strong class='explanation'>Explanation:</strong> In this example, the <code>concat()</code> function is used to combine the two tables, <code>Employees</code> and <code>Salaries</code>. Since they have different columns, <code>NaN</code> values are inserted where data is missing. This demonstrates how concatenation works by stacking the rows of one DataFrame below the other.",

    purpose_merge:
      "<strong>Purpose:</strong> The <code>merge()</code> function is used to combine two DataFrames based on a common column or index, similar to SQL joins (e.g., inner join, outer join, left join, right join). It allows for flexible and powerful data alignment.",
    key_features: "<strong class='features'>Key Features:</strong>",
    supports_join_types:
      "Supports various join types: <code>inner</code>, <code>outer</code>, <code>left</code>, and <code>right</code>.",
    merges_multiple_columns:
      "Merges can be based on one or multiple columns or indices.",
    customizable_suffixes:
      "Customizable suffixes to handle overlapping column names.",

    inner_join:
      "In the <strong>inner join</strong>, only rows with matching <code>Employee ID</code> values in both DataFrames are included. Thus, the row for <code>Employee ID 105</code> from <code>df_salaries</code> and <code>Employee ID 104</code> from <code>df_employees</code> are excluded.",
    left_join:
      "In the <strong>left join</strong>, all rows from the left DataFrame (<code>df_employees</code>) are retained, even if there's no match in the right DataFrame (<code>df_salaries</code>). Missing values in the right DataFrame are filled with <code>NaN</code>.",
    merging_example:
      "This example illustrates how merging is used to combine datasets with related but not identical information.",

    purpose_join:
      "<strong>Purpose:</strong> The <code>join()</code> function is used to combine two DataFrames based on their indices or a specified key column. It is particularly useful for index-based merges and simplifies the process when the indices of both DataFrames are aligned or need alignment.",
    join_default_behavior:
      "Default behavior joins DataFrames on their indices.",
    join_types:
      "Supports different join types: <code>left</code>, <code>right</code>, <code>outer</code>, and <code>inner</code>.",
    join_suffixes: "Customizable suffixes for overlapping column names.",

    join_example_1:
      "The <code>join()</code> function is used here to combine the <code>df_employees</code> and <code>df_salaries</code> DataFrames using their common column <code>Employee ID</code> as the index. Both DataFrames are first set to have <code>Employee ID</code> as their index using <code>set_index()</code>.",
    join_example_2:
      "The rows from the <code>df_employees</code> DataFrame are retained, while the corresponding salary and bonus data from the <code>df_salaries</code> DataFrame is added based on matching <code>Employee ID</code>.",
    join_example_3:
      "For <code>Employee ID 104</code>, there is no corresponding entry in <code>df_salaries</code>, so the resulting columns for <code>Salary</code> and <code>Bonus</code> are <code>NaN</code> for that row.",
    summaryTitle: "Summary Comparison Between concat(), merge(), and join()",
    summary: "Summary Comparison",
    functionHeader: "Function",
    purposeHeader: "Purpose",
    featuresHeader: "Key Features",
    limitationsHeader: "Limitations",
    concatPurpose:
      "Merges DataFrames along a specified axis (horizontal or vertical)",
    concatFeatures:
      "<ul><li>Merges DataFrames along specified axes.</li><li>Can merge multiple DataFrames at once.</li></ul>",
    concatLimitations:
      "<ul><li>Requires matching data structure.</li><li>Does not support merging on columns.</li></ul>",
    mergePurpose: "Merge DataFrames based on one or more columns",
    mergeFeatures:
      "<ul><li>Supports different types of joins (inner, outer, left, right).</li><li>Allows customization of columns used for merging.</li></ul>",
    mergeLimitations:
      "<ul><li>Slower compared to concat() in some cases.</li></ul>",
    joinPurpose: "Merge DataFrames based on the index",
    joinFeatures:
      "<ul><li>Faster than merge() when merging based on index.</li><li>Supports merging the index with columns.</li></ul>",
    joinLimitations:
      "<ul><li>Primarily works on the index and may require customization for column-based merging.</li></ul>",
    me: "Created by Fatimah Alzahrani",
    quizTitle: "Test Your Knowledge",
    question1:
      "Which function would you use to combine two DataFrames based on a common column?",
    question2:
      "Which function is best for combining DataFrames along a particular axis, without considering index or column labels?",
    question3:
      "Which function is more suited for combining DataFrames based on the index?",
    question4:
      "Which function allows you to specify the type of join (inner, outer, etc.)?",
    question5:
      "Which function would you use to combine DataFrames with different columns but the same index?",
    submit: "Submit Answers",
    downloadPDFBtn: "Download PDF",
  },
  ar: {
    title: "مقارنة بين concat() و merge() و join() في Pandas",
    description:
      "دليل شامل لفهم الفروقات بين هذه الوظائف الثلاث الأساسية في Pandas مع أمثلة وشروحات تفصيلية.",
    tablesTitle: "الجداول المستخدمة في الأمثلة",
    concatTitle: "1. دالة concat()",
    concatDescription:
      "الغرض: تُستخدم دالة concat() لدمج اثنين أو أكثر من DataFrames على محور معين، سواء الصفوف أو الأعمدة...",
    mergeTitle: "2. دالة merge()",
    mergeDescription:
      "الغرض: تُستخدم دالة merge() لدمج اثنين من DataFrames بناءً على عمود أو فهرس مشترك...",
    languageButton: "English",
    tablesDescription:
      "سيتم استخدام الجداول التالية في جميع الأمثلة في هذا الدليل. وهي تحتوي على أمثلة واقعية لتوضيح الاختلافات بين concat() وmerge() وjoin().",
    table1: "الجدول الأول : الموظفين",
    table2: "الجدول الثاني : الرواتب",
    features: "المميزات الرئيسية:",
    copy: "انسخ",
    excode: "مثال على الكود",
    concatBtn: "تعلم المزيد!",
    mergeBtn: "تعلم المزيد!",
    joinBtn: "تعلم المزيد!",
    output: "المُخرج: ",
    explanation: "توضيح: ",
    works_with: "يعمل مع كل من DataFrames و Series.",
    allows_concatenation:
      "يسمح بالدمج على مستوى الصفوف (<code>axis=0</code>) أو الأعمدة (<code>axis=1</code>).",
    handles_duplicates:
      "يتعامل مع الفهارس المكررة افتراضيًا، ولكن يمكنك إعادة تعيينها أو تجاهلها باستخدام معامل <code>ignore_index</code>.",
    explanation1:
      "<strong class='explanation'>التوضيح:</strong> في هذا المثال، تُستخدم الدالة <code>concat()</code> لدمج الجدولين <code>Employees</code> و <code>Salaries</code>. نظرًا لاختلاف الأعمدة بينهما، يتم إدراج قيم <code>NaN</code> حيثما كانت البيانات مفقودة. يوضح هذا المثال كيفية عمل الدمج عن طريق تكديس صفوف DataFrame واحد أسفل الآخر.",

    purpose_merge:
      "<strong>الغرض:</strong> تُستخدم الدالة <code>merge()</code> لدمج جدولين (DataFrames) استنادًا إلى عمود مشترك أو فهرس، بطريقة مشابهة لعمليات الدمج في SQL (مثل: `inner join`، `outer join`، `left join`، و`right join`). توفر هذه الدالة أدوات مرنة وقوية لمواءمة البيانات.",
    key_features: "<strong class='features'>الميزات الرئيسية:</strong>",
    supports_join_types:
      "يدعم أنواع دمج متعددة: <code>inner</code>، <code>outer</code>، <code>left</code>، و<code>right</code>.",
    merges_multiple_columns:
      "يمكن تنفيذ الدمج استنادًا إلى عمود واحد أو عدة أعمدة أو الفهارس.",
    customizable_suffixes:
      "يسمح باستخدام لاحقات مخصصة عند وجود أسماء أعمدة متداخلة.",

    inner_join:
      "في <strong>الدمج الداخلي (inner join)</strong>، يتم تضمين الصفوف التي تحتوي على قيم متطابقة في عمود <code>Employee ID</code> في كلا الجدولين فقط. لذا، يتم استبعاد الصف <code>Employee ID 105</code> من <code>df_salaries</code> والصف <code>Employee ID 104</code> من <code>df_employees</code>.",
    left_join:
      "في <strong>الدمج الأيسر (left join)</strong>، يتم الاحتفاظ بجميع الصفوف من الجدول الأيسر (<code>df_employees</code>)، حتى لو لم يكن هناك تطابق في الجدول الأيمن (<code>df_salaries</code>). يتم ملء القيم المفقودة بـ <code>NaN</code>.",
    merging_example:
      "يوضح هذا المثال كيفية استخدام الدمج لربط مجموعات بيانات تحتوي على معلومات متشابهة ولكن ليست متطابقة.",

    purpose_join:
      "<strong>الغرض:</strong> تُستخدم الدالة <code>join()</code> لدمج جدولين (`DataFrames`) استنادًا إلى الفهارس الخاصة بهما أو استنادًا إلى عمود مفتاح محدد.",
    join_default_behavior:
      "ينفذ الدمج افتراضيًا على الفهارس الخاصة بالـ `DataFrames`.",
    join_types:
      "يدعم أنواع الدمج المختلفة: <code>left</code>، <code>right</code>، <code>outer</code>، و<code>inner</code>.",
    join_suffixes: "يسمح باستخدام لاحقات مخصصة عند تداخل أسماء الأعمدة.",

    join_example_1:
      "تُستخدم الدالة `join()` هنا لدمج الجدولين `df_employees` و `df_salaries` باستخدام العمود المشترك `Employee ID` كفهرس.",
    join_example_2:
      "يتم الاحتفاظ بجميع الصفوف من `df_employees`، بينما تُضاف بيانات الرواتب والمكافآت من `df_salaries` استنادًا إلى تطابق `Employee ID`.",
    join_example_3:
      "بالنسبة إلى `Employee ID 104`، لا يوجد إدخال مقابل في `df_salaries`، لذا تكون القيم الناتجة في أعمدة `Salary` و `Bonus` مساوية لـ `NaN`.",
    summaryTitle: "مقارنة ملخصة بين concat() و merge() و join()",
    functionHeader: "الدالة",
    purposeHeader: "الهدف",
    featuresHeader: "الميزات الرئيسية",
    limitationsHeader: "القيود",
    concatPurpose: "دمج DataFrames على محور معين (أفقي أو عمودي)",
    concatFeatures:
      "<ul><li>يدمج DataFrames على محاور محددة.</li><li>يمكن دمج عدة DataFrames دفعة واحدة.</li></ul>",
    concatLimitations:
      "<ul><li>يتطلب هيكل بيانات متطابق.</li><li>لا يدعم الدمج على الأعمدة.</li></ul>",
    mergePurpose: "دمج DataFrames بناءً على عمود أو أكثر",
    mergeFeatures:
      "<ul><li>يدعم أنواع مختلفة من عمليات الدمج (داخلي، خارجي، يسار، يمين).</li><li>يسمح بتخصيص الأعمدة المستخدمة في الدمج.</li></ul>",
    mergeLimitations:
      "<ul><li>أبطأ مقارنةً بـ concat() في بعض الحالات.</li></ul>",
    joinPurpose: "دمج DataFrames بناءً على الفهرس",
    joinFeatures:
      "<ul><li>أسرع من merge() عند الدمج على الفهرس.</li><li>يدعم دمج الفهرس مع الأعمدة.</li></ul>",
    joinLimitations:
      "<ul><li>يعمل بشكل أساسي على الفهرس وقد يتطلب تخصيصًا للدمج على الأعمدة.</li></ul>",
    me: "تم إنشائه بواسـطة فاطمة الزهراني",
    quizTitle: "اختبر معرفتك",
    question1: "أي دالة تستخدم لدمج إطارين بيانات استنادًا إلى عمود مشترك؟",
    question2:
      "أي دالة هي الأفضل لدمج إطارات البيانات على طول محور معين دون مراعاة الفهارس أو أسماء الأعمدة؟",
    question3: "أي دالة هي الأنسب لدمج إطارات البيانات بناءً على الفهرس؟",
    question4: "أي دالة تسمح لك بتحديد نوع الدمج (داخلي، خارجي، إلخ)؟",
    question5:
      "أي دالة تستخدم لدمج إطارات البيانات ذات الأعمدة المختلفة ولكن بنفس الفهرس؟",
    submit: "إرسال الإجابات",
    downloadPDFBtn: "تحميل PDF",
    summary: "مقارنة موجزة",
  },
};

function changeLanguage(lang) {
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
  document.getElementById("functionHeader").innerHTML =
    translations[lang].functionHeader;
  document.getElementById("purposeHeader").innerHTML =
    translations[lang].purposeHeader;
  document.getElementById("featuresHeader").innerHTML =
    translations[lang].featuresHeader;
  document.getElementById("limitationsHeader").innerHTML =
    translations[lang].limitationsHeader;
  document.getElementById("concatPurpose").innerHTML =
    translations[lang].concatPurpose;
  document.getElementById("concatFeatures").innerHTML =
    translations[lang].concatFeatures;
  document.getElementById("concatLimitations").innerHTML =
    translations[lang].concatLimitations;
  document.getElementById("mergePurpose").innerHTML =
    translations[lang].mergePurpose;
  document.getElementById("mergeFeatures").innerHTML =
    translations[lang].mergeFeatures;

  document.getElementById("mergeLimitations").innerHTML =
    translations[lang].mergeLimitations;
  document.getElementById("joinPurpose").innerHTML =
    translations[lang].joinPurpose;
  document.getElementById("joinFeatures").innerHTML =
    translations[lang].joinFeatures;

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

document.addEventListener("DOMContentLoaded", () => {
  let currentLang = localStorage.getItem("language") || "en";
  changeLanguage(currentLang);
});

document.getElementById("toggleLanguage").addEventListener("click", () => {
  let newLang = localStorage.getItem("language") === "en" ? "ar" : "en";
  changeLanguage(newLang);
});
