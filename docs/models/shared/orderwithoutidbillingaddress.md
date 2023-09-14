# OrderWithoutIdBillingAddress

Billing address for the order


## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `address1`                                          | *string*                                            | :heavy_minus_sign:                                  | The first address line of the address.              |
| `address2`                                          | *string*                                            | :heavy_minus_sign:                                  | The second address line of the address.             |
| `city`                                              | *string*                                            | :heavy_minus_sign:                                  | The city of the address.                            |
| `companyName`                                       | *string*                                            | :heavy_minus_sign:                                  | The company name of the customer.                   |
| `countryCode`                                       | *string*                                            | :heavy_minus_sign:                                  | The country of the address (ISO 3166-1).            |
| `email`                                             | *string*                                            | :heavy_minus_sign:                                  | The email address of the customer.                  |
| `firstName`                                         | *string*                                            | :heavy_minus_sign:                                  | The first name of the customer.                     |
| `lastName`                                          | *string*                                            | :heavy_minus_sign:                                  | The last name of the customer.                      |
| `phone`                                             | *string*                                            | :heavy_minus_sign:                                  | The phone number of the customer.                   |
| `postalCode`                                        | *string*                                            | :heavy_minus_sign:                                  | The postal code of the address.                     |
| `region`                                            | *string*                                            | :heavy_minus_sign:                                  | the region of the address.                          |
| `taxId`                                             | *string*                                            | :heavy_minus_sign:                                  | The tax ID of the customer. Only for B2B orders.    |
| `taxType`                                           | *string*                                            | :heavy_minus_sign:                                  | The tax type for the customer. Only for B2B orders. |