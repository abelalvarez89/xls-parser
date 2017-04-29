# xls-parser #

### Install ###
````
npm install xls-parser
````

### Use node ###

````
'use strict';
var xlsParser = require('xls-parser');

function uploadFile(file) {
	
	var data = xlsParser.onFileSelection(file);
	console.log(data); //output xls json data
}

````

#### Example ####

Im using ng-file-upload in this example
 # html #
````
 <input type="file" ngf-select="vm.uploadFile($file)" ng-disabled="vm.disableUpload" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"  />
 <pre>{{vm.data | json}}</pre>
````

# javascript #
````
var xlsParser = require('xls-parser');

function uploadFile(file) {
	
	vm.data = xlsParser.onFileSelection(file);
	
}
````