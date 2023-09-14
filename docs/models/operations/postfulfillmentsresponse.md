# PostFulfillmentsResponse


## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `contentType`                                                   | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `fulfillment`                                                   | [shared.Fulfillment](../../models/shared/fulfillment.md)        | :heavy_minus_sign:                                              | Fulfillment created successfully to the provided `Platform-Key` |
| `statusCode`                                                    | *number*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `rawResponse`                                                   | [AxiosResponse>](https://axios-http.com/docs/res_schema)        | :heavy_minus_sign:                                              | N/A                                                             |