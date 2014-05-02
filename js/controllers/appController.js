'use strict';

app.controller('appController',
    function ($scope, appService) {

        //VM initialization
        $scope.hello = appService.getHello;
        $scope.count = appService.getInitialCount;

        //application logic
        $scope.addCount = function () {
            //call service layer to execute business logic
            $scope.count = appService.addCount($scope.count);
        }
    }
);