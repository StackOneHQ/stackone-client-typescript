/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CandidateEmail } from "./candidateemail";
import { SocialLink } from "./sociallink";
import { Expose, Transform, Type } from "class-transformer";

export class Candidate extends SpeakeasyBase {
    /**
     * List of candidate application IDs
     */
    @SpeakeasyMetadata()
    @Expose({ name: "application_ids" })
    applicationIds?: string[];

    /**
     * Candidate company
     */
    @SpeakeasyMetadata()
    @Expose({ name: "company" })
    company?: string;

    /**
     * Candidate created date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * Candidate email
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * List of candidate emails
     */
    @SpeakeasyMetadata({ elemType: CandidateEmail })
    @Expose({ name: "emails" })
    @Type(() => CandidateEmail)
    emails: CandidateEmail[];

    /**
     * Candidate first name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName: string;

    /**
     * Candidate hired date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hired_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    hiredAt?: Date;

    /**
     * Candidate ID
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Candidate last name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName: string;

    /**
     * Candidate name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Candidate phone number
     */
    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone?: string;

    /**
     * List of candidate social links
     */
    @SpeakeasyMetadata({ elemType: SocialLink })
    @Expose({ name: "social_links" })
    @Type(() => SocialLink)
    socialLinks: SocialLink[];

    /**
     * Candidate title
     */
    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title: string;

    /**
     * Candidate updated date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt: Date;
}
