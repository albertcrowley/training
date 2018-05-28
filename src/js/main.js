var api_url = "https://w04l20nwn9.execute-api.us-east-1.amazonaws.com/test/";


console.log (WildRydes.authToken);
WildRydes.authToken.then(function(token) {
  jQuery("#uspan").text(token);

  var o = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(){
    var res = o.apply(this, arguments);
    var err = new Error();
    this.setRequestHeader('authorization', token);
    return res;
  }


  var url = api_url + "user";
  jQuery.ajax({
    type: "GET",
    headers:{
      "authorization": token
    },
    url: url,
    done: function (data) {
      console.log(data);
    }
  });

});

function search_by_email() {
  var email = jQuery("#email").val();
  var url = api_url + "users/" + email;
  jQuery.ajax(url).done(function (data){

    if (typeof(data) == "object" && data.hasOwnProperty('classes') ) {
      show_classes(data);
    }
  });
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
