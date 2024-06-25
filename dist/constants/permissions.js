"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = void 0;
/**
 * Represents a list of permissions.
 */
exports.permissions = [
    {
        value: 0,
        name: "MANAGE",
        description: "It's a bypass permission that allows the user to manage the system."
    },
    {
        value: 1,
        name: "GET",
        description: "It allows the user to get basic data from the system."
    },
    {
        value: 2,
        name: "POST",
        description: "It allows the user to create data in the system."
    },
    {
        value: 4,
        name: "PUT",
        description: "It allows the user to update data in the system."
    },
    {
        value: 8,
        name: "DELETE",
        description: "It allows the user to delete data in the system."
    },
    {
        value: 16,
        name: "DETAIL",
        description: "It allows the user to get detailed data from the system."
    },
    {
        value: 32,
        name: "APPROVE",
        description: "It allows the user to approve data in the system."
    },
    {
        value: 64,
        name: "REJECT",
        description: "It allows the user to reject data in the system."
    }
];
