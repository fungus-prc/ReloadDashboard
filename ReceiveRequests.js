//---- Add web request lister to detect new posts are loaded by the ajax on the dashboard of the Tumblr.com.
chrome.webRequest.onCompleted.addListener(function(details){
    var url = document.createElement('a');
    url.href = details.url;

    if ( url.href.search(/:\/\/www.tumblr.com\/dashboard\/[0-9]/) !== -1) {
		//Send message it inform new posts has been loaded to the ReloadDashboard.js.
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		  chrome.tabs.sendMessage(tabs[0].id, url.href, function(response) {
			//alert("MESSAGE: "+response);
		  });
		});

    }
},
{urls: [ "*://www.tumblr.com/*" ]} );





