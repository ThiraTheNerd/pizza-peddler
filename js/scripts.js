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
    switch(crustType){
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
      default: console.log("No Price")
    }
    var toppingPrice = selectedTopping.length * 150;
    console.log(toppingPrice);

    // if ((pizzaSize == "0" && crustType == "0")){
    //   console.log("Nothing has been selected");
    //   $("total-cost").show();
    // }
    total = price + crustPrice + toppingPrice;
    console.log(total)

    $("#pizza-name").html($(".name option:selected").val());
    $("#pizza-size").html($("#size option:selected").val());
    $("#pizza-price").html(total);

    // Add pizza button
    $("button#addPizza").click(function(){
      let pizzaName = $(".name option:selected").val();
      let pizzasize = $("#size option:selected").val();
      let crustType = $("#crust option:selected").val();
      let selectedTopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
          ptopping.push($(this).val());
      });
      console.log(ptopping.join(", "));
      switch(psize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1200;
           console.log(price);
         break;
         case "medium":
           price = 850;
           console.log("The price is "+price);
         break;
         case "small":
           price = 600;
           console.log(price);
         default:
           console.log("error"); 
       }
       switch(pcrust){
          case "0":
            crust_price = 0;
          break;
          case "Crispy":
            crust_price = 200;
          break;
          case "Stuffed":
            crust_price = 150;
          break;
          case "Gluten-free":
            crust_price = 180;
          break;
          default:
            console.log("No price"); 
        }
  });
});