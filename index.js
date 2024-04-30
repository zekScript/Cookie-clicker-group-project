// Cookie clicker Program
/* 
Todo list:
1) make a window alert when pressed on bakeryName *DONE*
2) display: none when hes not close to getting more buildings
3) make a random appearence on golden cookies
4) when on click cookie count to the x cookies *DONE*
5) count how many cookies made per second
6) when bought buildings make them functional
7) make buy/sell functional
8) i need to count by formula from cookies wiki about 1x 10x and 100x
9) when bought take away cookies
10) GOODLUCK!
*/


const cookieCounter = document.getElementById("cookieCounter");
const buyBuildings = document.getElementById("buyBuildings");
const sellBuilldings = document.getElementById("sellBuilldings");
const mainCookieClicker = document.getElementById("mainCookieClicker");
const defaultEndBakeryName = "'s bakery";
let bakeryName = document.getElementById("bakeryName");
let cookiesMade = 0;
let changeName;
cookieCounter = Number(cookieCounter);

const buildings = {
    cursor: {
        name: "Cursor",
        baseCps: 0.1,
        count: 0,
        cost: 15
    },
    grandma: {
        name: "Grandma",
        baseCps: 1,
        count: 0,
        cost: 100
    },
    farm: {
        name: "Farm",
        baseCps: 8,
        count: 0,
        cost: 1100
    },
    mine: {
        name: "Mine",
        baseCps: 47,
        count: 0,
        cost: 12000
    },
    factory: {
        name: "Factory",
        baseCps: 260,
        count: 0,
        cost: 130000
    },
    bank: {
        name: "Bank",
        baseCps: 1400,
        count: 0,
        cost: 1400000
    },
    temple: {
        name: "Temple",
        baseCps: 7800,
        count: 0,
        cost: 20000000
    },
    wizardTower: {
        name: "Wizard Tower",
        baseCps: 44000,
        count: 0,
        cost: 330000000
    },
    shipment: {
        name: "Shipment",
        baseCps: 260000,
        count: 0,
        cost: 5100000000
    },
    alchemyLab: {
        name: "Alchemy Lab",
        baseCps: 1600000,
        count: 0,
        cost: 75000000000
    },
    portal: {
        name: "Portal",
        baseCps: 10000000,
        count: 0,
        cost: 1000000000000
    },
    timeMachine: {
        name: "Time Machine",
        baseCps: 65000000,
        count: 0,
        cost: 14000000000000
    },
    antimatterCondenser: {
        name: "Antimatter Condenser",
        baseCps: 430000000,
        count: 0,
        cost: 170000000000000
    },
    prism: {
        name: "Prism",
        baseCps: 2900000000,
        count: 0,
        cost: 2100000000000000
    },
    chancemaker: {
        name: "Chancemaker",
        baseCps: 21000000000,
        count: 0,
        cost: 26000000000000000
    },
    fractalEngine: {
        name: "Fractal Engine",
        baseCps: 150000000000,
        count: 0,
        cost: 310000000000000000
    },
    javascriptConsole: {
        name: "JavaScript Console",
        baseCps: 3300000000000,
        count: 0,
        cost: 7100000000000000000
    },
    idleverse: {
        name: "Idleverse",
        baseCps: 8300000000000,
        count: 0,
        cost: 120000000000000000000
    },
    cortexBaker: {
        name: "Cortex Baker",
        baseCps: 64000000000000,
        count: 0,
        cost: 1300000000000000000000
    },
    you: {
        name: "You",
        baseCps: 510000000000000,
        count: 0,
        cost: 14000000000000000000000
    }
};


//Defaullt bakery names
const defaultBakeryNames = [
    "Grandma's",
    "Cookie Crumble",
    "Sugar Rush",
    "Sweet Tooth ",
    "The Cookie Jar",
    "Dough Delights",
    "Heavenly Sweets",
    "Yummy ",
    "Frosting Fantasy",
    "Sweet Sensations"
];

mainCookieClicker.onclick = cookiesMadePerSecond;

function changeNameBakery(){
    changeName = window.prompt("How do you want to name your bakery?");
    if(changeName == ""){
        alert("You didn't write anything, it will change to a default name!");
        const randomDefaultNameGenerator = Math.floor(Math.random() * defaultBakeryNames.length);
        bakeryName.textContent = `${defaultBakeryNames[randomDefaultNameGenerator]}${defaultEndBakeryName}`;
    }
    else{
        bakeryName.textContent = `${changeName}${defaultEndBakeryName}`;
    }
}



// Main cookie clicker

function cookiesMadePerSecond(){
    cookiesMade++;
    cookieCounter.textContent = `${cookiesMade} cookies`;
}
//formula price = base Cost * 1.15 ** M - F (m = buildings owned) (f = type of buildings got for free)
function buyCursor(){
    if(cookieCounter > buildings.cursor.cost){
        cookieCounter -= buildings.cursor.cost;
        let priceCursor = buildings.cursor.cost * Math.pow(1.15, cost);
        
    }
}