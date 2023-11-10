# PostProductsResponse


## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `contentType`                                               | *string*                                                    | :heavy_check_mark:                                          | HTTP response content type for this operation               |
| `product`                                                   | [shared.Product](../../../sdk/models/shared/product.md)     | :heavy_minus_sign:                                          | Product created successfully to the provided `Platform-Key` |
| `statusCode`                                                | *number*                                                    | :heavy_check_mark:                                          | HTTP response status code for this operation                |
| `rawResponse`                                               | [AxiosResponse](https://axios-http.com/docs/res_schema)     | :heavy_minus_sign:                                          | Raw HTTP response; suitable for custom response parsing     |