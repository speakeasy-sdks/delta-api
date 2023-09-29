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
  returnId: "benchmark",
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
  carrier: "around Northwest extremely",
  connectionId: "Mobility generating but",
  createdAt: "Intelligent",
  id: "<ID>",
  platformId: "Erbium",
  quantity: 2428.77,
  returnedOrders: [
    {
      id: 1714.06,
      platformId: "phooey",
      returnedItems: [
        {
          barcode: "repurpose Kia Tuna",
          condition: ReturnWithoutIdReturnedOrdersReturnedItemsCondition.Used,
          id: 4100.32,
          platformId: "Helium Pound",
          quantity: 3670.01,
          reason: "generating",
          sku: "Program revolutionize Massachusetts",
          variantId: "Unbranded Mazda Bedfordshire",
        },
      ],
    },
  ],
  shopperMessage: "Internal",
  status: ReturnWithoutIdStatus.Other,
  trackingNumber: "static",
  updatedAt: "West Southeast",
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

