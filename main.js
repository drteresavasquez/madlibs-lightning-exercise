"use strict";
console.log("MAIN!");

const madLibrary = {
    pluralNoun1: "bears",
    adjective1: "pretty",
    noun: "street",
    typeOfFood: "mexican",
    articleOfClothing: "dickey",
    verbEndingIning: "wallowing",
    pluralNoun2: "trees",
    pluralNoun3: "lasers",
    numberVal: "113",
    celebrity: "Taylor Swift",
    color: "golden rod",
    verbEndingIning2: "licking",
    typeOfFood: "Italian sweets",
    pluralNoun: "concrete shoes",
    adjective2: "gloomy",
    adjective3: "claustrophobic"
 }

if(!localStorage.getItem(madLibrary)){
    populateStorage();
}else{
    getDb();
}

function populateStorage(){
    const dvbObjtoString = JSON.stringify(madLibrary);
    localStorage.setItem("madLibrary", dvbObjtoString);
}

function getDb(){
    const db = localStorage.getItem("madLibrary");
    const parseDB = JSON.parse(db);
}

document.getElementById("root").append(`Would it surprise you to learn that the most majestic ${madLibrary.pluralNoun1} in the world eat garbage? Well, they do! Everything from ${madLibrary.adjective1} soda cans to noun-stained type of food boxes to used article of clothing - and more! Some have been spotted ${madLibrary.verbEndingIning} dumpsters and then using their long ${madLibrary.pluralNoun2} to spear as many bags of ${madLibrary.pluralNoun} as they can before being caught. According to an interview with the ${madLibrary.numberVal} News, Celebrity once came home to find a/an ${madLibrary.color} unicorn ${madLibrary.verbEndingIning} up in the recycling bin. The poor thing had mistaken leftover ${madLibrary.typeOfFood} for dried up ${madLibrary.pluralNoun3}. "It was a/an ${madLibrary.adjective2} mistake. I am a good cook!"`);