$(document).ready(function() {
  $('.question').hide(); // hide all the .question DIVs
  $('.answer').hide(); // hide all the .answer DIVs

  $('#start').on('click', function () {
    $('#question-1').show();
    $('#intro').hide();
  });

  $('.submit-answer').on('click', function () {
    var qname = $(this).data('qname');
    var checkedRadio = $('[name="' + qname + '"]:checked');
    var checkedRadioVal = checkedRadio.val();
    console.log('You answered', checkedRadioVal, 'for', qname);
    var answerDiv = $('.answer', $(this).parent()); // Find the .answer DIV under this BUTTON's parent element
    answerDiv.show();
  });

  $('.next-question').on('click', function () {
    var currentQuestionDiv = $(this).parent().parent();
    currentQuestionDiv.hide();
    var nextQuestionId = $(this).data('next');
    $('#' + nextQuestionId).show();
  });
});
