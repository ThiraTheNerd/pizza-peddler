let total = 0;

function Pizza(type, size, crust, topping, total){
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$(document).ready(function(){
  //proceed button
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

    if ((pizzaSize == "0" && crustType == "0")){
      console.log("Nothing has been selected");
      $("button#proceed-btn").show();
      $("#form-error").show();
      $("button#addPizza").show();
      $()
      $("#cart").hide();
    }
    else{
      $("button#proceed-btn").hide();
      $("#cart").slideDown(1000);
    }
    total = price + crustPrice + toppingPrice;
    console.log(total)
    let checkoutTotal = 0;
    checkoutTotal = checkoutTotal + total;


    $("#pizza-name").html($(".name option:selected").val());
    $("#pizza-size").html($("#size option:selected").val());
    $("#pizza-crust").html($("#crust option:selected").val());
    $("#pizza-topping").html(selectedTopping.join(" , "));
    $("#pizza-price").html(total);
  });

  // Add pizza button
  $("button#addPizza").click(function(event){
      event.preventDefault();
      console.log("Pizza button is clicked");
      let pizzaName = $("#type option:selected").val();
      let pizzasize = $("#size option:selected").val();
      let crusttype = $("#crust option:selected").val();
      let selectedTopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
        selectedTopping.push($(this).val());
      });
      console.log(selectedTopping.join(", "));
      console.log(crusttype);
      switch(pizzasize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1200;
           console.log(price);
         break;
         case "medium":
           price = 900;
           console.log("The price is "+price);
         break;
         case "small":
           price = 600;
           console.log(price);
         default:
           console.log("error"); 
       }
       switch(crusttype){
          case "0": crustPrice = 0;
          console.log(crustPrice);
          break;
          case "Crispy": crustPrice = 100;
          console.log(crustPrice);
          break;
          case "Stuffed": crustPrice = 200;
          console.log(crustPrice);
          break;
          case "Gluten-free": crustPrice = 300;
          console.log(crustPrice);
          default:
          console.log("No price"); 
        }
        var toppingPrice = selectedTopping.length * 150;
        console.log(toppingPrice);

        total = price + crustPrice + toppingPrice;
        console.log(total)

        let checkoutTotal = 0;
        checkoutTotal = checkoutTotal + total;

        // constractor function
      var newOrder = new pizza(pizzaName, pizzaSize, crustType,selectedTopping,total);

      $("#cart-items").append('<tr><td id="pizza-name">'+newOrder.name +'</td><td id="pizza-size">' + newOrder.size + '</td><td id="pizza-crust">'+newOrder.crust + '</td><td id="pizza-topping">'+newOrder.topping+'</td><td id="pizza-price">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
  });

  //checkout button
  $("button#checkout").click(function(){
    $("button#checkout").hide();
    $("button#addPizza").hide();
    $("button#deliver").slideDown(1000);
    $("#addedprice").slideDown(1000);

    console.log("YOur total bill is Ksh" + checkoutTotal );
    $("#pizzatotal").append("Your bill is Ksh " + checkoutTotal);
  });

  //homedelivey button
  $("button#deliver").click(function(){
    $(".table").hide();
    $("#cart-heading").hide();
    $(".form-group").slideDown(1000);
    $("#addedprice").hide();
    $("bitton#deliver").hide();
    $("#pizzatotal").hide();

    let payment = checkoutTotal + 250 ; 
    console.log( "Your cash on delivery is Ksh . " + payment);
    $("totalbill").append("You are expected to pay Ksh " + payment + "on delivery")
  });

  //On clicking place order button
  $("button#final-order").click(function(event){
    event.preventDefault();

    $("#pizza-total").hide();
    $(".delivery").hide();
    $("button#final-order").hide();
    let payment = checkoutTotal + 250;
    console.log("You are expected to have " + payment + "on delivery");

    let customer = $("input#name").val();
    let phone = $("input#phone").val();
    let location = $("input#location").val();

    if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
      $("finalmessage").append ("Hey " + customer + "We have received your order it will be delivered at "+ location + ". Please have Ksh" +payment + "on delivery");
      $("#totalbill").hide();
      $("finalmessage").slideDown(1200);
    }

    else{
      alert("Please fill in the required details");
      $(".delivery").show();
      $("button#final-order").show();
    }
  });
});