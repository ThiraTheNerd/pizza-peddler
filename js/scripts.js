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
        $("#cart").hide();
        $("#delivery").hide();
        
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
      

    

    // Add pizza button
    $("button#addPizza").click(function(){
        // event.preventDefault();
        let pizzaName = $("#type option:selected").val();
        let pizzaSize = $("#size option:selected").val();
        let crustType = $("#crust option:selected").val();
        let selectedTopping = [];
        $.each($("input[name='toppings']:checked"), function(){            
          selectedTopping.push($(this).val());
        });
        console.log(selectedTopping.join(", "));
        console.log(crustType);
        switch(pizzaSize){
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
        switch(crustType){
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
  
          checkoutTotal = checkoutTotal + total;
          console.log(checkoutTotal);

          // constractor function
        var newOrder = new Pizza(pizzaName, pizzaSize, crustType,selectedTopping,total);

        $("#cart-items").append('<tr><td id="pizza-name">'+newOrder.type +'</td><td id="pizza-size">' + newOrder.size + '</td><td id="pizza-crust">'+newOrder.crust + '</td><td id="pizza-topping">'+newOrder.topping+'</td><td id="pizza-price">'+newOrder.total+'</td></tr>');
        console.log(newOrder);
    });

    //checkout button
    $("button#checkout").click(function(){
      $("button#checkout").hide();
      $("button#addPizza").hide();
      $("button#deliver").slideDown(1000);
      $("button#pick-up").slideDown(1000);
      $("#addedprice").slideDown(1000);

      console.log("Your total bill is Ksh" + checkoutTotal );
      $("#pizzatotal").append("Your bill is Ksh " + checkoutTotal);
    });

    //homedelivey button
    $("button#deliver").click(function(){
      $(".table").hide();
      $("#cart-heading").hide();
      // $(".form-group").slideDown(1000);
      $("#addedprice").hide();
      $("button#deliver").hide();
      $("#pizzatotal").hide();
      $("button#pick-up").hide();
      $(".delivery").slideDown(1000);
      

      let payment = checkoutTotal + 250 ; 
      console.log( "Your cash on delivery is Ksh . " + payment);
      $("totalbill").append("You are expected to pay Ksh " + payment + "on delivery")
    });

    //on clicking pick-up
    $("button#pick-up").click(function(){
      $("#cart").hide();
      $("#final-display").slideDown(1000)
      $("#final-msg").append("Thank you for ordering. Your pizza will be ready for pick-up in 15 minutes. Kindly have Ksh. " + checkoutTotal +" with you.")
    })

    //On clicking place order button
    $("button#final-order").click(function(event){
      event.preventDefault();

      $("#pizza-total").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      $("#receipt").slideDown(1000);

      let payment = checkoutTotal + 250;
      console.log("You are expected to have " + payment + "on delivery");

      let customer = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();
      console.log(customer);
      console.log(phone);
      console.log(location);

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
        
        $("span.delivery-address").append(location );
        $("span.total-order").append(+ checkoutTotal );
        $("span.total-cost").append(payment);
        $(".final-msg-deliv").append(" Hey , " + customer + ". We have received your order and we will have it delivered at " + location + ". Prepare Ksh. " + payment + ". It was a pleasure serving you.")
        
      }

      else{
        alert("Please fill in the required details");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
    event.preventDefault();
  });
});