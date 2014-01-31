/**
 * Created by smurf on 30/01/2014.
 */
angular.module('theFrameworkVlApp').controller('HomeController',['$location','$scope','$state',
function homeController($location, $scope, $state){
    $scope.logout = function(){
        $.SmartMessageBox({
            title : "<i class='fa fa-sign-out txt-color-orangeDark'></i> Logout <span class='txt-color-orangeDark'><strong>" + amplify.store('currentUser') + "</strong></span> ?",
            content : "You can improve your security further after logging out by closing this opened browser",
            buttons : '[No][Yes]'

        }, function(ButtonPressed) {
            if (ButtonPressed == "Yes") {
                amplify.store("currentUser", null);
                $state.transitionTo('login');

            }

        });
    }
//    // LOGOUT BUTTON
//    $('#logout a').click(function(e) {
//        //get the link
//        $.loginURL = $(this).attr('href');
//
//        // ask verification
//        $.SmartMessageBox({
//            title : "<i class='fa fa-sign-out txt-color-orangeDark'></i> Logout <span class='txt-color-orangeDark'><strong>" + amplify.store('currentUser') + "</strong></span> ?",
//            content : "You can improve your security further after logging out by closing this opened browser",
//            buttons : '[No][Yes][Cancel]'
//
//        }, function(ButtonPressed) {
//            if (ButtonPressed == "Yes") {
//                $.root_.addClass('animated fadeOutUp');
//                setTimeout(logout, 1000);
//                //Clear local storage
//                amplify.store("currentUser", null);
//            }
//
//        });
//        e.preventDefault();
//    });
}]);