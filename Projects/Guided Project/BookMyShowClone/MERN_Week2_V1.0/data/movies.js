// This file stores the movie data used in the CLI App

const movies = [
    {
        id:1,
        title:"Dhurandar2",
        language:"Hindi",
        genre:"Action Thriller",
        city:"Mysore",
        cinema:"Nexus Mall-Screen 1",
        showtimes:[
            {time: "10:00 AM",seatsAvailable: 250},
            {time: "1:00 PM",seatsAvailable: 250},
            {time: "6:00 PM",seatsAvailable: 250}
        ]
    },
    {
        id:2,
        title:"LoveMocktail3",
        language:"Kannada",
        genre:"Emotion",
        city:"Mysore",
        cinema:"DRC Mall-Screen 2",
        showtimes:[
            {time: "10:00 AM",seatsAvailable: 100},
            {time: "1:00 PM",seatsAvailable: 70},
            {time: "6:00 PM",seatsAvailable: 200}
        ]
    },
    {
        id:3,
        title:"Akash",
        language:"Kannada",
        genre:"Family entertainer",
        city:"Mysore",
        cinema:"Garuda Mall-Screen 3",
        showtimes:[
            {time: "11:00 AM",seatsAvailable: 10},
            {time: "2:00 PM",seatsAvailable: 7},
            {time: "7:00 PM",seatsAvailable: 30}
        ]
    }
];
//Export the movie data so that other files can use it. 
module.exports = movies;
