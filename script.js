/*--- This function computers 
the simple interest and display the result */

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("interestrate").value;
    var years = document.getElementById("years").value;
    
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = principal + interest;
    document.getElementById("result").innerHTML="\<br\>If you deposit \<b\>"+principal+"\</b\>,\<br\>at an interest rate of \<b\>"+rate+"%\</b\>\<br\>You will receive an amount of \<b\>"+interest+"\</b\>,\<br\>in the year \<b\>"+year+"\</b\>\<br\>."
}
        
/*--- This function helps the scoll bar update real time selection 
 interest rate percentage */
function updateRate(){
    var rateval = document.getElementById("interestrate").value;
    document.getElementById("rate_val").innerText=rateval;
}
/*--- This function validates the principal input 
and calls the compute function if the principal is valid */
function validateForm() {
  var x = document.getElementById("principal").value;
  if (x < 1 ) {
    document.getElementById("principal").focus();
    alert("Enter a positive number");
    
    
  }else{
      compute();
  }
}