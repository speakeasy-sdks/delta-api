# Fulfillments
(*fulfillments*)

## Overview

Provides the fulfillments information

### Available Operations

* [getFulfillmentById](#getfulfillmentbyid) - Get a specific fulfillment
* [postFulfillments](#postfulfillments) - Create a new fulfillment

## getFulfillmentById

Get a specific fulfillment

### Example Usage

```typescript
import { Delta } from "delta";
import { GetFulfillmentByIdResponse } from "delta/dist/sdk/models/operations";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.fulfillments.getFulfillmentById({
  id: "<ID>",
}).then((res: GetFulfillmentByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetFulfillmentByIdRequest](../../models/operations/getfulfillmentbyidrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetFulfillmentByIdResponse](../../models/operations/getfulfillmentbyidresponse.md)>**


## postFulfillments

Create a new fulfillment

### Example Usage

```typescript
import { Delta } from "delta";
import { PostFulfillmentsResponse } from "delta/dist/sdk/models/operations";
import { FulfillmentUnitWeight } from "delta/dist/sdk/models/shared";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.fulfillments.postFulfillments({
  carrier: "Transexual",
  createdAt: "Bicycle crow",
  deliveryType: "Manager grey",
  id: "<ID>",
  isoCurrencyCode: "black azure",
  lineItems: [
    {
      platformId: "Luxurious Kentucky",
      quantity: "Bedfordshire asynchronous West",
    },
  ],
  orders: [
    {
      platformId: "system",
    },
  ],
  parcels: 9722.37,
  returnTrackingNumber: "brilliant Wyoming National",
  returnTrackingUrl: "Corporate",
  shipping: 4274.24,
  trackingNumber: "Southwest magenta Dynamic",
  trackingUrl: "Triathlon/Time",
  unitWeight: FulfillmentUnitWeight.G,
  updatedAt: "Jersey",
  weight: 2671.66,
}).then((res: PostFulfillmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Fulfillment](../../models/shared/fulfillment.md)     | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostFulfillmentsResponse](../../models/operations/postfulfillmentsresponse.md)>**

