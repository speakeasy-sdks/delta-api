/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class PatchtOrdersRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    orderWithoutId: shared.OrderWithoutId;

    /**
     * The unique identifier of the order
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
    orderId: string;
}

export class PatchtOrdersResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Order updated successfully to the provided `Platform-Key` and `orderId`
     */
    @SpeakeasyMetadata()
    order?: shared.Order;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
