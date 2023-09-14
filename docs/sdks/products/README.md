# products

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
import { GetProductByIdResponse } from "delta/dist/sdk/models/operations";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.products.getProductById({
  productId: "officia",
}).then((res: GetProductByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetProductByIdRequest](../../models/operations/getproductbyidrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetProductByIdResponse](../../models/operations/getproductbyidresponse.md)>**


## getProducts

Get all products

### Example Usage

```typescript
import { Delta } from "delta";
import { GetProductsResponse } from "delta/dist/sdk/models/operations";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.products.getProducts().then((res: GetProductsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetProductsResponse](../../models/operations/getproductsresponse.md)>**


## postProducts

Create a new product

### Example Usage

```typescript
import { Delta } from "delta";
import { PostProductsResponse } from "delta/dist/sdk/models/operations";
import {
  ProductWithoutIdVariantsCustomsTariffCodesNomenclature,
  ProductWithoutIdVariantsPricingDetailsTaxRate,
  ProductWithoutIdVariantsUnitType,
} from "delta/dist/sdk/models/shared";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.products.postProducts({
  category: "tempora",
  connectionId: "ipsam",
  createdAt: "ea",
  description: "aspernatur",
  id: "6d436813-f16d-49f5-bce6-c556146c3e25",
  media: [
    {
      type: "eaque",
      url: "a",
    },
  ],
  name: "Richard Anderson",
  platformId: "aliquam",
  status: "fugit",
  updatedAt: "accusamus",
  variants: [
    {
      customs: {
        tariffCodes: [
          {
            code: "inventore",
            isoCountryCode: "non",
            nomenclature: ProductWithoutIdVariantsCustomsTariffCodesNomenclature.Taric,
          },
        ],
      },
      barcode: "dolorum",
      carrier: "laborum",
      color: "placeat",
      countryOfOrigin: "velit",
      createdAt: "eum",
      deliveryTime: 4205.39,
      deliveryType: "nobis",
      dimensions: {
        height: 5573.69,
        length: 8296.03,
        unitSize: "nulla",
        unitWeight: "voluptas",
        weight: 7270.44,
        width: 965.49,
      },
      id: "44290747-4778-4a7b-9466-d28c10ab3cdc",
      media: {
        type: "fuga",
        url: "eius",
      },
      name: "Brittany Bernier II",
      orderMax: 8920.5,
      orderMin: 3708.53,
      pieces: 1334.65,
      platformId: "sequi",
      pricingDetails: {
        formerPrice: 7791.92,
        isoCurrencyCode: "esse",
        price: 9251.64,
        suggestedPrice: 446.12,
        taxRate: ProductWithoutIdVariantsPricingDetailsTaxRate.Free,
        unitCost: 7997.96,
      },
      replacement: false,
      replacementTime: 4908.19,
      requiresShipping: false,
      size: "inventore",
      sku: "nihil",
      status: "totam",
      tags: {
        language: "accusamus",
        name: "Courtney Mayert",
        value: "dolores",
      },
      totalStock: 6455.7,
      unitType: ProductWithoutIdVariantsUnitType.Piece,
      updatedAt: "accusantium",
      variantId: "porro",
    },
  ],
}).then((res: PostProductsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.ProductWithoutId](../../models/shared/productwithoutid.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.PostProductsResponse](../../models/operations/postproductsresponse.md)>**

