# Product


## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `category`                                             | *string*                                               | :heavy_minus_sign:                                     | The category of the product.                           |
| `connectionId`                                         | *string*                                               | :heavy_minus_sign:                                     | Unique identifier of the integration on delta.         |
| `createdAt`                                            | *string*                                               | :heavy_minus_sign:                                     | The date when the product was created. (ISO 8601)      |
| `description`                                          | *string*                                               | :heavy_minus_sign:                                     | The description of the product.                        |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | The unique identifier of the product.                  |
| `media`                                                | [shared.Media](../../models/shared/media.md)[]         | :heavy_minus_sign:                                     | The media files of the product.                        |
| `name`                                                 | *string*                                               | :heavy_minus_sign:                                     | The name of the product.                               |
| `platformId`                                           | *string*                                               | :heavy_minus_sign:                                     | The platform-specific ID of the product.               |
| `status`                                               | *string*                                               | :heavy_minus_sign:                                     | The status of the product.                             |
| `updatedAt`                                            | *string*                                               | :heavy_minus_sign:                                     | The date when the product was last updated. (ISO 8601) |
| `variants`                                             | [shared.Variants](../../models/shared/variants.md)[]   | :heavy_minus_sign:                                     | Variant of the product                                 |