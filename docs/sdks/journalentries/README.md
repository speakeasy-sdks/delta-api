# JournalEntries
(*journalEntries*)

## Overview

Provides the journal entries information

### Available Operations

* [getJournalEntries](#getjournalentries) - Get all journal entries
* [getJournalEntryById](#getjournalentrybyid) - Get a specific journal entry

## getJournalEntries

Get all journal entries

### Example Usage

```typescript
import { Delta } from "delta";
import { GetJournalEntriesResponse } from "delta/dist/sdk/models/operations";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.journalEntries.getJournalEntries().then((res: GetJournalEntriesResponse) => {
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

**Promise<[operations.GetJournalEntriesResponse](../../models/operations/getjournalentriesresponse.md)>**


## getJournalEntryById

Get a specific journal entry

### Example Usage

```typescript
import { Delta } from "delta";
import { GetJournalEntryByIdResponse } from "delta/dist/sdk/models/operations";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.journalEntries.getJournalEntryById({
  id: "1aa52c3f-5ad0-419d-a1ff-e78f097b0074",
}).then((res: GetJournalEntryByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetJournalEntryByIdRequest](../../models/operations/getjournalentrybyidrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetJournalEntryByIdResponse](../../models/operations/getjournalentrybyidresponse.md)>**

