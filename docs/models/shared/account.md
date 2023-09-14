# Account


## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `accountId`                                               | *string*                                                  | :heavy_check_mark:                                        | Unique identifier of platform for the account.            |
| `balance`                                                 | *number*                                                  | :heavy_minus_sign:                                        | Balance of the account.                                   |
| `category`                                                | [AccountCategory](../../models/shared/accountcategory.md) | :heavy_minus_sign:                                        | Cateogory of the account.                                 |
| `connectionId`                                            | *string*                                                  | :heavy_minus_sign:                                        | Unique identifier of the integration on delta.            |
| `createdAt`                                               | *string*                                                  | :heavy_minus_sign:                                        | Creation date of the return on the integration platform   |
| `currency`                                                | *string*                                                  | :heavy_minus_sign:                                        | ISO 4217 currency code associated with the account.       |
| `description`                                             | *string*                                                  | :heavy_minus_sign:                                        | Description of the account.                               |
| `id`                                                      | *string*                                                  | :heavy_minus_sign:                                        | The unique identifier of the account.                     |
| `name`                                                    | *string*                                                  | :heavy_minus_sign:                                        | Name of the account.                                      |
| `nominalCode`                                             | *string*                                                  | :heavy_minus_sign:                                        | Nominal code of the account.                              |
| `status`                                                  | [AccountStatus](../../models/shared/accountstatus.md)     | :heavy_minus_sign:                                        | Status of the account.                                    |
| `type`                                                    | [AccountType](../../models/shared/accounttype.md)         | :heavy_minus_sign:                                        | Type of the account.                                      |
| `updatedAt`                                               | *string*                                                  | :heavy_minus_sign:                                        | Last update on the return of the integration platform     |