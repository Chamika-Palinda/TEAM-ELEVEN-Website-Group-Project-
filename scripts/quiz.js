//----------create and store questions to execute one by one.
let questions = ["1. Which of the following country won Football world Cup maximum times?",
  "2. When was the first FIFA World Cup inaugurated?",
  "3. Which of following team do not play in stripes?",
  "4. Which of the following country hosted the first Football World Cup?",
  "5. Which country became the first nation to win the Football World Cup?",
  "6. When was first official international football match was played?",
  "7. Who among the following scored the first goal in World Cup history?",
  "8.Who among the following achieved the first World Cup hat-trick?",
  "9.Which Ballon d'Or-winning footballer had a galaxy named after them in 2015?",
  "10.Who is the present captain on team barcelona?"
];

//----------options for each question.
let options1 = ["<button class=button1 onclick='q1i()'>Germany</button><br/><br/><button class=button1 onclick='q1i()'>Italy</button><br/><br/><button class=button1 onclick='q1i()'>Argentina</button><br/><br/><button class=button1 onclick='q1c()'>Brazil</button>"];
let options2 = ["<button class=button1 onclick='q2c()'>1930</button><br/><br/><button class=button1 onclick='q2i()'>1931</button><br/><br/><button class=button1 onclick='q2i()'>1932</button><br/><br/><button class=button1 onclick='q2i()'>1933</button>"];
let options3 = ["<button class=button1 onclick='q3i()'>Newcastle</button><br/><br /><button class=button1 onclick='q3i()'>Southampton</button><br /><br/><button class=button1 onclick='q3c()'>Tottenham Hotspur</button><br/><br/><button class=button1 onclick='q3i()'>Lincoln City</button>"];
let options4 = ["<button class=button1 onclick='q4i()'>America</button><br/><br/><button class=button1 onclick='q4i()'>Argentina</button><br/><br/><button class=button1 onclick='q4i()'>Brazil</button><br/><br/><button class=button1 onclick='q4c()'>Uruguay</button>"];
let options5 = ["<button class=button1 onclick='q5c()'>Uruguay</button><br/><br/><button class=button1 onclick='q5i()'>Germany</button><br/><br/><button class=button1 onclick='q5i()'>Argentina</button><br/><br/><button class=button1 onclick='q5i()'>Belgium</button>"];
let options6 = ["<button class=button1 onclick='q6i()'>1929</button><br/><br/><button class=button1 onclick='q6c()'>1872</button><br/><br/><button class=button1 onclick='q6i()'>1902</button><br/><br/><button class=button1 onclick='q6i()'>1870</button>"];
let options7 = ["<button class=button1 onclick='q7i()'>Johino</button><br /><br/><button class=button1 onclick='q7i()'>Bert Patenaude</button><br/><br/><button class=button1 onclick='q7c()'>Lucien Laurent</button><br/><br/><button class=button1 onclick='q7i()'>Pele</button>"];
let options8 = ["<button class=button1 onclick='q8i()'>Johino</button><br /><br/><button class=button1 onclick='q8c()'>Bert Patenaude</button><br/><br/><button class=button1 onclick='q8i()'>Lucien Laurent</button><br/><br/><button class=button1 onclick='q8i()'>Pele</button>"];
let options9 = ["<button class=button1 onclick='q9i()'>Leonel Messi</button><br/><br/><button class=button1 onclick='q9c()'>Cristiano Ronaldo</button><br/><br/><button class=button1 onclick='q9i()'>kylian mbappe</button><br/><br/><button class=button1 onclick='q9i()'>Naymar Jr</button>"];
let options10 =["<button class=button1 onclick='q10i()'>Antonie griezmann</button><br/><br/><button class=button1 onclick='q10i()'>Christiano Ronaldo</button><br/><br/><button class=button1 onclick='q10i()'>Sergeio Ramos</button><br/><br/><button class=button1 onclick='q10c()'>Leonel Messi</button>"];

//-----variable a is use to count questions and store it.
let a = 0;
a++;

//-----variable b is use to count correct questions.
let b = 0;
b++;

