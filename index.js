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
let contactUsBtn = document.getElementById("contact-us-btn");
contactUsBtn.textContent = "contact us";

//

let homeH1 = document.querySelector("section .home .content h1");
let homeH2 = document.querySelector("section .home .content h2");
let homeP = document.querySelector("section .home .content p");
homeH1.textContent = "abdullah wael";
homeH2.textContent = "front-end developer & Multimedia Specialist";
homeP.innerHTML = `I design and build simple, fast, and clean web interfaces,
with a strong focus on detail and user experience.
<hr>
My goal is to deliver websites that are clear, intuitive,
and impactful from the very first visit.
<hr>
I am also proficient in Microsoft Office applications,
particularly Word and PowerPoint, for creating professional documents and presentations.
<hr>
I provide complete technical solutions for digital projects.
Feel free to get in touch.`;

//

let aboutMeH1 = document.querySelectorAll(".about-me .content h1");
let aboutMeDiv = document.querySelectorAll(".about-me .content>div");

let aboutMeContentEN = [
  {
    h1: "full name",
    div: ["abdullah wael mohamed elshazly 100"],
  },
  {
    h1: "languages",
    div: ["english 50", "arabic 100"],
  },
  {
    h1: "education",
    div: [
      "student in the Faculty of Computers and Artificial Intelligence in Sohag 25",
    ],
  },
  {
    h1: "social skills",
    div: [
      "Public speaking skills 100",
      "Teamwork 100",
      "Quick to learn and highly adaptable 100",
      "Strong attention to detail 100",
      "Ability to manage priorities 100",
      "Effective communication 100",
    ],
  },
  {
    h1: "programming skills",
    div: ["html 100", "css 100", "java script 50"],
  },
  {
    h1: "programs i use",
    div: ["vs code 100", "microsoft Word 100", "microsoft PowerPoint 100"],
  },
];

let aboutMeContentAR = [
  {
    h1: "الاسم الكامل",
    div: ["عبدالله وائل محمد الشاذلي 100"],
  },
  {
    h1: "اللغات",
    div: ["الإنجليزية 50", "العربية 100"],
  },
  {
    h1: "التعليم",
    div: ["طالب في كلية الحاسبات والذكاء الاصطناعي بسوهاج 25"],
  },
  {
    h1: "المهارات الاجتماعية",
    div: [
      "الإلقاء والخطابة 100",
      "العمل الجماعي 100",
      "سرعة التعلم والتكيف 100",
      "الدقة والانتباه للتفاصيل 100",
      "إدارة الأولويات 100",
      "مهارات التواصل الفعّال 100",
    ],
  },
  {
    h1: "المهارات البرمجية",
    div: ["html 100", "css 100", "java script 50"],
  },
  {
    h1: "برامج أستخدمها",
    div: ["vs code 100", "microsoft Word 100", "microsoft PowerPoint 100"],
  },
];

let currentAboutMe = aboutMeContentEN;

