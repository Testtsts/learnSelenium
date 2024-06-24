
const { Builder, By, until } = require("selenium-webdriver");


function biasedRandom(min,max,bias,influence){
    var rnd = Math.random() * (max - min) + min,
    mix = Math.random() * influence
    return Math.round( rnd *(1-mix) + bias * mix);
}

var rand;

async function fillSurvey(){
    let driver = await new Builder().forBrowser("chrome").build();
    try{
        for(i=0;i<10;i++){
            await driver.get("https://docs.google.com/forms/d/e/1FAIpQLSfRRo-Pc7xZ9PYU2TEDRdUGhocWgXsCe8GGhw1Wl1JvJqfWEQ/viewform")
            var checkbox = await driver.findElements(By.className("docssharedWizToggleLabeledContainer"));
            rand = biasedRandom(1,4,3.5,0.1);
            // console.log("max/4/")
            // console.log(rand)
            // console.log("//////")
            await checkbox[rand-1].click();
            rand = biasedRandom(1,4,2,0.1);
            console.log("max/4/")
            console.log(rand)
            console.log("//////")
            await checkbox[rand+3].click();
            rand = biasedRandom(1,3,2.5,0.05);
            // console.log("max/3/")
            // console.log(rand)
            // console.log("//////")
            await checkbox[rand+7].click();
            rand = biasedRandom(1,3,1.5,1);
            // console.log("max/3/")
            // console.log(rand)
            // console.log("//////")
            await checkbox[rand+10].click();
            rand = biasedRandom(1,4,3.5,1);
            // console.log("max/4/")
            // console.log(rand)
            // console.log("//////")
            await checkbox[rand+13].click();
            await driver.findElement(By.css("#mG61Hd > div.RH5hzf.RLS9Fe > div > div.ThHDze > div > div.lRwqcd > div > span")).click();
            await driver.sleep(biasedRandom(200,10000,200,0))
        }
        
        
    }
    finally{
        await driver.quit();
    }
}

fillSurvey();
// var count1=0,count2=0,count3=0,count4=0;

    
// for(i=0;i<250;i++){
    
//     rand = biasedRandom(1,3,1.5,1);
//     // rand = biasedRandom(1,4,3.5,0.1);
//     switch(rand){
//         case 1:
//             count1++
//             break;
//         case 2:
//             count2++
//             break;
//         case 3:
//             count3++
//             break;
//         case 4:
//             count4++
//             break;
//     }
    
// }
// console.log(count1,count2,count3,count4);
// console.log( count1+count2+count3+count4)