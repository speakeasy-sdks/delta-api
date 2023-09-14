/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Accounts } from "./accounts";
import { Fulfillments } from "./fulfillments";
import { Inventory } from "./inventory";
import { JournalEntries } from "./journalentries";
import { Location } from "./location";
import * as shared from "./models/shared";
import { Orders } from "./orders";
import { Products } from "./products";
import { Returns } from "./returns";
import { Transactions } from "./transactions";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * production environment
     */
    "https://api.usedelta.io/v1",
    /**
     * staging environment
     */
    "https://staging.api.usedelta.io/v1",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "0.1.0";
    genVersion = "2.109.3";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * delta API: Universal API for ecommerce
 */
export class Delta {
    /**
     * Provides the accounts information
     */
    public accounts: Accounts;
    /**
     * Provides the fulfillments information
     */
    public fulfillments: Fulfillments;
    /**
     * Provides the inventory information
     */
    public inventory: Inventory;
    /**
     * Provides the journal entries information
     */
    public journalEntries: JournalEntries;
    /**
     * Provides the location information
     */
    public location: Location;
    /**
     * Provides the orders information
     */
    public orders: Orders;
    /**
     * Provides the products information
     */
    public products: Products;
    /**
     * Provides the returns information
     */
    public returns: Returns;
    /**
     * Provides the transactions information
     */
    public transactions: Transactions;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.accounts = new Accounts(this.sdkConfiguration);
        this.fulfillments = new Fulfillments(this.sdkConfiguration);
        this.inventory = new Inventory(this.sdkConfiguration);
        this.journalEntries = new JournalEntries(this.sdkConfiguration);
        this.location = new Location(this.sdkConfiguration);
        this.orders = new Orders(this.sdkConfiguration);
        this.products = new Products(this.sdkConfiguration);
        this.returns = new Returns(this.sdkConfiguration);
        this.transactions = new Transactions(this.sdkConfiguration);
    }
}
