# Orders
(*.orders*)

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

(async() => {
  const sdk = new Delta({
    security: {
      authorization: "",
      platformKey: "",
    },
  });

  const res = await sdk.orders.getOrderById({
    orderId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetOrderByIdRequest](../../models/operations/getorderbyidrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetOrderByIdResponse](../../models/operations/getorderbyidresponse.md)>**


## getOrders

Get all orders

### Example Usage

```typescript
import { Delta } from "delta";
import { RFCDate } from "delta/dist/sdk/types";

(async() => {
  const sdk = new Delta({
    security: {
      authorization: "",
      platformKey: "",
    },
  });

  const res = await sdk.orders.getOrders({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetOrdersRequest](../../models/operations/getordersrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetOrdersResponse](../../models/operations/getordersresponse.md)>**


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

(async() => {
  const sdk = new Delta({
    security: {
      authorization: "",
      platformKey: "",
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
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.PatchtOrdersRequest](../../models/operations/patchtordersrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.PatchtOrdersResponse](../../models/operations/patchtordersresponse.md)>**


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

(async() => {
  const sdk = new Delta({
    security: {
      authorization: "",
      platformKey: "",
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
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `request`                                                      | [shared.OrderWithoutId](../../models/shared/orderwithoutid.md) | :heavy_check_mark:                                             | The request object to use for the request.                     |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |


### Response

**Promise<[operations.PostOrdersResponse](../../models/operations/postordersresponse.md)>**

