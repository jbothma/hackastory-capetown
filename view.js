(function(engine) {

    var currState = null;

    //currState = engine.takeTurn(currState,0);
    function updateState(n) {

        if (currState === null){
            currState = engine.initialState;
        } else {
            currState = engine.takeTurn(currState, n );
        }

        console.log(currState);

        if (currState.turn !== null) {
            updateView( currState.turn.context,
                        currState.turn.options);
        } else {
            if (typeof currState.ending !== 'undefined'){
                endGame(currState.ending.vitals);
            }
        }
    }
    updateState();

    function updateView(context, options) {

        var $newCard = $('#mainCard').clone()
            .attr('id','newCard')
            .attr('style', '')
            .appendTo( $('body') )
            .show()
            .transition({left: '0'}, 500, function() {
                $('#mainCard').remove();
                $newCard.attr('id','mainCard')
                    .css('position','static');
            });

        var $qText = $newCard.find('.questionText');
        var $qMedia = $newCard.find('.questionMedia');
        var $aList = $newCard.find('.answerList');
        // SET DESCRIPTION TEXT

        if (typeof(context.text) !== 'undefined')
            $qText.html(context.text);

        // SET DESCRIPTION MEDIA

        $qMedia.empty();

        if (typeof(context.media) !== 'undefined')
            if (context.media.type === "image")
                $qMedia.append(
                    $('<img>').attr('src',context.media.url)
                );

        // SET ANSWERS

        $aList.empty();

        var option;

        Object.keys(options).forEach(function(n) {

           option = options[n];

           $aList.append(
                $('<li>').html(option.label)
                    .on('click', function() {
                        //animate();
                        updateState(n);
                    })
           );
        });


    }

    function endGame(vitals){
        var $endCard = $('<main>')
            .addClass('gameOver')
            .append( $('<section>')
                .append( $('<header>').html('Thank you for playing!'))
                .append( $('<article>').html(makeEndText(vitals)))

            )
            .transition({left: '0'}, 500, function() {
                $('#mainCard').remove();
            })
            .appendTo( $('body') );
    }

    function makeEndText(vitals){
        var txt = "";

        var vital;
        var won = false;

        Object.keys(vitals).forEach(function(n) {

            vital = vitals[n];

            if (typeof vital.win !== 'undefined')
                if (vital.win)
                    won = true;
        });

        if (won) {
            txt += "<h1>You've won!</h1>";
        } else {
            txt += "<h1>You've lost!</h1>";
        }

        txt += "<p>Your score is:</p>";
        txt += vitals.peacefulProtest.value + " peacefulProtest<br>";
        txt += vitals.protestSuccess.value + " protestSuccess<br>";

        return txt;

    }


})(engine);