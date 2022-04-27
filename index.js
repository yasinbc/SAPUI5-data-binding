sap.ui.require([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/resource/ResourceModel"
], function (JSONModel, XMLView, ResourceModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		var oProductModel = new JSONModel();
		oProductModel.loadData("./model/Products.json");
		sap.ui.getCore().setModel(oProductModel, "products");

		
		var oModel = new JSONModel({
			firstName: "Harry",
			lastName: "Wanks",
			enabled: true,
			address: {
				street: "Dietmar-Hopp-Allee 16",
				city: "Griffindor",
				zip: "69190",
				country: "Germany"
			},
			salesAmount: 12345.6789,
			priceThreshold: 20,
			currencyCode: "EUR"

		});

		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);

		var oResourceModel = new ResourceModel({
			//To translate in German just uncomment the line above and comment the next one
			//bundleName: "sap.ui.demo.zybc_db.i18n.i18n_de",
			bundleName: "sap.ui.demo.zybc_db.i18n.i18n",
			supportedLocales: ["", "de"],
			fallbackLocale: ""
		});

		sap.ui.getCore().setModel(oResourceModel, "i18n");

		// Display the XML view called "App"
		var oView = new XMLView({
			viewName: "sap.ui.demo.zybc_db.view.App"
		});
		
		//Register the view with the message manager
		sap.ui.getCore().getMessageManager().registerObject(oView, true);
		
		//Insert the view into de DOM
		oView.placeAt("content");
	});
});