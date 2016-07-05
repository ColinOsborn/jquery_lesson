$(document).ready(function(){
  console.log($('input[type=checkbox]'));

  $('.repbulican').toggleClass('red');
  $('.democrat').toggleClass('blue');
  $('.term').toggleClass('yellow');
  $('.whig').css({
    backgroundColor: 'purple',
    fontColor: 'white'
    });
});
