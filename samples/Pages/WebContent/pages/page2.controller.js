sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("pages.page2", {
		onGeri : function() {
			app.back();
		}
   });
});