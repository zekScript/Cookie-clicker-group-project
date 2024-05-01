// formula price = base Cost * 1.15 ** M - F (m = buildings owned) (f = type of buildings got for free)
// THIS IS THE FORMULA TO USE
let baseCost = 15;
let m = 0;
m++;
let price = baseCost * 1.15 ** m;
price = Math.ceil(price);

console.log(price);






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



