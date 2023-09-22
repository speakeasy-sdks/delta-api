# PostOrdersResponse


## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `contentType`                                             | *string*                                                  | :heavy_check_mark:                                        | N/A                                                       |
| `order`                                                   | [shared.Order](../../models/shared/order.md)              | :heavy_minus_sign:                                        | Order created successfully to the provided `Platform-Key` |
| `statusCode`                                              | *number*                                                  | :heavy_check_mark:                                        | N/A                                                       |
| `rawResponse`                                             | [AxiosResponse](https://axios-http.com/docs/res_schema)   | :heavy_minus_sign:                                        | N/A                                                       |