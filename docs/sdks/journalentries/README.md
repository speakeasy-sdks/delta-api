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

async function run() {
  const sdk = new Delta({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
      platformKey: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.journalEntries.getJournalEntries();

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

**Promise<[operations.GetJournalEntriesResponse](../../sdk/models/operations/getjournalentriesresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 404,500,502      | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

## getJournalEntryById

Get a specific journal entry

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

  const res = await sdk.journalEntries.getJournalEntryById({
    id: "<id>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetJournalEntryByIdRequest](../../sdk/models/operations/getjournalentrybyidrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetJournalEntryByIdResponse](../../sdk/models/operations/getjournalentrybyidresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 404,500,502      | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |
