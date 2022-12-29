document.addEventListener('DOMContentLoaded', function(e) {
    getCheracter('2')
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


        // let ep = []
        // console.log(ep)
        // ep.push(character.episode[0])
        // console.log(ep)
        // ep.push(character.episode[character.episode.length-1])
        // console.log(ep)

        let episodes = []
        for (let i = 0; i < character.episode.length; i += character.episode.length-1) {
            episodes.push(character.episode[i])
            console.log(episodes)


            // episodes.push(character[character.episode.length-1])
            // console.log(episodes);
            
            // console.log(l)
            // console.log(episodes.length)
            // console.log(episodes);
        }


        document.querySelector('.episode').innerHTML = `
        <div>посмотри первый эпизод со мной <a href="${episodes[0]}">тут</a></div>
        <div>последний тут ${episodes.join(', ')[1]}</div>`
        
        // 'посмотри первый и последний эпизод со мной тут ' + episodes.join(', ')
        
    })
    // .catch(err => console.log(err))
}


    





// fetch ('https://api.github.com/users/AlisaKovalFe')
// .then(response => response.json())
// // .then(response => console.log(response.json()))
// .then (user => console.log(user.name))
// .catch(err => console.log(err))