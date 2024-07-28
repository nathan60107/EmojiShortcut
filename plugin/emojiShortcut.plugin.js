'use strict';

/**
 * @name EmojiShortcut
 * @author Nathan60107
 * @description Send emoji faster.
 * @version 0.0.1
 */
module.exports = /** @class */ (function () {
    function MyPlugin(meta) {
        // Do stuff in here before starting
    }
    MyPlugin.prototype.start = function () {
        // Do stuff when enabled
        // Called when the plugin is activated (including after reloads)
        BdApi.alert('Hello World!', 'This is my first plugin!');
    };
    MyPlugin.prototype.stop = function () {
        // Cleanup when disabled
    };
    return MyPlugin;
}());
