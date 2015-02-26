function dumpScopeToConsole(elementPath)
{
	var elFound = false;
	try{
        	var element = $(elementPath);
        	if(element.length > 0){
			elFound = true;
        	        var scope = null;
        	        try{
        	                scope = element.scope();
        	        }
        	        catch(exc){
        	                console.log("Couldn't get scope, dumping element");
        	                scope = element;
        	        }
                    window.dumpedScope = scope;
        	        console.log(scope);
        	}
	}
	catch(exc){
		elFound = false;
	}
	if( !elFound ){
		console.log("Couldn't get element '"+elementPath+"'");
	}
}
 
