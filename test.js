const EasyDMCore = require('edmf-core');

const easyDMCore = new EasyDMCore("jupiter1.sqlite");
async function test(){
    console.log(await easyDMCore.setProperty("apikey","testapikeyxxcxcxc")); 
}

test();