# GetAccountsResponse


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `accountCollection`                                                  | [shared.AccountCollection](../../models/shared/accountcollection.md) | :heavy_minus_sign:                                                   | The account corresponding to the provided `Platform-Key`             |
| `contentType`                                                        | *string*                                                             | :heavy_check_mark:                                                   | HTTP response content type for this operation                        |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | HTTP response status code for this operation                         |
| `rawResponse`                                                        | [AxiosResponse](https://axios-http.com/docs/res_schema)              | :heavy_minus_sign:                                                   | Raw HTTP response; suitable for custom response parsing              |