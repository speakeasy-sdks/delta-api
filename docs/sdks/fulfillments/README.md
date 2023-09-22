# Fulfillments

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
  id: "9d8d69a6-74e0-4f46-bcc8-796ed151a05d",
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
  carrier: "sapiente",
  createdAt: "quo",
  deliveryType: "odit",
  id: "ddf7cc78-ca1b-4a92-8fc8-16742cb73920",
  isoCurrencyCode: "ad",
  lineItems: [
    {
      platformId: "natus",
      quantity: "sed",
    },
  ],
  orders: [
    {
      platformId: "iste",
    },
  ],
  parcels: 2223.21,
  returnTrackingNumber: "natus",
  returnTrackingUrl: "laboriosam",
  shipping: 9437.49,
  trackingNumber: "saepe",
  trackingUrl: "fuga",
  unitWeight: FulfillmentUnitWeight.G,
  updatedAt: "corporis",
  weight: 6130.64,
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

