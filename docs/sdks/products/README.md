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

(async() => {
  const sdk = new Delta({
    security: {
      authorization: "",
      platformKey: "",
    },
  });

  const res = await sdk.products.getProductById({
    productId: "Wagon Israeli",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Delta({
    security: {
      authorization: "",
      platformKey: "",
    },
  });

  const res = await sdk.products.getProducts();

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import {
  ProductWithoutIdVariantsCustomsTariffCodesNomenclature,
  ProductWithoutIdVariantsPricingDetailsTaxRate,
  ProductWithoutIdVariantsUnitType,
} from "delta/dist/sdk/models/shared";

(async() => {
  const sdk = new Delta({
    security: {
      authorization: "",
      platformKey: "",
    },
  });

  const res = await sdk.products.postProducts({
    id: "<ID>",
    media: [
      {},
    ],
    variants: [
      {
        customs: {
          tariffCodes: [
            {},
          ],
        },
        dimensions: {},
        media: {},
        pricingDetails: {},
        tags: {},
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.ProductWithoutId](../../models/shared/productwithoutid.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.PostProductsResponse](../../models/operations/postproductsresponse.md)>**

