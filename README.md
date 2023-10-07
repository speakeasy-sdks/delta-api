# delta

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/delta-api.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/bolt-php/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add delta
```

### Yarn

```bash
yarn add delta
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Delta } from "delta";

(async() => {
  const sdk = new Delta({
    security: {
      authorization: "",
      platformKey: "",
    },
  });

  const res = await sdk.accounts.getAccountById({
    accountId: "man Honda Pants",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/sdks/accounts/README.md)

* [getAccountById](docs/sdks/accounts/README.md#getaccountbyid) - Get a specific account
* [getAccounts](docs/sdks/accounts/README.md#getaccounts) - Get all accounts

### [fulfillments](docs/sdks/fulfillments/README.md)

* [getFulfillmentById](docs/sdks/fulfillments/README.md#getfulfillmentbyid) - Get a specific fulfillment
* [postFulfillments](docs/sdks/fulfillments/README.md#postfulfillments) - Create a new fulfillment

### [inventory](docs/sdks/inventory/README.md)

* [getInvetory](docs/sdks/inventory/README.md#getinvetory) - Get all inventories
* [getInvetoryById](docs/sdks/inventory/README.md#getinvetorybyid) - Get a specific inventory
* [postSetInventories](docs/sdks/inventory/README.md#postsetinventories) - Update the stock level of an inventory item at a location

### [journalEntries](docs/sdks/journalentries/README.md)

* [getJournalEntries](docs/sdks/journalentries/README.md#getjournalentries) - Get all journal entries
* [getJournalEntryById](docs/sdks/journalentries/README.md#getjournalentrybyid) - Get a specific journal entry

### [location](docs/sdks/location/README.md)

* [getLocationById](docs/sdks/location/README.md#getlocationbyid) - Get a specific location
* [postLocation](docs/sdks/location/README.md#postlocation) - Create a new location

### [orders](docs/sdks/orders/README.md)

* [getOrderById](docs/sdks/orders/README.md#getorderbyid) - Get an order by id
* [getOrders](docs/sdks/orders/README.md#getorders) - Get all orders
* [patchtOrders](docs/sdks/orders/README.md#patchtorders) - Update a specific order
* [postOrders](docs/sdks/orders/README.md#postorders) - Create a new order

### [products](docs/sdks/products/README.md)

* [getProductById](docs/sdks/products/README.md#getproductbyid) - Get a specific product
* [getProducts](docs/sdks/products/README.md#getproducts) - Get all products
* [postProducts](docs/sdks/products/README.md#postproducts) - Create a new product

### [returns](docs/sdks/returns/README.md)

* [getReturnById](docs/sdks/returns/README.md#getreturnbyid) - Get a specific return
* [postReturns](docs/sdks/returns/README.md#postreturns) - Create a new return

### [transactions](docs/sdks/transactions/README.md)

* [getTransactionById](docs/sdks/transactions/README.md#gettransactionbyid) - Provide a transaction by id
* [getTransactions](docs/sdks/transactions/README.md#gettransactions) - Get all transactions
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
