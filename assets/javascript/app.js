var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "What percentage of school leavers and graduates believe that it is important to have fun at work?",
  answers: ["50%", "32%", "79%", "83%"],
  correctAnswer: "79%"
}, {
  question: "During thinking, how much percentage of our brains do we use?",
  answers: ["71%", "35%", "58%", "40%"],
  correctAnswer: "35%"
}, {
  question: "What country was paper invented in?",
  answers: ["China", "United States", "England", "Japan"],
  correctAnswer: "China"
}, {
  question: "According to Maslow’s hierarchy of needs what is the final employees need after completing all of the others?",
  answers: ["Love and Belonging", "Safety", "Self-Actualization", "Psychological Needs"],
  correctAnswer: "Self-Actualization"
}, {
  question: "What percentage of workers believe having access to social media platforms helps them to be more productive?",
  answers: ["20%", "39%", "65%", "53%"],
  correctAnswer: "39%"
}, {
  question: "Which company allows colleagues to bring their dog into the office?",
  answers: ["Amazon", "Ikea", "Microsoft", "Samsung"],
  correctAnswer: "Amazon"
}, {
  question: "How many minutes a day does the average office worker spend looking for lost files and other items?",
  answers: ["20 minutes", "15 minutes", "50 minutes", "35 minutes"],
  correctAnswer: "50 minutes"
}, {
  question: "During an average day, how many miles does a typist’s fingers travel?",
  answers: ["6 miles", "3.5 miles", "12.6 miles", "9.7 miles"],
  correctAnswer: "12.6 miles"
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
