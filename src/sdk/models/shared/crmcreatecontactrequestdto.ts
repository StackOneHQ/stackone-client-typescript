/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CrmCreateContactRequestDto = {
    /**
     * List of associated account IDs
     */
    accountIds?: Array<string> | null | undefined;
    /**
     * The contact company name
     */
    companyName?: string | null | undefined;
    /**
     * List of associated deal IDs
     */
    dealIds?: Array<string> | null | undefined;
    /**
     * List of contact email addresses
     */
    emails?: Array<string> | null | undefined;
    /**
     * The contact first name
     */
    firstName?: string | null | undefined;
    /**
     * The contact last name
     */
    lastName?: string | null | undefined;
    /**
     * List of contact phone numbers
     */
    phoneNumbers?: Array<string> | null | undefined;
};

/** @internal */
export namespace CrmCreateContactRequestDto$ {
    export type Inbound = {
        account_ids?: Array<string> | null | undefined;
        company_name?: string | null | undefined;
        deal_ids?: Array<string> | null | undefined;
        emails?: Array<string> | null | undefined;
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        phone_numbers?: Array<string> | null | undefined;
    };

    export const inboundSchema: z.ZodType<CrmCreateContactRequestDto, z.ZodTypeDef, Inbound> = z
        .object({
            account_ids: z.nullable(z.array(z.string())).optional(),
            company_name: z.nullable(z.string()).optional(),
            deal_ids: z.nullable(z.array(z.string())).optional(),
            emails: z.nullable(z.array(z.string())).optional(),
            first_name: z.nullable(z.string()).optional(),
            last_name: z.nullable(z.string()).optional(),
            phone_numbers: z.nullable(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.account_ids === undefined ? null : { accountIds: v.account_ids }),
                ...(v.company_name === undefined ? null : { companyName: v.company_name }),
                ...(v.deal_ids === undefined ? null : { dealIds: v.deal_ids }),
                ...(v.emails === undefined ? null : { emails: v.emails }),
                ...(v.first_name === undefined ? null : { firstName: v.first_name }),
                ...(v.last_name === undefined ? null : { lastName: v.last_name }),
                ...(v.phone_numbers === undefined ? null : { phoneNumbers: v.phone_numbers }),
            };
        });

    export type Outbound = {
        account_ids?: Array<string> | null | undefined;
        company_name?: string | null | undefined;
        deal_ids?: Array<string> | null | undefined;
        emails?: Array<string> | null | undefined;
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        phone_numbers?: Array<string> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CrmCreateContactRequestDto> = z
        .object({
            accountIds: z.nullable(z.array(z.string())).optional(),
            companyName: z.nullable(z.string()).optional(),
            dealIds: z.nullable(z.array(z.string())).optional(),
            emails: z.nullable(z.array(z.string())).optional(),
            firstName: z.nullable(z.string()).optional(),
            lastName: z.nullable(z.string()).optional(),
            phoneNumbers: z.nullable(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.accountIds === undefined ? null : { account_ids: v.accountIds }),
                ...(v.companyName === undefined ? null : { company_name: v.companyName }),
                ...(v.dealIds === undefined ? null : { deal_ids: v.dealIds }),
                ...(v.emails === undefined ? null : { emails: v.emails }),
                ...(v.firstName === undefined ? null : { first_name: v.firstName }),
                ...(v.lastName === undefined ? null : { last_name: v.lastName }),
                ...(v.phoneNumbers === undefined ? null : { phone_numbers: v.phoneNumbers }),
            };
        });
}
