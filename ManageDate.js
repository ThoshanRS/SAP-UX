sap.ui.define(["sap/m/MessageBox", "sap/ui/core/format/DateFormat"],
                function(MessageBox, DateFormat) {
                    return{
                        ShowDatefunction(odate){
                            var odate=DateFormat.getDateInstance();
                            var sDate=ODateFormat.format(odate);
                            MessageBox.show(sDate,{
                                title:"Message"
                            })
                        }
                    }

}); 

