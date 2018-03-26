$(document).ready(function() {
  var flavors = ['Vanilla', 'Chocolate', 'Sherbert']

  flavors.forEach(function(flavor) {
    $("#list").append('<li>' + flavor + '</li>');
  });
});
