/*
 * @Author: fhc
 * @Date:   2015-10-26 11:47:24
 * @Last Modified by:   fhc
 * @Last Modified time: 2015-10-26 14:49:52
 */

'use strict';

var ccFedModule = angular.module('ccFedModule', [])

ccFedModule.controller('toolsController', ['$scope', '$http',
    function($scope, $http) {
        // 这里的位置是相对 引用js的那个 html而言的，不是相对于这个js文件
        $http.get('../modules/tools/tools.json')
            .then(function(response) {
                // 这里的 repsonse是一个对象，response.data 才是想要的数据
                $scope.basicTools = response.data[0].basicTools;
                $scope.textEditors = response.data[0].textEditors;
            })
    }
])
