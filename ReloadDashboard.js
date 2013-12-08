// ----Add page link to reload from the post.
function AddPageLink( LinkAddress){//Main
	var ReloadLink = document.createElement('a');
	//ReloadLink.setAttribute('href',LinkAddress);
	var postNum = LinkAddress.split("/");
	var postId = "post_" + String( postNum[postNum.length-1] );
	var parent = document.getElementById( postId ).parentNode;
	var onclickAction = "window.location= ' " + LinkAddress + "';" ;
	ReloadLink.setAttribute('onclick', onclickAction );
	ReloadLink.setAttribute('target',"new");
	ReloadLink.innerHTML = "Reload from next post.";
	ReloadLink.style.color="#eeeeee";//set font color.
	ReloadLink.style.textDecoration="underline";
	parent.appendChild(ReloadLink);
}



//Add lister to linsten loading of the new posts.
chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	//alert("MESSAGE LISTENING. "+ message );
	
    if (message) {
        sendResponse("I'm here.");
		AddPageLink( message );//call the main script.
    }
});


