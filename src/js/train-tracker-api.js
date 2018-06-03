var TrainTracker = window.TrainTracker || {};

(function scopeWrapper($) {

  TrainTracker.api_url = "https://w04l20nwn9.execute-api.us-east-1.amazonaws.com/test/";
  TrainTracker.authToken.then(function (token) {
    TrainTracker.token = token;
    console.log("top scope resolution" + token);
    // var o = XMLHttpRequest.prototype.open;
    // XMLHttpRequest.prototype.open = function(){
    //   var res = o.apply(this, arguments);
    //   var err = new Error();
    //   this.setRequestHeader('authorization', token);
    //   return res;
    // }
  })



  TrainTracker.getUsers = function() {
    console.log ("getUsers");

    var url = api_url + "user";
    var api_promise = TrainTracker.authToken.then(function(token) {
      console.log("in api_promise token is " + token);
      return jQuery.ajax({
        type: "GET",
        headers: {
          "authorization": token
        },
        url: url
      });
    });

    

    return api_promise;
  }

}(jQuery));
