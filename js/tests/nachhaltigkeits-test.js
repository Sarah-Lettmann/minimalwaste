// Create a quiz object with a title and two questions.
// A question has one or more answer, and one or more is valid.
var quiz = {
  title: 'My quiz',
  questions: [
    {
      text: "Question 1",
      responses: [
        {text: 'Wrong, too bad.'},
        {text: 'Right!', correct: true},
      ]
    }, {
      text: "Question 2",
      responses: [
        {text: 'Right answer', correct: true},
        {text: 'Wrong answer'},
      ]
    }
  ]
};

new Vue({
  delimiters:['<%', '%>'],
  el: '#app',
  data: {
    quiz: quiz,
    // Store current question index
    questionIndex: 0,
    // An array initialized with "false" values for each question
    // It means: "did the user answered correctly to the question n?" "no".
    userResponses: Array(quiz.questions.length).fill(false)
  },
  // The view will trigger these methods on click
  methods: {
    // Go to next question
    next: function() {
      this.questionIndex++;
    },
    // Go to previous question
    prev: function() {
      this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function() {
      return this.userResponses.filter(function(val) { return val }).length;
    }
  }
});
