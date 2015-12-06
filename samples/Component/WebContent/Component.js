sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent,JSONModel,ResourceModel) {
   "use strict";
   return UIComponent.extend("com.ag.Component", {
	  metadata : {
		rootView : "com.ag.view.Main"  
	  },
      init : function () { 
         UIComponent.prototype.init.apply(this, arguments);
         var oData = {
        	model : {
        		ad : ""
        	}	 
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);

         var i18nModel = new ResourceModel({
             bundleName: "com.ag.resources.i18n"
          });
          this.setModel(i18nModel, "i18n");
         
	}
   });
});