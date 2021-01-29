sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "training/bi/UI5Module/customTypes/Zip"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("training.bi.UI5Module.controller.Main", {
			onInit: function () {
                var oModel = new JSONModel();
                this.getView().setModel(oModel);
                sap.ui.getCore().getMessageManager().registerObject(this.getView(), true);

			}
		});
	});
