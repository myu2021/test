sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "training/bi/UI5Module/formatter/formatter"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller , JSONModel, formatter) {
		"use strict";

		return Controller.extend("training.bi.UI5Module.controller.Main", {
            changer: formatter,

			onInit: function () {
                var oModel = new JSONModel("model/data.json");
                this.getView().setModel(oModel);

            },

            formatGender: function(sValue){
//               if(sValue === 'M'){
//                    return 'Male';
//               } else{
//                   return 'Female';
//
//            }
return (sValue.toLowerCase() === 'm') ? 'Male' : 'Female';
            },
            formatToIcon: function(sValue){
                return (sValue.toLowerCase() === 'm') ? 'sap-icon://wounds-doc' : 'sap-icon://nurse';
            }

		
		});
	});
