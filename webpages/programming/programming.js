$(document).ready(function(){

    // declare variables
    var agent = navigator.userAgent;
    var translate = {
        value: false,
        change: function() {
            $("#TranslateOn").css("text-decoration", (this.value ? "underline" : "none"));
            $("#TranslateOff").css("text-decoration", (this.value ? "none" : "underline"));
            $(".Chinese")[this.value ? "show" : "hide"]();
        }
    };
    var $links = $(".UserLeftLink");
    var selected = {
        $cell: $("#wlcm"),
        change: function() {
            $links.css("background-color", "#ffffff");
            $links.css("color", "#000000");
            this.$cell.css("background-color", "#00ddff");
            this.$cell.css("color", "#ffffff");
        }
    };

    // set font size based on agent
    console.log(agent);
    if(agent.indexOf("Android") + agent.indexOf("iPhone") + agent.indexOf("Windows Phone") + agent.indexOf("SymbianOS") + agent.indexOf("iPod") > 0) {
        $("body").css("font-size", "15px");
    } else {
        $("body").css("font-size", "20px");
    }

    // init translation
    translate.change();

    // init highlight cell
    selected.change();
    $("#dynamic").load("subpages/Welcome.html");

    // set translation on function
    $("#TranslateOn").click(function() {
        translate.value = true;
        translate.change();
    });

    // set translation off function
    $("#TranslateOff").click(function() {
        translate.value = false;
        translate.change();
    });

    // func for welcome
    $("#wlcm").click(function() {
        selected.$cell = $(this);
        selected.change();
        $("#dynamic").load("subpages/Welcome.html");
    });

    // func for introduction
    $("#intro").click(function() {
        selected.$cell = $(this);
        selected.change();
        $("#dynamic").load("subpages/Introduction.html");
    });

    // func for first program
    $("#fst-prgm").click(function() {
        selected.$cell = $(this);
        selected.change();
        $("#dynamic").load("subpages/FirstProgram.html");
    });

    // func for comments
    $("#cmt").click(function() {
        selected.$cell = $(this);
        selected.change();
        $("#dynamic").load("subpages/Comments.html");
    });

    // func for data types
    $("#dt-tp").click(function() {
        selected.$cell = $(this);
        selected.change();
        $("#dynamic").load("subpages/DataTypes.html");
    });

});
