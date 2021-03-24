
/////Shop JavaScript


//Function to Show shopping Bag when the shopping bag button click
var SB_modelBtn = document.getElementById("open_shop");
var SB_modelBg = document.querySelector(".shoppingBag_Background");   

function show_Shop(){
    SB_modelBg.classList.add("shoppingBag_Background_active");
}

function hide_Shop(){
    SB_modelBg.classList.remove("shoppingBag_Background_active");
}


//Function to show how many products are inside in the shopping bag
let SB_bagShownNumber = document.getElementById("bagShownNum");
let SB_favShownNumber = document.getElementById("favShownNum");
var SB_productInBag = 0;

function setBagInNumber(QTY){
    SB_productInBag = parseInt(QTY) + SB_productInBag;
    SB_bagShownNumber.textContent = SB_productInBag;
}

function removeBagInNumber(QTY){
    SB_productInBag =  SB_productInBag-parseInt(QTY);
    SB_bagShownNumber.textContent = SB_productInBag;
}




//Functions for calculate bill
var SB_shippingCost = document.querySelector(".SB_SelectShipMeth").value;

var SB_display_shippingMeth = document.querySelector(".SB_moneySippingCost");
var SB_display_bill_productTotal = document.querySelector('.SB_moneyProductSum');
var SB_display_allTotal = document.getElementById("SB_moneyTotal");


var SB_productTotalPrice = 0;
var SB_fullTotalPrice = 0;

function addToTotal(SB_SumOfProduct){
    
    SB_productTotalPrice += parseFloat(SB_SumOfProduct);

    var SB_allSum = parseFloat(SB_productTotalPrice);
    var SB_shippingCostPrice = parseFloat(SB_shippingCost);
    SB_fullTotalPrice = SB_productTotalPrice + SB_shippingCostPrice;
    
    SB_display_bill_productTotal.textContent = '$'+ SB_allSum.toFixed(2);
    SB_display_shippingMeth.textContent = '$'+  SB_shippingCostPrice.toFixed(2);
    SB_display_allTotal.textContent = '$'+ SB_fullTotalPrice.toFixed(2);

}


function removeToTotal(SB_SumOfProduct,SB_QTY){

    removeBagInNumber(SB_QTY)
    
    SB_productTotalPrice -= parseFloat(SB_SumOfProduct);
    SB_fullTotalPrice -= parseFloat(SB_SumOfProduct);
    console.log(SB_productTotalPrice+"-"+SB_SumOfProduct);
    console.log(SB_fullTotalPrice+"-"+SB_SumOfProduct);

    SB_display_bill_productTotal.textContent = '$'+ SB_productTotalPrice.toFixed(2);
    SB_display_allTotal.textContent =  '$'+ SB_fullTotalPrice.toFixed(2);

    if(SB_productTotalPrice<0){
        SB_fullTotalPrice=0;
        SB_display_allTotal.textContent =  '$'+ SB_fullTotalPrice.toFixed(2);
    }

}



const number = document.getElementById("quantityNum");
let Qnumber = 1;

function Plusa(){
    if(Qnumber>=1 && Qnumber<= 9){
        console.log("sss")
        number.innerHTML=Qnumber+=1;
        mins.style.opacity="0.8";
    }
    if(Qnumber== 10){
        plus.style.opacity="0.3";
    } 
}

function Minsa(){
    if(Qnumber ==2){
        number.innerHTML=Qnumber-=1;
        mins.style.opacity="0.3";
    } else if(Qnumber>1 && Qnumber<=10){
        number.innerHTML=Qnumber-=1;
        plus.style.opacity="0.8";
    } 
}
    




  //Form Validation
function validateName(){
    var Fname = document.forms["SB_billingSumbmit"]["getFirstName"].value;
    var Lname = document.forms["SB_billingSumbmit"]["getSurName"].value;
    var Email = document.forms["SB_billingSumbmit"]["getEmail"].value;
    var Address = document.forms["SB_billingSumbmit"]["getAddress"].value;


    var valid_name_letters =  /^[a-zA-Z-'. ]+$/;
    var valid_email_letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var valid_Fname = false;
    var valid_Sname = false;
    var valid_Email = false;
    var valid_Address = false;

    if(Fname == ""){
      alert('Please input your Name');
    }
    else if(!(Fname.match(valid_name_letters))){
      alert('Please input valid name');
    }
    else{
      valid_Fname = true;
    }

    if(Lname == ""){
        alert('Please input your Name');
      }
      else if(!(Lname.match(valid_name_letters))){
        alert('Please input valid name');
      }
      else{
        valid_Sname = true;
    }

    if(Email == ""){
      alert('Please input your Email');
    }
    else if(!(Email.match(valid_email_letters))){
      alert('Please input valid email');
    }
    else{
      valid_Email = true;
    }

    if(Address == ""){
      alert("Please Enter Your Comment");
    } else{
        valid_Address = true;
    }

//    setting up the alert message to show after the validated inputs
    if(valid_Fname == true && 
        valid_Sname == true && 
        valid_Email ==  true && 
        valid_Address == true){
      alert("Dear " + Fname + ",Your payment is sucsessfull. Your bill Total Prise is $" + SB_fullTotalPrice + "." );
      window.location.reload()


    }
  }
