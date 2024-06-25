import { BitmaskPermission, permissions, Permissions } from "../src";

describe("BitmaskPermission", () => {
  describe("constructor", () => {
    it("should initialize with the default permissions list", () => {
      const defaultPermissions = permissions;
      const instance = new BitmaskPermission();
      expect(instance.getPermissionsList()).toEqual(defaultPermissions);
    });

    it("should initialize with a custom permissions list", () => {
      const customPermissions: Permissions[] = [
        {
          name: "READ",
          value: 1,
          description: "Read permission",
        },
        {
          name: "WRITE",
          value: 2,
          description: "Write permission",
        },
      ];
      const instance = new BitmaskPermission(customPermissions);
      expect(instance.getPermissionsList()).toEqual(customPermissions);
    });
  });

  describe("getPermissionsList", () => {
    it("should return the permissions list", () => {
      const instance = new BitmaskPermission();
      expect(instance.getPermissionsList()).toEqual(permissions);
    });
  });

  describe("validatePermission", () => {
    it("should return true for a present permission", () => {
      const permissions = 1 | 2; // 'GET' y 'POST'
      const instance = new BitmaskPermission();
      expect(instance.validatePermission(permissions, "GET")).toBe(true);
    });

    it("should return false for an absent permission", () => {
      const permissions = 1;
      const instance = new BitmaskPermission();
      expect(instance.validatePermission(permissions, "POST")).toBe(false);
    });

    it("should throw an error for an unknown permission", () => {
      const permissions = 1;
      const instance = new BitmaskPermission();
      expect(() => instance.validatePermission(permissions, "WRITE")).toThrow("Permission [WRITE] not found.");
    });
  });

  describe("removePermission", () => {
    it("should remove a permission from the permissions value", () => {
      let permissions = 1 | 2; // 'GET' y 'POST'
      const instance = new BitmaskPermission();
      permissions = instance.removePermission(permissions, "GET");
      expect(instance.validatePermission(permissions, "GET")).toBe(false);
    });

    it("should throw an error for an unknown permission", () => {
      const permissions = 1;
      const instance = new BitmaskPermission();
      expect(() => instance.removePermission(permissions, "WRITE")).toThrow("Permission [WRITE] not found.");
    });
  });

  describe("assignPermission", () => {
    it("should add a permission to the permissions value", () => {
      let permissions = 1; // 'GET'
      const instance = new BitmaskPermission();
      permissions = instance.assignPermission(permissions, "POST");
      expect(instance.validatePermission(permissions, "POST")).toBe(true);
    });

    it("should throw an error for an unknown permission", () => {
      const permissions = 1;
      const instance = new BitmaskPermission();
      expect(() => instance.assignPermission(permissions, "WRITE")).toThrow("Permission [WRITE] not found.");
    });
  });

  describe("getPermissions", () => {
    it("should return an array of permissions", () => {
      const permissions = 1 | 2; // 'GET' y 'POST'
      const instance = new BitmaskPermission();
      const permissionsArray = instance.getPermissions(permissions);
      expect(permissionsArray).toEqual(["GET", "POST"]);
    });

    it("should return an empty array for no permissions", () => {
      const permissions = 128;
      const instance = new BitmaskPermission();
      const permissionsArray = instance.getPermissions(permissions);
      expect(permissionsArray).toEqual([]);
    });
  });
});
