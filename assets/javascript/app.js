var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "What is Nadisha favorite movie?",
  answers: ["The Butler", "Men In Black", "Black Panther", "Training Day"],
  correctAnswer: "Black Panther"
}, {
  question: "Who is Nadisha favorite movie star?",
  answers: ["Tyler Perry", "Kevin Hart", "Halle Berry", "Will Smith"],
  correctAnswer: "Kevin Hart"
}, {
  question: "What is Nadisha favorite sports team?",
  answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Nets and the Mets"],
  correctAnswer: "Nets and the Mets"
}, {
  question: "What artist sings Nadisha favorite song?",
  answers: ["Tarrus Riley", "Buju Banton", "Shaggy", "Red Rat"],
  correctAnswer: "Tarrus Riley"
}, {
  question: "What is Nadisha favorite book?",
  answers: ["The Kite Runner", "Romeo and Juliet", "The Chronicles of Narnia", "The Bible"],
  correctAnswer: "The Bible"
}, {
  question: "What is Nadisha favorite food?",
  answers: ["Curry Chicken", "Beef Patty", "Stew peas and Great Nut Icecream", "Fried Plantains"],
  correctAnswer: "Stew peas and Great Nut Icecream"
}, {
  question: "What is Nadisha favorite holiday?",
  answers: ["Christmas", "Labor Day", "Birthday", "Easter"],
  correctAnswer: "Christmas"
}, {
  question: "What Nadisha favorite memory?",
  answers: ["Migrating to the US", "Scuba Diving in the Ocean", "Wedding Day and Birth of Children", "Learning to Drive"],
  correctAnswer: "Wedding Day and Birth of Children"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
