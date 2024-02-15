$("#addTodo").click(function () {
  const inputTodo = $("input").val();
  $("#todoList").appned("<li><input type='checkbox'>" + inputTodo + "</li>");

  $("input").val("");
});