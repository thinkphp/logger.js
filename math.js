   var math = {

       subset: function(n) {

             var arr = [],
                 sol = [],
                 s = 0;
             for(var i=0;i<n;i++) {
                 arr[i] = 0;
             }  
             
             do {
 
              arr[n-1]++;

              for(var j=n-1;j>=0;j--) {
                  if(arr[j] > 1) {
                     arr[j] -= 2;
                     arr[j-1]++;
                  }                
              }   

              var out = '{';
              for(var i=0;i<n;i++) {
                  if(arr[i]) {
                     out += (i+1) + ',';
                  }               
              }  
              out = out.substr(0,out.length-1);
              out += '}';
              sol.push(out);

              s = 0;
              for(var k=0;k<n;k++) {
                  if(arr[k]) {
                     s++;
                  }
              }

             }while(s<n);  

         return sol;
       },

       sqrt: function(n) {
             var a = 1,
                 b = 1/2*(a+n/a);
                 while(Math.abs(a-b)>= 0.001) {
                     a = b;
                     b = (a+n/a)/2;
                 }
         return a;
       }   
   };
