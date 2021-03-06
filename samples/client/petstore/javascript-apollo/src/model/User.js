/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The User model module.
 * @module model/User
 * @version 1.0.0
 */
class User {
    /**
     * @member {Number} id
     * @type {Number}
     */
    id;
    /**
     * @member {String} username
     * @type {String}
     */
    username;
    /**
     * @member {String} firstName
     * @type {String}
     */
    firstName;
    /**
     * @member {String} lastName
     * @type {String}
     */
    lastName;
    /**
     * @member {String} email
     * @type {String}
     */
    email;
    /**
     * @member {String} password
     * @type {String}
     */
    password;
    /**
     * @member {String} phone
     * @type {String}
     */
    phone;
    /**
     * @member {Number} userStatus
     * @type {Number}
     */
    userStatus;

    

    /**
     * Constructs a new <code>User</code>.
     * A User who is purchasing from the pet store
     * @alias module:model/User
     */
    constructor() { 
        
        User.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('userStatus')) {
                obj['userStatus'] = ApiClient.convertToType(data['userStatus'], 'Number');
            }
        }
        return obj;
    }
}



export default User;

