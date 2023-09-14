# GetTransactionByIdResponse


## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `contentType`                                                 | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `statusCode`                                                  | *number*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `rawResponse`                                                 | [AxiosResponse>](https://axios-http.com/docs/res_schema)      | :heavy_minus_sign:                                            | N/A                                                           |
| `transaction`                                                 | [shared.Transaction](../../models/shared/transaction.md)      | :heavy_minus_sign:                                            | The transaction corresponding to the provided `transactionId` |