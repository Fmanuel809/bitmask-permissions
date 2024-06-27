
# bitmask-permissions

A Node.js package for managing permissions using bitwise operations.

## Description

`bitmask-permissions` is a lightweight library for managing permissions using bitmask values. It allows you to easily add, remove, and validate permissions with high performance and minimal memory usage.

## Installation

Install the package using npm:

```bash
npm install bitmask-permissions
```

Or using yarn:

```bash
yarn add bitmask-permissions
```

## Usage

Here's a basic example of how to use the `bitmask-permissions` library:

```typescript
import { BitmaskPermission } from 'bitmask-permissions';
import { permissions } from './constants/permissions';

const bitmask = new BitmaskPermission(permissions);

const initialPermissions = 0;
const updatedPermissions = bitmask.assignPermission(initialPermissions, 'GET');
const hasGetPermission = bitmask.validatePermission(updatedPermissions, 'GET');

console.log(hasGetPermission); // true
```

## API

### `BitmaskPermission`

#### `constructor(permissionsList: Array<Permissions>)`

Creates a new instance of `BitmaskPermission`.

- **`permissionsList`**: An array of permissions.

#### `getPermissionsList(): Array<Permissions>`

Returns the list of permissions.

#### `validatePermission(permissions: number, permission: string): boolean`

Validates if the permissions value contains the specified permission.

- **`permissions`**: The permissions as a bitmask value.
- **`permission`**: The name of the permission.

#### `assignPermission(permissions: number, permission: string): number`

Assigns a permission to the permissions value.

- **`permissions`**: The permissions as a bitmask value.
- **`permission`**: The name of the permission.

#### `removePermission(permissions: number, permission: string): number`

Removes a permission from the permissions value.

- **`permissions`**: The permissions as a bitmask value.
- **`permission`**: The name of the permission.

#### `getPermissions(permissions: number): string[]`

Gets an array of permission names from the permissions value.

- **`permissions`**: The permissions as a bitmask value.

## Examples

### Assigning and Validating Permissions

```typescript
import { BitmaskPermission } from 'bitmask-permissions';
import { permissions } from './constants/permissions';

const bitmask = new BitmaskPermission(permissions);

let permissionsValue = 0;
permissionsValue = bitmask.assignPermission(permissionsValue, 'GET');
permissionsValue = bitmask.assignPermission(permissionsValue, 'POST');

const hasGetPermission = bitmask.validatePermission(permissionsValue, 'GET');
console.log(hasGetPermission); // true

const hasPutPermission = bitmask.validatePermission(permissionsValue, 'PUT');
console.log(hasPutPermission); // false
```

### Removing Permissions

```typescript
import { BitmaskPermission } from 'bitmask-permissions';
import { permissions } from './constants/permissions';

const bitmask = new BitmaskPermission(permissions);

let permissionsValue = 1 | 2 | 4; // Assume 1 = GET, 2 = POST, 4 = PUT
permissionsValue = bitmask.removePermission(permissionsValue, 'GET');

const hasGetPermission = bitmask.validatePermission(permissionsValue, 'GET');
console.log(hasGetPermission); // false
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

## Contact

Author: Felix Manuel Martinez Sosa  
GitHub: [Fmanuel809](https://github.com/Fmanuel809)
