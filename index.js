// switching lang

let langBtn = document.getElementById("switch-lang");
let htmlFile = document.querySelector("html");

htmlFile.setAttribute("lang", "en");
htmlFile.setAttribute("dir", "ltr");

let footerP = document.querySelector("footer p");
footerP.innerHTML = "made with love by abdullah elshazly &hearts;";

//

let homeBtn = document.getElementById("home-btn");
homeBtn.textContent = "home";
let aboutMeBtn = document.getElementById("about-me-btn");
aboutMeBtn.textContent = "about me";
let projectsBtn = document.getElementById("my-projects-btn");
projectsBtn.textContent = "my projects";

//

let homeH1 = document.querySelector("section .home .content h1");
let homeH2 = document.querySelector("section .home .content h2");
let homeP = document.querySelector("section .home .content p");
homeH1.textContent = "abdullah wael mohamed elshazly";
homeH2.textContent = "front-end developer";
homeP.textContent =
  "I build simple, fast, and clean web interfaces, focusing on small details and creating websites that are easy to use and clear from the first visit";

//

let aboutMeH1 = document.querySelectorAll(".about-me .content h1");
let aboutMeDiv = document.querySelectorAll(".about-me .content>div");

let aboutMeContentEN = [
  {
    h1: "education",
    div: [
      "student in the Faculty of Computers and Artificial Intelligence in Sohag",
    ],
  },
  {
    h1: "skills",
    div: ["html 100%", "css 100%", "java script 50%"],
  },
  {
    h1: "programs i use",
    div: ["vs code"],
  },
];

let aboutMeContentAR = [
  {
    h1: "التعليم",
    div: ["طالب في كلية الحاسبات والذكاء الاصطناعي بسوهاج"],
  },
  {
    h1: "المهارات",
    div: ["html 100%", "css 100%", "java script 50%"],
  },
  {
    h1: "برامج أستخدمها",
    div: ["vs code"],
  },
];

let currentAboutMe = aboutMeContentEN;

for (let i = 0; i < currentAboutMe.length; i++) {
  aboutMeH1[i].textContent = currentAboutMe[i].h1;
  for (let o = 0; o < currentAboutMe[i].div.length; o++) {
    let span = document.createElement("span");
    span.textContent = currentAboutMe[i].div[o];
    aboutMeDiv[i].appendChild(span);
  }
}

//

let projectsDiv = document.querySelector(".my-projects");

let projectsEN = [
  {
    imageBg: "media/projects/college-table.png",
    h1: "An interactive timetable for university students",
    p: "An online platform for Sohag University's Faculty of Computers & AI lecture schedules, organized by section",
    a: "https://elshazly161107.github.io/college-table/",
    aText: "visit website",
  },
];

let projectsAR = [
  {
    imageBg: "media/projects/college-table.png",
    h1: "جدول تفاعلي لطلاب الجامعه",
    p: "منصة إلكترونية مخصصة لعرض جداول المحاضرات لطلاب كلية الحاسبات والذكاء الاصطناعي بجامعة سوهاج حسب السكشن",
    a: "https://elshazly161107.github.io/college-table/",
    aText: "زر الموقع",
  },
];

let currentprojects = projectsEN;

for (let i = 0; i < currentprojects.length; i++) {
  let project = document.createElement("div");
  project.classList.add("project");
  project.innerHTML = `
  <div class="image" style="background-image: url(${currentprojects[i].imageBg})"></div>
  <h1>${currentprojects[i].h1}</h1>
  <p>${currentprojects[i].p}</p>
  <a
      href="${currentprojects[i].a}"
      target="_blank">${currentprojects[i].aText}</a>`;
  projectsDiv.appendChild(project);
}

//

