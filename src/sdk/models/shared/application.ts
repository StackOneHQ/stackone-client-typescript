/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Answer } from "./answer";
import { ApplicationAttachment } from "./applicationattachment";
import { ApplicationCandidate } from "./applicationcandidate";
import { ApplicationStatusEnumApiModel } from "./applicationstatusenumapimodel";
import { InterviewStage } from "./interviewstage";
import { RejectedReason } from "./rejectedreason";
import { ResultLink } from "./resultlink";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Questionnaire associated with the application
 */
export class ApplicationQuestionnaire extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Answer })
    @Expose({ name: "answers" })
    @Type(() => Answer)
    answers: Answer[];

    /**
     * Unique identifier of the questionnaire
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;
}

export class Application extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "application_status" })
    @Type(() => ApplicationStatusEnumApiModel)
    applicationStatus: ApplicationStatusEnumApiModel;

    @SpeakeasyMetadata({ elemType: ApplicationAttachment })
    @Expose({ name: "attachments" })
    @Type(() => ApplicationAttachment)
    attachments?: ApplicationAttachment[];

    @SpeakeasyMetadata()
    @Expose({ name: "candidate" })
    @Type(() => ApplicationCandidate)
    candidate: ApplicationCandidate;

    /**
     * Unique identifier of the candidate
     */
    @SpeakeasyMetadata()
    @Expose({ name: "candidate_id" })
    candidateId?: string;

    /**
     * Date of creation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * Unique identifier of the application
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata({ elemType: InterviewStage })
    @Expose({ name: "interview_stage" })
    @Type(() => InterviewStage)
    interviewStage?: InterviewStage[];

    /**
     * Unique identifier of the interview stage
     */
    @SpeakeasyMetadata()
    @Expose({ name: "interview_stage_id" })
    interviewStageId?: string;

    /**
     * Unique identifier of the job
     */
    @SpeakeasyMetadata()
    @Expose({ name: "job_id" })
    jobId?: string;

    /**
     * Unique identifier of the location
     */
    @SpeakeasyMetadata()
    @Expose({ name: "location_id" })
    locationId?: string;

    /**
     * Unique identifiers of the locations
     */
    @SpeakeasyMetadata()
    @Expose({ name: "location_ids" })
    locationIds?: string[];

    /**
     * Questionnaire associated with the application
     */
    @SpeakeasyMetadata()
    @Expose({ name: "questionnaire" })
    @Type(() => ApplicationQuestionnaire)
    questionnaire: ApplicationQuestionnaire;

    /**
     * Date of rejection
     */
    @SpeakeasyMetadata()
    @Expose({ name: "rejected_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    rejectedAt?: Date;

    /**
     * Unique identifiers of the rejection reasons
     */
    @SpeakeasyMetadata()
    @Expose({ name: "rejected_reason_ids" })
    rejectedReasonIds?: string[];

    @SpeakeasyMetadata({ elemType: RejectedReason })
    @Expose({ name: "rejected_reasons" })
    @Type(() => RejectedReason)
    rejectedReasons?: RejectedReason[];

    @SpeakeasyMetadata({ elemType: ResultLink })
    @Expose({ name: "result_links" })
    @Type(() => ResultLink)
    resultLinks?: ResultLink[];

    /**
     * Date of last update
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
