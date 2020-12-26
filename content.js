// content.js
shouldBlock = localStorage.getItem("shouldBlock");
setInterval(blockFeed,5000);
setTimeout(blockFeed, 1000);
chrome.runtime.onMessage.addListener(
  	function(request, sender, sendResponse) 
 	{
    	if( request.message === "clicked_browser_action" ) 
    	{

			localStorage.setItem("shouldBlock",true);
			location.reload()
		}
		else if( request.message === "unclicked_browser_action")
		{
			localStorage.setItem("shouldBlock",false);
			location.reload()
			
		}
		 
	} 
);

function blockFeed(){
	if ( shouldBlock === "false")
	{
		return;
	}
	document.querySelectorAll('[role="feed"]').forEach
			(
				function (element)
					{
			
							element.innerHTML = '<h1 style="font-size: 50px;color: white;">INFINITE SCROLLING BLOCKED (CLICK THE EXTENSION BUTTON IN THE TOOL BAR TO TOGGLE NEWSFEED ON/OFF</h1>';
						
					}
			); 
			document.querySelectorAll('[data-pagelet="Stories"]').forEach
			(
				function (element)
					{
					
							element.innerHTML = '<h1 style="font-size: 50px;color: white;">DON&#39;T WATCH STORIES, MAKE THEM</h1>';

						

					}
			); 
}