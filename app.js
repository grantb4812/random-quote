$(document).ready(function() {
 $('.button').on('click', function(){
   var quote = $.ajax({
     url: "http://api.icndb.com/jokes/random/"
   }).done(function(joke) {
       $('.hide-show').hide
       console.log(joke.value.joke);
   });
   
 });
});