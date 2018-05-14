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
})