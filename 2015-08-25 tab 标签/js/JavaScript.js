$(document).ready(function () {
    var $li = $(".container .mh li");
    var $tab_main = $(".container .mc .main");

    $li.mouseover(function () {
        var $this = $(this);
        var $index = $this.index();
        $li.removeClass();
        $this.addClass("tab_selected");

        $tab_main.css("display", "none");
        $tab_main.eq($index).css("display", "block");
    })
})