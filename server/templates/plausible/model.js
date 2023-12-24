const request = require("request-promise");

const builder = require("./builder");
const { chartColors } = require("../../charts/colors");

const template = (website, apiKey) => ({
  "Connections": [
    {
      "host": "https://plausible.io/api/v1/stats",
      "dbName": null,
      "port": null,
      "username": null,
      "password": null,
      "options": [{
        "User-Agent": `chartbrew-${website}`
      }],
      "connectionString": null,
      "authentication": {
        "type": "bearer_token",
        "token": apiKey,
      },
      "firebaseServiceAccount": null,
      "name": "Plausible API",
      "type": "api",
      "subType": "plausible",
      "active": true,
      "srv": false
    }
  ],
  "Datasets": [{
    "td_id": 1,
    "fillColor": "rgba(0,0,0,0)",
    "patterns": [],
    "conditions": null,
    "fieldsSchema": {
      "root[].results": "object",
      "root[].results.pageviews": "object",
      "root[].results.pageviews.value": "number"
    },
    "excludedFields": null,
    "groups": null,
    "query": null,
    "xAxis": "root[].results",
    "xAxisOperation": null,
    "yAxis": "root[].results.visitors.value",
    "yAxisOperation": "none",
    "dateField": null,
    "datasetColor": chartColors.blue.rgb,
    "fill": false,
    "multiFill": false,
    "dateFormat": null,
    "legend": "Visitors",
    "pointRadius": null,
    "formula": null,
    "groupBy": null,
    "DataRequests": [{
      "headers": {},
      "body": "null",
      "conditions": null,
      "configuration": null,
      "method": "GET",
      "route": `aggregate?site_id=${website}&metrics=visitors`,
      "useGlobalHeaders": true,
      "query": null,
      "pagination": false,
      "items": "items",
      "itemsLimit": 100,
      "offset": "offset",
      "paginationField": null,
      "template": null
    }],
  }, {
    "td_id": 2,
    "fillColor": "rgba(0,0,0,0)",
    "patterns": [],
    "conditions": null,
    "fieldsSchema": {
      "root[].results": "object",
      "root[].results.pageviews": "object",
      "root[].results.pageviews.value": "number"
    },
    "excludedFields": null,
    "groups": null,
    "query": null,
    "xAxis": "root[].results",
    "xAxisOperation": null,
    "yAxis": "root[].results.pageviews.value",
    "yAxisOperation": "none",
    "dateField": null,
    "datasetColor": chartColors.amber.rgb,
    "fill": false,
    "multiFill": false,
    "dateFormat": null,
    "legend": "Pageviews",
    "pointRadius": null,
    "formula": null,
    "groupBy": null,
    "DataRequests": [{
      "headers": {},
      "body": "null",
      "conditions": null,
      "configuration": null,
      "method": "GET",
      "route": `aggregate?site_id=${website}&metrics=pageviews`,
      "useGlobalHeaders": true,
      "query": null,
      "pagination": false,
      "items": "items",
      "itemsLimit": 100,
      "offset": "offset",
      "paginationField": null,
      "template": null
    }],
  }, {
    "td_id": 3,
    "fillColor": chartColors.blue.rgba(0.1),
    "patterns": [],
    "conditions": null,
    "fieldsSchema": {
      "root.results[].date": "date",
      "root.results[].visitors": "number"
    },
    "excludedFields": null,
    "groups": null,
    "query": null,
    "xAxis": "root.results[].date",
    "xAxisOperation": null,
    "yAxis": "root.results[].visitors",
    "yAxisOperation": "none",
    "dateField": "root.results[].date",
    "datasetColor": chartColors.blue.rgb,
    "fill": true,
    "multiFill": false,
    "dateFormat": null,
    "legend": "Visitors",
    "pointRadius": null,
    "formula": null,
    "groupBy": null,
    "DataRequests": [{
      "headers": {},
      "body": "null",
      "conditions": null,
      "configuration": null,
      "method": "GET",
      "route": `timeseries?site_id=${website}`,
      "useGlobalHeaders": true,
      "query": null,
      "pagination": false,
      "items": "items",
      "itemsLimit": 100,
      "offset": "offset",
      "paginationField": null,
      "template": null
    }],
  }, {
    "td_id": 4,
    "fillColor": "rgba(0,0,0,0)",
    "patterns": [],
    "conditions": null,
    "fieldsSchema": {
      "root[].results": "object",
      "root[].results.visit_duration": "object",
      "root[].results.visit_duration.value": "number"
    },
    "excludedFields": null,
    "groups": null,
    "query": null,
    "xAxis": "root[].results.visit_duration.value",
    "xAxisOperation": null,
    "yAxis": "root[].results.visit_duration.value",
    "yAxisOperation": "none",
    "dateField": null,
    "datasetColor": chartColors.blue.rgb,
    "fill": false,
    "multiFill": false,
    "dateFormat": null,
    "legend": "Duration",
    "pointRadius": null,
    "formula": "{val}s",
    "groupBy": null,
    "DataRequests": [{
      "headers": {},
      "body": "null",
      "conditions": null,
      "configuration": null,
      "method": "GET",
      "route": `aggregate?site_id=${website}&metrics=visit_duration`,
      "useGlobalHeaders": true,
      "query": null,
      "pagination": false,
      "items": "items",
      "itemsLimit": 100,
      "offset": "offset",
      "paginationField": null,
      "template": null
    }],
  }, {
    "td_id": 5,
    "fillColor": "rgba(0,0,0,0)",
    "patterns": [],
    "conditions": null,
    "fieldsSchema": {
      "root[].results": "object",
      "root[].results.bounce_rate": "object",
      "root[].results.bounce_rate.value": "number"
    },
    "excludedFields": null,
    "groups": null,
    "query": null,
    "xAxis": "root[].results.bounce_rate.value",
    "xAxisOperation": null,
    "yAxis": "root[].results.bounce_rate.value",
    "yAxisOperation": "none",
    "dateField": null,
    "datasetColor": chartColors.amber.rgb,
    "fill": false,
    "multiFill": false,
    "dateFormat": null,
    "legend": "Bounce rate",
    "pointRadius": null,
    "formula": "{val}%",
    "groupBy": null,
    "DataRequests": [{
      "headers": {},
      "body": "null",
      "conditions": null,
      "configuration": null,
      "method": "GET",
      "route": `aggregate?site_id=${website}&metrics=bounce_rate`,
      "useGlobalHeaders": true,
      "query": null,
      "pagination": false,
      "items": "items",
      "itemsLimit": 100,
      "offset": "offset",
      "paginationField": null,
      "template": null
    }],
  }, {
    "td_id": 6,
    "fillColor": "rgba(0,0,0,0)",
    "patterns": [],
    "conditions": null,
    "fieldsSchema": {
      "root.results[].pageviews": "number",
      "root.results[].utm_medium": "string",
      "root.results[].visitors": "number"
    },
    "excludedFields": [],
    "groups": null,
    "query": null,
    "xAxis": "root.results[]",
    "xAxisOperation": null,
    "yAxis": "root.results[].visitors",
    "yAxisOperation": "count",
    "dateField": null,
    "datasetColor": chartColors.blue.rgb,
    "fill": false,
    "multiFill": false,
    "dateFormat": null,
    "legend": "Sources",
    "pointRadius": null,
    "formula": null,
    "groupBy": null,
    "DataRequests": [{
      "headers": {},
      "body": "null",
      "conditions": null,
      "configuration": null,
      "method": "GET",
      "route": `breakdown?site_id=${website}&property=visit:source&metrics=visitors,pageviews`,
      "useGlobalHeaders": true,
      "query": null,
      "pagination": false,
      "items": "items",
      "itemsLimit": 100,
      "offset": "offset",
      "paginationField": null,
      "template": null
    }],
  }, {
    "td_id": 7,
    "fillColor": "rgba(0,0,0,0)",
    "patterns": [],
    "conditions": null,
    "fieldsSchema": {
      "root.results[].pageviews": "number",
      "root.results[].utm_source": "string",
      "root.results[].visitors": "number"
    },
    "excludedFields": null,
    "groups": null,
    "query": null,
    "xAxis": "root.results[].referrer",
    "xAxisOperation": null,
    "yAxis": "root.results[].visitors",
    "yAxisOperation": "count",
    "dateField": null,
    "datasetColor": chartColors.amber.rgb,
    "fill": false,
    "multiFill": false,
    "dateFormat": null,
    "legend": "UTM Sources",
    "pointRadius": null,
    "formula": null,
    "groupBy": null,
    "DataRequests": [{
      "headers": {},
      "body": "null",
      "conditions": null,
      "configuration": null,
      "method": "GET",
      "route": `breakdown?site_id=${website}&property=visit:utm_source&metrics=pageviews,visitors`,
      "useGlobalHeaders": true,
      "query": null,
      "pagination": false,
      "items": "items",
      "itemsLimit": 100,
      "offset": "offset",
      "paginationField": null,
      "template": null
    }],
  }, {
    "td_id": 8,
    "fillColor": "rgba(0,0,0,0)",
    "patterns": [],
    "conditions": null,
    "fieldsSchema": {
      "root.results[].pageviews": "number",
      "root.results[].utm_medium": "string",
      "root.results[].visitors": "number"
    },
    "excludedFields": null,
    "groups": null,
    "query": null,
    "xAxis": "root.results[].utm_medium",
    "xAxisOperation": null,
    "yAxis": "root.results[].pageviews",
    "yAxisOperation": "count",
    "dateField": null,
    "datasetColor": chartColors.teal.rgb,
    "fill": false,
    "multiFill": false,
    "dateFormat": null,
    "legend": "UTM Mediums",
    "pointRadius": null,
    "formula": null,
    "groupBy": null,
    "DataRequests": [{
      "headers": {},
      "body": "null",
      "conditions": null,
      "configuration": null,
      "method": "GET",
      "route": `breakdown?site_id=${website}&property=visit:utm_medium&metrics=visitors,pageviews`,
      "useGlobalHeaders": true,
      "query": null,
      "pagination": false,
      "items": "items",
      "itemsLimit": 100,
      "offset": "offset",
      "paginationField": null,
      "template": null
    }],
  }, {
    "td_id": 9,
    "fillColor": "rgba(0,0,0,0)",
    "patterns": [],
    "conditions": null,
    "fieldsSchema": {
      "root.results[].pageviews": "number",
      "root.results[].utm_medium": "string",
      "root.results[].visitors": "number"
    },
    "excludedFields": null,
    "groups": null,
    "query": null,
    "xAxis": "root.results[].utm_medium",
    "xAxisOperation": null,
    "yAxis": "root.results[].pageviews",
    "yAxisOperation": "count",
    "dateField": null,
    "datasetColor": chartColors.fuchsia.rgb,
    "fill": false,
    "multiFill": false,
    "dateFormat": null,
    "legend": "UTM Campaigns",
    "pointRadius": null,
    "formula": null,
    "groupBy": null,
    "DataRequests": [{
      "headers": {},
      "body": "null",
      "conditions": null,
      "configuration": null,
      "method": "GET",
      "route": `breakdown?site_id=${website}&property=visit:utm_medium&metrics=visitors,pageviews`,
      "useGlobalHeaders": true,
      "query": null,
      "pagination": false,
      "items": "items",
      "itemsLimit": 100,
      "offset": "offset",
      "paginationField": null,
      "template": null
    }],
  }, {
    "td_id": 10,
    "fillColor": [
      chartColors.blue.rgb,
      chartColors.amber.rgb,
      chartColors.teal.rgb,
      chartColors.fuchsia.rgb,
    ],
    "patterns": [],
    "conditions": null,
    "fieldsSchema": {
      "root.results[].device": "string",
      "root.results[].visitors": "number"
    },
    "excludedFields": null,
    "groups": null,
    "query": null,
    "xAxis": "root.results[].device",
    "xAxisOperation": null,
    "yAxis": "root.results[].visitors",
    "yAxisOperation": "none",
    "dateField": null,
    "datasetColor": "rgba(255, 255, 255, 1)",
    "fill": false,
    "multiFill": true,
    "dateFormat": null,
    "legend": "Devices",
    "pointRadius": null,
    "formula": null,
    "groupBy": null,
    "DataRequests": [{
      "headers": {},
      "body": "null",
      "conditions": null,
      "configuration": null,
      "method": "GET",
      "route": `breakdown?site_id=${website}&property=visit:device`,
      "useGlobalHeaders": true,
      "query": null,
      "pagination": false,
      "items": "items",
      "itemsLimit": 100,
      "offset": "offset",
      "paginationField": null,
      "template": null
    }],
  }, {
    "td_id": 11,
    "fillColor": "rgba(0,0,0,0)",
    "patterns": [],
    "conditions": null,
    "fieldsSchema": {
      "root.results[].page": "string",
      "root.results[].pageviews": "number",
      "root.results[].visitors": "number"
    },
    "excludedFields": null,
    "groups": null,
    "query": null,
    "xAxis": "root.results[].page",
    "xAxisOperation": null,
    "yAxis": "root.results[].visitors",
    "yAxisOperation": "count",
    "dateField": null,
    "datasetColor": chartColors.blue.rgb,
    "fill": false,
    "multiFill": false,
    "dateFormat": null,
    "legend": "Pages",
    "pointRadius": null,
    "formula": null,
    "groupBy": null,
    "DataRequests": [{
      "headers": {},
      "body": "null",
      "conditions": null,
      "configuration": null,
      "method": "GET",
      "route": `breakdown?site_id=${website}&property=event:page&metrics=visitors,pageviews`,
      "useGlobalHeaders": true,
      "query": null,
      "pagination": false,
      "items": "items",
      "itemsLimit": 100,
      "offset": "offset",
      "paginationField": null,
      "template": null
    }],
  }, {
    "td_id": 12,
    "fillColor": "rgba(0,0,0,0)",
    "patterns": [],
    "conditions": null,
    "fieldsSchema": {
      "root.results[].entry_page": "string",
      "root.results[].pageviews": "number",
      "root.results[].visitors": "number"
    },
    "excludedFields": null,
    "groups": null,
    "query": null,
    "xAxis": "root.results[].entry_page",
    "xAxisOperation": null,
    "yAxis": "root.results[].visitors",
    "yAxisOperation": "count",
    "dateField": null,
    "datasetColor": chartColors.amber.rgb,
    "fill": false,
    "multiFill": false,
    "dateFormat": null,
    "legend": "Entry pages",
    "pointRadius": null,
    "formula": null,
    "groupBy": null,
    "DataRequests": [{
      "headers": {},
      "body": "null",
      "conditions": null,
      "configuration": null,
      "method": "GET",
      "route": `breakdown?site_id=${website}&property=visit:entry_page&metrics=visitors,pageviews`,
      "useGlobalHeaders": true,
      "query": null,
      "pagination": false,
      "items": "items",
      "itemsLimit": 100,
      "offset": "offset",
      "paginationField": null,
      "template": null
    }],
  }, {
    "td_id": 13,
    "fillColor": "rgba(0,0,0,0)",
    "patterns": [],
    "conditions": null,
    "fieldsSchema": {
      "root.results[].exit_page": "string",
      "root.results[].pageviews": "number",
      "root.results[].visitors": "number"
    },
    "excludedFields": null,
    "groups": null,
    "query": null,
    "xAxis": "root.results[].exit_page",
    "xAxisOperation": null,
    "yAxis": "root.results[].visitors",
    "yAxisOperation": "count",
    "dateField": null,
    "datasetColor": chartColors.teal.rgb,
    "fill": false,
    "multiFill": false,
    "dateFormat": null,
    "legend": "Exit pages",
    "pointRadius": null,
    "formula": null,
    "groupBy": null,
    "DataRequests": [{
      "headers": {},
      "body": "null",
      "conditions": null,
      "configuration": null,
      "method": "GET",
      "route": `breakdown?site_id=${website}&property=visit:exit_page&metrics=visitors,pageviews`,
      "useGlobalHeaders": true,
      "query": null,
      "pagination": false,
      "items": "items",
      "itemsLimit": 100,
      "offset": "offset",
      "paginationField": null,
      "template": null
    }],
  }, {
    "td_id": 14,
    "fillColor": "rgba(0,0,0,0)",
    "patterns": [],
    "conditions": null,
    "fieldsSchema": {
      "root.results[].country": "string",
      "root.results[].pageviews": "number",
      "root.results[].visitors": "number"
    },
    "excludedFields": null,
    "groups": null,
    "query": null,
    "xAxis": "root.results[].country",
    "xAxisOperation": null,
    "yAxis": "root.results[].visitors",
    "yAxisOperation": "count",
    "dateField": null,
    "datasetColor": chartColors.blue.rgb,
    "fill": false,
    "multiFill": false,
    "dateFormat": null,
    "legend": "Countries",
    "pointRadius": null,
    "formula": null,
    "groupBy": null,
    "DataRequests": [{
      "headers": {},
      "body": "null",
      "conditions": null,
      "configuration": null,
      "method": "GET",
      "route": `breakdown?site_id=${website}&property=visit:country&metrics=pageviews,visitors`,
      "useGlobalHeaders": true,
      "query": null,
      "pagination": false,
      "items": "items",
      "itemsLimit": 100,
      "offset": "offset",
      "paginationField": null,
      "template": null
    }],
  }, {
    "td_id": 15,
    "fillColor": "rgba(0,0,0,0)",
    "patterns": [],
    "conditions": null,
    "fieldsSchema": {
      "root.results[].browser": "string",
      "root.results[].pageviews": "number",
      "root.results[].visitors": "number"
    },
    "excludedFields": null,
    "groups": null,
    "query": null,
    "xAxis": "root.results[].browser",
    "xAxisOperation": null,
    "yAxis": "root.results[].visitors",
    "yAxisOperation": "count",
    "dateField": null,
    "datasetColor": chartColors.amber.rgb,
    "fill": false,
    "multiFill": false,
    "dateFormat": null,
    "legend": "Browsers",
    "pointRadius": null,
    "formula": null,
    "groupBy": null,
    "DataRequests": [{
      "headers": {},
      "body": "null",
      "conditions": null,
      "configuration": null,
      "method": "GET",
      "route": `breakdown?site_id=${website}&property=visit:browser&metrics=visitors,pageviews`,
      "useGlobalHeaders": true,
      "query": null,
      "pagination": false,
      "items": "items",
      "itemsLimit": 100,
      "offset": "offset",
      "paginationField": null,
      "template": null
    }],
  }],
  "Charts": [
    {
      "name": "Visits stats",
      "type": "line",
      "subType": "lcTimeseries",
      "public": false,
      "shareable": false,
      "chartSize": 1,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "kpi",
      "maxValue": null,
      "minValue": null,
      "disabledExport": null,
      "layout": {
        "xxs": [0, 0, 2, 2], "xs": [0, 0, 6, 2], "sm": [0, 0, 3, 2], "md": [0, 0, 4, 2], "lg": [0, 0, 3, 2]
      },
      "ChartDatasetConfigs": [
        {
          "td_id": 1,
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "datasetColor": chartColors.blue.rgb,
          "fill": false,
          "multiFill": false,
          "legend": "Visitors",
        },
        {
          "td_id": 2,
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "conditions": null,
          "datasetColor": chartColors.amber.rgb,
          "fill": false,
          "multiFill": false,
          "legend": "Pageviews",
        }
      ],
      "tid": 1
    },
    {
      "name": "Visitors chart",
      "type": "line",
      "subType": "lcTimeseries",
      "public": false,
      "shareable": false,
      "chartSize": 2,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "kpichart",
      "maxValue": null,
      "minValue": null,
      "disabledExport": null,
      "showGrowth": true,
      "layout": {
        "xxs": [0, 2, 2, 2], "xs": [0, 2, 6, 2], "sm": [3, 0, 5, 2], "md": [4, 0, 6, 2], "lg": [3, 0, 6, 2]
      },
      "ChartDatasetConfigs": [
        {
          "td_id": 3,
          "fillColor": chartColors.blue.rgba(0.1),
          "patterns": [],
          "conditions": null,
          "datasetColor": chartColors.blue.rgb,
          "fill": true,
          "multiFill": false,
          "legend": "Visitors",
          "pointRadius": null,
        }
      ],
      "tid": 0
    },
    {
      "name": "Visit length",
      "type": "line",
      "subType": "AddTimeseries",
      "public": false,
      "shareable": false,
      "chartSize": 1,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "kpi",
      "maxValue": null,
      "minValue": null,
      "disabledExport": null,
      "layout": {
        "xxs": [0, 4, 2, 2], "xs": [0, 4, 6, 2], "sm": [0, 2, 2, 2], "md": [0, 2, 4, 2], "lg": [9, 0, 3, 2]
      },
      "ChartDatasetConfigs": [
        {
          "td_id": 4,
          "fillColor": "rgba(0,0,0,0)",
          "patterns": [],
          "datasetColor": chartColors.blue.rgb,
          "fill": false,
          "multiFill": false,
          "legend": "Duration",
          "formula": "{val}s",
        },
        {
          "td_id": 5,
          "fillColor": "rgba(0,0,0,0)",
          "datasetColor": chartColors.amber.rgb,
          "fill": false,
          "multiFill": false,
          "legend": "Bounce rate",
          "formula": "{val}%",
        }
      ],
      "tid": 2
    },
    {
      "name": "Top sources",
      "type": "table",
      "subType": "timeseries",
      "public": false,
      "shareable": false,
      "chartSize": 3,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "chart",
      "maxValue": null,
      "minValue": null,
      "disabledExport": null,
      "ChartDatasetConfigs": [
        {
          "td_id": 6,
          "fillColor": "rgba(0,0,0,0)",
          "datasetColor": chartColors.blue.rgb,
          "fill": false,
          "multiFill": false,
          "dateFormat": null,
          "legend": "Sources",
        },
        {
          "td_id": 7,
          "fillColor": "rgba(0,0,0,0)",
          "datasetColor": chartColors.amber.rgb,
          "fill": false,
          "multiFill": false,
          "legend": "UTM Sources",
          "pointRadius": null,
        },
        {
          "td_id": 8,
          "fillColor": "rgba(0,0,0,0)",
          "datasetColor": chartColors.teal.rgb,
          "fill": false,
          "multiFill": false,
          "legend": "UTM Mediums",
          "pointRadius": null,
        },
        {
          "td_id": 9,
          "fillColor": "rgba(0,0,0,0)",
          "datasetColor": chartColors.fuchsia.rgb,
          "fill": false,
          "multiFill": false,
          "legend": "UTM Campaigns",
        }
      ],
      "tid": 3
    },
    {
      "name": "Devices",
      "type": "doughnut",
      "subType": "timeseries",
      "public": false,
      "shareable": false,
      "chartSize": 1,
      "displayLegend": true,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "chart",
      "maxValue": null,
      "minValue": null,
      "disabledExport": null,
      "layout": {
        "xxs": [0, 6, 2, 3], "xs": [0, 6, 6, 3], "sm": [2, 2, 6, 2], "md": [4, 2, 6, 2], "lg": [0, 2, 6, 3]
      },
      "ChartDatasetConfigs": [
        {
          "td_id": 10,
          "fillColor": [
            chartColors.blue.rgb,
            chartColors.amber.rgb,
            chartColors.teal.rgb,
            chartColors.fuchsia.rgb,
          ],
          "datasetColor": "rgba(255, 255, 255, 1)",
          "fill": false,
          "multiFill": true,
          "legend": "Devices",
        }
      ],
      "tid": 5
    },
    {
      "name": "Top pages",
      "type": "table",
      "subType": "timeseries",
      "public": false,
      "shareable": false,
      "chartSize": 2,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "chart",
      "maxValue": null,
      "minValue": null,
      "disabledExport": null,
      "layout": {
        "xxs": [0, 9, 2, 3], "xs": [0, 9, 6, 3], "sm": [0, 4, 6, 3], "md": [0, 4, 6, 3], "lg": [6, 2, 6, 3]
      },
      "ChartDatasetConfigs": [
        {
          "td_id": 11,
          "fillColor": "rgba(0,0,0,0)",
          "datasetColor": chartColors.blue.rgb,
          "fill": false,
          "multiFill": false,
          "legend": "Pages",
        },
        {
          "td_id": 12,
          "fillColor": "rgba(0,0,0,0)",
          "datasetColor": chartColors.amber.rgb,
          "fill": false,
          "multiFill": false,
          "legend": "Entry pages",
        },
        {
          "td_id": 13,
          "fillColor": "rgba(0,0,0,0)",
          "datasetColor": chartColors.teal.rgb,
          "fill": false,
          "multiFill": false,
          "legend": "Exit pages",
        }
      ],
      "tid": 4
    },
    {
      "name": "Countries & Browsers",
      "type": "table",
      "subType": "timeseries",
      "public": false,
      "shareable": false,
      "chartSize": 2,
      "displayLegend": false,
      "pointRadius": null,
      "startDate": null,
      "endDate": null,
      "includeZeros": true,
      "currentEndDate": false,
      "timeInterval": "day",
      "autoUpdate": null,
      "draft": false,
      "mode": "chart",
      "maxValue": null,
      "minValue": null,
      "disabledExport": null,
      "layout": {
        "xxs": [0, 12, 2, 3], "xs": [0, 12, 6, 3], "sm": [0, 7, 6, 3], "md": [0, 7, 6, 3], "lg": [6, 5, 6, 3]
      },
      "ChartDatasetConfigs": [
        {
          "td_id": 14,
          "fillColor": "rgba(0,0,0,0)",

          "datasetColor": chartColors.blue.rgb,
          "fill": false,
          "multiFill": false,
          "legend": "Countries",
        },
        {
          "td_id": 15,
          "fillColor": "rgba(0,0,0,0)",
          "datasetColor": chartColors.amber.rgb,
          "fill": false,
          "multiFill": false,
          "legend": "Browsers",
        }
      ],
      "tid": 6
    }
  ],
});

module.exports.template = template;

module.exports.build = async (teamId, projectId, {
  website, apiKey, charts, connection_id
}) => {
  if ((!website || !apiKey) && !connection_id) return Promise.reject("Missing required 'website' or 'apiKey' argument");

  if (!connection_id) {
    let checkErrored = false;
    const checkWebsiteOpt = {
      url: `https://plausible.io/api/v1/stats/aggregate?site_id=${website}&period=6mo&metrics=visitors,pageviews,bounce_rate,visit_duration`,
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      json: true,
    };

    try {
      await request(checkWebsiteOpt);
    } catch (e) {
      checkErrored = e;
    }

    if (checkErrored) {
      return Promise.reject(new Error(checkErrored));
    }
  }

  return builder(teamId, projectId, website, apiKey, template, charts, connection_id)
    .catch((err) => {
      if (err && err.message) {
        return Promise.reject(err.message);
      }
      return Promise.reject(err);
    });
};
