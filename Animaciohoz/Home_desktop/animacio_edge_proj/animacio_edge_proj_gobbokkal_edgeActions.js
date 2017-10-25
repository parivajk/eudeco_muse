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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5873, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'bal_oldal_sav'
   (function(symbolName) {   
   
   })("bal_oldal_sav");
   //Edge symbol end:'bal_oldal_sav'

   //=========================================================
   
   //Edge symbol: 'also_sav'
   (function(symbolName) {   
   
   })("also_sav");
   //Edge symbol end:'also_sav'

   //=========================================================
   
   //Edge symbol: 'also_sav_1'
   (function(symbolName) {   
   
      })("Felso_sav");
   //Edge symbol end:'Felso_sav'

   //=========================================================
   
   //Edge symbol: 'bal_oldal_sav_1'
   (function(symbolName) {   
   
      })("Jobb_oldali_sav");
   //Edge symbol end:'Jobb_oldali_sav'

   //=========================================================
   
   //Edge symbol: 'Merleg'
   (function(symbolName) {   
   
   })("Merleg");
   //Edge symbol end:'Merleg'

   //=========================================================
   
   //Edge symbol: 'foldgomb'
   (function(symbolName) {   
   
   })("foldgomb");
   //Edge symbol end:'foldgomb'

   //=========================================================
   
   //Edge symbol: 'villaskulcs'
   (function(symbolName) {   
   
   })("villaskulcs");
   //Edge symbol end:'villaskulcs'

   //=========================================================
   
   //Edge symbol: 'enablers_gomb'
   (function(symbolName) {   
   
   })("enablers_gomb");
   //Edge symbol end:'enablers_gomb'

   //=========================================================
   
   //Edge symbol: 'Data_users_jobb'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4101, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${data_users_smal_repulo}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Mouse");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${data_users_smal_repulo}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("static");
         

      });
      //Edge binding end

   })("Data_users_jobb");
   //Edge symbol end:'Data_users_jobb'

   //=========================================================
   
   //Edge symbol: 'data_processors'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // insert code here
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4373, function(sym, e) {
         // insert code here
         sym.stop();
      
      });
      //Edge binding end
      
      
      
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${data_processors}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Mouse");
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${data_processors}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("static");
      
      
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${data_processors}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("/data-processors.html", "_self");
         

      });
      //Edge binding end

   })("data_processors");
   //Edge symbol end:'data_processors'

   //=========================================================
   
   //Edge symbol: 'Data_holders'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         // insert code here
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4815, function(sym, e) {
         // insert code here
         sym.stop()
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${data_holders}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("Mouse");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${data_holders}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.play("static");
      
      });
      //Edge binding end

   })("Data_holders");
   //Edge symbol end:'Data_holders'

   //=========================================================
   
   //Edge symbol: 'data_holders_bal'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5123, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${data_holders_big}", "mouseleave", function(sym, e) {
         sym.play("static");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${data_holders_big}", "mouseover", function(sym, e) {
         sym.play("Mouse");

      });
      //Edge binding end

   })("data_holders_bal");
   //Edge symbol end:'data_holders_bal'

   //=========================================================
   
   //Edge symbol: 'data_distributors'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5649, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${data_distributors}", "mouseover", function(sym, e) {
         sym.play("Mouse");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${data_distributors}", "mouseleave", function(sym, e) {
         sym.play("static");

      });
      //Edge binding end

   })("data_distributors");
   //Edge symbol end:'data_distributors'

   //=========================================================
   
   //Edge symbol: 'data_users_jobb'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5873, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6020, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${data_users_big}", "mouseleave", function(sym, e) {
         sym.play("static");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${data_users_big}", "mouseover", function(sym, e) {
         sym.play("Mouse");

      });
      //Edge binding end

   })("data_users_jobb");
   //Edge symbol end:'data_users_jobb'

   //=========================================================
   
   //Edge symbol: 'enabler_gomb_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2242, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2420, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse2}", "mouseover", function(sym, e) {
         sym.play("Mouse");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse2}", "mouseleave", function(sym, e) {
         sym.play("static");

      });
      //Edge binding end

   })("enabler_gomb_sym");
   //Edge symbol end:'enabler_gomb_sym'

   //=========================================================
   
   //Edge symbol: 'merleg_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1992, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2152, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hit}", "mouseover", function(sym, e) {
         sym.play("Mouse")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hit}", "mouseleave", function(sym, e) {
         sym.play("static");

      });
      //Edge binding end

   })("merleg_sym");
   //Edge symbol end:'merleg_sym'

   //=========================================================
   
   //Edge symbol: 'foldgomb_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1887, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse4}", "mouseover", function(sym, e) {
         sym.play("Mouse");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse4}", "mouseleave", function(sym, e) {
         sym.play("static");

      });
      //Edge binding end

   })("foldgomb_sym");
   //Edge symbol end:'foldgomb_sym'

   //=========================================================
   
   //Edge symbol: 'villaskulcs_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1641, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse3}", "mouseover", function(sym, e) {
         sym.play("Mouse");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse3}", "mouseleave", function(sym, e) {
         sym.play("static");

      });
      //Edge binding end

   })("villaskulcs_sym");
   //Edge symbol end:'villaskulcs_sym'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-85783668");