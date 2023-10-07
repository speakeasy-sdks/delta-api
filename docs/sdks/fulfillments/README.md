# Fulfillments
(*fulfillments*)

## Overview

Provides the fulfillments information

### Available Operations

* [getFulfillmentById](#getfulfillmentbyid) - Get a specific fulfillment
* [postFulfillments](#postfulfillments) - Create a new fulfillment

## getFulfillmentById

Get a specific fulfillment

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

  const res = await sdk.fulfillments.getFulfillmentById({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetFulfillmentByIdRequest](../../models/operations/getfulfillmentbyidrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetFulfillmentByIdResponse](../../models/operations/getfulfillmentbyidresponse.md)>**


## postFulfillments

Create a new fulfillment

### Example Usage

```typescript
import { Delta } from "delta";
import { FulfillmentUnitWeight } from "delta/dist/sdk/models/shared";

(async() => {
  const sdk = new Delta({
    security: {
      authorization: "",
      platformKey: "",
    },
  });

  const res = await sdk.fulfillments.postFulfillments({
    id: "<ID>",
    lineItems: [
      {},
    ],
    orders: [
      {},
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Fulfillment](../../models/shared/fulfillment.md)     | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostFulfillmentsResponse](../../models/operations/postfulfillmentsresponse.md)>**

