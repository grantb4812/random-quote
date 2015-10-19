$(document).ready(function() {
 $('.button').on('click', function(){
   $.ajax({
     url: "http://api.icndb.com/jokes/random/"
   }).done(function(joke) {
       var random = joke.value.joke;
       var noSpace = random.replace(/ /g, '%20');
     	$('.share').attr('href', "https://twitter.com/share?text="+noSpace+"");
      	console.log(noSpace);
       insertQuote(random);
   });
   
 });
});

var insertQuote = function (quote) {
    $('.replace').replaceWith('<p class="replace">'+quote+'</p>');
    $('.remove').remove();
    $('.share').show();
};

