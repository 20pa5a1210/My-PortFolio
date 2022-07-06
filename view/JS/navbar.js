const toggleBtn = document.querySelector('#toggle')
const container = document.querySelector('#navCon')

toggleBtn.addEventListener('click',function(){
    container.classList.toggle("hidden")
})