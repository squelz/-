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