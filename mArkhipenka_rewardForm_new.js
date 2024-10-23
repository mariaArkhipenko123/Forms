function AutoFillReward(executionContext) {  
    var formContext = executionContext.getFormContext();  
     
    var entityId = formContext.data.entity.getId();  
    
    var rewardTypeField = formContext.getAttribute("cr452_rewardtype");  
    var quantityField = formContext.getAttribute("markhip_quantity");  

    if (!entityId) { 
        if (rewardTypeField && quantityField) {  
            rewardTypeField.setValue(793820002);  
            quantityField.setValue(1);             

            var quantityControl = formContext.getControl("markhip_quantity");  
            if (quantityControl) {  
                quantityControl.setVisible(true);   
            }  
        }  
    }
}