for (let i = 0; i < currentAboutMe.length; i++) {
  aboutMeH1[i].textContent = currentAboutMe[i].h1;

  for (let o = 0; o < currentAboutMe[i].div.length; o++) {
    let span = document.createElement("span");

    let spanTextArr = currentAboutMe[i].div[o];
    let parts = spanTextArr.split(" ");

    let spanComplete;
    let spanCompleteNum = parts[parts.length - 1];

    if (spanCompleteNum === "100") {
      spanComplete = "full";
    } else if (spanCompleteNum === "75") {
      spanComplete = "third-quarter";
    } else if (spanCompleteNum === "50") {
      spanComplete = "half";
    } else if (spanCompleteNum === "25") {
      spanComplete = "quarter";
    }

    let spanText = parts.slice(0, -1);

    span.classList.add(spanComplete);
    span.textContent = spanText.join(" ");

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
  {
    imageBg: "media/projects/protofolio.png",
    h1: `personal website "protofolio"`,
    p: "A personal portfolio where I showcase my web development skills and projects, with a focus on clean code and simple design",
    a: "https://elshazly161107.github.io/Elshazly-Protofolio/",
    aText: "visit website",
  },
  {
    imageBg: "media/projects/q-game.png",
    h1: `"brain battle" game`,
    p: "a competitive quiz game in Arabic between two teams where I act as the host, asking cultural and general knowledge questions, and each team races to answer and score points to win",
    a: "https://elshazly161107.github.io/Brain-Battle-Game/",
    aText: "visit website",
  },
  {
    imageBg: "media/projects/write-the-word-game.png",
    h1: `"write the word" game`,
    p: "The game is a simple and engaging educational word game that helps improve your English vocabulary by letting you choose a difficulty level and then challenging you to write or complete the correct words based on hints or questions to earn points.",
    a: "https://elshazly161107.github.io/write-the-word/",
    aText: "visit website",
  },
];

let projectsAR = [
  {
    imageBg: "media/projects/college-table.png",
    h1: "جدول تفاعلي لطلاب الجامعه",
    p: "منصة إلكترونية مخصصة لعرض جداول المحاضرات لطلاب كلية الحاسبات والذكاء الاصطناعي بجامعة سوهاج حسب السكشن",
    a: "https://elshazly161107.github.io/college-table/",
    aText: "زُر الموقع",
  },
  {
    imageBg: "media/projects/protofolio.png",
    h1: `موقع شخصي "بروتوفوليو"`,
    p: "بورتفوليو شخصي أستعرض فيه مهاراتي وأعمالي في تطوير الويب، مع تركيز على التصميم البسيط والكود النظيف",
    a: "https://elshazly161107.github.io/Elshazly-Protofolio/",
    aText: "زُر الموقع",
  },
  {
    imageBg: "media/projects/q-game.png",
    h1: `لعبة "معركة العقول"`,
    p: "لعبة تنافسية باللغة العرية بين فريقين، فيها الحكم يطرح أسئلة ثقافية، وكل فريق يحاول يجاوب أسرع ويجمع أكبر عدد من النقاط للفوز",
    a: "https://elshazly161107.github.io/Brain-Battle-Game/",
    aText: "زُر الموقع",
  },
  {
    imageBg: "media/projects/write-the-word-game.png",
    h1: `لعبة "اكتب الكلمة"`,
    p: "اللعبة هي لعبة تعليمية بسيطة وممتعة تساعدك على تحسين مفرداتك في اللغة الإنجليزية، حيث تختار مستوى الصعوبة ثم تحاول كتابة الكلمة الصحيحة أو إكمالها بناءً على السؤال أو التلميح من أجل جمع النقاط",
    a: "https://elshazly161107.github.io/write-the-word/",
    aText: "زُر الموقع",
  },
];

let currentprojects = projectsEN;

for (let i = 0; i < currentprojects.length; i++) {
  let project = document.createElement("div");
  project.classList.add("project");
  project.innerHTML = `
  <div class="image" style="background-image: url(${currentprojects[i].imageBg})"></div>
  <h1>${currentprojects[i].h1}</h1>
  <p title="${currentprojects[i].p}">${currentprojects[i].p}</p>
  <a
      href="${currentprojects[i].a}"
      target="_blank">${currentprojects[i].aText}</a>`;
  projectsDiv.appendChild(project);
}

//

let contactUsH1 = document.querySelector(".contact-us h1");
contactUsH1.textContent = "Contact and Follow Us On";

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
    contactUsBtn.textContent = "contact us";
  } else {
    homeBtn.textContent = "الرئيسية";
    aboutMeBtn.textContent = "من أنا";
    projectsBtn.textContent = "أعمالي";
    contactUsBtn.textContent = "تواصل معنا";
  }

  // home

  homeH1.textContent = "";
  homeH2.textContent = "";
  homeP.textContent = "";

  if (htmlFile.classList.contains("en")) {
    homeH1.textContent = "abdullah wael";
    homeH2.textContent = "front-end developer & Multimedia Specialist";
    homeP.innerHTML = `I design and build simple, fast, and clean web interfaces,
    with a strong focus on detail and user experience.
<hr>
My goal is to deliver websites that are clear, intuitive,
and impactful from the very first visit.
<hr>
I am also proficient in Microsoft Office applications,
particularly Word and PowerPoint, for creating professional documents and presentations.
<hr>
I provide complete technical solutions for digital projects.
Feel free to get in touch.`;
  } else {
    homeH1.textContent = "عبدالله وائل";
    homeH2.textContent = "مطور واجهات المستخدم و مختص محتوى رقمي";
    homeP.innerHTML = `أقوم بتصميم وبناء واجهات ويب بسيطة، سريعة، ونظيفة،
مع اهتمام دقيق بالتفاصيل وتجربة المستخدم.
<hr>
أحرص على تقديم مواقع واضحة، سهلة الاستخدام،
وتترك انطباعًا قويًا من أول زيارة.
<hr>
كما أجيد استخدام برامج Microsoft Office،
وخاصة Word و PowerPoint في إعداد المستندات والعروض التقديمية باحترافية.
<hr>
أقدّم حلولًا تقنية متكاملة للمشاريع الرقمية.
يسعدني تواصلك.`;
  }

  // about me

  aboutMeH1.forEach((e) => (e.innerHTML = ""));
  aboutMeDiv.forEach((e) => (e.innerHTML = ""));

  let aboutMe = document.querySelector(".about-me .content");

  if (htmlFile.classList.contains("en")) {
    currentAboutMe = aboutMeContentEN;
    aboutMe.classList.remove("ar");
  } else {
    aboutMe.classList.add("ar");
    currentAboutMe = aboutMeContentAR;
  }

  for (let i = 0; i < currentAboutMe.length; i++) {
    aboutMeH1[i].textContent = currentAboutMe[i].h1;

    for (let o = 0; o < currentAboutMe[i].div.length; o++) {
      let span = document.createElement("span");

      let spanTextArr = currentAboutMe[i].div[o];
      let parts = spanTextArr.split(" ");

      let spanComplete;
      let spanCompleteNum = parts[parts.length - 1];

      if (spanCompleteNum === "100") {
        spanComplete = "full";
      } else if (spanCompleteNum === "75") {
        spanComplete = "third-quarter";
      } else if (spanCompleteNum === "50") {
        spanComplete = "half";
      } else if (spanCompleteNum === "25") {
        spanComplete = "quarter";
      }

      let spanText = parts.slice(0, -1);

      span.classList.add(spanComplete);
      span.textContent = spanText.join(" ");

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
  <p title="${currentprojects[i].p}">${currentprojects[i].p}</p>
  <a
      href="${currentprojects[i].a}"
      target="_blank">${currentprojects[i].aText}</a>`;
    projectsDiv.appendChild(project);
  }

  // contact us

  contactUsH1.innerHTML = "";

  if (htmlFile.classList.contains("en")) {
    contactUsH1.textContent = "Contact and Follow Us On";
  } else {
    contactUsH1.textContent = "تابعنا وتواصل معنا عبر";
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
  if (tabId === "my-projects") {
    document.getElementById(tabId).style.display = "grid";
    event.target.classList.add("active");
  } else {
    document.getElementById(tabId).style.display = "flex";
    event.target.classList.add("active");
  }
}
