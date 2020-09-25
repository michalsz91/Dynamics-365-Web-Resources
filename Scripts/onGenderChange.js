function onGenderChange(executionContext) {
    var formContext = executionContext.getFormContext();
    var selectedGender = formContext.getAttribute("gendercode").getValue();
    if (selectedGender == 1) formContext.ui.setFormNotification("Please provide your Credit Limit", "INFO", "5001");
    else formContext.ui.clearFormNotification("5001");
}