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
const randomNewsGenerator = document.getElementById("randomNewsGenerator");
// STATS HERE
const maidensMade = document.getElementById("maidensMade");
const maidensHiredThisAscension = document.getElementById("maidensHiredThisAscension");
const maidensMadeAllTime = document.getElementById("maidensMadeAllTime");
const maidensPerSecond = document.getElementById("maidensPerSecond");
const runStartAgo = document.getElementById("runStartAgo");
const goldenMaidenClicks = document.getElementById("goldenMaidenClicks");
const maidensPerClick = document.getElementById("maidensPerClick");
let maidenHireClicks = document.getElementById("maidenHireClicks");
const defaultEndBakeryName = "'s maiden army";
// LET DECLARATIONS
let bakeryName = document.getElementById("bakeryName");
let cookiesMade = 0; // IT SHOULD BE ZERO BY DEFAULT BUT FOR TEST I CAN MODIFY IT!
let changeName;
let price = 0;
let times1 = 1;
let times10 = 10;
let times100 = 100;
let countStats = 0;
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
    "Gwynevere the Cookie Keeper",
    "Estus Embersmith",
    "Nito's Nibbler",
    "Seath's Sugar Sorceress",
    "Gravelord Glaze",
    "Artorias the Baker",
    "Manus the Muffin Maker",
    "Quelaag's Crumb Carrier",
    "Ornstein's Oven Master",
    "Sif's Snack Sentinel"
];
// Random news generator here
const darkSoulsNews = [
    "Dark Souls III: The Ringed City DLC released, concluding the Dark Souls trilogy in 2017.",
    "Hidetaka Miyazaki hinted at future projects, sparking speculation among Dark Souls fans.",
    "The Dark Souls community organized tournaments and events, showcasing PvP skills and strategies.",
    "A remastered version of the original Dark Souls game was announced, featuring improved graphics and performance.",
    "Fans eagerly awaited news on Elden Ring, the upcoming collaboration between FromSoftware and George R.R. Martin.",
    "Dark Souls speedrunning community continued to break records and discover new glitches and skips.",
    "FromSoftware released Sekiro: Shadows Die Twice in 2019, praised for its challenging gameplay and unique setting.",
    "Dark Souls fan art and lore discussions thrived on social media platforms and forums.",
    "Players delved into the intricate lore of the Dark Souls universe, uncovering hidden stories and connections.",
    "The difficulty of Dark Souls games remained a topic of debate, with some praising the challenge and others seeking accessibility options.",
    "Dark Souls-inspired games, such as Salt and Sanctuary and Hollow Knight, gained popularity among fans of the genre.",
    "FromSoftware teased cryptic hints and trailers for upcoming projects, fueling speculation and anticipation.",
    "Dark Souls merchandise, including figures and apparel, became sought-after collectibles for fans.",
    "The Dark Souls community organized charity events and fundraisers, showcasing the positive impact of gaming communities.",
    "Players created custom challenge runs and mods to add new layers of difficulty and complexity to Dark Souls games.",
    "FromSoftware's signature level design and atmosphere continued to be praised by critics and players alike.",
    "Dark Souls speedrunning became a staple of gaming marathons and online streaming events, attracting large audiences.",
    "Fans eagerly awaited news on potential sequels or spiritual successors to the Dark Souls series.",
    "FromSoftware's influence on the gaming industry continued to be felt, inspiring developers and shaping the action RPG genre.",
    "Dark Souls' interconnected world and branching paths provided ample opportunities for exploration and discovery.",
    "Players shared their most memorable moments and epic battles in Dark Souls through screenshots and videos.",
    "FromSoftware maintained a reputation for delivering challenging and rewarding gameplay experiences, earning the admiration of fans worldwide.",
    "Dark Souls community collaborated on wikis and guides, sharing knowledge and strategies to help fellow players.",
    "Players engaged in jolly cooperation and invaded each other's worlds, adding a dynamic multiplayer aspect to the Dark Souls experience.",
    "FromSoftware's dedication to crafting immersive worlds and deep narratives continued to captivate players, ensuring the legacy of Dark Souls.",
    "Dark Souls-themed events and gatherings were held at gaming conventions, bringing fans together to celebrate their love for the series.",
    "The Dark Souls community created fan-made challenges and competitions, testing the limits of players' skill and perseverance.",
    "FromSoftware released Dark Souls Trilogy Box Set, containing all three Dark Souls games and their respective DLCs, to celebrate the series' legacy.",
    "Players discovered hidden secrets and easter eggs in Dark Souls games, fueling speculation and lore discussions within the community.",
    "FromSoftware announced the development of a new IP, sparking excitement and curiosity among Dark Souls fans about the studio's next project.",
    "The Dark Souls subreddit reached a milestone of one million subscribers, highlighting the enduring popularity of the series.",
    "Players organized online tournaments and leagues, showcasing their mastery of PvP combat in the Dark Souls games.",
    "FromSoftware released updates and patches to address balancing issues and improve the overall experience for Dark Souls players.",
    "Dark Souls-themed cosplay contests and events were held at gaming conventions, with fans showcasing their favorite characters and costumes.",
    "Players created and shared custom fan-made levels and challenges using modding tools, expanding the replayability of Dark Souls games.",
    "FromSoftware announced collaborations with other studios to bring Dark Souls characters and content to other games, sparking crossover events and collaborations.",
    "The Dark Souls community organized fan conventions and meetups, providing opportunities for fans to connect with each other and share their passion for the series."
];

// random news generator


window.addEventListener("load", () => {
    const randomNews = Math.floor(Math.random() * darkSoulsNews.length);
    randomNewsGenerator.textContent = darkSoulsNews[randomNews];
})

setInterval(() => {
    const randomNews = Math.floor(Math.random() * darkSoulsNews.length);
    randomNewsGenerator.textContent = darkSoulsNews[randomNews];
}, 10000)


mainCookieClicker.onclick = cookiesMadePerSecond;

function changeNameBakery(){
    changeName = window.prompt("How do you want to name your Maiden Army?");
    if(changeName == ""){
        alert("You didn't write anything, it will change to a default name!"); //Placeholder
        const randomDefaultNameGenerator = Math.floor(Math.random() * defaultBakeryNames.length);
        bakeryName.textContent = `${defaultBakeryNames[randomDefaultNameGenerator]}${defaultEndBakeryName}`;
    }
    else{
        bakeryName.textContent = `${changeName}${defaultEndBakeryName}`;
    }
}

window.addEventListener("load", () => {
    const randomNameGenerator = Math.floor(Math.random() * defaultBakeryNames.length);
    bakeryName.textContent = `${defaultBakeryNames[randomNameGenerator]}${defaultEndBakeryName}`;
})


// Main cookie clicker

function cookiesMadePerSecond(){
    if(cookiesMade == 1){
        cookieCounter.textContent = `${cookiesMade} Maiden`
    }
    cookiesMade++;
    cookieCounter.textContent = `${cookiesMade} Maidens`;
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