langBtn.addEventListener("click", function () {
  htmlFile.classList.toggle("en");
  langBtn.innerHTML = "";
  let currentLang = document.createElement("img");
  if (htmlFile.classList.contains("en")) {
    htmlFile.setAttribute("lang", "en");
    htmlFile.setAttribute("dir", "ltr");
    currentLang.setAttribute("src", "media/assets/arab.svg");
    langBtn.setAttribute("title", "العربية");
  } else {
    htmlFile.setAttribute("lang", "ar");
    htmlFile.setAttribute("dir", "rtl");
    currentLang.setAttribute("src", "media/assets/eng.svg");
    langBtn.setAttribute("title", "English");
  }
  langBtn.appendChild(currentLang);

  // nav

  homeBtn.textContent = "";
  aboutMeBtn.textContent = "";
  projectsBtn.textContent = "";

  if (htmlFile.classList.contains("en")) {
    homeBtn.textContent = "home";
    aboutMeBtn.textContent = "about me";
    projectsBtn.textContent = "my projects";
  } else {
    homeBtn.textContent = "الرئيسية";
    aboutMeBtn.textContent = "من أنا";
    projectsBtn.textContent = "أعمالي";
  }

  // home

  homeH1.textContent = "";
  homeP.textContent = "";

  if (htmlFile.classList.contains("en")) {
    homeH1.textContent = "abdullah wael mohamed elshazly";
    homeP.textContent =
      "I build simple, fast, and clean web interfaces, focusing on small details and creating websites that are easy to use and clear from the first visit";
  } else {
    homeH1.textContent = "عبدالله وائل محمد الشاذلي";
    homeP.textContent = `
      أقوم ببناء واجهات ويب بسيطة، سريعة، ونظيفة،
      أحب التفاصيل الصغيرة، وأهتم بأن يكون الموقع
      سهل الاستخدام وواضح من أول زيارة`;
  }

  // about me

  aboutMeH1.forEach((e) => (e.innerHTML = ""));
  aboutMeDiv.forEach((e) => (e.innerHTML = ""));

  if (htmlFile.classList.contains("en")) {
    currentAboutMe = aboutMeContentEN;
  } else {
    currentAboutMe = aboutMeContentAR;
  }

  for (let i = 0; i < currentAboutMe.length; i++) {
    aboutMeH1[i].textContent = currentAboutMe[i].h1;
    for (let o = 0; o < currentAboutMe[i].div.length; o++) {
      let span = document.createElement("span");
      span.textContent = currentAboutMe[i].div[o];
      aboutMeDiv[i].appendChild(span);
    }
  }

  // projects

  projectsDiv.innerHTML = "";

  if (htmlFile.classList.contains("en")) {
    currentprojects = projectsEN;
  } else {
    currentprojects = projectsAR;
  }

  for (let i = 0; i < currentprojects.length; i++) {
    let project = document.createElement("div");
    project.classList.add("project");
    project.innerHTML = `
  <div class="image" style="background-image: url(${currentprojects[i].imageBg})"></div>
  <h1>${currentprojects[i].h1}</h1>
  <p>${currentprojects[i].p}</p>
  <a
      href="${currentprojects[i].a}"
      target="_blank">${currentprojects[i].aText}</a>`;
    projectsDiv.appendChild(project);
  }

  // footer

  footerP.innerHTML = "";

  if (htmlFile.classList.contains("en")) {
    footerP.innerHTML = "made with love by abdullah elshazly &hearts;";
  } else {
    footerP.innerHTML = "تم برمجته بكل حب بواسطة عبدالله الشاذلي &hearts;";
  }
});

// switching mode

let body = document.body;
let modeBtn = document.getElementById("switch-mode");
let fade = document.querySelector(".theme-fade");

modeBtn.addEventListener("click", function () {
  setTimeout(() => {
    // change theme
    document.body.classList.toggle("light");

    // fade out
    fade.style.opacity = "0";
    modeBtn.innerHTML = "";
    let currentMood = document.createElement("i");
    if (body.classList.contains("light")) {
      currentMood.classList.add("fa-solid");
      currentMood.classList.add("fa-moon");
      currentMood.classList.remove("fa-sun");
    } else {
      currentMood.classList.add("fa-solid");
      currentMood.classList.remove("fa-moon");
      currentMood.classList.add("fa-sun");
    }
    modeBtn.appendChild(currentMood);
  }, 150);
  fade.style.opacity = "1";
});

// nav

function showTab(tabId) {
  // إخفاء كل المحتوى
  let tabs = document.querySelectorAll("section>div");
  tabs.forEach((tab) => (tab.style.display = "none"));

  // إزالة الحالة النشطة من كل الأزرار
  let links = document.querySelectorAll("nav>button");
  links.forEach((link) => link.classList.remove("active"));

  // إظهار القسم المطلوب وتفعيل الزر
  document.getElementById(tabId).style.display = "flex";
  event.target.classList.add("active");
}
