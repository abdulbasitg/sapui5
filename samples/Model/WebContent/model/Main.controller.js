sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
   "use strict";
   return Controller.extend("model.Main", {
      onInit : function () {
         var oData = {
            model : {
               ad : ""
            }
         };
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
      },
      onMerhaba : function () {
    	 var oModel = this.getView().getModel();
    	 var oData = oModel.getData();
    	 var ad = oData.model.ad;
         MessageToast.show("Merhaba "+ad);
      }
   });
});