$(document).ready(function() {
  for(var i = 0; i < window.users.length; i++) {
    $(".row").append(buildThumbnails(window.users[i]));
  }

  function buildThumbnails(userData) {
    var colDiv = $("<div>").addClass("col-md-3");
    var thumbnailDiv = $("<div>").addClass("thumbnail");
    var userImg = $("<img>").attr("src", "http://lorempicsum.com/futurama/255/200/" + userData.id);
    var captionDiv = $("<div>").addClass("caption");
    var userH3 = $("<h3>").append(userData.name);
    var userP = $("<p>");
    var userEmail = $("<a>").attr("href", "mailto:" + userData.email).append(userData.email);

    userP.append(userEmail);

    thumbnailDiv
      .append(userImg)
      .append(captionDiv.append(userH3).append(userP));

    colDiv.append(thumbnailDiv);

    return colDiv;  
  }
});