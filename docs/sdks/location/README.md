# Location
(*location*)

## Overview

Provides the location information

### Available Operations

* [getLocationById](#getlocationbyid) - Get a specific location
* [postLocation](#postlocation) - Create a new location

## getLocationById

Get a specific location

### Example Usage

```typescript
import { Delta } from "delta";
import { GetLocationByIdResponse } from "delta/dist/sdk/models/operations";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.location.getLocationById({
  locationId: "maiores",
}).then((res: GetLocationByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetLocationByIdRequest](../../models/operations/getlocationbyidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetLocationByIdResponse](../../models/operations/getlocationbyidresponse.md)>**


## postLocation

Create a new location

### Example Usage

```typescript
import { Delta } from "delta";
import { PostLocationResponse } from "delta/dist/sdk/models/operations";
import { LocationStatus, LocationType } from "delta/dist/sdk/models/shared";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.location.postLocation({
  address1: "dicta",
  address2: "corporis",
  city: "South Birdie",
  countryCode: "OM",
  id: "5e6e13b9-9d48-48e1-a91e-450ad2abd442",
  name: "Mr. Shelly Lueilwitz",
  platformId: "ipsam",
  postalCode: "16527",
  region: "tempore",
  status: LocationStatus.Active,
  type: LocationType.Other,
}).then((res: PostLocationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Location](../../models/shared/location.md)           | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostLocationResponse](../../models/operations/postlocationresponse.md)>**

