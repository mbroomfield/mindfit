$( document ).on( 'ready', function() {
    
    // initialize db
    Database.init();
    
    initSubmit();
    
    setHeaderTime();
    
} );

function initSubmit() {
    document.getElementById( 'submit' ).addEventListener( 'click', function() {
        var results = createResultsObj();
        console.log( results );
        Database.addRecord( results );
    } );
}

function setHeaderTime() {
    var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    var weekTimestamp = getWeekTimestamp();
    var week = months[ weekTimestamp.getMonth() ] + " " + weekTimestamp.getDate() + ", " + weekTimestamp.getFullYear();
    document.getElementById( 'display_week' ).innerHTML = week;
}

function getWeekTimestamp() {
    var today = new Date();
    var diff = today.getDay();
    var sunday = new Date(  today.getFullYear(), today.getMonth(), today.getDate() - diff );
    return sunday;
}

function createResultsObj() {
    var results = {};
    
    var questions = document.getElementsByClassName( 'question' );
    for ( var i=0; i < questions.length; i++ ) {
        var qText = document.getElementById( 'question__text_' + (i+1) ).innerHTML.trim() || '';
        var aText = document.getElementById( 'question__prompt_' + (i+1) ).value || '';
        document.getElementById( 'question__prompt_' + (i+1) ).value = '';
        results[ 'question' + (i+1) ] = {
            'q'   : qText
            , 'a' : aText
        };
    }
    return results;
}


/*********************************
 * DATABASE
 *********************************/
var Database = ( function() {
    
    var _db;
    var _key;
    
    function _getDayTimestamp() {
        var dayStamp = getWeekTimestamp();
        return dayStamp.getTime();
    }
    
    function initDb() {
        _db  = new Firebase('https://brilliant-inferno-2015.firebaseio.com/');
        _key = _getDayTimestamp();
        
        _db.once( 'value', function(s) {
            console.log( s.child( _key ).val() )
        } );
    }
    
    function addRecord( obj ) {
        var timeKey = _db.child( _key );
        timeKey.set( obj );
    }
    
    function getRecord( key ) {
        return _db.child( key );
    }
    
    return {
        init        : initDb
        , addRecord : addRecord
        , getRecord : getRecord
    }
    
} )();

