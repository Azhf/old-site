 var karma = 0
 
 function karmaClick(number) {
	karma = karma + number;
	document.getElementById("karma").innerHTML = karma;
};

var bots = 0;

function buyBot() {
	var botCost = Math.floor(10 * Math.pow(1.1,bots));     //works out the cost of this bot
	if(karma >= botCost){                             //checks that the player can afford the bot
		bots = bots + 1;                                   //increases number of bots
    	karma = karma - botCost;                          //removes the karma spent
        document.getElementById('bots').innerHTML = bots;  //updates the number of bots for the user
        document.getElementById('karma').innerHTML = karma;  //updates the number of karma for the user
	};
    var nextCost = Math.floor(10 * Math.pow(1.1,bots));       //works out the cost of the next bot
    document.getElementById('botCost').innerHTML = nextCost;  //updates the bot cost for the user
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
		}
	localStorage.setItem("save",JSON.stringify(save));
};

function load() {
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.karma !== "undefined") karma = savegame.karma;
	if (typeof savegame.bots !== "undefined") bots = savegame.bots;
};

function deleteSave() {
	localStorage.removeItem("save")
};

window.setInterval(function(){
	save();
}, 60000);