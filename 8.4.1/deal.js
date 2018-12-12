 $("#field").on("keydown", function (event) {
                var item;
                if(event.which == 13) {
                    item = $("<li></li>");
                    item.html($(this).val());
                    item.addClass("list-group-item todo-item")
                    $(this).val("");
                    item.on("click", function() {
                        $(this).toggleClass("list-group-item-danger");
                    });
                    $("#list").append(item);
                }
            });

$(document).on("keydown", function() {
    if (event.which == 46) {
        $("#remove-dialog").modal("show");
    }
});

function removeItems(event) {
    $(".list-group-item-danger").remove();
    $("#remove-dialog").modal("hide");
};

$("#remove-dialog").on("keydown", function () {
    if(event.which == 13) {
        removeItems();
    }
});

$("#remove-dialog-ok").on("click", removeItems);