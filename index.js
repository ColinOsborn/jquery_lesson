$(document).ready(function(){
  console.log($('input[type=checkbox]'));

  $('.republican').toggleClass('red');
  $('.democrat').toggleClass('blue');
  $('.term').toggleClass('yellow');
  $('.whig').css({
    backgroundColor: 'purple',
    color: 'white'
    });

  $('.died').next().addClass('green');
  $('.one-term').addClass('red');
  $('input:checked').parent('td').addClass('blue');
});

//
// $('.federalist').parent().parent()
// $('.federalist').parents()
