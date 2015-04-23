$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  var counter = 0

  $('html').click(function(e){
    e.preventDefault();
    counter++

    $('#game').append("<div class='bullet' id="+counter+"><img class='ruby' src='../ruby.png'></div>")

    var towerPosition = new Victor(Math.floor((Math.random() * 10) + 1),Math.floor((Math.random() * 10) + 1));
    var direction = new Victor(Math.floor((Math.random() * 10) + 1),Math.floor((Math.random() * 10) + 1));
    var bullet = new Bullet(towerPosition,direction)
      setInterval(function(){
      bullet.updatePosition();

      $('#'+counter).css("top", bullet.position.x);
      $('#'+counter).css("left", bullet.position.y);
     }, 10);
  });
});
