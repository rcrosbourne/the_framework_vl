/**
 * Created by smurf on 30/01/2014.
 */
angular.module('theFrameworkVlApp').factory('userService', userService);
function userService(){

    function validateUser(username, password){
        return username === password ? true : false;
    }
    return {
        validateUser : validateUser
    };

}