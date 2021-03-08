let total = 0;

function Pizza(type, size, crust, topping, price){
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.price = price;
}

$(document).ready(function(){
  $("button#proceed-btn").click(function(event){
    event.preventDefault();

    var pizzaName = $("#type option:selected").val();
    var pizzaSize = $("#size option:selected").val();
    var crustType = $("#crust option:selected").val();
    var selectedTopping = [];
    $.each($("input[name='toppings']:checked"), function(){
      selectedTopping.push($(this).val());
      
    });
    console.log(selectedTopping.join(" , "));

    switch(pizzaSize){
      case "0": price = 0
    }
  });
});