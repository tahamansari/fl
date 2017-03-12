/* global angular, document, window */
'use strict';
angular.module('starter.controllers', [])

    .controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {

        // Form data for the login modal
        $scope.loginData = {};
        $scope.isExpanded = false;
        $scope.hasHeaderFabLeft = false;
        $scope.hasHeaderFabRight = false;

        var navIcons = document.getElementsByClassName('ion-navicon');
        for (var i = 0; i < navIcons.length; i++) {
            navIcons.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        }

        ////////////////////////////////////////
        // Layout Methods
        ////////////////////////////////////////

        $scope.hideNavBar = function() {
            document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
        };

        $scope.showNavBar = function() {
            document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
        };

        $scope.noHeader = function() {
            var content = document.getElementsByTagName('ion-content');
            for (var i = 0; i < content.length; i++) {
                if (content[i].classList.contains('has-header')) {
                    content[i].classList.toggle('has-header');
                }
            }
        };

        $scope.setExpanded = function(bool) {
            $scope.isExpanded = bool;
        };

        $scope.setHeaderFab = function(location) {
            var hasHeaderFabLeft = false;
            var hasHeaderFabRight = false;

            switch (location) {
                case 'left':
                    hasHeaderFabLeft = true;
                    break;
                case 'right':
                    hasHeaderFabRight = true;
                    break;
            }

            $scope.hasHeaderFabLeft = hasHeaderFabLeft;
            $scope.hasHeaderFabRight = hasHeaderFabRight;
        };

        $scope.hasHeader = function() {
            var content = document.getElementsByTagName('ion-content');
            for (var i = 0; i < content.length; i++) {
                if (!content[i].classList.contains('has-header')) {
                    content[i].classList.toggle('has-header');
                }
            }

        };

        $scope.hideHeader = function() {
            $scope.hideNavBar();
            $scope.noHeader();
        };

        $scope.showHeader = function() {
            $scope.showNavBar();
            $scope.hasHeader();
        };

        $scope.clearFabs = function() {
            var fabs = document.getElementsByClassName('button-fab');
            if (fabs.length && fabs.length > 1) {
                fabs[0].remove();
            }
        };
    })

    .controller('LoginCtrl', ["$scope", "$http", "$timeout", "$stateParams", "ionicMaterialInk", function($scope, $http, $timeout, $stateParams, ionicMaterialInk) {
        $scope.login = function() {
	        var empid = document.getElementById("emp_id").value;
	        var dt = {emp_id: empid};
			$http({
				method: 'POST',
				url: 'http://kreaserv-tech.com/fl/Api/login',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				transformRequest: function(obj) {
			        var str = [];
			        for(var p in obj)
			        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			        return str.join("&");
    			},
				data: dt
			}).then(function successCallback(response) {
				// ok
				var resp = JSON.parse(JSON.stringify(response));
				console.log(resp);
				if(resp.data.status == "success"){
					window.location.href = "/#/app/dashboard";
				}
			}, function errorCallback(response) {
				// ko
				console.log(response);
			});
        }

        $scope.$parent.clearFabs();
        $timeout(function() {
            $scope.$parent.hideHeader();
        }, 0);
        ionicMaterialInk.displayEffect();


        document.addEventListener("deviceready", init, false);

        //The directory to store data
        var store;

        //Used for status updates
        var $status;

        //URL of our asset
        var assetURL = "https://raw.githubusercontent.com/cfjedimaster/Cordova-Examples/master/readme.md";

        //File name of our important data file we didn't ship with the app
        var fileName = "mydatafile.txt";

        function init() {

            $status = document.querySelector("#status");

            //$status.innerHTML = "Checking for data file.";

            store = cordova.file.dataDirectory;

            //Check for the file. 
            window.resolveLocalFileSystemURL(store + fileName, appStart, downloadAsset);

        }

        function downloadAsset() {
            var fileTransfer = new FileTransfer();
            console.log("About to start transfer");
            fileTransfer.download(assetURL, store + fileName,
                function(entry) {
                    console.log("Success!");
                    appStart();
                },
                function(err) {
                    console.log("Error");
                    console.dir(err);
                });
        }

        //I'm only called when the file exists or has been downloaded.
        function appStart() {
            $status.innerHTML = "App ready!";
        }

        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            console.log(cordova.file);
        }
    }])

    .controller('DashboardCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();

    })

    .controller('RelaunchCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();

    })

    .controller('RssmCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();

    })

    .controller('StoryCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();

    })

    .controller('StructureCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();

    })

    .controller('TradeCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();

    })

    .controller('SalesmenCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();

    })

    .controller('MissionCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();

    })

    .controller('FeedsCtrl', ["$scope", "$http", "$stateParams", "$timeout", "ionicMaterialInk", "ionicMaterialMotion", function($scope, $http, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        
		$http({
			method: 'GET',
			url: 'http://kreaserv-tech.com/fl/Api/get_feeds'
		}).then(function successCallback(response) {
			// ok
			console.log(response);
			var html = "";
			var resp = JSON.parse(JSON.stringify(response));
			var data_len = resp.data.data.length;
			for(var i = 0; i < data_len; i++){
				html += '<div class=feed-box><div class=user><img src=img/user.png class="float-left mar-right3per"><h1>MORDEN KEITH</h1><p>Mumbai</div><img src="'+resp.data.data[i].feed_img+'" width=100%><div class=feed-border><h1 class=mar-topbot3per>What is Lorem Ipsum?</h1><p class=feed-content>'+resp.data.data[i].feed_content+'</div></div>';
			}
			document.getElementById("all_feeds").innerHTML = html;
		}, function errorCallback(response) {
			// ko
			console.log(response);
		});
		
		// feed
		$scope.feed = function() {
			var base_64 = document.getElementById("img_data").value;
			var feed_content = document.getElementById("feed_content").value;
			var dt = {emp_id: '101', feed_img: base_64, feed_content: feed_content};
			$http({
				method: 'POST',
				url: 'http://kreaserv-tech.com/fl/Api/create_feed',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				transformRequest: function(obj) {
			        var str = [];
			        for(var p in obj)
			        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			        return str.join("&");
    			},
				data: dt
			}).then(function successCallback(response) {
				// ok
				var resp = JSON.parse(JSON.stringify(response));
				console.log(resp);
				if(resp.data.status == "success"){
				}
			}, function errorCallback(response) {
				// ko
				console.log(response);
			});
		}
    }])


    .controller('UpdateCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();

    })


    .controller('ProfileCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();

    })
;

function readFile(a) {
	if (a.files && a.files[0]) {
		var FR= new FileReader();
		FR.addEventListener("load", function(e) {
			document.getElementById("img_data").value = e.target.result;
		}); 
		FR.readAsDataURL( a.files[0] );
	}
}