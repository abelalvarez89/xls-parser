# xls-parser #

### Description ###
Parse csv, xls, xlsx into json

### Install ###
````
npm install xls-parser
````

### Use node ###

To use this library you need to have already the file uploaded, there are many libraries out there to select a file from your system. In the example below I provided an HTML(bootstrap) snippet and a JS snippet, of the components you need to have.

Example
````
<html>
...
<form>
  <div class="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
</form>
...
</html>

import xlsxParser from 'xls-parser';

xlsxParser
  .onFileSelection(file
  .then(data => {
    var parsedData = data;
  });

````

Example using AngularJS
Install
````
npm install ng-file-upload
npm install xls-parser
````
index.js 
````
'use strict';

var angular = require('angular');

require('ng-file-upload');

angular.module('test-xls-parser', ['ngFileUpload'])
.component('testXlsParserUpload', {
    template: '<input type="file" ngf-select="vm.uploadFile($file)" ng-disabled="vm.disableUpload" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/><pre>{{vm.data | json}}</pre>',
    controller: function() {
        var vm = this;
        var xlsParser = require('xls-parser');

        vm.uploadFile = function(file){
            xlsParser.onFileSelection(file)
			.then((data) => {
				vm.data = data;
			});
        }
    },
    controllerAs: 'vm'
});

````
index.html
````
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>XLS-Parser</title>
</head>
<body ng-app="test-xls-parser">
    <test-xls-parser-upload>loading</test-xls-parser-upload>
    
    <script src="bundle.min.js"></script>
</body>
</html>
````

# input file #
````
Name	| Lastname	| Age
-------------------------
test1	| node		| 4
test2	| node		|
test3	| node		| 9
test4	| node		|

````

# output sample #
````
[
  {
    "Name": "test1",
    "Lastname": "node",
    "Age": 4
  },
  {
    "Name": "test2",
    "Lastname": "node"
  },
  {
    "Name": "test3",
    "Lastname": "node",
    "Age": 9
  },
  {
    "Name": "test4",
    "Lastname": "node"
  }
]
````

