# ReturnWithoutIdReturnedOrders


## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *number*                                                                                            | :heavy_minus_sign:                                                                                  | Unique identifier of the order within delta.                                                        |
| `platformId`                                                                                        | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The platform-specific ID of the order.                                                              |
| `returnedItems`                                                                                     | [shared.ReturnWithoutIdReturnedItems](../../../sdk/models/shared/returnwithoutidreturneditems.md)[] | :heavy_minus_sign:                                                                                  | The list of returned items.                                                                         |