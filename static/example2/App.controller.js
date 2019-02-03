sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("sap.ui.demo.wt.App", {
        data:null,
        onInit : () => {
            $.ajax({url: "/getData", success: function(result){
                data = result;
             }});
        },
        onShowData : () => {
            console.log("result"+ JSON.stringify(data));

        }
    });
});