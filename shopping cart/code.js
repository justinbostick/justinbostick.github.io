$(function(){
   var quantity,subtotal,tax,total
   
   
    $(".checkout").click(function() {

            //INPUT  
            quantity1 = parseInt($(".q1").val());
            quantity2 = parseInt($(".q2").val());
            quantity3 = parseInt($(".q3").val());
            quantity4 = parseInt($(".q4").val());


            //CALCULATE  
            var sub = (15.99 * quantity1) + (29.99 * quantity2) + (39.99 * quantity3) + (99.99 * quantity4)
            var sub2 = sub.toFixed(2)
            var tax = 1.07
            var tax2 = ("7%")
            var total = (sub * tax)
            var total2= total.toFixed(2)


            //OUTPUT
            $(".sub").html(sub2);
            $(".tax").html(tax2);
            $(".total").html(total2);


        });
   
});