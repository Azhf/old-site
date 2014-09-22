 var karma = 0
 var cash = 0
 var accounts = 1
 
 function mineBTC(number) {
	cash = cash + number;
	document.getElementById("cash").innerHTML = cash;
};
 
 function karmaClick(number) {
	karma = karma + number;
	document.getElementById("karma").innerHTML = karma;
};

var bots = 0;
var miningBots = 0;

function buyBot() {
	var botCost = Math.floor(10 * Math.pow(1.1,bots));     //works out the cost of this bot
	if(cash >= botCost){                             //checks that the player can afford the bot
		bots = bots + 1;                                   //increases number of bots
    	cash = cash - botCost;                          //removes the karma spent
        document.getElementById('bots').innerHTML = bots;  //updates the number of bots for the user
        document.getElementById('cash').innerHTML = cash;  //updates the number of karma for the user
	};
    var nextCost = Math.floor(10 * Math.pow(1.1,bots));       //works out the cost of the next bot
    document.getElementById('botCost').innerHTML = nextCost;  //updates the bot cost for the user
};

function buyBTCBot() {
	var miningBotCost = Math.floor(10 * Math.pow(1.1,bots));     //works out the cost of this bot
	if(cash >= miningBotCost){                             //checks that the player can afford the bot
		miningBots = miningBots + 1;                                   //increases number of bots
    	cash = cash - miningBotCost;                          //removes the karma spent
        document.getElementById('miningBots').innerHTML = miningBots;  //updates the number of bots for the user
        document.getElementById('cash').innerHTML = cash;  //updates the number of karma for the user
	};
    var nextCost = Math.floor(10 * Math.pow(1.1,miningBots));       //works out the cost of the next bot
    document.getElementById('miningBotCost').innerHTML = nextMiningBotCost;  //updates the bot cost for the user
};

function buyAccount() {
	var noveltyCost = Math.floor(10 * Math.pow(1.1,accounts - 1));     //works out the cost of this bot
	if(cash >= noveltyCost){                             //checks that the player can afford the bot
		accounts = accounts + 1;                                   //increases number of bots
    	cash = cash - noveltyCost;                          //removes the karma spent
        document.getElementById('accounts').innerHTML = accounts;  //updates the number of bots for the user
        document.getElementById('cash').innerHTML = cash;  //updates the number of karma for the user
	};
    var nextCost = Math.floor(10 * Math.pow(1.1,bots));       //works out the cost of the next bot
    document.getElementById('noveltyCost').innerHTML = nextAccCost;  //updates the bot cost for the user
};

window.setInterval(function(){
	karmaClick(bots);

}, 1000);

window.onload = function() {
  load();
};

function save() {
	var save = {
    karma: karma,
    bots: bots,
	cash: cash,
	accounts: accounts,
	miningBots: miningBots
		}
	localStorage.setItem("save",JSON.stringify(save));
};

function load() {
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.karma !== "undefined") karma = savegame.karma;
	if (typeof savegame.bots !== "undefined") bots = savegame.bots;
	if (typeof savegame.cash !== "undefined") cash = savegame.cash;
	if (typeof savegame.accounts !== "undefined") accounts = savegame.accounts;
	if (typeof savegame.miningBots !== "undefined") miningBots = savegame.miningBots;
};

function deleteSave() {
	localStorage.removeItem("save")
};

window.setInterval(function(){
	save();
}, 60000);

window.setInterval(function(){
	var localAccounts = accounts - 1;
	karmaClick(localAccounts * 5);

}, 1000);

window.setInterval(function(){
	mineBTC(miningBots);

}, 1000);