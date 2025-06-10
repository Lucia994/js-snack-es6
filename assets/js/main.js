console.log("Hello");
// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.
// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Snack 1
// Creare un array di 10 oggetti(racingBike) con le proprietà: nome e peso. 
const racingBike = [
    {
        bikeName: "Bianchi",
        bikeWeight: 6.8,
    },
    {
        bikeName: "Look",
        bikeWeight: 8,
    },
    {
        bikeName: "Willier Triestina",
        bikeWeight: 7.5,
    },
    {
        bikeName: "Pinarello",
        bikeWeight: 6.9,
    },
    {
        bikeName: "Colnago",
        bikeWeight: 7.3,
    },
    {
        bikeName: "Cervelo S5",
        bikeWeight: 6.7,
    },
    {
        bikeName: "Canyon",
        bikeWeight: 7.9,
    },
    {
        bikeName: "Merida Reacto Team",
        bikeWeight: 7.4,
    },
    {
        bikeName: "Specialized",
        bikeWeight: 6.6,
    },
    {
        bikeName: "Trek",
        bikeWeight: 7.7,
    }
];

// Stampare a schermo la bici con peso minore.
let lessWeightBike = racingBike[0];
for (let i = 1; i < racingBike.length; i++) {
    if (racingBike[i].bikeWeight < lessWeightBike.bikeWeight) {
        lessWeightBike = racingBike[i];
    }
}

console.log("La bici con il peso minore è:", lessWeightBike);



// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 

const footballTeams = [
    {
        namefootballTeams: "Real Madrid",
        pointsScored: 0,
        foulsDrawn: 0,

    },
    {
        namefootballTeams: "Barcellona",
        pointsScored: 0,
        foulsDrawn: 0,

    },
    {
        namefootballTeams: "Liverpool",
        pointsScored: 0,
        foulsDrawn: 0,

    },
    {
        namefootballTeams: "Inter",
        pointsScored: 0,
        foulsDrawn: 0,

    },
    {
        namefootballTeams: "Juventus",
        pointsScored: 0,
        foulsDrawn: 0,

    },
    {
        namefootballTeams: "Roma",
        pointsScored: 0,
        foulsDrawn: 0,

    },
    {
        namefootballTeams: "Manchester United",
        pointsScored: 0,
        foulsDrawn: 0,

    },
    {
        namefootballTeams: "Sampdoria",
        pointsScored: 0,
        foulsDrawn: 0,

    }
];

console.log(footballTeams);

// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



for (let i = 0; i < footballTeams.length; i++) {
    footballTeams[i].pointsScored = randomNumberGenerator(0, 100);
    footballTeams[i].foulsDrawn = randomNumberGenerator(0, 20);
    console.log(footballTeams[i].pointsScored);
    console.log(footballTeams[i].foulsDrawn);
    console.log(randomNumberGenerator(0, 100));


}

//  Creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti 

const footballTeamsFouls = [];
for (let i = 0; i < footballTeams.length; i++) {
    footballTeamsFouls.push({
        name: footballTeams[i].namefootballTeams,
        foulsDrawn: footballTeams[i].foulsDrawn,
    })

}

//Stampiamo tutto in console
console.log(footballTeamsFouls);
