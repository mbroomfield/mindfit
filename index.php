<html>
    <head>
  
        <title>MindFit</title>
        
        <link rel="stylesheet" href="css/styles.css" />
        
        <script src='https://cdn.firebase.com/js/client/2.2.1/firebase.js'></script>
        <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
        
        <script src="js/main.js"></script>
    </head>
    <body>
    
        <div id="content">
        
            <div id="header">
                <div class="header__week">
                    Week of <span id="display_week"></span>
                </div>
            </div>
  
            <div id="form">
                <div class="question">
                    <div class="question__text"  id="question__text_1">
                        How are you feeling this week?
                    </div>
                    <div class="question__prompt">
                        <textarea id="question__prompt_1"  type="text" class="answer__field"></textarea>
                    </div>
                </div>
                <div class="question">
                    <div class="question__text"  id="question__text_2">
                        Did you work on your goals for this week?
                    </div>
                    <div class="question__prompt">
                        <textarea id="question__prompt_2"  type="text" class="answer__field"></textarea>
                    </div>
                </div>
                <div class="question">
                    <div class="question__text"  id="question__text_3">
                        What do you want to work on for next week?
                    </div>
                    <div class="question__prompt">
                        <textarea id="question__prompt_3"  type="text" class="answer__field"></textarea>
                    </div>
                </div>
                <input id="submit" type="button" value="Submit">
            </div>
            
        
            <div class="records">
            </div>
            
        </div>
        
    </body>
</html>