/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetAccountByIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the account
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
    accountId: string;
}

export class GetAccountByIdResponse extends SpeakeasyBase {
    /**
     * The account corresponding to the provided `accountId`
     */
    @SpeakeasyMetadata()
    account?: shared.Account;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

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
