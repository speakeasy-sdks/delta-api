# Orders

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
import { GetOrderByIdResponse } from "delta/dist/sdk/models/operations";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.orders.getOrderById({
  orderId: "eum",
}).then((res: GetOrderByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { GetOrdersResponse } from "delta/dist/sdk/models/operations";
import { RFCDate } from "delta/dist/sdk/types";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.orders.getOrders({
  platformKey: "non",
  first: 756107,
  from: new RFCDate("2022-03-17"),
  next: 592042,
  to: new RFCDate("2021-04-14"),
}).then((res: GetOrdersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { PatchtOrdersResponse } from "delta/dist/sdk/models/operations";
import {
  FulfillmentUnitWeight,
  OrderWithoutIdFulfillmentStatus,
  OrderWithoutIdPaymentStatus,
  OrderWithoutIdStatus,
} from "delta/dist/sdk/models/shared";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.orders.patchtOrders({
  orderWithoutId: {
    billingAddress: {
      address1: "officia",
      address2: "dolor",
      city: "Waukegan",
      companyName: "dolorum",
      countryCode: "JM",
      email: "Rose.Wolff29@yahoo.com",
      firstName: "Obie",
      lastName: "Schulist",
      phone: "1-568-353-8965 x765",
      postalCode: "92634-6640",
      region: "nihil",
      taxId: "magnam",
      taxType: "distinctio",
    },
    channel: "id",
    channelId: "labore",
    connectionId: "labore",
    createdAt: "suscipit",
    discountCodes: "natus",
    fulfillmentStatus: OrderWithoutIdFulfillmentStatus.Partially,
    fulfillments: [
      {
        carrier: "eum",
        createdAt: "vero",
        deliveryType: "aspernatur",
        id: "14195989-0afa-4563-a251-6fe4c8b711e5",
        isoCurrencyCode: "expedita",
        lineItems: [
          {
            platformId: "nihil",
            quantity: "repellat",
          },
        ],
        orders: [
          {
            platformId: "quibusdam",
          },
        ],
        parcels: 1494.48,
        returnTrackingNumber: "saepe",
        returnTrackingUrl: "pariatur",
        shipping: 375.59,
        trackingNumber: "consequuntur",
        trackingUrl: "praesentium",
        unitWeight: FulfillmentUnitWeight.Lb,
        updatedAt: "magni",
        weight: 1238.2,
      },
    ],
    id: 7790.51,
    invoiceDate: "illum",
    invoiceNumber: "pariatur",
    isoCurrencyCode: "maxime",
    lineItems: [
      {
        barcode: "ea",
        countryOfOrigin: "excepturi",
        createdAt: "odit",
        deliveryTime: 4071.83,
        fulfillmentStatus: "accusantium",
        id: 691.67,
        inventory: {},
        isoCurrencyCode: "maiores",
        name: "Clyde Kling",
        platformId: "eaque",
        quantity: 8663.83,
        requiresShipping: false,
        serialNumber: "nemo",
        sku: "voluptatibus",
        subtotalPrice: 166.27,
        taxRate: 8558.04,
        totalDiscount: 2307.42,
        totalPrice: 117.14,
        totalTax: 7649.12,
        unitCost: 3599.78,
        unitWeight: "hic",
        updatedAt: "libero",
        variantId: "nobis",
        weight: 1716.29,
      },
    ],
    orderNumber: "quis",
    paymentMethod: "totam",
    paymentStatus: OrderWithoutIdPaymentStatus.NotPayed,
    platform: "eaque",
    platformId: "quis",
    shippingAddress: {
      address1: "nesciunt",
      address2: "eos",
      city: "East Peggieport",
      companyName: "dolor",
      countryCode: "TH",
      email: "Tyreek_Walter@yahoo.com",
      firstName: "Lauryn",
      lastName: "Bartoletti",
      phone: "356-256-2992 x66585",
      postalCode: "79353-2221",
      region: "ipsum",
    },
    status: OrderWithoutIdStatus.Cancelled,
    subtotalPrice: 5695.74,
    taxRate: 7395.51,
    totalOrderDiscount: 4521.09,
    totalPrice: 4904.59,
    totalShipping: 9702.37,
    totalShippingDiscount: 2274.14,
    totalTax: 6805.45,
    totalWeight: 2543.56,
    unitWeight: "veritatis",
    updatedAt: "ipsa",
  },
  orderId: "ipsa",
}).then((res: PatchtOrdersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { PostOrdersResponse } from "delta/dist/sdk/models/operations";
import {
  FulfillmentUnitWeight,
  OrderWithoutIdFulfillmentStatus,
  OrderWithoutIdPaymentStatus,
  OrderWithoutIdStatus,
} from "delta/dist/sdk/models/shared";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.orders.postOrders({
  billingAddress: {
    address1: "iure",
    address2: "odio",
    city: "Fort Maurine",
    companyName: "voluptatibus",
    countryCode: "HK",
    email: "Chelsea85@yahoo.com",
    firstName: "Annamae",
    lastName: "Roberts",
    phone: "1-546-668-7942 x4692",
    postalCode: "02783",
    region: "saepe",
    taxId: "suscipit",
    taxType: "deserunt",
  },
  channel: "provident",
  channelId: "minima",
  connectionId: "repellendus",
  createdAt: "totam",
  discountCodes: "similique",
  fulfillmentStatus: OrderWithoutIdFulfillmentStatus.Null,
  fulfillments: [
    {
      carrier: "at",
      createdAt: "quaerat",
      deliveryType: "tempora",
      id: "6ce2af7a-73cf-43be-853f-870b326b5a73",
      isoCurrencyCode: "incidunt",
      lineItems: [
        {
          platformId: "qui",
          quantity: "cupiditate",
        },
      ],
      orders: [
        {
          platformId: "maxime",
        },
      ],
      parcels: 8638.56,
      returnTrackingNumber: "soluta",
      returnTrackingUrl: "dicta",
      shipping: 6748.48,
      trackingNumber: "totam",
      trackingUrl: "incidunt",
      unitWeight: FulfillmentUnitWeight.Kg,
      updatedAt: "dolores",
      weight: 7168.6,
    },
  ],
  id: 7044.74,
  invoiceDate: "aliquid",
  invoiceNumber: "quam",
  isoCurrencyCode: "molestias",
  lineItems: [
    {
      barcode: "temporibus",
      countryOfOrigin: "qui",
      createdAt: "neque",
      deliveryTime: 1448.47,
      fulfillmentStatus: "magni",
      id: 4880.56,
      inventory: {},
      isoCurrencyCode: "sunt",
      name: "Miss Candice Weimann",
      platformId: "nobis",
      quantity: 925.96,
      requiresShipping: false,
      serialNumber: "saepe",
      sku: "ipsum",
      subtotalPrice: 834.22,
      taxRate: 7492.55,
      totalDiscount: 5521.93,
      totalPrice: 7316.94,
      totalTax: 5844.76,
      unitCost: 456.14,
      unitWeight: "delectus",
      updatedAt: "dolorem",
      variantId: "dolore",
      weight: 2869.15,
    },
  ],
  orderNumber: "adipisci",
  paymentMethod: "dolorum",
  paymentStatus: OrderWithoutIdPaymentStatus.Payed,
  platform: "quae",
  platformId: "aut",
  shippingAddress: {
    address1: "quas",
    address2: "itaque",
    city: "Lake Riverfield",
    companyName: "doloribus",
    countryCode: "FJ",
    email: "Kyler51@hotmail.com",
    firstName: "Jeanette",
    lastName: "McClure",
    phone: "886.429.4289 x49774",
    postalCode: "78428-8167",
    region: "aut",
  },
  status: OrderWithoutIdStatus.Cancelled,
  subtotalPrice: 3472.33,
  taxRate: 8623.1,
  totalOrderDiscount: 1481.41,
  totalPrice: 7804.27,
  totalShipping: 9818.3,
  totalShippingDiscount: 9850.33,
  totalTax: 4783.7,
  totalWeight: 7535.7,
  unitWeight: "ducimus",
  updatedAt: "alias",
}).then((res: PostOrdersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `request`                                                      | [shared.OrderWithoutId](../../models/shared/orderwithoutid.md) | :heavy_check_mark:                                             | The request object to use for the request.                     |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |


### Response

**Promise<[operations.PostOrdersResponse](../../models/operations/postordersresponse.md)>**

