sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("training.bi.UI5Module.controller.Main", {
			onInit: function () {
                var oModel = new JSONModel ("model/data.json");
                this.getView().setModel(oModel);

            },

            handleSelectionChange: function(oEvent){
                var oTable = this.byId("employees");
                var oSelectedItem = oEvent.getParameter("selectedItem");
                var sPath = oSelectedItem.getBindingContext().getPath();
                oTable.bindElement(sPath);
                console.log(sPath);


			}
		});
	});
