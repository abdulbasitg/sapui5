sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("pages.page1", {
		onSayfa2 : function() {
			app.to("idpage22");
		}
   });
});