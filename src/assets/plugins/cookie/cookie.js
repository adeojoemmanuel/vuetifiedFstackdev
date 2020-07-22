$(document).ready(function() {
  $("body").ihavecookies({
    title: "&#x1F36A; Accept Cookies & Privacy Policy?",
    message:
      "This website would use cookies and localstorage to enhance the page speed in the future. Click the <strong>accept</strong> button below to allow cookie storage on your browser...",
    delay: 600,
    expires: 1,
    link: "#privacy",
    onAccept: function() {
      var myPreferences = $.fn.ihavecookies.cookie();
      console.log("Yay! The following preferences were saved...");
      console.log(myPreferences);
    },
    uncheckBoxes: true,
    acceptBtnLabel: "Accept Cookies"
  });

  if ($.fn.ihavecookies.preference("marketing") === true) {
    console.log("This should run because marketing is accepted.");
  }
});
