cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.verso.cordova.clipboard/www/clipboard.js",
        "id": "com.verso.cordova.clipboard.Clipboard",
        "pluginId": "com.verso.cordova.clipboard",
        "clobbers": [
            "cordova.plugins.clipboard"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "pluginId": "org.apache.cordova.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/src/browser/DeviceProxy.js",
        "id": "org.apache.cordova.device.DeviceProxy",
        "pluginId": "org.apache.cordova.device",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.verso.cordova.clipboard": "0.1.0",
    "org.apache.cordova.device": "0.2.13",
    "com.napolitano.cordova.plugin.intent": "0.1.2",
    "cordova-plugin-crosswalk-webview": "1.7.2"
}
// BOTTOM OF METADATA
});