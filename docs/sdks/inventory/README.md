# Inventory
(*inventory*)

## Overview

Provides the inventory information

### Available Operations

* [getInvetory](#getinvetory) - Get all inventories
* [getInvetoryById](#getinvetorybyid) - Get a specific inventory
* [postSetInventories](#postsetinventories) - Update the stock level of an inventory item at a location

## getInvetory

Get all inventories

### Example Usage

```typescript
import { Delta } from "delta";
import { GetInvetoryResponse } from "delta/dist/sdk/models/operations";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.inventory.getInvetory().then((res: GetInvetoryResponse) => {
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

**Promise<[operations.GetInvetoryResponse](../../models/operations/getinvetoryresponse.md)>**


## getInvetoryById

Get a specific inventory

### Example Usage

```typescript
import { Delta } from "delta";
import { GetInvetoryByIdResponse } from "delta/dist/sdk/models/operations";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.inventory.getInvetoryById({
  inventoryId: "Bayer",
}).then((res: GetInvetoryByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetInvetoryByIdRequest](../../models/operations/getinvetorybyidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetInvetoryByIdResponse](../../models/operations/getinvetorybyidresponse.md)>**


## postSetInventories

Update the stock level of an inventory item at a location.

### Example Usage

```typescript
import { Delta } from "delta";
import { PostSetInventoriesResponse } from "delta/dist/sdk/models/operations";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.inventory.postSetInventories({
  barcode: "Tugrik",
  changeDate: "Cargo",
  connectionId: "Carrollton Spain Pennsylvania",
  id: "<ID>",
  locationId: "compressing",
  locationPlatformId: "Electric wobbly",
  sku: "Buckinghamshire",
  totalStock: 1875.52,
  variantId: "Logan laborum Soft",
}).then((res: PostSetInventoriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.InventorySet](../../models/shared/inventoryset.md)   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostSetInventoriesResponse](../../models/operations/postsetinventoriesresponse.md)>**

