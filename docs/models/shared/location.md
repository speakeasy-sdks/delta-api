# Location


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `address1`                                              | *string*                                                | :heavy_minus_sign:                                      | The first address line of the address.                  |
| `address2`                                              | *string*                                                | :heavy_minus_sign:                                      | The second address line of the address.                 |
| `city`                                                  | *string*                                                | :heavy_minus_sign:                                      | The city of the address.                                |
| `countryCode`                                           | *string*                                                | :heavy_minus_sign:                                      | The country of the address. (ISO 3166-1)                |
| `id`                                                    | *string*                                                | :heavy_check_mark:                                      | Unique identifier of the location within delta.         |
| `name`                                                  | *string*                                                | :heavy_minus_sign:                                      | The name of the location.                               |
| `platformId`                                            | *string*                                                | :heavy_minus_sign:                                      | The platform-specific ID of the location.               |
| `postalCode`                                            | *string*                                                | :heavy_minus_sign:                                      | The postal code of the address.                         |
| `region`                                                | *string*                                                | :heavy_minus_sign:                                      | The region of the address.                              |
| `status`                                                | [LocationStatus](../../models/shared/locationstatus.md) | :heavy_minus_sign:                                      | The status of the location.                             |
| `type`                                                  | [LocationType](../../models/shared/locationtype.md)     | :heavy_minus_sign:                                      | The type of the location.                               |