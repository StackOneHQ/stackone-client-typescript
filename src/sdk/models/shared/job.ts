/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { HiringTeam } from "./hiringteam";
import { JobStatusEnum } from "./jobstatusenum";
import { Expose, Transform, Type } from "class-transformer";

export enum Confidential {
    True = "true",
    False = "false",
}

export class Job extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code: string;

    @SpeakeasyMetadata()
    @Expose({ name: "company_id" })
    companyId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "confidential" })
    confidential?: Confidential;

    /**
     * Date of creation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "department_ids" })
    departmentIds: string[];

    @SpeakeasyMetadata({ elemType: HiringTeam })
    @Expose({ name: "hiring_team" })
    @Type(() => HiringTeam)
    hiringTeam?: HiringTeam[];

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "job_status" })
    @Type(() => JobStatusEnum)
    jobStatus: JobStatusEnum;

    @SpeakeasyMetadata()
    @Expose({ name: "location_ids" })
    locationIds: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title: string;

    /**
     * Date of last update
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt: Date;
}
