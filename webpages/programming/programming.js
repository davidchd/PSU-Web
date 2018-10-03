$(document).ready(function(){

    $("#TranslateOn").css("text-decoration", "underline");

    $("#TranslateOn").click(function() {
        $("#TranslateOn").css("text-decoration", "underline");
        $("#TranslateOff").css("text-decoration", "none");
        $(".Chinese").show();
    });

    $("#TranslateOff").click(function() {
        $("#TranslateOn").css("text-decoration", "none");
        $("#TranslateOff").css("text-decoration", "underline");
        $(".Chinese").hide();
    });

});
