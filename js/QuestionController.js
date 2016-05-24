var app = angular.module('questions', []);

app
	.controller('QuestionsCtrl', ['$scope', function($scope){
		
		$scope.step = 0;
		$scope.numOfSteps = 2; //I know it's wrong but I've trying to get the numOfSteps: #fail
		
		$scope.isLastStep = false;

		$scope.forms = [];

		$scope.config = {
			nameOfFood : ""
		}				

		$scope.nextStep = function(){
			$scope.step++;

			if($scope.step == $scope.numOfSteps){
				$scope.isLastStep = true;
			}

		}

		$scope.previousStep = function(){
			$scope.step--;

			if($scope.step != $scope.numOfSteps){
				$scope.isLastStep = false;
			}
		}

		$scope.setFormItem = function(formItem){
			$scope.forms.push(formItem);
		}

		$scope.getFormItem = function(){
			return numOfSteps;
		}			

	}])
	.directive('questionsAbout', function(){
		return {
			restrict: 'E', 			
			templateUrl: 'templates/about.html'			
		};
	})
	.directive('questionsFood', function(){
		return {
			restrict: 'E', 			
			templateUrl: 'templates/food.html'			
		};
	})
	.directive('questionsReview', function(){
		return {
			restrict: 'E', 			
			templateUrl: 'templates/review.html'			
		};
	})



