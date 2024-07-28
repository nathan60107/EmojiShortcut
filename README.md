# Better discord plugin template

## About

-   Plugin template for better discord. SASS and TSX support out the box
-   Uses [rollupjs](https://rollupjs.org/guide/en/) for built in tsx, sass and minifying support
-   Rollup builds the plugin to both your local [betterdiscord](https://betterdiscord.app) path and then plugin folder in the local repo, whenever your file changes
-   Support for any npm module using react through [@rollup/plugin-alias](https://www.npmjs.com/package/@rollup/plugin-alias)

## Getting started

1. First make sure you have [node](https://nodejs.org/en/) installed
2. Clone the repo by either [downloading](https://github.com/chazzox/plugin-template/archive/refs/heads/main.zip) the repo zip or setting up your on repo on [github](https://github.com/)
3. Install the dependencies on your local using your package manager of choice
4. Change the package name in `package.json`, and then the `.tsx` file name to match. Make sure to update the plugin meta in `rollup.config.js`
5. Of you go!
