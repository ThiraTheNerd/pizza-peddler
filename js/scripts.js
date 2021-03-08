let total = 0;

function Pizza(type, size, crust, topping, total){
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
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
      case "0": price = 0;
      break;
      case "large": price = 1200;
      console.log(price);
      break;
      case "medium": price = 900;
      console.log(price);
      break;
      case "small": price = 600;
      console.log(price);
      default: console.log("error")
    }
    switch(pizzaCrust){
      case "0": crustPrice = 0;
      break;
      case "crispy": crustPrice = 100;
      console.log(crustPrice);
      break;
      case "stuffed": crustPrice = 200;
      console.log(crustPrice);
      break;
      case "gluten-free": crustPrice = 300;
      console.log(crustPrice);
      default: console.log("error")
    }
  });
});