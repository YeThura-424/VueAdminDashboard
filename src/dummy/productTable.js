const json = {
  headers: [
    {
      label: "Name",
      tableValue: "name",
    },
    {
      label: "SKU",
      tableValue: "sku",
    },
    {
      label: "Category",
      tableValue: "category",
    },
    {
      label: "Price",
      tableValue: "bestprice",
    },
    {
      label: "Stock",
      tableValue: "inStock",
    },
    {
      label: "Status",
      tableValue: "status",
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
    {
      name: "View",
      action: "detail",
      type: "info",
    },
  ],
};

export default json;
