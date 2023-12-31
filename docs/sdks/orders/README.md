# Orders
(*orders*)

## Overview

Provides the orders information

### Available Operations

* [getOrderById](#getorderbyid) - Get an order by id
* [getOrders](#getorders) - Get all orders
* [patchtOrders](#patchtorders) - Update a specific order
* [postOrders](#postorders) - Create a new order

## getOrderById

Get a specific order

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

  const res = await sdk.orders.getOrderById({
    orderId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetOrderByIdRequest](../../sdk/models/operations/getorderbyidrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetOrderByIdResponse](../../sdk/models/operations/getorderbyidresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 404,500,502      | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

## getOrders

Get all orders

### Example Usage

```typescript
import { Delta } from "delta";
import { RFCDate } from "delta/dist/sdk/types";

async function run() {
  const sdk = new Delta({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
      platformKey: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.orders.getOrders({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetOrdersRequest](../../sdk/models/operations/getordersrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetOrdersResponse](../../sdk/models/operations/getordersresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 404,500,502      | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

## patchtOrders

Update a specific order

### Example Usage

```typescript
import { Delta } from "delta";
import {
  OrderWithoutIdFulfillmentStatus,
  OrderWithoutIdPaymentStatus,
  OrderWithoutIdStatus,
  UnitWeight,
} from "delta/dist/sdk/models/shared";

async function run() {
  const sdk = new Delta({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
      platformKey: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.orders.patchtOrders({
    orderWithoutId: {
      billingAddress: {},
      fulfillments: [
        {
          id: "<ID>",
          lineItems: [
            {},
          ],
          orders: [
            {},
          ],
        },
      ],
      id: 7129.89,
      lineItems: [
        {
          inventory: {},
        },
      ],
      shippingAddress: {},
    },
    orderId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.PatchtOrdersRequest](../../sdk/models/operations/patchtordersrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PatchtOrdersResponse](../../sdk/models/operations/patchtordersresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400,409,500,502  | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

## postOrders

Create a new order

### Example Usage

```typescript
import { Delta } from "delta";
import {
  OrderWithoutIdFulfillmentStatus,
  OrderWithoutIdPaymentStatus,
  OrderWithoutIdStatus,
  UnitWeight,
} from "delta/dist/sdk/models/shared";

async function run() {
  const sdk = new Delta({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
      platformKey: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.orders.postOrders({
    billingAddress: {},
    fulfillments: [
      {
        id: "<ID>",
        lineItems: [
          {},
        ],
        orders: [
          {},
        ],
      },
    ],
    id: 1312.05,
    lineItems: [
      {
        inventory: {},
      },
    ],
    shippingAddress: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.OrderWithoutId](../../sdk/models/shared/orderwithoutid.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.PostOrdersResponse](../../sdk/models/operations/postordersresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400,409,500,502  | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |
