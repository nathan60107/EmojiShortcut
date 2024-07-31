/**
 * @name EmojiShortcut
 * @author Nathan60107
 * @description Send emoji faster.
 * @version 0.0.1
 */

var css = "#counterContainer {\n  color: white;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  align-items: center;\n}\n\n.counterButtons {\n  display: block;\n  width: fit-content;\n  padding: 8px;\n  border-radius: 8px;\n  background-color: var(--brand-experiment);\n  color: white;\n  font-size: 12pt;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}";
BdApi.injectCSS("EmojiShortcut-styles",css);

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
