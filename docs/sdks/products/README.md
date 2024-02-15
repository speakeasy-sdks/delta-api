# Products
(*products*)

## Overview

Provides the products information

### Available Operations

* [getProductById](#getproductbyid) - Get a specific product
* [getProducts](#getproducts) - Get all products
* [postProducts](#postproducts) - Create a new product

## getProductById

Get a specific product

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

  const res = await sdk.products.getProductById({
    productId: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetProductByIdRequest](../../sdk/models/operations/getproductbyidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetProductByIdResponse](../../sdk/models/operations/getproductbyidresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 404,500,502      | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

## getProducts

Get all products

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

  const res = await sdk.products.getProducts();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetProductsResponse](../../sdk/models/operations/getproductsresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 404,500,502      | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

## postProducts

Create a new product

### Example Usage

```typescript
import { Delta } from "delta";
import { ProductWithoutIdNomenclature, ProductWithoutIdTaxRate, ProductWithoutIdUnitType } from "delta/dist/sdk/models/shared";

async function run() {
  const sdk = new Delta({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
      platformKey: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.products.postProducts({
    category: "home",
    connectionId: "123",
    createdAt: "2023-02-09T00:00:00.000Z",
    description: "iron steal",
    id: "53f1e593-24d4-4110-8b2d-4e18d5461c33",
    media: [
      {},
    ],
    name: "mug",
    platformId: "a8883",
    status: "active",
    updatedAt: "2023-02-09T00:00:00.000Z",
    variants: [
      {
        customs: {
          tariffCodes: [
            {},
          ],
        },
        barcode: "999234",
        carrier: "express ship",
        countryOfOrigin: "DE",
        createdAt: "2023-02-09T00:00:00.000Z",
        deliveryTime: 20,
        deliveryType: "Same-Day",
        dimensions: {
          height: 99,
          length: 55,
          unitSize: "cm.",
          unitWeight: "kg.",
          weight: 82,
          width: 78,
        },
        id: "a8889",
        media: {
          type: "image",
          url: "http://url.com",
        },
        name: "Mug",
        orderMax: 5,
        orderMin: 1,
        pieces: 8,
        platformId: "z8277",
        pricingDetails: {
          formerPrice: 2000,
          isoCurrencyCode: "EUR",
          price: 9800,
          suggestedPrice: 5000,
          taxRate: ProductWithoutIdTaxRate.Reduced,
          unitCost: 7899,
        },
        replacement: false,
        replacementTime: 0,
        requiresShipping: true,
        sku: "0ki888",
        status: "active",
        tags: {
          language: "EN",
          name: "color",
          value: "blue",
        },
        totalStock: 2,
        unitType: ProductWithoutIdUnitType.Piece,
        updatedAt: "2023-02-09T00:00:00.000Z",
        variantId: "i277",
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.ProductWithoutId](../../sdk/models/shared/productwithoutid.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.PostProductsResponse](../../sdk/models/operations/postproductsresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400,409,500,502  | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |
