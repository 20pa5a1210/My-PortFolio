const Projects = [
  {
    Name: "WikiPedia Clone(API)",
    Description:
      "A Wikipedia clone, also called a Wikipedia mirror site, is a web site that uses information derived wholly or in large part from Wikipedia...",
    Date: "Created on 2022-07-1",
    TechStack: ["HTML", "TailWind CSS", "JavaScript"],
    Code: "window.open('https://github.com/20pa5a1210/WikiPedia-JS');",
    Demo: "window.open('https://wikipedia-app-js.vercel.app/');",
  },
  {
    Name: "Weather-App(API)",
    Description:
      "In this weather app, you can get the weather details of a particular city by entering the city name, If you entered an invalid city name then there is shown an error message.",
    Date: "Created on 2022-06-17",
    TechStack: ["HTML", "CSS", "JavaScript"],
    Code: "window.open('https://github.com/20pa5a1210/Weather-App-JavaScript');",
    Demo: "window.open('https://app-weather-js.vercel.app/');",
  },
  {
    Name: "Clock-Project",
    Description:
      "The aim of the project is to design a twelve hour Digital Clock that displays the time digitally",
    Date: "Created on 2022-05-13",
    TechStack: ["HTML", "CSS", "JavaScript"],
    Code: "window.open('https://github.com/20pa5a1210/Clock-JS');",
    Demo: "window.open('https://mini-clock-js.vercel.app/');",
  },
  {
    Name: "Portfolio",
    Description:
      "The Complete Customizable Software Developer Portfolio Template which lets you showcase your work and provides each and every detail about you as Software Developer. Clone the code, make changes, run the code, deploy the app.",
    Date: "Created on 2022-07-11",
    TechStack: ["HTML", "TailWind CSS", "JavaScript", "Node-Js"],
    Code: "window.open('https://github.com/20pa5a1210/My-PortFolio');",
    Demo: "window.open('https://surya-dev.herokuapp.com/');",
  },
  {
    Name: "Todo-List(React)",
    Description:
      "To-Do List project is an application specially built to keep track of errands or tasks that need to be done. This application will be like a task keeper where the user would be able to enter the tasks that they need to do. Once they are done with their tasks they can also remove them from the list.",
    Date: "Created on 2022-07-23",
    TechStack: ["React", "TailWind CSS"],
    Code: "window.open('https://github.com/20pa5a1210/Todo-React-Project');",
    Demo: "window.open('https://todo-manager-react.netlify.app/');",
  },
];

const Projects_container = document.getElementById("Projects-container");
console.log(Projects_container);

function RenderProjects(Projects) {
  var RenderElements = Projects.map(function (item) {
    let techStack = item.TechStack;
    var TechStack_Render = techStack.map((tech) => {
      if (tech == "HTML") {
        link = "./icons/html-5.png";
      } else if (tech == "TailWind CSS") {
        link = "./icons/tailwind.png";
      } else if (tech == "JavaScript") {
        link = "./icons/js.png";
      } else if (tech == "Node-Js") {
        link = "./icons/nodejs.png";
      } else if (tech == "Express-Js") {
        link = "./icons/express.png";
      } else if (tech == "CSS") {
        link = "./icons/css-3.png";
      } else if (tech == "React") {
        link = "./icons/physics.png";
      }

      return `
            <div class="tooltip">
                 <img class="w-7 h-7 mx-1" src="${link}"  alt="" srcset="">
                 <span class="tooltiptext tip">${tech}</span>
            </div>
            `;
    });

    TechStack_Render = TechStack_Render.join("");

    return `
        <div class="project-color w-96 m-5 p-5 hover:shadow-2xl shadow-emerald-400 ">
            <h1 class="roor-color text-2xl my-4 font-medium"><span><i class="fab fa-github"></i></span>  ${item.Name}</h1>
            <p class="root-color h-12 overflow-hidden">${item.Description}</p>
            <div class="flex justify-between mt-3">
                <p class="text-base md:text-lg" style="color: rgb(127, 141, 170);">${item.Date}</p>
                <div class="flex justify-center">     
                        ${TechStack_Render}
                </div>
            </div>

            <div class="flex justify-between mt-4">
                <button class="ProjectBtn" onclick=${item.Code}>Source Code</button>
                <button class="ProjectBtn" onclick=${item.Demo}>Live Demo</button>
            </div>
        </div>
        `;
  });
  RenderElements = RenderElements.join("");
  Projects_container.innerHTML = RenderElements;
}

RenderProjects(Projects);