//-----starting to execute questions and answers.
function begin() {
  d=200;
  dissapear.innerHTML = "";
  massage1.innerHTML = questions[0].fontsize(5).bold();
  massage2.innerHTML = options1;
  number.innerHTML = a++;
}

//-----what happens on if user answered correctly to question 1.
function q1c() {
  massage3.innerHTML = "\u2714".fontsize(15).fontcolor("green");
  massage2.innerHTML = "";
  score.innerHTML = b++;
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";

}

//-----what happens on if user answered incorrectly to question 1.
function q1i() {
  massage3.innerHTML = "\u2716".fontsize(15).fontcolor("red");
  massage2.innerHTML = "";
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";

}

//-----what happens on if user answered correctly to question 2.
function q2c() {
  massage3.innerHTML = "\u2714".fontsize(15).fontcolor("green");
  massage2.innerHTML = "";
  score.innerHTML = b++;
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";

}

//-----what happens on if user answered incorrectly to question 2.
function q2i() {
  massage3.innerHTML = "\u2716".fontsize(15).fontcolor("red");
  massage2.innerHTML = "";
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";

}

//-----what happens on if user answered correctly to question 3.
function q3c() {
  massage3.innerHTML = "\u2714".fontsize(15).fontcolor("green");
  massage2.innerHTML = "";
  score.innerHTML = b++;
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";

}

//-----what happens on if user answered incorrectly to question 3.
function q3i() {
  massage3.innerHTML = "\u2716".fontsize(15).fontcolor("red");
  massage2.innerHTML = "";
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";

}

//-----what happens on if user answer correctly to question 4.
function q4c() {
  massage3.innerHTML = "\u2714".fontsize(15).fontcolor("green");
  massage2.innerHTML = "";
  score.innerHTML = b++;
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";

}

//-----what happens on if user answered incorrectly to question 4.
function q4i() {
  massage3.innerHTML = "\u2716".fontsize(15).fontcolor("red");
  massage2.innerHTML = "";
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";

}

//-----what happens on if user answer correctly to question 5.
function q5c() {
  massage3.innerHTML ="\u2714".fontsize(15).fontcolor("green");
  massage2.innerHTML = "";
  score.innerHTML = b++;
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";

}

//-----what happens on if user answered incorrectly to question 5.
function q5i() {
  massage3.innerHTML = "\u2716".fontsize(15).fontcolor("red");
  massage2.innerHTML = "";
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";

}

//-----what happens on if user answer correctly to question 6.
function q6c() {
  massage3.innerHTML ="\u2714".fontsize(15).fontcolor("green");
  massage2.innerHTML = "";
  score.innerHTML = b++;
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";

}

//-----what happens on if user answered incorrectly to question 6.
function q6i() {
  massage3.innerHTML = "\u2716".fontsize(15).fontcolor("red");
  massage2.innerHTML = "";
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";
}

//-----what happens on if user answer correctly to question 7.
function q7c() {
  massage3.innerHTML = "\u2714".fontsize(15).fontcolor("green");
  massage2.innerHTML = "";
  score.innerHTML = b++;
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";

}

//-----what happens on if user answered incorrectly to question 7.
function q7i() {
  massage3.innerHTML = "\u2716".fontsize(15).fontcolor("red");
  massage2.innerHTML = "";
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";

}

//-----what happens on if user answer correctly to question 8.
function q8c() {
  massage3.innerHTML ="\u2714".fontsize(15).fontcolor("green");
  massage2.innerHTML = "";
  score.innerHTML = b++;
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";

}

//-----what happens on if user answered incorrectly to question 8.
function q8i() {
  massage3.innerHTML = "\u2716".fontsize(15).fontcolor("red");
  massage2.innerHTML = "";
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";

}

//-----what happens on if user answer correctly to question 9.
function q9c() {
  massage3.innerHTML ="\u2714".fontsize(15).fontcolor("green");
  massage2.innerHTML = "";
  score.innerHTML = b++;
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";

}

