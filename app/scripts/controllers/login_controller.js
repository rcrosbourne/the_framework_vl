'use strict';

angular.module('theFrameworkVlApp')
  .controller('LoginController', ['$state','$scope','userService', function ($state, $scope, userService) {

        formValidation();
        $scope.formData = {};
        $scope.closeClick = function(){
            $scope.errorMessage = "";
        }
        $scope.validateUser = function(username, password){

            if(userService.validateUser(username,password)){
                console.log("User " + username + " validated");
                //TODO store user name in localStorage. Redirect to home page
                amplify.store('currentUser', username);
                $state.transitionTo('home');
            }else{
                console.error('User ' + username + ' not validated');
                $scope.errorMessage = "Invalid Username or Password";
            }
        };
      }]);
function formValidation(){
    runAllForms();

    $(function() {
        // Validation
        $('#login-form').validate({
            // Rules for form validation
            rules : {
                email : {
                    required : true,
                    email : true
                },
                password : {
                    required : true,
                    minlength : 7,
                    maxlength : 20
                }
            },

// Messages for form validation
            messages : {
                email : {
                    required : 'Please enter your email address',
                    email : 'Please enter a VALID email address'
                },
                password : {
                    required : 'Please enter your password'
                }
            },

// Do not change code below
            errorPlacement : function(error, element) {
                error.insertAfter(element.parent());
            }
        });
    });
}