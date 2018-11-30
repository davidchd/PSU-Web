$(document).ready(function(){

    // declare variables
    var $links = $(".UserLeftTitle,.UserLeftLink");
    var agent = {
        value: navigator.userAgent,
        reloaded: function() {
            if(this.value.indexOf("Android") + this.value.indexOf("iPhone") + this.value.indexOf("Windows Phone") + this.value.indexOf("SymbianOS") + this.value.indexOf("iPod") > 0) {
                $("body").css("font-size", "15px");
                $("pre").each(function(i) {
                    $(this).removeClass("line-numbers");
                    $(this).css("line-height", "1.2");
                });
            } else {
                $("body").css("font-size", "20px");
            }
        }
    };
    var selected = {
        $cell: $("#wlcm"),
        change: function() {
            $links.css("background-color", "#ffffff");
            $links.css("color", "#000000");
            this.$cell.css("background-color", "#00ddff");
            this.$cell.css("color", "#ffffff");
        }
    };
    var translate = {
        value: false,
        view: function() {
            $("#TranslateOn").css("text-decoration", (this.value ? "underline" : "none"));
            $("#TranslateOff").css("text-decoration", (this.value ? "none" : "underline"));
            $(".Chinese,.ReloadedChinese")[this.value ? "show" : "hide"]();
            // agent.reloaded();
        }
    };

    // set font size based on agent
    agent.reloaded();
    console.log(agent.value);

    // init translation
    translate.view();

    // init highlight cell
    selected.change();
    $("#dynamic").load("subpages/basics/Welcome.html", function() {
        translate.view();
    });

    // init code block
    $("#BlockCode").each(function(){
        $(this).html("<ol><li>" + $(this).html().replace(/\n/g,"\n</li><li>") +"\n</li></ol>");
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
    $("#wlcm").click(function() {
        selected.$cell = $(this);
        selected.change();
        $("#dynamic").load("subpages/basics/Welcome.html", function() {
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
            var $CharDetail = $(".ReloadedCharDetail");
            $CharDetail.hide();
            $("#ToggleCharDetail").click(function() {
                $CharDetail.toggle("normal");
            });
        });
    });

    $("#oprt").click(function() {
        selected.$cell = $(this);
        selected.change();
        $("#dynamic").load("subpages/basics/Operators.html", function() {
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

    $("#clg-func").click(function() {
        selected.$cell = $(this);
        selected.change();
        $("#dynamic").load("subpages/basics/CallingFunctions.html", function() {
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
