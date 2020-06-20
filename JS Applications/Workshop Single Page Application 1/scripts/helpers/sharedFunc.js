function clearAllFields() {
   $("input[type=text]").val("");
   $("input[type=password]").val("");
   $("textarea").val("");
   $("#selectCategory").prop("selectedIndex", 0);
}

export default {
   clearAllFields
};