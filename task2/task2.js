document.addEventListener('DOMContentLoaded', function(e) {
    getCheracter('2') // здесь можно выбрать значение персонажа 
})

function getCheracter(number) {
    fetch ('https://rickandmortyapi.com/api/character/' + number)
    .then (response => response.json())
    .then (character => {
        console.log(character);

        document.querySelector('.wrap').style.backgroundColor = 'pink'
        document.querySelector('.wrap').style.padding = '1rem'
        document.querySelector('.wrapFace').style.alignItems= 'center'
        document.querySelector('#name').innerText= character.name
        const img = document.querySelector('#imageCharacter')
        img.src = character.image
        img.style.width = '20rem'
        document.querySelector('.species').innerHTML = `<span class="bold">вид: </span>` + character.species
        document.querySelector('.gender').innerHTML = `<span class="bold">гендер: </span>` + character.gender
        document.querySelector('.status').innerHTML = `<span class="bold">статус: </span>` + character.status
        document.querySelector('.location').innerHTML = `<span class="bold">локация: </span>` + character.location.name


        let episode = []
        episode.push(character.episode[0])

        if (character.episode.length > 1) {
            episode.push(character.episode[character.episode.length-1])
        }

        document.querySelector('.episode').innerHTML = `
        <div>api первого эпизода со мной <a href="${episode[0]}">тут</a></div>
        <div>а последнего <a href="${episode[1]}">тут</a></div>`
        
        
    })
    .catch(err => console.log(err))
}


    





// fetch ('https://api.github.com/users/AlisaKovalFe')
// .then(response => response.json())
// // .then(response => console.log(response.json()))
// .then (user => console.log(user.name))
// .catch(err => console.log(err))