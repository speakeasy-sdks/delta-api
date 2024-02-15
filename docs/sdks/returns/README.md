# Returns
(*returns*)

## Overview

Provides the returns information

### Available Operations

* [getReturnById](#getreturnbyid) - Get a specific return
* [postReturns](#postreturns) - Create a new return

## getReturnById

Get a specific return

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

  const res = await sdk.returns.getReturnById({
    returnId: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetReturnByIdRequest](../../sdk/models/operations/getreturnbyidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetReturnByIdResponse](../../sdk/models/operations/getreturnbyidresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 404,500,502      | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

## postReturns

Create a new return

### Example Usage

```typescript
import { Delta } from "delta";
import { ReturnWithoutIdCondition, ReturnWithoutIdStatus } from "delta/dist/sdk/models/shared";

async function run() {
  const sdk = new Delta({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
      platformKey: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.returns.postReturns({
    carrier: "DHL",
    connectionId: "71f133b0-7936-4c46-8905-df646095537a",
    createdAt: "2023-02-09T00:00:00.000Z",
    id: "<id>",
    platformId: "2522",
    quantity: 10,
    returnedOrders: [
      {
        id: 45,
        platformId: "2522",
        returnedItems: [
          {
            barcode: "5901234123457",
            condition: ReturnWithoutIdCondition.Used,
            id: 53,
            platformId: "a2235",
            quantity: 1,
            reason: "defective",
            sku: "1234",
            variantId: "z8889",
          },
        ],
      },
    ],
    shopperMessage: "defective",
    status: ReturnWithoutIdStatus.Other,
    trackingNumber: "A12356FG",
    updatedAt: "2023-02-09T00:00:00.000Z",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.ReturnWithoutId](../../sdk/models/shared/returnwithoutid.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.PostReturnsResponse](../../sdk/models/operations/postreturnsresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400,409,500,502  | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |
