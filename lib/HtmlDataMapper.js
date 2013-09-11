/*global _9times9 */
window['_9times9'] = window['_9times9'] || {}
_9times9.Toolbox = _9times9.Toolbox || {}
_9times9.Toolbox.HtmlDataMapper = function() {

    return new (function(){
        this.map = function(data, manifest){
            for(var prop in data) {
                if(manifest.hasOwnProperty(prop)) {
                    manifest[prop].value = data[prop];
                }
            }
        }
    })()
}