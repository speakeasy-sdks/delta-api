# accounts

## Overview

Provides the accounts information

### Available Operations

* [getAccountById](#getaccountbyid) - Get a specific account
* [getAccounts](#getaccounts) - Get all accounts

## getAccountById

Get a specific account

### Example Usage

```typescript
import { Delta } from "delta";
import { GetAccountByIdResponse } from "delta/dist/sdk/models/operations";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.accounts.getAccountById({
  accountId: "provident",
}).then((res: GetAccountByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetAccountByIdRequest](../../models/operations/getaccountbyidrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetAccountByIdResponse](../../models/operations/getaccountbyidresponse.md)>**


## getAccounts

Get all accounts

### Example Usage

```typescript
import { Delta } from "delta";
import { GetAccountsResponse } from "delta/dist/sdk/models/operations";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.accounts.getAccounts({
  platformKey: "distinctio",
}).then((res: GetAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetAccountsRequest](../../models/operations/getaccountsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetAccountsResponse](../../models/operations/getaccountsresponse.md)>**

