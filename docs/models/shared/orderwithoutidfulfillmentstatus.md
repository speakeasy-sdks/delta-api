# OrderWithoutIdFulfillmentStatus

Fulfillment status of the order on the connected platform, can be one of - NULL None of the line items in the order have been fulfilled. - FULFILLED Every line item in the order has been fulfilled. - PARTIALLY At least one line item in the order has been fulfilled. - RETURNED Every line item in the order has been returned and the order canceled.


## Values

| Name        | Value       |
| ----------- | ----------- |
| `Null`      | NULL        |
| `Fulfilled` | FULFILLED   |
| `Partially` | PARTIALLY   |
| `Returned`  | RETURNED    |