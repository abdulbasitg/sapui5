sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
   "use strict";
   return Controller.extend("translation.Main", {
     onInit : function () {
         var oData = {
             model : {
                ad : "",
                soyad: ""
             }
          };
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel,"main");
         var i18nModel = new ResourceModel({
            bundleName: "i18n"
         });
         this.getView().setModel(i18nModel, "i18n");
      },
      
      onMerhaba : function () {
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var oView = this.getView();
         var oModel = oView.getModel("main");
         var ad = oModel.getProperty("/model/ad");
         var soyad = oModel.getProperty("/model/soyad");
         var sMsg = oBundle.getText("helloMsg", [ad,soyad]);
         MessageToast.show(sMsg);
      }
   });
});