# delta

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/delta-api.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/bolt-php/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add delta
```

### Yarn

```bash
yarn add delta
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Delta } from "delta";

async function run() {
    const sdk = new Delta({
        security: {
            authorization: "<YOUR_BEARER_TOKEN_HERE>",
            platformKey: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.accounts.getAccountById({
        accountId: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [accounts](docs/sdks/accounts/README.md)

* [getAccountById](docs/sdks/accounts/README.md#getaccountbyid) - Get a specific account
* [getAccounts](docs/sdks/accounts/README.md#getaccounts) - Get all accounts

### [inventory](docs/sdks/inventory/README.md)

* [getInvetory](docs/sdks/inventory/README.md#getinvetory) - Get all inventories
* [getInvetoryById](docs/sdks/inventory/README.md#getinvetorybyid) - Get a specific inventory
* [postSetInventories](docs/sdks/inventory/README.md#postsetinventories) - Update the stock level of an inventory item at a location

### [location](docs/sdks/location/README.md)

* [getLocationById](docs/sdks/location/README.md#getlocationbyid) - Get a specific location
* [postLocation](docs/sdks/location/README.md#postlocation) - Create a new location

### [journalEntries](docs/sdks/journalentries/README.md)

* [getJournalEntries](docs/sdks/journalentries/README.md#getjournalentries) - Get all journal entries
* [getJournalEntryById](docs/sdks/journalentries/README.md#getjournalentrybyid) - Get a specific journal entry

### [orders](docs/sdks/orders/README.md)

* [getOrderById](docs/sdks/orders/README.md#getorderbyid) - Get an order by id
* [getOrders](docs/sdks/orders/README.md#getorders) - Get all orders
* [patchtOrders](docs/sdks/orders/README.md#patchtorders) - Update a specific order
* [postOrders](docs/sdks/orders/README.md#postorders) - Create a new order

### [fulfillments](docs/sdks/fulfillments/README.md)

* [getFulfillmentById](docs/sdks/fulfillments/README.md#getfulfillmentbyid) - Get a specific fulfillment
* [postFulfillments](docs/sdks/fulfillments/README.md#postfulfillments) - Create a new fulfillment

### [returns](docs/sdks/returns/README.md)

* [getReturnById](docs/sdks/returns/README.md#getreturnbyid) - Get a specific return
* [postReturns](docs/sdks/returns/README.md#postreturns) - Create a new return

### [products](docs/sdks/products/README.md)

* [getProductById](docs/sdks/products/README.md#getproductbyid) - Get a specific product
* [getProducts](docs/sdks/products/README.md#getproducts) - Get all products
* [postProducts](docs/sdks/products/README.md#postproducts) - Create a new product

### [transactions](docs/sdks/transactions/README.md)

* [getTransactionById](docs/sdks/transactions/README.md#gettransactionbyid) - Provide a transaction by id
* [getTransactions](docs/sdks/transactions/README.md#gettransactions) - Get all transactions
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 404,500,502      | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

Example

```typescript
import { Delta } from "delta";

async function run() {
    const sdk = new Delta({
        security: {
            authorization: "<YOUR_BEARER_TOKEN_HERE>",
            platformKey: "<YOUR_API_KEY_HERE>",
        },
    });

    let res;
    try {
        res = await sdk.accounts.getAccountById({
            accountId: "<value>",
        });
    } catch (err) {
        if (err instanceof errors.ErrorT) {
            console.error(err); // handle exception
            throw err;
        } else if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.usedelta.io/v1` | None |
| 1 | `https://staging.api.usedelta.io/v1` | None |

#### Example

```typescript
import { Delta } from "delta";

async function run() {
    const sdk = new Delta({
        serverIdx: 1,
        security: {
            authorization: "<YOUR_BEARER_TOKEN_HERE>",
            platformKey: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.accounts.getAccountById({
        accountId: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Delta } from "delta";

async function run() {
    const sdk = new Delta({
        serverURL: "https://api.usedelta.io/v1",
        security: {
            authorization: "<YOUR_BEARER_TOKEN_HERE>",
            platformKey: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.accounts.getAccountById({
        accountId: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { delta } from "Delta";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new Delta({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name            | Type            | Scheme          |
| --------------- | --------------- | --------------- |
| `authorization` | http            | HTTP Bearer     |
| `platformKey`   | apiKey          | API key         |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Delta } from "delta";

async function run() {
    const sdk = new Delta({
        security: {
            authorization: "<YOUR_BEARER_TOKEN_HERE>",
            platformKey: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.accounts.getAccountById({
        accountId: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
