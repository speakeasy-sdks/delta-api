# Inventory


## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `barcode`                                                 | *string*                                                  | :heavy_minus_sign:                                        | The barcode of the inventory.                             |
| `connectionId`                                            | *string*                                                  | :heavy_minus_sign:                                        | Unique identifier of the connected platform within delta. |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | Unique identifier of the inventory within delta.          |
| `locationId`                                              | *string*                                                  | :heavy_minus_sign:                                        | Unique identifier of the location within delta.           |
| `locationPlatformId`                                      | *string*                                                  | :heavy_minus_sign:                                        | The platform-specific ID of the location.                 |
| `sku`                                                     | *string*                                                  | :heavy_minus_sign:                                        | The SKU of the inventory.                                 |
| `totalStock`                                              | *number*                                                  | :heavy_minus_sign:                                        | The total stock of the inventory.                         |
| `variantId`                                               | *string*                                                  | :heavy_minus_sign:                                        | The platform-specific ID of the inventory.                |