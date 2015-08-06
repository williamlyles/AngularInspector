function fullPath(el){
  var names = [];
  while (el.parentNode){
    if (el.id){
      names.unshift('#'+el.id);
      break;
    }else{
      if (el==el.ownerDocument.documentElement) names.unshift(el.tagName);
      else{
        for (var c=1,e=el;e.previousElementSibling;e=e.previousElementSibling,c++);
        names.unshift(el.tagName+":nth-child("+c+")");
      }
      el=el.parentNode;
    }
  }
  return names.join(" > ");
}


var clickedElement = null;

$('body').mousedown(function(event){
        if(event.which == 3){
                clickedElement = event.target;
        }
});

function writeScript(elementPath)
{
	return '__dumpScopeToConsole("'+elementPath+'");';	
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
        if(request == "dumpClickedElement"){
		var logic = writeScript( fullPath( clickedElement ) );
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.text = logic;
		document.body.appendChild(script);
	}
});