//-----what happens on if user answered incorrectly to question 9.
function q9i() {

  massage3.innerHTML = "\u2716".fontsize(15).fontcolor("red");
  massage2.innerHTML = "";
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";

}

//-----what happens on if user answer correctly to question 10.
function q10c() {
  massage3.innerHTML ="\u2714".fontsize(15).fontcolor("green");
  massage2.innerHTML = "";
  score.innerHTML = b++;
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";

}

//-----what happens on if user answered incorrectly to question 10.
function q10i() {
  massage3.innerHTML = "\u2716".fontsize(15).fontcolor("red");
  massage2.innerHTML = "";
  massage4.innerHTML = "<button class=button2 onclick='next001()'>Next</button>";

}
//-------click on next button what should display on screen.
function next001() {
  //-----question02
  if (a == "2") {

    massage1.innerHTML = questions[1].fontsize(5).bold();
    massage2.innerHTML = options2;
    massage3.innerHTML = "";
    number.innerHTML = a++;
    massage4.innerHTML = "";

  }
  //----question03
  else if (a == "3") {

    massage1.innerHTML = questions[2].fontsize(5).bold();
    massage2.innerHTML = options3;
    massage3.innerHTML = "";
    number.innerHTML = a++;
    massage4.innerHTML = "";

  }
  //----question04
  else if (a == "4") {

    massage1.innerHTML = questions[3].fontsize(5).bold();
    massage2.innerHTML = options4;
    massage3.innerHTML = "";
    number.innerHTML = a++;
    massage4.innerHTML = "";
  }
  //----question05
  else if (a == "5") {

    massage1.innerHTML = questions[4].fontsize(5).bold();
    massage2.innerHTML = options5;
    massage3.innerHTML = "";
    number.innerHTML = a++;
    massage4.innerHTML = "";

  }
  //----question06
  else if (a == "6") {

    massage1.innerHTML = questions[5].fontsize(5).bold();
    massage2.innerHTML = options6;
    massage3.innerHTML = "";
    number.innerHTML = a++;
    massage4.innerHTML = "";
  }
  //----question07
  else if (a =="7") {

    massage1.innerHTML = questions[6].fontsize(5).bold();
    massage2.innerHTML = options7;
    massage3.innerHTML = "";
    number.innerHTML = a++;
    massage4.innerHTML = "";

  }
  //----question08
  else if (a == "8") {

    massage1.innerHTML = questions[7].fontsize(5).bold();
    massage2.innerHTML = options8;
    massage3.innerHTML = "";
    number.innerHTML = a++;
    massage4.innerHTML = "";

  }
  //----question09
  else if (a =="9") {

    massage1.innerHTML = questions[8].fontsize(5).bold();
    massage2.innerHTML = options9;
    massage3.innerHTML = "";
    number.innerHTML = a++;
    massage4.innerHTML = "";

  }
  //----question10
  else if (a == "10") {
      massage1.innerHTML = questions[9].fontsize(5).bold();
      massage2.innerHTML = options10;
      massage3.innerHTML = "";
      number.innerHTML = a++;
      massage4.innerHTML = "";
    } else {//-----after answered question this should display on screen.
    window.clearInterval(update);
    d = "-";
    massage1.innerHTML = "<b>End of Quiz!</b>";
    massage2.innerHTML = "";
    massage3.innerHTML = "";
    massage4.innerHTML = "<button class=button2 onclick='repeat()'>Repeat</button><br><br><button class='button2' onclick='viewquestions()'>review</button>";
  }
}
//------set a timer to time count.
function timer() {
  d = d - 1;
  if (d < 200) {
    time.innerHTML = d;
  }
  if (d < 1) {
    window.clearInterval(update);
    massage1.innerHTML = "<b>Time's up!</b>";
    massage2.innerHTML = "";
    massage3.innerHTML = "";
    massage4.innerHTML = "<button class=button2 onclick='repeat()'>Repeat</button>" +
      "<button class='button2' onclick='viewquestions()'>review</button>";
  }
}

update = setInterval("timer()", 1000);
//-----try again function
function repeat() {
  location.reload();
}
