# Transactions
(*transactions*)

## Overview

Provides the transactions information

### Available Operations

* [getTransactionById](#gettransactionbyid) - Provide a transaction by id
* [getTransactions](#gettransactions) - Get all transactions

## getTransactionById

Get a specific transaction

### Example Usage

```typescript
import { Delta } from "delta";

(async() => {
  const sdk = new Delta({
    security: {
      authorization: "",
      platformKey: "",
    },
  });

  const res = await sdk.transactions.getTransactionById({
    transactionId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetTransactionByIdRequest](../../sdk/models/operations/gettransactionbyidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetTransactionByIdResponse](../../sdk/models/operations/gettransactionbyidresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 404,500,502      | application/json |
| errors.SDKError  | 400-600          | */*              |

## getTransactions

Get all transactions

### Example Usage

```typescript
import { Delta } from "delta";

(async() => {
  const sdk = new Delta({
    security: {
      authorization: "",
      platformKey: "",
    },
  });

  const res = await sdk.transactions.getTransactions();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetTransactionsResponse](../../sdk/models/operations/gettransactionsresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 404,500,502      | application/json |
| errors.SDKError  | 400-600          | */*              |
