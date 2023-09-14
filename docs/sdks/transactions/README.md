# transactions

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
import { GetTransactionByIdResponse } from "delta/dist/sdk/models/operations";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.transactions.getTransactionById({
  transactionId: "consectetur",
}).then((res: GetTransactionByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetTransactionByIdRequest](../../models/operations/gettransactionbyidrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetTransactionByIdResponse](../../models/operations/gettransactionbyidresponse.md)>**


## getTransactions

Get all transactions

### Example Usage

```typescript
import { Delta } from "delta";
import { GetTransactionsResponse } from "delta/dist/sdk/models/operations";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.transactions.getTransactions().then((res: GetTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetTransactionsResponse](../../models/operations/gettransactionsresponse.md)>**

