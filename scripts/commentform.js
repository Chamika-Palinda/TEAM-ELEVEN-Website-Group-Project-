
//     function to get inputs and validate them
  function feedback(){
    var name = document.getElementById("userName").value;
    var email = document.getElementById("userEmail").value;
    var comment = document.getElementById("comment").value;

    var valid_name_letters =  /^[a-zA-Z-'. ]+$/;
    var valid_email_letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var valid_name = false;
    var valid_email = false;
    var valid_comment = false;

    if(name == ""){
      alert('Please input your Name');
    }
    else if(!(name.match(valid_name_letters))){
      alert('Please input valid name');
    }
    else{
      valid_name = true;
    }

    if(email == ""){
      alert('Please input your Email');
    }
    else if(!(email.match(valid_email_letters))){
      alert('Please input valid email');
    }
    else{
      valid_email = true;
    }

    if(comment == ""){
      alert("Please Enter Your Comment");
    } else{
      valid_comment = true;
    }

//    setting up the alert message to show after the validated inputs
    if(valid_name == true && valid_email ==  true && valid_comment == true){
      alert("Dear " + name + ",\nThank you very much for your feedback. Your comment was \"" + comment+"\"");
      document.getElementById("userName").innerHTML = "";
      document.getElementById("userEmail").innerHTML = "";
      document.getElementById("comment").innerHTML = "";
    }
  }


//    creating function to count stars 
 function starmark(item){
  count=item.id[5];
  sessionStorage.starRating = count;
  var subid= item.id.substring(1);
}

//    setting up the function to show the alert message
function Rate(){
  alert("Thank you very much for your rate.\nYou have rate us by " + count + " out of 5");
}

//  set function to validate the email address
function send(){
  var sendMail = document.getElementById("newsLetterEmail").value;
  var valid_email_letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if(sendMail == ""){
    alert("Please Enter Your Email");
  }
  else if (!(sendMail.match(valid_email_letter))){
    alert("Please Enter Valid Email");
  } else {
    alert("Thanks For Subscription");
  }
}

