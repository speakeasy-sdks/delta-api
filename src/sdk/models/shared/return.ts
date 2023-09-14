/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * The condition of the returned items. Can be one of like_new, used, or damaged.
 */
export enum ReturnReturnedOrdersReturnedItemsCondition {
    LikeNew = "like_new",
    Used = "used",
    Damaged = "damaged",
}

export class ReturnReturnedOrdersReturnedItems extends SpeakeasyBase {
    /**
     * The barcode for the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "barcode" })
    barcode?: string;

    /**
     * The condition of the returned items. Can be one of like_new, used, or damaged.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "condition" })
    condition?: ReturnReturnedOrdersReturnedItemsCondition;

    /**
     * Unique identifier of the line item within delta.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * vThe platform-specific ID of the product.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform_id" })
    platformId?: string;

    /**
     * The number of returned items.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity?: number;

    /**
     * The reaons of the return.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reason" })
    reason?: string;

    /**
     * The SKU of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sku" })
    sku?: string;

    /**
     * The platform-specific ID of the variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "variant_id" })
    variantId?: string;
}

export class ReturnReturnedOrders extends SpeakeasyBase {
    /**
     * Unique identifier of the order within delta.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * The platform-specific ID of the order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform_id" })
    platformId?: string;

    /**
     * The list of returned items.
     */
    @SpeakeasyMetadata({ elemType: ReturnReturnedOrdersReturnedItems })
    @Expose({ name: "returned_items" })
    @Type(() => ReturnReturnedOrdersReturnedItems)
    returnedItems?: ReturnReturnedOrdersReturnedItems[];
}

/**
 * Status of the order return. Can be one of announced, transit, delivered, canceled, completed, or other.
 */
export enum ReturnStatus {
    Announced = "ANNOUNCED",
    Transit = "TRANSIT",
    Delivered = "DELIVERED",
    Canceled = "CANCELED",
    Completed = "COMPLETED",
    Other = "OTHER",
}

export class Return extends SpeakeasyBase {
    /**
     * The name of the carrier used for the return.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "carrier" })
    carrier?: string;

    /**
     * Unique identifier of the connected platform within delta.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "connection_id" })
    connectionId?: string;

    /**
     * The date when the return was created. (ISO 8601)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt?: string;

    /**
     * The unique identifier of the return within delta.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The platform-specific ID of the return.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform_id" })
    platformId?: string;

    /**
     * The number of items within the return.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity?: number;

    /**
     * The orders and products of the return.
     */
    @SpeakeasyMetadata({ elemType: ReturnReturnedOrders })
    @Expose({ name: "returned_orders" })
    @Type(() => ReturnReturnedOrders)
    returnedOrders?: ReturnReturnedOrders[];

    /**
     * A message of the shopper for the return.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "shopper_message" })
    shopperMessage?: string;

    /**
     * Status of the order return. Can be one of announced, transit, delivered, canceled, completed, or other.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: ReturnStatus;

    /**
     * The tracking number for the return.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tracking_number" })
    trackingNumber?: string;

    /**
     * The date when the return was last updated. (ISO 8601)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt?: string;
}