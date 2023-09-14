# fulfillments

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
  id: "d9d8d69a-674e-40f4-a7cc-8796ed151a05",
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
  carrier: "repellendus",
  createdAt: "sapiente",
  deliveryType: "quo",
  id: "2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392",
  isoCurrencyCode: "perferendis",
  lineItems: [
    {
      platformId: "ad",
      quantity: "natus",
    },
  ],
  orders: [
    {
      platformId: "sed",
    },
  ],
  parcels: 6120.96,
  returnTrackingNumber: "dolor",
  returnTrackingUrl: "natus",
  shipping: 3864.89,
  trackingNumber: "hic",
  trackingUrl: "saepe",
  unitWeight: FulfillmentUnitWeight.Lb,
  updatedAt: "in",
  weight: 3595.08,
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

