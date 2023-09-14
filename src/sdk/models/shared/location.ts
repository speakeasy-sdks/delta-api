/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The status of the location.
 */
export enum LocationStatus {
    Active = "active",
    Inactive = "inactive",
    Unknown = "unknown",
}

/**
 * The type of the location.
 */
export enum LocationType {
    Warehouse = "warehouse",
    Store = "store",
    Office = "office",
    Other = "other",
}

export class Location extends SpeakeasyBase {
    /**
     * The first address line of the address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "address1" })
    address1?: string;

    /**
     * The second address line of the address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "address2" })
    address2?: string;

    /**
     * The city of the address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "city" })
    city?: string;

    /**
     * The country of the address. (ISO 3166-1)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "country_code" })
    countryCode?: string;

    /**
     * Unique identifier of the location within delta.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The name of the location.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The platform-specific ID of the location.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform_id" })
    platformId?: string;

    /**
     * The postal code of the address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "postal_code" })
    postalCode?: string;

    /**
     * The region of the address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region?: string;

    /**
     * The status of the location.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: LocationStatus;

    /**
     * The type of the location.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: LocationType;
}