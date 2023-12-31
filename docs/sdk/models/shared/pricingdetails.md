# PricingDetails

The price information about the item.


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `formerPrice`                                                  | *number*                                                       | :heavy_minus_sign:                                             | The former gross retail price of the item.                     |
| `isoCurrencyCode`                                              | *string*                                                       | :heavy_minus_sign:                                             | The currency of the item. (ISO 4217)                           |
| `price`                                                        | *number*                                                       | :heavy_minus_sign:                                             | The current gross retail price of the item.                    |
| `suggestedPrice`                                               | *number*                                                       | :heavy_minus_sign:                                             | The manufacturer's recommended gross retail price of the item. |
| `taxRate`                                                      | [shared.TaxRate](../../../sdk/models/shared/taxrate.md)        | :heavy_minus_sign:                                             | The tax rate of the item.                                      |
| `unitCost`                                                     | *number*                                                       | :heavy_minus_sign:                                             | The unit cost of the item.                                     |