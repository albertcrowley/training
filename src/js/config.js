window._config = {
  cognito: {
    userPoolId: 'us-east-1_Oy72ZYDVZ', // e.g. us-east-2_uXboG5pAb
    userPoolClientId: '4390fhd5n5akl8rt7ga75k20jr', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
    region: 'us-east-1', // e.g. us-east-2
    domain_prefix: 'training',
    redirect_url: 'https://ec2.bwnj.net/return.html'
  },
  api: {
    invokeUrl: '' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
  }
};

{
  var config = window._config.cognito;

  config.login_url = "https://" + config.domain_prefix + ".auth." + config.region + ".amazoncognito.com/" +
    "login?response_type=token" +
    "&client_id=" + config.userPoolClientId +
    "&redirect_uri=" + config.redirect_url;

  jQuery("a#login").attr("href", config.login_url);

  window._config.public_key_url = "https://cognito-idp."+ config.region+".amazonaws.com/"+config.userPoolId+"/.well-known/jwks.json";
}

console.log("testing scope");
console.log (config);


href="https://atc.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=2dg5ois1hfj3bjelshkqpg601e&redirect_uri=https://ec2.bwnj.net/return.html"
