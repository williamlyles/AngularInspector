
function dumpClicked(info, tab)
{
	//debugger;
	chrome.tabs.sendRequest(tab.id, "dumpClickedElement");
}


var id = chrome.contextMenus.create({
	"title": "Dump scope to console",
	"contexts": ["all"],
	"onclick": dumpClicked
});
