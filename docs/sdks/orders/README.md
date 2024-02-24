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
    orderId: "<value>",
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
      billingAddress: {
        address1: "Bahnhofsplatz 8",
        address2: "c/o Test SE",
        city: "Ansbach",
        companyName: "Acme Inc",
        countryCode: "DE",
        email: "pp-cc-kam+3240+10103200471234@test.de,",
        firstName: "Mia",
        lastName: "Musterer",
        phone: "0152-890938",
        postalCode: "91522",
        region: "Bavaria",
        taxId: "DE123456789",
        taxType: "VAT",
      },
      channel: "ZALANDO_DE",
      channelId: "30",
      connectionId: "0e61060d-87a9-4d53-8545-e46e2dd783fa",
      createdAt: "2023-02-09T00:00:00Z",
      discountCodes: "",
      fulfillmentStatus: OrderWithoutIdFulfillmentStatus.Returned,
      fulfillments: [
        {
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
        },
      ],
      id: 39bdccd1-acb3-4b8f-8784-d6735a95ad86,
      invoiceDate: "2023-02-09T00:00:00Z",
      invoiceNumber: "A-1234",
      isoCurrencyCode: "EUR",
      lineItems: [
        {
          barcode: "5901234123457",
          countryOfOrigin: "DE",
          createdAt: "2023-02-09T00:00:00Z",
          deliveryTime: 1,
          fulfillmentStatus: "UNFILFILLED",
          id: 53,
          inventory: {},
          isoCurrencyCode: "EUR",
          name: "mug",
          platformId: "a2235",
          quantity: 1,
          requiresShipping: true,
          serialNumber: "1234",
          sku: "1234",
          subtotalPrice: 19300,
          taxRate: 1.9,
          totalDiscount: 1050,
          totalPrice: 19300,
          totalTax: 20,
          unitCost: 1420,
          unitWeight: "g",
          updatedAt: "2023-02-09T00:00:00Z",
          variantId: "z8889",
          weight: 1000,
        },
      ],
      orderNumber: "1023",
      paymentMethod: "invoice",
      paymentStatus: OrderWithoutIdPaymentStatus.Payed,
      platform: "TRADEBYTE",
      platformId: "456a",
      shippingAddress: {},
      status: OrderWithoutIdStatus.Open,
      subtotalPrice: 1079,
      taxRate: 1.9,
      totalOrderDiscount: 0,
      totalPrice: 1099,
      totalShipping: 0,
      totalShippingDiscount: 0,
      totalTax: 20,
      totalWeight: 1000,
      unitWeight: "g",
      updatedAt: "2023-02-09T00:00:00Z",
    },
    orderId: "<value>",
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
    billingAddress: {
      address1: "Bahnhofsplatz 8",
      address2: "c/o Test SE",
      city: "Ansbach",
      companyName: "Acme Inc",
      countryCode: "DE",
      email: "pp-cc-kam+3240+10103200471234@test.de,",
      firstName: "Mia",
      lastName: "Musterer",
      phone: "0152-890938",
      postalCode: "91522",
      region: "Bavaria",
      taxId: "DE123456789",
      taxType: "VAT",
    },
    channel: "ZALANDO_DE",
    channelId: "30",
    connectionId: "0e61060d-87a9-4d53-8545-e46e2dd783fa",
    createdAt: "2023-02-09T00:00:00Z",
    discountCodes: "",
    fulfillmentStatus: OrderWithoutIdFulfillmentStatus.Fulfilled,
    fulfillments: [
      {
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
      },
    ],
    id: 39bdccd1-acb3-4b8f-8784-d6735a95ad86,
    invoiceDate: "2023-02-09T00:00:00Z",
    invoiceNumber: "A-1234",
    isoCurrencyCode: "EUR",
    lineItems: [
      {
        barcode: "5901234123457",
        countryOfOrigin: "DE",
        createdAt: "2023-02-09T00:00:00Z",
        deliveryTime: 1,
        fulfillmentStatus: "UNFILFILLED",
        id: 53,
        inventory: {},
        isoCurrencyCode: "EUR",
        name: "mug",
        platformId: "a2235",
        quantity: 1,
        requiresShipping: true,
        serialNumber: "1234",
        sku: "1234",
        subtotalPrice: 19300,
        taxRate: 1.9,
        totalDiscount: 1050,
        totalPrice: 19300,
        totalTax: 20,
        unitCost: 1420,
        unitWeight: "g",
        updatedAt: "2023-02-09T00:00:00Z",
        variantId: "z8889",
        weight: 1000,
      },
    ],
    orderNumber: "1023",
    paymentMethod: "invoice",
    paymentStatus: OrderWithoutIdPaymentStatus.Payed,
    platform: "TRADEBYTE",
    platformId: "456a",
    shippingAddress: {},
    status: OrderWithoutIdStatus.Open,
    subtotalPrice: 1079,
    taxRate: 1.9,
    totalOrderDiscount: 0,
    totalPrice: 1099,
    totalShipping: 0,
    totalShippingDiscount: 0,
    totalTax: 20,
    totalWeight: 1000,
    unitWeight: "g",
    updatedAt: "2023-02-09T00:00:00Z",
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
