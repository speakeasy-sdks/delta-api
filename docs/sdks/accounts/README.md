# Accounts
(*accounts*)

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

async function run() {
  const sdk = new Delta({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
      platformKey: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.accounts.getAccountById({
    accountId: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetAccountByIdRequest](../../sdk/models/operations/getaccountbyidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetAccountByIdResponse](../../sdk/models/operations/getaccountbyidresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 404,500,502      | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

## getAccounts

Get all accounts

### Example Usage

```typescript
import { Delta } from "delta";

async function run() {
  const sdk = new Delta({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
      platformKey: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.accounts.getAccounts({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetAccountsRequest](../../sdk/models/operations/getaccountsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetAccountsResponse](../../sdk/models/operations/getaccountsresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 404,500,502      | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |
