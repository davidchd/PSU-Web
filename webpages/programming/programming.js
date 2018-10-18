$(document).ready(function(){

    // declare variables
    var agent = navigator.userAgent;
    var $links = $(".UserLeftTitle,.UserLeftLink");
    var translate = {
        value: false,
        view: function() {
            $("#TranslateOn").css("text-decoration", (this.value ? "underline" : "none"));
            $("#TranslateOff").css("text-decoration", (this.value ? "none" : "underline"));
            $(".Chinese,.ReloadedChinese")[this.value ? "show" : "hide"]();
        }
    };
    var selected = {
        $cell: $("#basic"),
        change: function() {
            $links.css("background-color", "#ffffff");
            $links.css("color", "#000000");
            this.$cell.css("background-color", "#00ddff");
            this.$cell.css("color", "#ffffff");
        }
    };

    // set font size based on agent
    if(agent.indexOf("Android") + agent.indexOf("iPhone") + agent.indexOf("Windows Phone") + agent.indexOf("SymbianOS") + agent.indexOf("iPod") > 0) {
        $("body").css("font-size", "15px");
    } else {
        $("body").css("font-size", "20px");
    }

    // init translation
    translate.view();

    // init highlight cell
    selected.change();
    $("#dynamic").load("subpages/basics/Basics.html", function() {
        translate.view();
    });

    // set translation on function
    $("#TranslateOn").click(function() {
        translate.value = true;
        translate.view();
    });

    // set translation off function
    $("#TranslateOff").click(function() {
        translate.value = false;
        translate.view();
    });

    // func for welcome
    $("#basic").click(function() {
        selected.$cell = $(this);
        selected.change();
        $("#dynamic").load("subpages/basics/Basics.html", function() {
            translate.view();
        });
    });

    // func for introduction
    $("#intro").click(function() {
        selected.$cell = $(this);
        selected.change();
        $("#dynamic").load("subpages/basics/Introduction.html", function() {
            translate.view();
        });
    });

    // func for first program
    $("#fst-prgm").click(function() {
        selected.$cell = $(this);
        selected.change();
        $("#dynamic").load("subpages/basics/FirstProgram.html", function() {
            translate.view();
        });
    });

    // func for comments
    $("#cmt").click(function() {
        selected.$cell = $(this);
        selected.change();
        $("#dynamic").load("subpages/basics/Comments.html", function() {
            translate.view();
        });
    });

    // func for data types
    $("#dt-tp").click(function() {
        selected.$cell = $(this);
        selected.change();
        $("#dynamic").load("subpages/basics/DataTypes.html", function() {
            translate.view();
        });
    });

    $("#var").click(function() {
        selected.$cell = $(this);
        selected.change();
        $("#dynamic").load("subpages/basics/Variables.html", function() {
            translate.view();
        });
    });

    $("#func").click(function() {
        selected.$cell = $(this);
        selected.change();
        $("#dynamic").load("subpages/basics/Function.html", function() {
            translate.view();
        });
    });

    $("#prdf-func").click(function() {
        selected.$cell = $(this);
        selected.change();
        $("#dynamic").load("subpages/basics/PredefinedFunctions.html", function() {
            translate.view();
        });
    });

    $("#selec").click(function() {
        selected.$cell = $(this);
        selected.change();
        $("#dynamic").load("subpages/basics/Selection.html", function() {
            translate.view();
        });
    });

    $("#rpt").click(function() {
        selected.$cell = $(this);
        selected.change();
        $("#dynamic").load("subpages/basics/Repetition.html", function() {
            translate.view();
        });
    });

});
