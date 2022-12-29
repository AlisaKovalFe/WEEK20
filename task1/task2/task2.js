document.addEventListener('DOMContentLoaded', function(e) {
    getCheracter('2')
})

function getCheracter(number) {
    fetch ('https://rickandmortyapi.com/api/character/' + number)
    .then (response => response.json())
    .then (character => {
        console.log(character);

        document.querySelector('#name').innerText= character.name
        document.querySelector('#imageCharacter').src = character.image
        document.querySelector('.species').innerText = 'вид: ' + character.species
        document.querySelector('.gender').innerText = 'гендер: ' + character.gender
        document.querySelector('.status').innerText = 'статус: ' + character.status

        let episodes = []
        let l
        for (let i = 0; i < character.episode.length; i ++ ) {

            episodes.push(character.episode[0])
            console.log(episodes);
            // episodes.push(character[character.episode.length-1])
            // console.log(episodes);
            
            // console.log(l)
            // console.log(episodes.length)
            // console.log(episodes);
        }
        // document.querySelector('.episodes').innerHTML = episodes.join(', ')
        
    })
    // .catch(err => console.log(err))
}


    





// fetch ('https://api.github.com/users/AlisaKovalFe')
// .then(response => response.json())
// // .then(response => console.log(response.json()))
// .then (user => console.log(user.name))
// .catch(err => console.log(err))