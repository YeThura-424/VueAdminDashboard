const json = {
  headers: [
    {
      label: "Name",
      tableValue: "firstname",
    },
    {
      label: "Email",
      tableValue: "email",
    },
    {
      label: "Phone",
      tableValue: "phone",
    },
    {
      label: "Education",
      tableValue: "education",
    },
    {
      label: "Street",
      tableValue: "street",
    },
  ],
  action: [
    {
      name: "Edit",
      action: "edit",
      type: "warning",
    },
    {
      name: "Delete",
      action: "delete",
      type: "danger",
    },
  ],
};

export default json;
