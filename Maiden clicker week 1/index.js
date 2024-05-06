// Cookie clicker Program
/* 
Todo list:
1) make a window alert when pressed on bakeryName *DONE*
2) display: none when hes not close to getting more buildings
3) make a random appearence on golden cookies
4) when on click cookie count to the x cookies *DONE*
5) count how many cookies made per second 
6) when bought buildings make them functional *Kinda done*
7) make buy/sell functional *Almost done*
8) i need to count by formula from cookies wiki about 1x 10x and 100x *almost done*
9) when bought take away cookies *DONE*
10) GOODLUCK!
*/



const cursorPrice = document.getElementById("cursorPrice");
const grandmaPrice = document.getElementById("grandmaPrice");
const farmPrice = document.getElementById("farmPrice");
const minePrice = document.getElementById("minePrice");
const factoryPrice = document.getElementById("factoryPrice");
const bankPrice = document.getElementById("bankPrice");
const templePrice = document.getElementById("templePrice");
const wizardTowerPrice = document.getElementById("wizardTowerPrice");
const shipmentPrice = document.getElementById("shipmentPrice");
const alchemyLabPrice = document.getElementById("alchemyLabPrice");
const portalPrice = document.getElementById("portalPrice");
const timeMachinePrice = document.getElementById("timeMachinePrice");
const antiMatterCondensorPrice = document.getElementById("antiMatterCondensorPrice");
const prismPrice = document.getElementById("prismPrice");
const chanceMakerPrice = document.getElementById("chanceMakerPrice");
const fractialEnginePrice = document.getElementById("fractialEnginePrice");
const javascriptPrice = document.getElementById("javascriptPrice");
const idleversePrice = document.getElementById("idleversePrice");
const cortexBakerPrice = document.getElementById("cortexBakerPrice");
const youPrice = document.getElementById("youPrice");
// My buttons bellow / Prices upper way
const inTotal = document.getElementById("inTotal");
const times1Btn = document.getElementById("times1Btn");
const times10Btn = document.getElementById("times10Btn");
const times100Btn = document.getElementById("times100Btn");
const cookieCounter = document.getElementById("cookieCounter");
const buyBuildings = document.getElementById("buyBuildings");
const sellBuilldings = document.getElementById("sellBuilldings");
const mainCookieClicker = document.getElementById("mainCookieClicker");
const defaultEndBakeryName = "'s bakery";
let bakeryName = document.getElementById("bakeryName");
let cookiesMade = 1000; // IT SHOULD BE ZERO BY DEFAULT BUT FOR TEST I CAN MODIFY IT!
let changeName;
let price = 0;
let times1 = 1;
let times10 = 10;
let times100 = 100;
const buildings = {
    cursor: {
        name: "Cursor",
        baseCps: 0.1,
        count: 0,
        cost: 15,
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
// News here!
// const newsLetter = [

// ];

mainCookieClicker.onclick = cookiesMadePerSecond;

function changeNameBakery(){
    changeName = window.prompt("How do you want to name your bakery?");
    if(changeName == ""){
        alert("You didn't write anything, it will change to a default name!"); //Placeholder
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

// formula price = base Cost * 1.15 ** M - F (m = buildings owned) (f = type of buildings got for free)
// DONT DELETE THIS CODE AT ALL COST !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// there is a bug
function buyCursor(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.cursor.cost * 1.15 ** buildings.cursor.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.cursor.count++;
        price = buildings.cursor.cost * 1.15 ** buildings.cursor.count;
        price = Math.ceil(price);
        console.log(buildings.cursor.count); // This is good code
        console.log(price); // this is a good output
        cursorPrice.textContent = `${price} cookies`
        inTotal.textContent = buildings.cursor.count;
        function baseCps(){
            cookiesMade += buildings.cursor.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}

else{
    alert(`You do not have enough cookies Right now! You have ${cookiesMade} cookies currently.`);
}
}

console.log(price);

function buyGrandma(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.grandma.cost * 1.15 ** buildings.grandma.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.grandma.count++;
        price = buildings.grandma.cost * 1.15 ** buildings.grandma.count;
        price = Math.ceil(price);
        grandmaPrice.textContent = `${price} cookies`
        inTotal.textContent = buildings.grandma.count;
        
        
        
        
        
        console.log(price);
        
        function baseCps(){
            cookiesMade += buildings.grandma.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}
}
function buyFarm(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.farm.cost * 1.15 ** buildings.farm.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.farm.count++;
        price = buildings.farm.cost * 1.15 ** buildings.farm.count;
        price = Math.ceil(price);
        cursorPrice.textContent = `${price} cookies`
        inTotal.textContent = buildings.farm.count;







        function baseCps(){
            cookiesMade += buildings.farm.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}
}
function buyMine(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.mine.cost * 1.15 ** buildings.mine.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.mine.count++;
        price = buildings.mine.cost * 1.15 ** buildings.mine.count;
        price = Math.ceil(price);
        cursorPrice.textContent = `${price} cookies`
        
        inTotal.textContent = buildings.mine.count;



        function baseCps(){
            cookiesMade += buildings.mine.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}
}
function buyFactory(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.factory.cost * 1.15 ** buildings.factory.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.factory.count++;
        price = buildings.cursor.cost * 1.15 ** buildings.cursor.count;
        price = Math.ceil(price);
        cursorPrice.textContent = `${price} cookies`
        inTotal.textContent = buildings.factory.count;
        function baseCps(){
            cookiesMade += buildings.factory.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}
}
function buyBank(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.bank.cost * 1.15 ** buildings.bank.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.bank.count++;
        price = buildings.bank.cost * 1.15 ** buildings.bank.count;
        price = Math.ceil(price);
        cursorPrice.textContent = `${price} cookies`
        
        inTotal.textContent = buildings.bank.count;
        function baseCps(){
            cookiesMade += buildings.bank.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}
}
function buyTemple(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.temple.cost * 1.15 ** buildings.temple.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.temple.count++;
        price = buildings.temple.cost * 1.15 ** buildings.temple.count;
        price = Math.ceil(price);
        cursorPrice.textContent = `${price} cookies`
        inTotal.textContent = buildings.temple.count;
        function baseCps(){
            cookiesMade += buildings.temple.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}
}
function buyWizardTower(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.wizardTower.cost * 1.15 ** buildings.wizardTower.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.wizardTower.count++;
        price = buildings.wizardTower.cost * 1.15 ** buildings.wizardTower.count;
        price = Math.ceil(price);
        cursorPrice.textContent = `${price} cookies`
        
        inTotal.textContent = buildings.wizardTower.count;
        function baseCps(){
            cookiesMade += buildings.wizardTower.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}
}
function buyShipment(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.shipment.cost * 1.15 ** buildings.shipment.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.shipment.count++;
        price = buildings.shipment.cost * 1.15 ** buildings.shipment.count;
        price = Math.ceil(price);
        cursorPrice.textContent = `${price} cookies`
        inTotal.textContent = buildings.shipment.count;
        function baseCps(){
            cookiesMade += buildings.shipment.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}
}
function buyAlchemyLab(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.alchemyLab.cost * 1.15 ** buildings.alchemyLab.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.alchemyLab.count++;
        price = buildings.alchemyLab.cost * 1.15 ** buildings.alchemyLab.count;
        price = Math.ceil(price);
        cursorPrice.textContent = `${price} cookies`
        inTotal.textContent = buildings.alchemyLab.count;
        function baseCps(){
            cookiesMade += buildings.alchemyLab.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}
}
function buyPortal(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.portal.cost * 1.15 ** buildings.portal.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.portal.count++;
        price = buildings.portal.cost * 1.15 ** buildings.portal.count;
        price = Math.ceil(price);
        cursorPrice.textContent = `${price} cookies`
        inTotal.textContent = buildings.alchemyLab.count;
        function baseCps(){
            cookiesMade += buildings.portal.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}
}
function buyTimeMachine(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.timeMachine.cost * 1.15 ** buildings.timeMachine.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.timeMachine.count++;
        price = buildings.portal.cost * 1.15 ** buildings.portal.count;
        price = Math.ceil(price);
        cursorPrice.textContent = `${price} cookies`
        inTotal.textContent = buildings.timeMachine.count;
        function baseCps(){
            cookiesMade += buildings.timeMachine.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}
}
function buyAntimatterCondensor(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.antimatterCondenser.cost * 1.15 ** buildings.antimatterCondenser.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.antimatterCondenser.count++;
        price = buildings.antimatterCondenser.cost * 1.15 ** buildings.antimatterCondenser.count;
        price = Math.ceil(price);
        cursorPrice.textContent = `${price} cookies`
        
        inTotal.textContent = buildings.antimatterCondenser.count;
        function baseCps(){
            cookiesMade += buildings.antimatterCondenser.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}
}
function buyPrism(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.prism.cost * 1.15 ** buildings.prism.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.prism.count++;
        price = buildings.prism.cost * 1.15 ** buildings.prism.count;
        price = Math.ceil(price);
        cursorPrice.textContent = `${price} cookies`
        
        inTotal.textContent = buildings.prism.count;
        function baseCps(){
            cookiesMade += buildings.prism.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}
}
function buyChanceMaker(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.chancemaker.cost * 1.15 ** buildings.chancemaker.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.chancemaker.count++;
        price = buildings.chancemaker.cost * 1.15 ** buildings.chancemaker.count;
        price = Math.ceil(price);
        cursorPrice.textContent = `${price} cookies`
        inTotal.textContent = buildings.chancemaker.count;
        function baseCps(){
            cookiesMade += buildings.chancemaker.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}
}
function buyFractialEngine(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.fractalEngine.cost * 1.15 ** buildings.fractalEngine.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.fractalEngine.count++;
        price = buildings.fractalEngine.cost * 1.15 ** buildings.fractalEngine.count;
        price = Math.ceil(price);
        cursorPrice.textContent = `${price} cookies`
        inTotal.textContent = buildings.fractalEngine.count;
        function baseCps(){
            cookiesMade += buildings.fractalEngine.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}
}
function buyJavascript(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.javascriptConsole.cost * 1.15 ** buildings.javascriptConsole.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.javascriptConsole.count++;
        price = buildings.javascriptConsole.cost * 1.15 ** buildings.cursor.count;
        price = Math.ceil(price);
        cursorPrice.textContent = `${price} cookies`
        inTotal.textContent = buildings.javascriptConsole.count;
        function baseCps(){
            cookiesMade += buildings.javascriptConsole.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}
}
function buyIdleverse(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.idleverse.cost * 1.15 ** buildings.idleverse.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.idleverse.count++;
        price = buildings.idleverse.cost * 1.15 ** buildings.idleverse.count;
        price = Math.ceil(price);
        cursorPrice.textContent = `${price} cookies`
        inTotal.textContent = buildings.idleverse.count;
        function baseCps(){
            cookiesMade += buildings.idleverse.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}
}
function buyCortexBaker(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.cortexBaker.cost * 1.15 ** buildings.cortexBaker.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.cortexBaker.count++;
        price = buildings.cortexBaker.cost * 1.15 ** buildings.cortexBaker.count;
        price = Math.ceil(price);
        cursorPrice.textContent = `${price} cookies`
        inTotal.textContent = buildings.cortexBaker.count;
        function baseCps(){
            cookiesMade += buildings.cortexBaker.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}
}
function buyYou(){
    if(cookiesMade >= price && times1Btn.checked && buyBuildings.checked){ 

        price = buildings.you.cost * 1.15 ** buildings.you.count;
        price = Math.ceil(price);
        cookiesMade -= price;
        buildings.you.count++;
        price = buildings.you.cost * 1.15 ** buildings.you.count;
        price = Math.ceil(price);
        cursorPrice.textContent = `${price} cookies`
        inTotal.textContent = buildings.you.count;
        function baseCps(){
            cookiesMade += buildings.you.baseCps;
            cookiesMade = Math.round(cookiesMade * 10) / 10;
            cookieCounter.textContent = `${cookiesMade} cookies`;
        }
        setInterval(baseCps, 1000);
}
}


// DEAD END OF BUILDINGS!!!!        DEAD END OF BUILDINGS!!!!           DEAD END OF BUILDINGS!!!!    


// upgrades
// not yet