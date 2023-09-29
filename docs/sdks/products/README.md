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
import { GetProductByIdResponse } from "delta/dist/sdk/models/operations";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.products.getProductById({
  productId: "Wagon Israeli",
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
  category: "SUV kelvin Fresh",
  connectionId: "Fontana Southeast radical",
  createdAt: "virtual Pickup Fish",
  description: "Organized modular standardization",
  id: "<ID>",
  media: [
    {
      type: "Northwest",
      url: "https://late-finish.info",
    },
  ],
  name: "that",
  platformId: "Greece Calcium",
  status: "Hybrid",
  updatedAt: "Sports Hip",
  variants: [
    {
      customs: {
        tariffCodes: [
          {
            code: "Passenger because Bedfordshire",
            isoCountryCode: "North sievert",
            nomenclature: ProductWithoutIdVariantsCustomsTariffCodesNomenclature.HSCode,
          },
        ],
      },
      barcode: "Legacy Toys",
      carrier: "purport South firewall",
      color: "gold",
      countryOfOrigin: "useless Baby",
      createdAt: "Data Fantastic technologies",
      deliveryTime: 1598.78,
      deliveryType: "monitor",
      dimensions: {
        height: 5110.22,
        length: 9981.54,
        unitSize: "alias didactic",
        unitWeight: "COM turquoise Optimized",
        weight: 6071.19,
        width: 8455.61,
      },
      id: "<ID>",
      media: {
        type: "virtual",
        url: "http://disloyal-advertisement.name",
      },
      name: "Oregon",
      orderMax: 1152.23,
      orderMin: 657.27,
      pieces: 8684.35,
      platformId: "noisily man",
      pricingDetails: {
        formerPrice: 6739.48,
        isoCurrencyCode: "Electronics Berkshire",
        price: 7815.49,
        suggestedPrice: 3347.96,
        taxRate: ProductWithoutIdVariantsPricingDetailsTaxRate.Free,
        unitCost: 1560.6,
      },
      replacement: false,
      replacementTime: 4562.95,
      requiresShipping: false,
      size: "Soul Costa",
      sku: "framework",
      status: "Touring",
      tags: {
        language: "Yttrium",
        name: "Passenger Towels under",
        value: "ADP recusandae",
      },
      totalStock: 5611.58,
      unitType: ProductWithoutIdVariantsUnitType.Weight,
      updatedAt: "synergistic",
      variantId: "a",
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

