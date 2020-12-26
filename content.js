// content.js
setInterval(blockFeed,5000);
setTimeout(blockFeed, 1000);
chrome.runtime.onMessage.addListener(
  	function(request, sender, sendResponse) 
 	{
    	if( request.message === "clicked_browser_action" ) 
    	{
  			
			blockFeed(); 
		}
		else if( request.message === "unclicked_browser_action")
		{
			location.reload()
		}
		 
	} 
);

function blockFeed(){
	document.querySelectorAll('[role="feed"]').forEach
			(
				function (element)
					{
			
							element.innerHTML = '<h1 style="font-size: 50px;color: white;">INFINITE SCROLLING, INDEFINITELY BLOCKED</h1>';
						
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