import './index.scss'

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
