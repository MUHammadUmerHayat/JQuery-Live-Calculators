$(document).ready(function(){

//Function for Add Row
      $(".add-more").click(function(){ 
          var html = $(".copy").html();
          $(".newRowHere").before(html);
		  var countrow = $("form .itemrow").length;
      });
	  
//Function for Remove Row
      $("body").on("click",".remove",function(){ 
          $(this).parents(".itemrow").remove();
			var countrow = $("form .itemrow").length;
			finalcalculate();
      });
  
function calculation(el){
	var sum = 0;
	var price = $(el).closest('.itemrow').find(".price").val();  
	var qty = $(el).closest('.itemrow').find(".qty").val();  
	$(el).closest('.itemrow').find('.totalforone').val(price * qty);
	finalcalculate(); // Final Calculation with discount 
};



function finalcalculate(){
    var sum = 0;
     $("form :input.totalforone").each(function(){
        sum += +$(this).val();
		//console.log($(this).val() + ' --list item');
    });
	
	$("#total").val(sum - $("#discount").val());
	//console.log(sum+"<Final Answer>");
}

$('form').on('input', '.price', function(){calculation(this)});
$('form').on('input','.qty', function(){calculation(this)});
$('form').on("input", "#discount", finalcalculate);

}); //page ready close