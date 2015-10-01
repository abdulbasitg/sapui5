sap.ui.define(
	["sap/ui/core/mvc/Controller"], 
	function (Controller) {
		"use strict";
		return Controller.extend("com.ag.products.controller.Detail", {
			onInit : function() {
				this.router = sap.ui.core.UIComponent.getRouterFor(this);	
				this.router.attachRoutePatternMatched(this._handleRouteMatched, this);				
			},
			_handleRouteMatched : function (oEvent) {	
				var sRouteName = oEvent.getParameter("name"); 
				if (sRouteName === "product") {
					var sProduct = oEvent.getParameter("arguments").product;
					var sPath = "/" + sProduct; 
					this.getView().bindElement(sPath);
					var oCategoryGrid = this.getView().byId("idCategoryGrid");					
					oCategoryGrid.bindElement("Category");
					var oSupplierGrid = this.getView().byId("idSupplierGrid");					
					oSupplierGrid.bindElement("Supplier");
				}
			}
		});
	}
);