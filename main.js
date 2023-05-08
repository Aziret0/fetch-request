const btn = document.createElement('button')
btn.textContent = 'getHeroes'
document.body.appendChild(btn)
btn.style.padding = '15px'
btn.style.position = 'relative'
btn.style.top = '0px'
btn.style.left = '44%'


btn.style.margin = '25px'
const box = document.createElement('div')
document.body.appendChild(box)
box.setAttribute('class', 'grid-container')






const task = async () => {
    const data = await fetch('https://hp-api.onrender.com/api/characters')
    .then(res => res.json())
    .then(data => data)
    .finally(load => load) 

    const dataStuff = data.filter((el) => el.image)
    for ( i=0; i<dataStuff.length; i++) {
        const CONTAINER = document.createElement('div')
        const picture = document.createElement('img')
        const name = document.createElement('div')
        const actor = document.createElement('div')
        const male = document.createElement('div')
        picture.setAttribute('src', dataStuff[i].image )
        actor.textContent = dataStuff[i].actor
        male.textContent = dataStuff[i].gender
        CONTAINER.appendChild(picture)
        CONTAINER.setAttribute('class', 'card' )
        picture.setAttribute('class' , 'image')
        box.appendChild(CONTAINER)
        CONTAINER.appendChild(picture)
        CONTAINER.appendChild(name)
        CONTAINER.appendChild(actor)
        CONTAINER.appendChild(male)
        name.textContent = dataStuff[i].name
    }
    console.log(dataStuff);
    // btn.addEventListener('click', task)
}



btn.addEventListener('click', task)





// const signUP = document.querySelector('.sign')
// const task =() => {
//      element = document.getElementsByClassName("feedback");
//     element.classList.toggle("active");
//   }


// signUP.addEventListener('click', task)

// const callToActionBtns = document.querySelectorAll(".feedback");

// callToActionBtns.forEach((btn) => {
//     signUP.addEventListener("click", (e) => {
//       e.target.classList.toggle("active");
//     });
//   });