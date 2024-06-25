"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitmaskPermission = void 0;
const permissions_1 = require("./constants/permissions");
/**
 * This class is responsible for managing permissions using a bitmask value.
 * @class BitmaskPermission
 * @public
 *
 * @note This class does not store any data, it only allows operations using bitmask, to store or assign the values of the permissions you need to use a your own business logic.
 */
class BitmaskPermission {
    /**
     * Constructor.
     *
     * @param permissionsList The list of permissions.
     * @returns A new instance of BitmaskPermission.
     * @constructor BitmaskPermission
     * @public
     */
    constructor(permissionsList = permissions_1.permissions) {
        this.permissionsList = permissionsList;
    }
    /**
     * Gets the permissions list.
     *
     * @returns The permissions list.
     * @memberof BitmaskPermission
     * @public
     */
    getPermissionsList() {
        return this.permissionsList;
    }
    /**
     * Validates if the permissions value contains the permission.
     *
     * @param permissions The permissions, as a bitmask value.
     * @param permission The permission name.
     * @returns True if the permissions contain the permission, false otherwise.
     *
     * @memberof BitmaskPermission
     * @public
     * @throws Error if the permission is not found.
     * @example
     * ```typescript
     * const permissions = 1 | 2 | 4;
     * const permission = "GET";
     * const hasPermission = validatePermission(permissions, permission);
     * console.log(hasPermission); // true
     * ```
     */
    validatePermission(permissions, permission) {
        const permissionValue = this.getPermissionValue(permission);
        return (permissions & permissionValue) !== 0;
    }
    /**
     * Removes the permission from the permissions value.
     *
     * @param permissions The permissions, as a bitmask value.
     * @param permission The permission name.
     * @returns The new permissions value.
     *
     * @memberof BitmaskPermission
     * @public
     * @throws Error if the permission is not found.
     * @example
     * ```typescript
     * let permissions = 1 | 2 | 4;
     * const permission = "GET";
     * permissions = removePermission(permissions, permission);
     * console.log(permissions); // 6
     * ```
     */
    assignPermission(permissions, permission) {
        const permissionValue = this.getPermissionValue(permission);
        return permissions | permissionValue;
    }
    /**
     * Removes the permission from the permissions value.
     * @param permissions The permissions, as a bitmask value.
     * @param permission The permission name.
     * @returns The new permissions value.
     *
     * @memberof BitmaskPermission
     * @public
     * @throws Error if the permission is not found.
     * @example
     * ```typescript
     * let permissions = 1 | 2 | 4;
     * const permission = "GET";
     * permissions = removePermission(permissions, permission);
     * console.log(permissions); // 6
     * ```
     */
    removePermission(permissions, permission) {
        const permissionValue = this.getPermissionValue(permission);
        return permissions & ~permissionValue;
    }
    /**
     * Gets an array of permissions from the permissions value.
     * @param permissions The permissions, as a bitmask value.
     * @returns The permissions.
     *
     * @memberof BitmaskPermission
     * @public
     * @example
     * ```typescript
     * const permissions = 1 | 2 | 4;
     * const permissionsArray = getPermissions(permissions);
     * console.log(permissionsArray); // ["GET", "POST", "PUT"]
     * ```
     */
    getPermissions(permissions) {
        return this._getPermissions(permissions);
    }
    /**
     * Gets the permissions from the permissions value.
     *
     * @param permissions The permissions, as a bitmask value.
     * @returns The permissions.
     *
     * @memberof BitmaskPermission
     * @private
     * @example
     * ```typescript
     * const permissions = 1 | 2 | 4;
     * const permissionsArray = getPermissions(permissions);
     * console.log(permissionsArray); // ["GET", "POST", "PUT"]
     * ```
     */
    _getPermissions(permissions, arrayPermissions = [], index = 0) {
        if (index >= this.permissionsList.length) {
            return arrayPermissions;
        }
        const permission = this.permissionsList[index];
        if ((permissions & permission.value) !== 0) {
            arrayPermissions.push(permission.name);
        }
        return this._getPermissions(permissions, arrayPermissions, index + 1);
    }
    /**
     * Gets the permission value using the permission name.
     * @param permission The permission name.
     * @returns The permission value.
     */
    getPermissionValue(permission) {
        const permissionObj = this.permissionsList.find((p) => p.name === permission);
        if (!permissionObj) {
            throw new Error(`Permission [${permission}] not found.`);
        }
        return permissionObj.value;
    }
}
exports.BitmaskPermission = BitmaskPermission;
