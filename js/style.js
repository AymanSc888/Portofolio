let home =document.getElementById('home')
let about =document.getElementById('about')
let skills =document.getElementById('skills')
let projects =document.getElementById('projects')
let contact =document.getElementById('contact')
function page(name){
    if(name ==="about"){
        about.classList.remove("hide")
        home.classList.add("hide")
        skills.classList.add("hide")
        projects.classList.add("hide")
        contact.classList.add("hide")
    }
    else if(name ==="skills"){
        skills.classList.remove("hide")
        about.classList.add("hide")
        home.classList.add("hide")
        projects.classList.add("hide")
        contact.classList.add("hide")
    }else if(name ==="home"){
        home.classList.remove("hide")
        about.classList.add("hide")
        skills.classList.add("hide")
        projects.classList.add("hide")
        contact.classList.add("hide")
    }else if(name ==="projects"){
        projects.classList.remove("hide")
        about.classList.add("hide")
        skills.classList.add("hide")
        home.classList.add("hide")
        contact.classList.add("hide")
    }else if(name ==="contact"){
        contact.classList.remove("hide")
        about.classList.add("hide")
        skills.classList.add("hide")
        projects.classList.add("hide")
        home.classList.add("hide")
    }
}