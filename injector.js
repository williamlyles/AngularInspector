function injectJs(src)
{
        var scriptId = "scopeDumperInjectedScript"+Date.now();
        var isInjected = $('#'+scriptId).length > 0;
        if(!isInjected){
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = src;
            script.id = scriptId;
            document.head.appendChild(script);
    }
}

injectJs(chrome.extension.getURL('scopeDumper.js'));

