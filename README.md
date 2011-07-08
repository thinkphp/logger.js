Logger.js
=========

JavaScript Logger Panel

How to use
----------
  
    You must to include the JS file in the head of your HTML document or body.
    <script type="text/javascript" src="logger.js"></script>

    #html
    <div id="panel"></div>

    #js
    var panel = document.getElementById("panel"),
        myLogger = new Logger();
        panel.appendChild(myLogger.domElement);
        myLogger.log('hello word'); 

    or 
     
        document.body.appendChild(myLogger.domElement);
        myLogger.log('sqrt(5) = 2.2360688956433634');          