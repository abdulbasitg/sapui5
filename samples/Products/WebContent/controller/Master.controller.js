sap.ui.define(
	["sap/ui/core/mvc/Controller",
	 "com/ag/products/util/Formatter"], 
	function (Controller,Formatter) {
		"use strict";
		return Controller.extend("com.ag.products.controller.Master", {
			onInit : function() {
				this.router = sap.ui.core.UIComponent.getRouterFor(this);	
				this.router.attachRoutePatternMatched(this._handleRouteMatched, this);	
			},
			_handleRouteMatched : function (oEvent) {	
			},
			onSearch : function() {
				// add filter for search
				var filters = [];
				var searchString = this.getView().byId("idSearch").getValue();
				if (searchString && searchString.length > 0) {
					filters = [ 
					  new sap.ui.model.Filter(
				        "Name", 
					    sap.ui.model.FilterOperator.Contains, 
					    searchString) ];
				}

				// update list binding
				this.getView().byId("list").getBinding("items").filter(filters);
			},
			onSelect : function(oEvent) {
				var oItem = oEvent.getParameter("listItem") || oEvent.getSource();
				var product = oItem.getBindingContext().getPath().substr(1);
				this.router.navTo("product", {
					from: "master",
					product: product
				});
			}
		});
	}
);