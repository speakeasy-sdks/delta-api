# Location

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
  locationId: "ut",
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
  address1: "maiores",
  address2: "dicta",
  city: "West Jayden",
  countryCode: "BQ",
  id: "b5e6e13b-99d4-488e-9e91-e450ad2abd44",
  name: "Beth McGlynn Sr.",
  platformId: "assumenda",
  postalCode: "01652",
  region: "facilis",
  status: LocationStatus.Unknown,
  type: LocationType.Store,
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

