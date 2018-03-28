var adventure = require("./adventure");
var game = require("./game");
var readline = require("readline");

var rl = readline.createInterface(process.stdin, process.stdout);

console.log(`Welcome to ${adventure.info.title} ver ${adventure.info.version}`);
console.log(`Copyright (c) ${adventure.info.copyright}`);
console.log("Initializing");


adventure.initialize().then(function() {
    console.log("Ready to go!");

    var gameInstance = new game.Game(adventure, "");

    // Once initialized, begin the game loop
    rl.setPrompt(">");
    rl.on("line", function(command) {
        if (command === 'quit') {
            console.log("What?  you're done???");
            rl.close();
        } else {
            gameInstance.command(command);
            rl.prompt();
        }            
    });

    console.log("Prompting");
    rl.prompt();
});
