<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>
var settings = {
    "url": "https://emvwb4mf.api.lncldglobal.com/1.1/classes/_User/5f94484703fcbe1f3f8157bf",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "X-LC-Id": "EMvWB4MFkVYX9zOu8mPrXden-MdYXbMMI",
      "X-LC-Key": "uYYPYEbPfEbUKUym6Bf3Qco4",
      "Content-Type": "application/json"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });