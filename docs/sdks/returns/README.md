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

(async() => {
  const sdk = new Delta({
    security: {
      authorization: "",
      platformKey: "",
    },
  });

  const res = await sdk.returns.getReturnById({
    returnId: "benchmark",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetReturnByIdRequest](../../models/operations/getreturnbyidrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetReturnByIdResponse](../../models/operations/getreturnbyidresponse.md)>**


## postReturns

Create a new return

### Example Usage

```typescript
import { Delta } from "delta";
import { ReturnWithoutIdReturnedOrdersReturnedItemsCondition, ReturnWithoutIdStatus } from "delta/dist/sdk/models/shared";

(async() => {
  const sdk = new Delta({
    security: {
      authorization: "",
      platformKey: "",
    },
  });

  const res = await sdk.returns.postReturns({
    id: "<ID>",
    returnedOrders: [
      {
        returnedItems: [
          {},
        ],
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.ReturnWithoutId](../../models/shared/returnwithoutid.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.PostReturnsResponse](../../models/operations/postreturnsresponse.md)>**

