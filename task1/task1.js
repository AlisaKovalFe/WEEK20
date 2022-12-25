let jsonHeroes = ` [{
    "name": "Бэтмен",
    "universe": "DC Comics",
    "alterEgo": "Брюс Уэйн",
    "career": ["борец с преступностью", "филантроп", "миллиардер"],
    "friends": ["Робин", "Бэтгерл"],
    "superPower": ["интеллект", "обширные познания", "знания боевых искусств", "ловкость"]
}, {
    "name": "Супермен",
    "universe": "DC Comics",
    "alterEgo": "Кларк Кент",
    "career": ["борец за справедливость"],
    "friends": ["собака Крипто"],
    "superPower": ["непробиваемость", "полет", "самоисцеление", "суперзрение", "суперслух", "классный костюм"]
}, {
    "name": "Железный человек",
    "universe": "Marvel Comics",
    "alterEgo": "Тони Старк",
    "career": ["гений", "миллиардер", "плейбой", "филантроп"],
    "friends": ["Мстители"],
    "superPower": ["высокий уровень интеллекта", "широкие познания науки и техники", "связь со всемирной паутиной", "бронекостюмы"]
}, {
    "name": "Спайдер-мен",
    "universe": "Marvel Comics",
    "alterEgo": "Питер Паркер",
    "career": ["борец за справедливость", "студент", "фотограф"],
    "friends": ["Мстители", "Фантастическая четверк", "Люди Икс"],
    "superPower": ["сверхчеловеческие рефлексы", "«паучье чутье»", "способность прилепляться к твердым поверхностям", "производство паутины"]

}]`
document.addEventListener('DOMContentLoaded', function(event) {
    let heroes = JSON.parse(jsonHeroes);
    console.log(heroes);

    let heroesContent = ''
    for (let hero of heroes) {
        heroesContent += `<div class="heroContent">
            <h2>${hero.name}</h2>
            <div>${hero.universe}</div>
            <div>${hero.alterEgo}</div>
            <div>${hero.career}</div>
            <div>${hero.friends}</div>
            <div>${hero.superPower}</div>
        </div>`
    }
    document.querySelector('#heroesContainer').innerHTML = heroesContent
})


