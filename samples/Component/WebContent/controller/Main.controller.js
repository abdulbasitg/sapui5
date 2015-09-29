sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("com.ag.controller.Main", {
      onMerhaba : function () {
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sAd = this.getView().getModel().getProperty("/model/ad");
         var sMsg = oBundle.getText("helloMsg", [sAd]);
         MessageToast.show(sMsg);
      }
   });
});