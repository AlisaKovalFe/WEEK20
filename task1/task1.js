let jsonHeroes = ` [{
    "name": "Бэтмен",
    "foto": "./images/betman.jpeg",
    "universe": "DC Comics",
    "alterEgo": "Брюс Уэйн",
    "career": ["борец с преступностью", "филантроп", "миллиардер"],
    "friends": ["Робин", "Бэтгерл"],
    "superPower": ["интеллект", "обширные познания", "знания боевых искусств", "ловкость"]
}, {
    "name": "Супермен",
    "foto": "./images/superman.jpeg",
    "universe": "DC Comics",
    "alterEgo": "Кларк Кент",
    "career": ["борец за справедливость"],
    "friends": ["собака Крипто"],
    "superPower": ["непробиваемость", "полет", "самоисцеление", "суперзрение", "суперслух", "классный костюм"]
}, {
    "name": "Железный человек",
    "foto": "./images/ironMan.jpeg",
    "universe": "Marvel Comics",
    "alterEgo": "Тони Старк",
    "career": ["гений", "миллиардер", "плейбой", "филантроп"],
    "friends": ["Мстители"],
    "superPower": ["высокий уровень интеллекта", "широкие познания науки и техники", "связь со всемирной паутиной", "бронекостюмы"]
}, {
    "name": "Спайдер-мен",
    "foto": "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg",
    "universe": "Marvel Comics",
    "alterEgo": "Питер Паркер",
    "career": ["борец за справедливость", "студент", "фотограф"],
    "friends": ["Мстители", "Фантастическая четверк", "Люди Икс"],
    "superPower": ["сверхчеловеческие рефлексы", "«паучье чутье»", "производство паутины"]

}, {
    "name": "Капитан Америка",
    "foto": "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg",
    "universe": "Marvel Comics",
    "alterEgo": "Стивен Роджерс",
    "career": ["супер-солдат"],
    "friends": ["Мстители"],
    "superPower": ["сила", "выносливость", "бессмертие", "быстрая регенерацияы"]

}, {
    "name": "Тор",
    "foto": "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg",
    "universe": "Marvel Comics",
    "alterEgo": "нет; полное имя — Тор Одинсон",
    "career": ["борец за справедливость", "скандинавский бог"],
    "friends": ["Мстители"],
    "superPower": ["все, что может бог", "плюс молот Мьелнир"]

}, {
    "name": "Халк",
    "foto": "https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg",
    "universe": "Marvel Comics",
    "alterEgo": "Брюс Беннер",
    "career": ["супергерой", "борец за справедливость", "ученый-биохимик"],
    "friends": ["Мстители"],
    "superPower": ["сверхчеловеческая сила искорость", "выносливость", "полет"]

}, {
    "name": "Чудо-женщина",
    "foto": "https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg",
    "universe": "DC Comics",
    "alterEgo": "Диана Принс",
    "career": ["супергероиня", "секретарь-референт"],
    "friends": ["Лига Справедливости", "Бэтмен", "Супермен"],
    "superPower": ["сверхчеловеческая сила искорость", "выносливость", "полет"]

}, {
    "name": "Черная вдова",
    "foto": "https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg",
    "universe": "Marvel Comics",
    "alterEgo": "Наташа Романофф",
    "career": ["супергероиня", "шпионка"],
    "friends": ["Мстители"],
    "superPower": ["пик человеческого физического потенциала", "замедленное старение", "знание многих языков"]

}, {
    "name": "Дэдпул",
    "foto": "https://n1s1.hsmedia.ru/34/93/39/3493392c94fc2ae0552ef9c7e87f2617/728x382_1_cc2a743fd686b7b2e256c062966bb465@1034x543_0xac120002_2692921231540468872.jpg",
    "universe": "Marvel Comics",
    "alterEgo": "Уэйд Уинстон Уилсон",
    "career": ["антигерой", "наемник"],
    "friends": ["частично Мстители", "Человек-паук", "Росомаха"],
    "superPower": ["высокий болевой порог", "регенерация и бессмертие", "сверхчеловеческая иммунная система"]

}]`


document.addEventListener('DOMContentLoaded', function(event) {
    let heroes = JSON.parse(jsonHeroes, function(key, value) {
        if (key == 'career' || key == 'friends' || key == 'superPower') return value.join(', ')
        return value
    });
    console.log(heroes);
    console.log(heroes[heroes.length-heroes.length].name);
    console.log(Object.values(heroes));
    
    

    let heroesContent = ''
    for (let hero of heroes) {
        heroesContent += `
        <div class="heroContent">
            <div>
                <h2>${hero.name}</h2>
                <div><img class="foto" src="${hero.foto}"></div>
                <div class="innerContent">вселенная: ${hero.universe}</div>
                <div class="innerContent">альтер эго: ${hero.alterEgo}</div>
                <div class="innerContent">род деятельности: ${hero.career}</div>
                <div class="innerContent">друзья: ${hero.friends}</div>
                <div class="innerContent">суперсилы: ${hero.superPower}</div>
            </div>
            <div>
                <label for="rating">Оцените героя</label>
                <input value="1/5" name="rating" type="radio" >
                <input value="2/5" name="rating" type="radio">
                <input value="3/5" name="rating" type="radio">
                <input value="4/5" name="rating" type="radio">
                <input value="5/5" name="rating" type="radio">
            </div>            
        </div>`
    }
    document.querySelector('#heroesContainer').innerHTML = heroesContent
    addRate() 
})

function addRate() {

    let inputs = document.querySelectorAll('input')
    let rating = ''
    for (let input of inputs) {
        input.addEventListener('change', function() {
            if (input.checked) {
                rating = ''
                rating += `<div>${input.value}</div>`

                let hero = 'Рейтинг ' + input.parentElement.previousElementSibling.firstElementChild.innerHTML
                
                input.parentElement.innerHTML = 'Рейтинг фильма: ' + rating

                localStorage.setItem( hero, input.value)

                // Проверка
                console.log(localStorage.getItem(hero))
            } 
        })       
    }
    
}



