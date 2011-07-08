   var DOMUtil = {
       addEvent: function(elem,evType,fn,useCapture) {
                 if(elem.addEventListener) {
                    return elem.addEventListener(evType,fn,useCapture);
                 } else if(elem.attachEvent) {
                   var r = elem.attachEvent('on'+evType,fn);
                   return r;
                 } else {
                   elem['on'+evType] = fn;
                 }
       },
       cancelClick: function(event) {
                 if(window.event) {
                    window.event.returnValue = false;  
                    window.event.cancelBubble = true;
                 }
                 if(event && event.stopPropagation && event.preventDefault) {
                    event.stopPropagation();
                    event.preventDefault();
                 }
       } 
   } 
