/*start slide show */
var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2500); // Change image every 2.5 seconds
  }
  /*start slide show */

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

    if(valid_name == true && valid_email ==  true && valid_comment == true){
      alert("Dear " + name + ",\nThank you very much for your feedback. Your comment was \"" + comment+"\"");
      document.getElementById("userName").innerHTML = "";
      document.getElementById("userEmail").innerHTML = "";
      document.getElementById("comment").innerHTML = "";
    }
  }




  /**start ratings */
  function starmark(item){
  count=item.id[5];
  sessionStorage.starRating = count;
  var subid= item.id.substring(1);
}

function Rate(){
  alert("Thank you very much for your rate.\nYou have rate us by " + count + " out of 5");
}
/**end ratings */

/*start footer email check */
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
/*end footer email check */


/**start font size changer */
function myFunction1() {
	document.getElementById("font").style.fontSize = "0.8em";
}

function myFunction2() {
	document.getElementById("font").style.fontSize = "1.1em";
}

function myFunction3() {
	document.getElementById("font").style.fontSize = "1.25em";
}

function myFunction4() {
	document.getElementById("font").style.fontSize = "1.4em";
}

function myFunction5() {
	document.getElementById("font").style.fontSize = "1.9em";
}
/**end font size changer */

window.onscroll = function(){
  scrollFuction()
};


/**start back to top */
function scrollFuction(){
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
   document.getElementById("topbtn").style.display = "block";
   
} else {
  document.getElementById("topbtn").style.display = "none";
}
}
/**end back to top */