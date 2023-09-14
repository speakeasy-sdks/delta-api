/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Order } from "./order";
import { Expose, Type } from "class-transformer";

export class OrderCollection extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Order })
    @Expose({ name: "orders" })
    @Type(() => Order)
    orders?: Order[];
}