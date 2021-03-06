var Logger = function() {

    this.domElement = document.createElement("div");
    this.domElement.style.fontFamily = 'Helvetica,Arial,Sans-serif,Verdana';
    this.domElement.style.textAlign  = 'left';
    this.domElement.style.fontSize  = '12px';
    this.domElement.style.padding  = '2px 0 3px 0';
    this.domElement.style.color  = '#333';

    this.log = function( msg ) {
         this.domElement.appendChild(document.createTextNode( msg ));
         this.domElement.appendChild(document.createElement ( "br" ));

       return this;
    }

    this.clear = function() {

            while(this.domElement.childNodes.length > 0) {

               this.domElement.removeChild(this.domElement.childNodes[0]);
             } 
       return this; 
    }
}