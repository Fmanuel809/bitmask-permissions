import { Permissions } from "./types/permissions.type";
/**
 * This class is responsible for managing permissions using a bitmask value.
 * @class BitmaskPermission
 * @public
 *
 * @note This class does not store any data, it only allows operations using bitmask, to store or assign the values of the permissions you need to use a your own business logic.
 */
export declare class BitmaskPermission {
    /**
     * The list of permissions.
     *
     * @protected
     * @type {Array<Permissions>}
     * @memberof BitmaskPermission
     * @public
     * @readonly
     */
    protected permissionsList: Array<Permissions>;
    /**
     * Constructor.
     *
     * @param permissionsList The list of permissions.
     * @returns A new instance of BitmaskPermission.
     * @constructor BitmaskPermission
     * @public
     */
    constructor(permissionsList?: Array<Permissions>);
    /**
     * Gets the permissions list.
     *
     * @returns The permissions list.
     * @memberof BitmaskPermission
     * @public
     */
    getPermissionsList(): Array<Permissions>;
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
    validatePermission(permissions: number, permission: string): boolean;
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
    assignPermission(permissions: number, permission: string): number;
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
    removePermission(permissions: number, permission: string): number;
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
    getPermissions(permissions: number): string[];
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
    private _getPermissions;
    /**
     * Gets the permission value using the permission name.
     * @param permission The permission name.
     * @returns The permission value.
     */
    private getPermissionValue;
}
