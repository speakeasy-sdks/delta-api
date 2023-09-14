/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class ProductWithoutIdMedia extends SpeakeasyBase {
    /**
     * The type of the media file.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;

    /**
     * The URL of the media file.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}

/**
 * Nomenclature of the tariff code
 */
export enum ProductWithoutIdVariantsCustomsTariffCodesNomenclature {
    Taric = "TARIC",
    Instrastat = "Instrastat",
    HSCode = "HS-Code",
    Other = "Other",
}

export class ProductWithoutIdVariantsCustomsTariffCodes extends SpeakeasyBase {
    /**
     * The tariff code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: string;

    /**
     * ISO Country code associated with the tariff code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "iso_country_code" })
    isoCountryCode?: string;

    /**
     * Nomenclature of the tariff code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "nomenclature" })
    nomenclature?: ProductWithoutIdVariantsCustomsTariffCodesNomenclature;
}

export class ProductWithoutIdVariantsCustoms extends SpeakeasyBase {
    /**
     * Array of tariff codes
     */
    @SpeakeasyMetadata({ elemType: ProductWithoutIdVariantsCustomsTariffCodes })
    @Expose({ name: "tariff_codes" })
    @Type(() => ProductWithoutIdVariantsCustomsTariffCodes)
    tariffCodes?: ProductWithoutIdVariantsCustomsTariffCodes[];
}

/**
 * The size and weight information of the item..
 */
export class ProductWithoutIdVariantsDimensions extends SpeakeasyBase {
    /**
     * The height of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "height" })
    height?: number;

    /**
     * The length of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "length" })
    length?: number;

    /**
     * The unit of the item size.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unit_size" })
    unitSize?: string;

    /**
     * The unit of the item weight.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unit_weight" })
    unitWeight?: string;

    /**
     * The weight of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "weight" })
    weight?: number;

    /**
     * The width of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "width" })
    width?: number;
}

/**
 * The media files of the item.
 */
export class ProductWithoutIdVariantsMedia extends SpeakeasyBase {
    /**
     * The type of the media file.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;

    /**
     * The URL of the media file.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}

/**
 * The tax rate of the item.
 */
export enum ProductWithoutIdVariantsPricingDetailsTaxRate {
    Reduced = "reduced",
    Normal = "normal",
    Free = "free",
}

/**
 * The price information about the item.
 */
export class ProductWithoutIdVariantsPricingDetails extends SpeakeasyBase {
    /**
     * The former gross retail price of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "former_price" })
    formerPrice?: number;

    /**
     * The currency of the item. (ISO 4217)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "iso_currency_code" })
    isoCurrencyCode?: string;

    /**
     * The current gross retail price of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "price" })
    price?: number;

    /**
     * The manufacturer's recommended gross retail price of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "suggested_price" })
    suggestedPrice?: number;

    /**
     * The tax rate of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax_rate" })
    taxRate?: ProductWithoutIdVariantsPricingDetailsTaxRate;

    /**
     * The unit cost of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unit_cost" })
    unitCost?: number;
}

/**
 * The individual tags or attributes of the item.
 */
export class ProductWithoutIdVariantsTags extends SpeakeasyBase {
    /**
     * The language of the tag or attribute. (ISO 639)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "language" })
    language?: string;

    /**
     * The name of the tag or attribute.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The value of the tag or attribute.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: string;
}

/**
 * The unit type of the item.
 */
export enum ProductWithoutIdVariantsUnitType {
    Piece = "piece",
    Weight = "weight",
}

export class ProductWithoutIdVariants extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "Customs" })
    @Type(() => ProductWithoutIdVariantsCustoms)
    customs?: ProductWithoutIdVariantsCustoms;

    /**
     * The barcode for the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "barcode" })
    barcode?: string;

    /**
     * The name of the carrier.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "carrier" })
    carrier?: string;

    /**
     * The color of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "color" })
    color?: string;

    /**
     * The country of origin of the item. (ISO 3166-1)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "country_of_origin" })
    countryOfOrigin?: string;

    /**
     * The date when the variant was created. (ISO 8601)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt?: string;

    /**
     * The regular delivery time of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "delivery_time" })
    deliveryTime?: number;

    /**
     * The type of delivery (e.g. Same-Day Delivery, Standard 48h).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "delivery_type" })
    deliveryType?: string;

    /**
     * The size and weight information of the item..
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dimensions" })
    @Type(() => ProductWithoutIdVariantsDimensions)
    dimensions?: ProductWithoutIdVariantsDimensions;

    /**
     * Unique identifier of the variant within delta.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The media files of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "media" })
    @Type(() => ProductWithoutIdVariantsMedia)
    media?: ProductWithoutIdVariantsMedia;

    /**
     * The name of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The maximum order quantity of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "order_max" })
    orderMax?: number;

    /**
     * The minimum order quantity of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "order_min" })
    orderMin?: number;

    /**
     * The number of package pieces.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pieces" })
    pieces?: number;

    /**
     * The platform-specific ID of the product.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform_id" })
    platformId?: string;

    /**
     * The price information about the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pricing_details" })
    @Type(() => ProductWithoutIdVariantsPricingDetails)
    pricingDetails?: ProductWithoutIdVariantsPricingDetails;

    /**
     * Boolean flag whether the item is replaceable.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "replacement" })
    replacement?: boolean;

    /**
     * The regular replacement delivery time of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "replacement_time" })
    replacementTime?: number;

    /**
     * Boolean flag whether the item requires shipping.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requires_shipping" })
    requiresShipping?: boolean;

    /**
     * The size of the item, For example "M".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: string;

    /**
     * The SKU of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sku" })
    sku?: string;

    /**
     * The status of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;

    /**
     * The individual tags or attributes of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tags" })
    @Type(() => ProductWithoutIdVariantsTags)
    tags?: ProductWithoutIdVariantsTags;

    /**
     * The total stock of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_stock" })
    totalStock?: number;

    /**
     * The unit type of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unit_type" })
    unitType?: ProductWithoutIdVariantsUnitType;

    /**
     * The date when the variant was last updated. (ISO 8601)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt?: string;

    /**
     * The platform-specific ID of the variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "variant_id" })
    variantId?: string;
}

export class ProductWithoutId extends SpeakeasyBase {
    /**
     * The category of the product.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "category" })
    category?: string;

    /**
     * Unique identifier of the integration on delta.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "connection_id" })
    connectionId?: string;

    /**
     * The date when the product was created. (ISO 8601)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt?: string;

    /**
     * The description of the product.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * The unique identifier of the product.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The media files of the product.
     */
    @SpeakeasyMetadata({ elemType: ProductWithoutIdMedia })
    @Expose({ name: "media" })
    @Type(() => ProductWithoutIdMedia)
    media?: ProductWithoutIdMedia[];

    /**
     * The name of the product.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The platform-specific ID of the product.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform_id" })
    platformId?: string;

    /**
     * The status of the product.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;

    /**
     * The date when the product was last updated. (ISO 8601)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt?: string;

    /**
     * Variant of the product
     */
    @SpeakeasyMetadata({ elemType: ProductWithoutIdVariants })
    @Expose({ name: "variants" })
    @Type(() => ProductWithoutIdVariants)
    variants?: ProductWithoutIdVariants[];
}