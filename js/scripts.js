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
    alert("Proceed button has been clicked")
  });
});