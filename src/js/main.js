var api_url = "https://w04l20nwn9.execute-api.us-east-1.amazonaws.com/test/";



TrainTracker.init = function() {
  //load the user list
  showUserList();
}

function search_by_email() {

  var users_promise = TrainTracker.getUsers();

  users_promise.then(function(done) {
    console.log("eventually got "); console.log( done);
  }).catch(function(err) { console.log("got an error - " + err.statusText);});


}

function showUserList() {

  var users_promise = TrainTracker.getUsers();

  users_promise.then(function(users) {
    console.log("eventually got "); console.log( users);

    jQuery("div#user-list").html("loaded " + users);

  }).catch(function(err) { console.log("got an error - " + err.statusText);});


}


Handlebars.registerHelper('classes-helper', function (classes,options){
  var html = "";
  for (var c in classes) {
    html = html + options.fn(classes[c]);
  }
  return html;
});

function show_classes(data) {
  var source = document.getElementById("classes-template").innerHTML;
  var template = Handlebars.compile(source);
  var html = template(data);
  jQuery("#results").html(html);
}


TrainTracker.init();
