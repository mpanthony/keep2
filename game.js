function Game(adventure, savedState) {
    this.adventure = adventure;

    this.state = {
        turns: 0,
        objectState: new Map(),
        actorState : new Map(),
        over : false
    }
    
    this.getAventure = function() {
        return this.adventure;
    }

    this.command = function(command) {
        this.state.turns++;

        console.log(`Issuing command ${command} to actor on turn ${this.state.turns}`);
    }
}

exports.Game = Game;
