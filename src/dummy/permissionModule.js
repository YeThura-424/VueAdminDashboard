const permissions = [
  {
    general: [
      {
        module: "Product",
        model_value: "product",
        all: true,
        create: true,
        read: true,
        update: true,
        delete: true,
      },
      {
        module: "User",
        model_value: "user",
        all: true,
        create: true,
        read: true,
        update: true,
        delete: true,
      },
      {
        module: "Order",
        model_value: "order",
        all: true,
        create: true,
        read: true,
        update: true,
        delete: true,
      },
    ],
  },
  {
    authentication: [
      {
        module: "Role",
        model_value: "role",
        all: true,
        create: true,
        read: true,
        update: true,
        delete: true,
      },
      {
        module: "Permission",
        model_value: "permission",
        all: true,
        create: true,
        read: true,
        update: true,
        delete: true,
      },
      {
        module: "UserRolePermission",
        all: true,
        create: true,
        read: true,
        update: true,
        delete: true,
      },
    ],
  },
];

export default permissions;
