/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class InterviewPart extends SpeakeasyBase {
    /**
     * Interview part created date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "interviewer_ids" })
    interviewerIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "meeting_provider" })
    meetingProvider?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "meeting_url" })
    meetingUrl?: string;

    /**
     * Interview part updated date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
