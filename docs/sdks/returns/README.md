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
import { GetReturnByIdResponse } from "delta/dist/sdk/models/operations";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.returns.getReturnById({
  returnId: "eum",
}).then((res: GetReturnByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { PostReturnsResponse } from "delta/dist/sdk/models/operations";
import { ReturnWithoutIdReturnedOrdersReturnedItemsCondition, ReturnWithoutIdStatus } from "delta/dist/sdk/models/shared";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.returns.postReturns({
  carrier: "quas",
  connectionId: "praesentium",
  createdAt: "consequuntur",
  id: "82aa4825-62f2-422e-9817-ee17cbe61e6b",
  platformId: "molestiae",
  quantity: 6996.22,
  returnedOrders: [
    {
      id: 5801.97,
      platformId: "minima",
      returnedItems: [
        {
          barcode: "distinctio",
          condition: ReturnWithoutIdReturnedOrdersReturnedItemsCondition.Damaged,
          id: 270.69,
          platformId: "culpa",
          quantity: 7313.98,
          reason: "adipisci",
          sku: "cumque",
          variantId: "consequuntur",
        },
      ],
    },
  ],
  shopperMessage: "consequatur",
  status: ReturnWithoutIdStatus.Completed,
  trackingNumber: "quaerat",
  updatedAt: "sapiente",
}).then((res: PostReturnsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.ReturnWithoutId](../../models/shared/returnwithoutid.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.PostReturnsResponse](../../models/operations/postreturnsresponse.md)>**

