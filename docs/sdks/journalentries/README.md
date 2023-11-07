# JournalEntries
(*.journalEntries*)

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

(async() => {
  const sdk = new Delta({
    security: {
      authorization: "",
      platformKey: "",
    },
  });

  const res = await sdk.journalEntries.getJournalEntries();


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

**Promise<[operations.GetJournalEntriesResponse](../../models/operations/getjournalentriesresponse.md)>**


## getJournalEntryById

Get a specific journal entry

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

  const res = await sdk.journalEntries.getJournalEntryById({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetJournalEntryByIdRequest](../../models/operations/getjournalentrybyidrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetJournalEntryByIdResponse](../../models/operations/getjournalentrybyidresponse.md)>**

