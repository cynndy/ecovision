/**
 * Capitalize the first letter of a string or word
 * 
 * @param {*} data 
 * @returns string
 */
export function capitalizeFirstLetter(data) {
    return data.charAt(0).toUpperCase() + data.slice(1);
}

/**
 * Removes space characters
 * 
 * @param {*} data 
 * @returns string
 */
export function removeSpaceChar(data){
    return data.toLowerCase().split(' ').join('-');
}

/**
 * Validate email address
 * 
 * @param {*} email 
 * @returns boolean
 */
export function validateEmail(email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
        return false;
    }
    
    return true;
}

export function randomString(length) {
    return Math.random()
        .toString(36)
        .substring(2, length + 2);
}