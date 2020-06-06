# Footbal showcase

## Installation steps

- Clone this repo
- `cd ng-football`
- `npm i`
- To start json-server `npm run start:server` creates a REST API on http://localhost:3000
- Open new terminal tab `npm start` starts the UI on http://localhost:4200

## UI Angular
This project was generated with Angular CLI version 8.3.20.

This showcase intends to show [ag-grid](https://www.ag-grid.com) and [Highcharts](https://www.highcharts.com) integrated on an Angular 8 application.

As remarkable notes, are:
- Usage of cell renderers to show custom content on cells [Ag-Grid Cell renderers](https://www.ag-grid.com/javascript-grid-cell-rendering-components/)
- Master detail strategy, to expand rows and see custom detailed content [Ag-Grid Master detail](https://www.ag-grid.com/javascript-grid-master-detail/)
- Highchart Polar, to show player stats [Highchart Polar spiderweb graph](https://www.highcharts.com/demo/polar-spider)

## Dataset and server

The dataset has been taken from [fifa18-all-player-statistics](https://github.com/amanthedorkknight/fifa18-all-player-statistics) repo

The server is launched using [json-server](https://github.com/typicode/json-server)
