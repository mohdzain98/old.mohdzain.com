const repo = {
  1: {
    name: "Alarm_clock",
    lang: "JavaScript",
    visible: "Public",
    color: "orange",
    define: "Simple Alarm clock using JS",
    url: "https://github.com/mohdzain98/Alarm_Clock"
  },
  2: {
    name: "Text Utils",
    lang: "JavaScript",
    visible: "Public",
    color: "orange",
    define: "A Text utility made with React",
    url: "https://github.com/mohdzain98/textutils"
  },
  3: {
    name: "pennrangers",
    lang: "HTML",
    visible: "Public",
    color: "red",
    define: "Clash of Clans webpage to display clans stats",
    url: "https://github.com/mohdzain98/pennrangers"
  },
  4: {
    name: "cocwl",
    lang: "PHP",
    visible: "Public",
    color: "violet",
    define: "Clash of clans Clan Wars Database Management System",
    url: "https://github.com/mohdzain98/cocwl"
  },
  5: {
    name: "chatApplication",
    lang: "Java",
    visible: "Public",
    color: "#2be811",
    define: "Chat Appliaction using Socket Programming",
    url: "https://github.com/mohdzain98/ChatApplication"
  },
  6: {
    name: "Color_Images_Encryption",
    lang: "Python",
    visible: "Public",
    color: "blue",
    define: "DNA Based color images encryption",
    url: "https://github.com/mohdzain98/Design_of_DNA_based_Color_Images_Cryptosystem"
  },
  7: {
    name: "JavaPython-Integration",
    lang: "Java",
    visible: "Public",
    color: "#2be811",
    define: "Running code written in python in java using Python Interpreter",
    url: "https://github.com/mohdzain98/JavaPython-Integration"
  }
}

const repos = document.getElementById("show");
const repoLen = Object.keys(repo).length;
for (let i = 1; i <= repoLen; i++) {
  repos.innerHTML = repos.innerHTML + `
  <div class='dis'>
    <div class='data'>
      <a href='${repo[i].url}' target='_blank'>${repo[i].name}</a>
      <p class="define">${repo[i].define}</p>
      <p class='visible top-right'>${repo[i].visible}</p>
      <p class='top-down'>
        <i class='fa fa-circle' style="color: ${repo[i].color};
        margin-right:3px;"></i>${repo[i].lang}
      </p>
    </div>
  </div>
  `
}
