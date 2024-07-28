/**
 * @name EmojiShortcut
 * @author Nathan60107
 * @description Send emoji faster.
 * @version 0.0.1
 */

module.exports = class MyPlugin {
  constructor(meta) {
    // Do stuff in here before starting
  }

  start() {
    // Do stuff when enabled
    // Called when the plugin is activated (including after reloads)
    BdApi.alert('Hello World!', 'This is my first plugin!')
  }

  stop() {
    // Cleanup when disabled
  }
}
