/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Compensation } from "./compensation";
import { EmploymentContractTypeEnum } from "./employmentcontracttypeenum";
import { EmploymentTypeEnum } from "./employmenttypeenum";
import { Location } from "./location";
import { Questionnaire } from "./questionnaire";
import { Expose, Transform, Type } from "class-transformer";

export class Content extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "html" })
    html?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "plain" })
    plain?: string;
}

export enum Internal {
    True = "true",
    False = "false",
}

export enum Status {
    Live = "live",
    Draft = "draft",
    Closed = "closed",
    UnmappedValue = "unmapped_value",
}

export class JobPosting extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Compensation })
    @Expose({ name: "compensation" })
    @Type(() => Compensation)
    compensation?: Compensation[];

    @SpeakeasyMetadata()
    @Expose({ name: "content" })
    @Type(() => Content)
    content?: Content;

    /**
     * Date of creation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "employment_contract_type" })
    @Type(() => EmploymentContractTypeEnum)
    employmentContractType?: EmploymentContractTypeEnum;

    @SpeakeasyMetadata()
    @Expose({ name: "employment_type" })
    @Type(() => EmploymentTypeEnum)
    employmentType?: EmploymentTypeEnum;

    @SpeakeasyMetadata()
    @Expose({ name: "external_apply_url" })
    externalApplyUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "external_url" })
    externalUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "internal" })
    internal?: Internal;

    @SpeakeasyMetadata()
    @Expose({ name: "job_id" })
    jobId?: string;

    @SpeakeasyMetadata({ elemType: Location })
    @Expose({ name: "locations" })
    @Type(() => Location)
    locations?: Location[];

    @SpeakeasyMetadata({ elemType: Questionnaire })
    @Expose({ name: "questionnaires" })
    @Type(() => Questionnaire)
    questionnaires?: Questionnaire[];

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: Status;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;

    /**
     * Date of last update
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
