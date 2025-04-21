const categories = document.querySelector(".categories");
const projectsContainer = document.querySelector(".projects");
const projects = document.querySelectorAll(".projects");

categories.addEventListener("click", (e) => {
  const filter = e.target.dataset.category;
  console.log(filter);
  console.log(e.target);

  if (filter == null) {
    return;
  }
  activeSelection(e.target); //객체 자체를 타겟으로 잡아 activeSelection
});

//Tlqkf

function activeSelection(target) {
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function filterProjects(filter) {
  projects.forEach((project) => {
    console.log(filter);
    console.log(projects.dataset.type);
    if ((filter == "all") | (filter == project.dataset.type)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
  projectsContainer.classList.add("anime-out");
  setTimeout(() => {
    projectsContainer.classList.remove("anime-out");
  }, 500);
}
