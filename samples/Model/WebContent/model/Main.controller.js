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
               ad : "",
               soyad : ""
            }
         };
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
         jQuery.sap.debug(true);

         jQuery.sap.log.info("FYI: something has happened");
         jQuery.sap.log.error("This should never have happened!");
         jQuery.sap.debug(false);

      },
      onMerhaba : function () {
    	 var oModel = this.getView().getModel();
//    	 var ad = oModel.getProperty("/model/ad");
//    	 var oData = oModel.getData();
//    	 var ad = oData.model.ad;
    	 var adElement = this.getView().byId("idAd");
    	 var ad = adElement.getValue();
    	 adElement.setValue("");
    	 adElement.setVisible(false);
    	 
    	 var btn = this.getView().byId("idMerhabaButton");
    	 btn.setBusy(true);
         MessageToast.show("Merhaba "+ad);
      }
   });
});