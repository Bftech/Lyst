function inject(){
  console.log("injecting");
  $(".yt-lockup-thumbnail .video-thumb").css("border","solid 2px red");
  $(".yt-lockup-thumbnail .video-thumb").append("<a class='addToLyst' href='#'>L</a>")

  $(".addToLyst").click(function(event) {
    sendUrl($(this).parent().closest("a").attr("href"));
  });
};

function sendUrl(url) {
  chrome.runtime.sendMessage({vidUrl: url}, function(response) {
    console.log(response.msg);
  });
}

document.addEventListener("spfdone", inject);
document.addEventListener("DOMContentLoaded", inject);
