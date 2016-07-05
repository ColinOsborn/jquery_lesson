$(document).ready(function(){
  console.log($('input[type=checkbox]'));

  // $('.republican').toggleClass('red');
  // $('.democrat').toggleClass('blue');
  // $('.term').toggleClass('yellow');
  // $('.whig').css({
  //   backgroundColor: 'purple',
  //   color: 'white'
  //   });
  //
  // $('.died').next().addClass('green');
  // $('.one-term').addClass('red');
  // $('input:checkbox:checked').parent().addClass('blue');
  // $('input:not(:checked)').parent().siblings().addClass('yellow')
  // $(':not(:checked)').parent().siblings().addClass('yellow')
  // $('.died .term').append('<span class="died">(Died)<span>');
  // $('.died').children('.term').append('<span class="died">(Died)<span>');
  // $('.number').prepend('<input type="radio">');

  $('checkbox').on('click', function(){
    $(this).parent().addClass("blue");
  });
  
});

//
// $('.federalist').parent().parent()
// $('.federalist').parents()
