jQuery.sap.declare("com.ag.products.Component");
jQuery.sap.require("com.ag.products.MyRouter");

sap.ui.core.UIComponent.extend("com.ag.products.Component", {
	metadata : {
    name : "Products Demo Application",
    version : "1.0",
    rootView : "com.ag.products.view.App",
    config : {
        resourceBundle : "i18n/messageBundle.properties",
        serviceConfig : {
            serviceUrl : "/Products/proxy/V2/(S(sapuidemotdg))/OData/OData.svc/"
        }
    },
	routing : {
		config : {
			routerClass : com.ag.products.MyRouter,
			viewType : "XML",
			viewPath : "com.ag.products.view"
		},
		routes : [
			{
				pattern : "",
				name : "main",
				view : "Master",
				targetAggregation : "masterPages",
				targetControl : "idMainApp",
				subroutes : [
								{
									pattern : "{product}/:tab:",
									name : "product",
									view : "Detail",
									targetAggregation : "detailPages"
								}
							]				
			}
		]
	}},    
init : function() {

    sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

    var mConfig = this.getMetadata().getConfig();

    var rootPath = jQuery.sap.getModulePath("com.ag.products");

    // set i18n model
    var i18nModel = new sap.ui.model.resource.ResourceModel({
        bundleUrl : [rootPath, mConfig.resourceBundle].join("/")
    });
    this.setModel(i18nModel, "i18n");
    
    // Create and set domain model to the component
    var sServiceUrl = mConfig.serviceConfig.serviceUrl;
    var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
    this.setModel(oModel);

    // set device model
    var deviceModel = new sap.ui.model.json.JSONModel({
        isTouch : sap.ui.Device.support.touch,
        isNoTouch : !sap.ui.Device.support.touch,
        isPhone : sap.ui.Device.system.phone,
        isNoPhone : !sap.ui.Device.system.phone,
        listMode : sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
        listItemType : sap.ui.Device.system.phone ? "Active" : "Inactive"
    });
    deviceModel.setDefaultBindingMode("OneWay");
    this.setModel(deviceModel, "device");
    
    this.getRouter().initialize();        
  }
});