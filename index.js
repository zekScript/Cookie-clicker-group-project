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
    "News: Dark Souls III: The Ringed City DLC released, concluding the Dark Souls trilogy in 2017.",
    "News: Hidetaka Miyazaki hinted at future projects, sparking speculation among Dark Souls fans.",
    "News: The Dark Souls community organized tournaments and events, showcasing PvP skills and strategies.",
    "News: A remastered version of the original Dark Souls game was announced, featuring improved graphics and performance.",
    "News: Fans eagerly awaited news on Elden Ring, the upcoming collaboration between FromSoftware and George R.R. Martin.",
    "News: Dark Souls speedrunning community continued to break records and discover new glitches and skips.",
    "News: FromSoftware released Sekiro: Shadows Die Twice in 2019, praised for its challenging gameplay and unique setting.",
    "News: Dark Souls fan art and lore discussions thrived on social media platforms and forums.",
    "News: Players delved into the intricate lore of the Dark Souls universe, uncovering hidden stories and connections.",
    "News: The difficulty of Dark Souls games remained a topic of debate, with some praising the challenge and others seeking accessibility options.",
    "News: Dark Souls-inspired games, such as Salt and Sanctuary and Hollow Knight, gained popularity among fans of the genre.",
    "News: FromSoftware teased cryptic hints and trailers for upcoming projects, fueling speculation and anticipation.",
    "News: Dark Souls merchandise, including figures and apparel, became sought-after collectibles for fans.",
    "News: The Dark Souls community organized charity events and fundraisers, showcasing the positive impact of gaming communities.",
    "News: Players created custom challenge runs and mods to add new layers of difficulty and complexity to Dark Souls games.",
    "News: FromSoftware's signature level design and atmosphere continued to be praised by critics and players alike.",
    "News: Dark Souls speedrunning became a staple of gaming marathons and online streaming events, attracting large audiences.",
    "News: Fans eagerly awaited news on potential sequels or spiritual successors to the Dark Souls series.",
    "News: FromSoftware's influence on the gaming industry continued to be felt, inspiring developers and shaping the action RPG genre.",
    "News: Dark Souls' interconnected world and branching paths provided ample opportunities for exploration and discovery.",
    "News: Players shared their most memorable moments and epic battles in Dark Souls through screenshots and videos.",
    "News: FromSoftware maintained a reputation for delivering challenging and rewarding gameplay experiences, earning the admiration of fans worldwide.",
    "News: Dark Souls community collaborated on wikis and guides, sharing knowledge and strategies to help fellow players.",
    "News: Players engaged in jolly cooperation and invaded each other's worlds, adding a dynamic multiplayer aspect to the Dark Souls experience.",
    "News: News: FromSoftware's dedication to crafting immersive worlds and deep narratives continued to captivate players, ensuring the legacy of Dark Souls.",
    "News: Dark Souls-themed events and gatherings were held at gaming conventions, bringing fans together to celebrate their love for the series.",
    "News: The Dark Souls community created fan-made challenges and competitions, testing the limits of players' skill and perseverance.",
    "News: FromSoftware released Dark Souls Trilogy Box Set, containing all three Dark Souls games and their respective DLCs, to celebrate the series' legacy.",
    "News: Players discovered hidden secrets and easter eggs in Dark Souls games, fueling speculation and lore discussions within the community.",
    "News: FromSoftware announced the development of a new IP, sparking excitement and curiosity among Dark Souls fans about the studio's next project.",
    "News: The Dark Souls subreddit reached a milestone of one million subscribers, highlighting the enduring popularity of the series.",
    "News: Players organized online tournaments and leagues, showcasing their mastery of PvP combat in the Dark Souls games.",
    "News: FromSoftware released updates and patches to address balancing issues and improve the overall experience for Dark Souls players.",
    "News: Dark Souls-themed cosplay contests and events were held at gaming conventions, with fans showcasing their favorite characters and costumes.",
    "News: Players created and shared custom fan-made levels and challenges using modding tools, expanding the replayability of Dark Souls games.",
    "News: FromSoftware announced collaborations with other studios to bring Dark Souls characters and content to other games, sparking crossover events and collaborations.",
    "News: The Dark Souls community organized fan conventions and meetups, providing opportunities for fans to connect with each other and share their passion for the series."
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
    else if(changeName === null){
        return bakeryName;
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
        cookieCounter.textContent = `${cookiesMade} Maiden`;
    }
    cookiesMade++;
    cookieCounter.textContent = `${cookiesMade} Maidens`;
    // STATS FROM THE RIGHT CODE HERE

    setTimeout(() => {
        maidensMade.innerText = `Maidens Bank: ${cookiesMade}`;
    }, 1000)
}


