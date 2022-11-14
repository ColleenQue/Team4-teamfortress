const progress = require("./data/progress");
const fillblank=require('./data/fillblank");

/*Colleen's test progress*/
async function testProgress(){
    try{
        const user = await progress.updateProgress('hihi',20);
        console.log(user);
    }
    catch(e){
        console.log(e);
    }
}

//fill in blank tests from Cindy
async function testFillBlank(){
    //print out the word used for fillblank
    try{
        const word = await fillblank.WordToday();
        console.log(word);
    }
    catch(e){
        console.log(e);
    }

    //should print out same word used for fillblank
    try{
        const word = await fillblank.WordToday();
        console.log(word);
    }
    catch(e){
        console.log(e);
    }

}

/*
Bishawjit's test progressbar
increment of progressbar: works
decrement of progressbar: fails
Implementation during activities: fail (need to complete implmentation with activities)
*/ 


testProgress();

