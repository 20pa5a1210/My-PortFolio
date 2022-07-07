const edu = document.querySelector(".edu");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

edu.addEventListener("click",function(e){
    const id = e.target.dataset.id
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove("active");
        })
        e.target.classList.add("active")

        articles.forEach(function(article){
            article.classList.remove("active");
        })

        const ele = document.getElementById(id)
        ele.classList.add("active")
    }
})