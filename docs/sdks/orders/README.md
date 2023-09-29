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
import { GetOrderByIdResponse } from "delta/dist/sdk/models/operations";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.orders.getOrderById({
  orderId: "enhance Northeast",
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
  platformKey: "CFA Account Rue",
  first: 47467,
  from: new RFCDate("2022-02-06"),
  next: 238804,
  to: new RFCDate("2022-08-08"),
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
      address1: "Dodge San success",
      address2: "Transmasculine",
      city: "Ahmadville",
      companyName: "Wuckert - Carter",
      countryCode: "EE",
      email: "Mariane_Smith66@yahoo.com",
      firstName: "Greyson",
      lastName: "Hagenes",
      phone: "411.351.1321 x66239",
      postalCode: "25550",
      region: "Concrete users Dynamic",
      taxId: "female seldom",
      taxType: "Account Generic Ringgit",
    },
    channel: "Shoes black",
    channelId: "Decatur Vermont",
    connectionId: "plus ivory Gallium",
    createdAt: "Wisconsin Functionality",
    discountCodes: "South",
    fulfillmentStatus: OrderWithoutIdFulfillmentStatus.Null,
    fulfillments: [
      {
        carrier: "Groves parse Cotton",
        createdAt: "Sleek Pakistan",
        deliveryType: "withdrawal Gasoline ruler",
        id: "<ID>",
        isoCurrencyCode: "Berkshire",
        lineItems: [
          {
            platformId: "Southeast",
            quantity: "inasmuch Branding SSL",
          },
        ],
        orders: [
          {
            platformId: "Cotton",
          },
        ],
        parcels: 6476.74,
        returnTrackingNumber: "nisi",
        returnTrackingUrl: "Electric Handcrafted",
        shipping: 2462.65,
        trackingNumber: "pink Gabon",
        trackingUrl: "Southeast within",
        unitWeight: FulfillmentUnitWeight.Oz,
        updatedAt: "pink transmitting Republic",
        weight: 2138.8,
      },
    ],
    id: 1297.14,
    invoiceDate: "hertz",
    invoiceNumber: "Operations Northwest purple",
    isoCurrencyCode: "Northwest West copying",
    lineItems: [
      {
        barcode: "Avon",
        countryOfOrigin: "Extended Table",
        createdAt: "Myanmar",
        deliveryTime: 3576.88,
        fulfillmentStatus: "rowing East female",
        id: 3225.72,
        inventory: {},
        isoCurrencyCode: "Investment Intelligent",
        name: "imaginary",
        platformId: "Colorado",
        quantity: 5276.56,
        requiresShipping: false,
        serialNumber: "onto Radium",
        sku: "black",
        subtotalPrice: 1729.05,
        taxRate: 8828.64,
        totalDiscount: 198.43,
        totalPrice: 5473.49,
        totalTax: 5976.85,
        unitCost: 3601.13,
        unitWeight: "Ward black Borders",
        updatedAt: "Southeast Swedish",
        variantId: "Chief Avon North",
        weight: 7900.94,
      },
    ],
    orderNumber: "budgetary copying",
    paymentMethod: "indexing Elegant",
    paymentStatus: OrderWithoutIdPaymentStatus.Payed,
    platform: "BMW unless Devolved",
    platformId: "fully Mexico",
    shippingAddress: {
      address1: "South Ball",
      address2: "withdrawal",
      city: "North Adrienne",
      companyName: "Mitchell - Cormier",
      countryCode: "DM",
      email: "Charley30@yahoo.com",
      firstName: "Nona",
      lastName: "Sanford",
      phone: "(915) 614-0480",
      postalCode: "48538-1710",
      region: "Funk quos female",
    },
    status: OrderWithoutIdStatus.Closed,
    subtotalPrice: 9754.68,
    taxRate: 7521.44,
    totalOrderDiscount: 1957.46,
    totalPrice: 2007.56,
    totalShipping: 8345.93,
    totalShippingDiscount: 5084.73,
    totalTax: 9931.14,
    totalWeight: 4533.11,
    unitWeight: "ASCII",
    updatedAt: "eligendi Organic supposing",
  },
  orderId: "drafty group BMW",
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
    address1: "deposit",
    address2: "North",
    city: "Lake Albert",
    companyName: "Krajcik - Crona",
    countryCode: "LR",
    email: "Cloyd.Oberbrunner@hotmail.com",
    firstName: "Alayna",
    lastName: "Schoen",
    phone: "(842) 763-1071 x895",
    postalCode: "71766",
    region: "Computer",
    taxId: "pink Movies Honda",
    taxType: "helpfully GB Grand",
  },
  channel: "loudly invoice Dollar",
  channelId: "Bronze Richardson HTTP",
  connectionId: "Diverse Northeast Carolina",
  createdAt: "Syrian",
  discountCodes: "Kids",
  fulfillmentStatus: OrderWithoutIdFulfillmentStatus.Fulfilled,
  fulfillments: [
    {
      carrier: "demur Fish",
      createdAt: "Rubber Configuration",
      deliveryType: "Director male",
      id: "<ID>",
      isoCurrencyCode: "supposing",
      lineItems: [
        {
          platformId: "orchid female",
          quantity: "Account",
        },
      ],
      orders: [
        {
          platformId: "responsive Towson",
        },
      ],
      parcels: 2140.13,
      returnTrackingNumber: "exercitationem National",
      returnTrackingUrl: "Neon Burlington",
      shipping: 7586.19,
      trackingNumber: "Southeast Cambodia Avon",
      trackingUrl: "Protactinium",
      unitWeight: FulfillmentUnitWeight.Kg,
      updatedAt: "engage",
      weight: 1488.58,
    },
  ],
  id: 398.77,
  invoiceDate: "Southwest drat Rustic",
  invoiceNumber: "Gorgeous male Berkshire",
  isoCurrencyCode: "arctic",
  lineItems: [
    {
      barcode: "North",
      countryOfOrigin: "Sleek minus tertiary",
      createdAt: "dim Jazz",
      deliveryTime: 96.12,
      fulfillmentStatus: "pixel",
      id: 8931.32,
      inventory: {},
      isoCurrencyCode: "Polestar",
      name: "for",
      platformId: "inside Graphical",
      quantity: 3228.59,
      requiresShipping: false,
      serialNumber: "Niobium Hatchback",
      sku: "Bicycle oh",
      subtotalPrice: 4611.88,
      taxRate: 7646.5,
      totalDiscount: 2077.27,
      totalPrice: 7424.45,
      totalTax: 9760.38,
      unitCost: 7769.91,
      unitWeight: "Celsius Music",
      updatedAt: "Woman",
      variantId: "SSD",
      weight: 2570.22,
    },
  ],
  orderNumber: "BMW",
  paymentMethod: "North Metal Gasoline",
  paymentStatus: OrderWithoutIdPaymentStatus.Lost,
  platform: "Samoa Californium ambitious",
  platformId: "male Wagon",
  shippingAddress: {
    address1: "Minnesota limping",
    address2: "mislay",
    city: "Lake Myrl",
    companyName: "Gleason and Sons",
    countryCode: "AE",
    email: "Braden_McKenzie@hotmail.com",
    firstName: "Nelle",
    lastName: "Bruen",
    phone: "(205) 460-2721",
    postalCode: "61731-2703",
    region: "Nickel Dobra",
  },
  status: OrderWithoutIdStatus.Open,
  subtotalPrice: 4889.94,
  taxRate: 6500.31,
  totalOrderDiscount: 9927.02,
  totalPrice: 7055.68,
  totalShipping: 7945.02,
  totalShippingDiscount: 7998.44,
  totalTax: 9758.58,
  totalWeight: 3050.46,
  unitWeight: "Associate channels",
  updatedAt: "Diesel North Generic",
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

