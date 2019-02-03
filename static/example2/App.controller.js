sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("sap.ui.demo.wt.App", {
        result:null,
        onInit : function () {
            let that = this;
            $.ajax({url: "/getData", success: function(result){
                that.result = result;
              }});
        },
        onShowData : function () {
            // show a native JavaScript alert
            console.log("result"+ JSON.stringify(this.result));

        }
    });
});