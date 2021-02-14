# Description
* This is home for a custom Canvas graphing library and drawing utilities I am working on.
* Graphing API is in lib/graph/Graph.js. Drawing context is in lib/graph/CanvasDrawingContext.js.
* Graph supports three types: bar, line, point. See other customizeable parameters.
* It is responsive/resizeable. 
* It supports widgets, which have to override update() and render(). See lib/graph/widgets/MinMaxAvgWidget.ts for example.

![Sample](./src/static/sample.png?raw=true "Sample render")

## For Development:
* Hosted on Preact (just to render the page). The Graph library is completely independent and only required a \<canvas /> element.
* Uses esbuild as builder, with sass integration. 
* Nodemon is used to monitor source files and rebuild them to build folder. 
* Browser-sync can be started (npm run dev) to auto-refresh page, on changes to build folder.
* (see package.json scripts)

## Setup
```npm run setup```

## Run Dev:
```npm run dev```
* Starts watching ./src/**/* for any changes and rebuilds.
* Also starts a browser-sync session and watcher, which reloads with any changes to the build folder.
* Open http://localhost:4000 for the hot ./build.

## Just view the site:
```npm run serve```
* Will serve the files in ./build (```npm run build``` to re-build/update them).
