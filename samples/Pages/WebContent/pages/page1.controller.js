sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("pages.page1", {
		onSayfa2 : function(evt) {
			app.to("idpage22");
		}
   });
});