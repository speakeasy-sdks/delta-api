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

async function run() {
  const sdk = new Delta({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
      platformKey: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.fulfillments.getFulfillmentById({
    id: "<id>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetFulfillmentByIdRequest](../../sdk/models/operations/getfulfillmentbyidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetFulfillmentByIdResponse](../../sdk/models/operations/getfulfillmentbyidresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 404,500,502      | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

## postFulfillments

Create a new fulfillment

### Example Usage

```typescript
import { Delta } from "delta";
import { UnitWeight } from "delta/dist/sdk/models/shared";

async function run() {
  const sdk = new Delta({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
      platformKey: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.fulfillments.postFulfillments({
    carrier: "express ship",
    createdAt: "2023-02-09T00:00:00Z",
    deliveryType: "express",
    id: "53f1e593-24d4-4110-8b2d-4e18d5461c33",
    isoCurrencyCode: "EUR",
    lineItems: [
      {
        platformId: "a2235",
        quantity: "2",
      },
      {
        platformId: "b23234",
        quantity: "5",
      },
    ],
    orders: [
      {
        platformId: "456a",
      },
    ],
    parcels: 1,
    returnTrackingNumber: "782833755",
    returnTrackingUrl: "http://express-ship.com/782833755",
    shipping: 2522,
    trackingNumber: "782833755",
    trackingUrl: "http://express-ship.com/782833755",
    unitWeight: UnitWeight.G,
    updatedAt: "2023-02-09T00:00:00Z",
    weight: 1000,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Fulfillment](../../sdk/models/shared/fulfillment.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostFulfillmentsResponse](../../sdk/models/operations/postfulfillmentsresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400,409,500,502  | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |
