/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${kozep_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         	sym.play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'tecnologica_sym'
   (function(symbolName) {   
   
   })("tecnologica_sym");
   //Edge symbol end:'tecnologica_sym'

   //=========================================================
   
   //Edge symbol: 'enablers_sym'
   (function(symbolName) {   
   
   })("enablers_sym");
   //Edge symbol end:'enablers_sym'

   //=========================================================
   
   //Edge symbol: 'legal_sym'
   (function(symbolName) {   
   
   })("legal_sym");
   //Edge symbol end:'legal_sym'

   //=========================================================
   
   //Edge symbol: 'socio_sym'
   (function(symbolName) {   
   
   })("socio_sym");
   //Edge symbol end:'socio_sym'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-11720980");