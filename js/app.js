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
    if (checkedRadio.length === 0) {
      alert('Please select an answer');
      return;
    }
    $('input[name=' + qname + ']').attr('disabled', 'disabled'); // disable radio buttons

    $(this).attr('disabled', 'disabled'); // disable submit button
    var checkedRadioVal = checkedRadio.val();
    console.log('You answered', checkedRadio, checkedRadioVal, 'for', qname);
    var answerDiv = $('.answer', $(this).parent()); // Find the .answer DIV under this BUTTON's parent element
    answerDiv.show();

    // Note: Here are some alternative ways to get associated radio buttons when the Submit button is clicked
    //
    // $(this).parent() will be the DIV containing the submit button
    //
    // var radioBtns = $('input[type=radio]', $(this).parent()); // radioBtns contains all the radio buttons associated with this question
    // var checkedRadio = $('input[type=radio]:checked', $(this).parent()); // Alternative way to get the checked radio button
  });

  $('.next-question').on('click', function () {
    var currentQuestionDiv = $(this).parent().parent();
    currentQuestionDiv.hide();
    var nextQuestionId = $(this).data('next');
    $('#' + nextQuestionId).show();
  });
});
