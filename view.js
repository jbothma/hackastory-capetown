(function(engine) {

    var currState = engine.initialState;

    console.log(currState);

    //currState = engine.takeTurn(currState,0);

    if (typeof(currState.nextTurn.context) !== 'undefined' &&
        typeof(currState.nextTurn.options) !== 'undefined' )
        updateView(currState.nextTurn.context,
                    currState.nextTurn.options);


    function updateView(context, options) {
        console.log(context);

        $qText = $('#questionText');
        $qMedia = $('#questionMedia');
        $aList = $('#answerList');

        // SET DESCRIPTION TEXT

        if (typeof(context.text) !== 'undefined') {
            $qText.html(context.text);
            console.log('did')
        }

        // SET DESCRIPTION MEDIA

        $qMedia.empty();

        if (typeof(context.media) !== 'undefined')
            if (context.media.type === "image")
                $qMedia.append(
                    $('<img>').attr('src',context.media.url)
                )

        // SET ANSWERS

        $aList.empty();

        options.forEach( function(option){
           $aList.append(
                $('<li>').html(option.label)
                    .on('click', function() {
                       console.log('click!' + option.)
                    })
           );
        });


    }


})(engine);