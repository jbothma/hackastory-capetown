(function(engine) {

    var currState = engine.initialState;
    var newState = engine.takeTurn(currState,0);

    console.log(newState);
    console.log(typeof newState.ending);
    console.log(typeof newState.sheep);

    if (typeof newState.ending !== null) {
        console.log("Game over");
    }

})(engine);