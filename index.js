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

  $(':checkbox').on('click', function(){
    $(this).parent().toggleClass("blue");
  });
  // this is an inline function
  // $(':checkbox').on('click', toggleBlue)
  //
  // function toggleBlue(){
  //   $(this).parent().toggleClass('blue');
  // }
  //
  // $(':checkbox').on('click', function(){
  //   $(this).parent().toggleClass('blue');
  // });

  // first exercise
  $(':checkbox').on('click', function(){
    $(this).parents('tr').addClass('yellow');
  });
    // second exercise
  $('td').on('click', function(){
    $(this).addClass('red');
  });

    //third exercise

  // bonus
  $('body').append('<div id="names"></div>');
  $(':checkbox').on('click', function(){
    var name = $(this).parent().siblings('.name').text();
    $("#names").append(name);
  });

});

//
// $('.federalist').parent().parent()
// $('.federalist').parents()
