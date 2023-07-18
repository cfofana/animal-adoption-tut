const petPromise = await fetch("https://learnwebcode.github.io/pet-adoption-data/pets.json");
const pets = await petPromise.json();

const wrapper = document.createElement("div");
const template = document.getElementById("animal-card");
function decideAgeText(age){
    if(!age){
        return `Less than a year old `;
    }
    return age > 1 ? `${age} years old` : `${age} year old`;
}
for(var i=0; i<pets.length; i++){
    const clone = template.content.cloneNode(true);
    const age = (new Date().getFullYear()) - pets[i].birthYear; 
    const ageText = decideAgeText(age);
    clone.querySelector(".card-age").textContent = ageText;
    clone.querySelector(".card-img img").src = pets[i].photo;
    clone.querySelector(".card-img img").alt = `A ${pets[i].species} named ${pets[i].name}`; 
    clone.querySelector(".card-name").textContent = pets[i].name;
    clone.querySelector(".species").textContent = pets[i].species;
    clone.querySelector(".card-txt").textContent = pets[i].description;
    clone.querySelector(".card-btn span").textContent = pets[i].name;
    clone.querySelector(".card-info a").href = `https://learnwebcode.github.io/pet-adoption-data/pets/${pets[i].id}/`;

    wrapper.appendChild(clone);
}
document.querySelector(".main-content").appendChild(wrapper);


const filterBtns = document.querySelectorAll(".nav li a");
filterBtns.forEach(el => {
    el.addEventListener("click", e => handleFiltering(e));
});
function handleFiltering(e){
    let target = e.target;
    e.preventDefault();
    filterBtns.forEach(el => {
        el.classList.remove("active");
    });
    target.classList.add("active");
    filterPets(target.dataset.filter);
}
function filterPets(species){
    const allPets = document.querySelectorAll(".card");
    if(species == "all"){
        allPets.forEach(el => {
            el.style.display = "";
        });
    } else {
        allPets.forEach(el => {
            if(el.querySelector(".species").textContent == species){
                el.style.display = "";
            } else {
                el.style.display = "none";
            }
        });
    }
}









// const card = document.querySelector(".ouch");
// card.addEventListener("click", (event)=>{
//    const para = document.createElement('p');
//    para.innerText = "Oh yeah, look at me go!!!";
//    para.style.backgroundColor = "blue";
//    document.body.appendChild(para);
   
// }); 
// function randNum(maxNum){
//     const randNum = Math.floor(Math.random()* (maxNum + 1));
//     return randNum;
// }
// function randColor(){
//    // const url = "https://picsum.photos/200/300";
//    const r = randNum(255);
//    const g = randNum(255);
//    const b = randNum(255);
//    const rgb = `rgb(${r}, ${g}, ${b})`;
//    console.log(rgb);  
//    return rgb; 
// }
// const card = document.querySelector(".ouch");
// card.addEventListener("click", ()=>{
//     const color = randColor();
//     const div = document.createElement("div");
//     const img = document.createElement("img");
//     div.id = "fun";
//     div.className = "circle";
//     const txt = document.createTextNode("I got a div here");
//     div.appendChild(txt);
//     div.style.width = "200px";
//     div.style.height = "50px";
//     div.style.border = `2px solid ${color}`;
//     document.querySelector(".ouch .card-info").appendChild(div);
// });


