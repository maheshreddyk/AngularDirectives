(function(module){
'use strict';
  var mainController = function(){
  var ctrl = this;
  ctrl.text="Looking at the original employees table, the records will be stored sequentially on disk, most likely in the order of the employee_number column, so employee number 101 will follow 100, and so on.";
  }

module.controller('mainController',mainController);

}(angular.module('common')));