/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TimeOffStatusEnum } from "./timeoffstatusenum";
import { TimeOffTypeEnum } from "./timeofftypeenum";
import { Expose, Type } from "class-transformer";

export class HrisCreateTimeOffRequestDto extends SpeakeasyBase {
    /**
     * The approver ID
     */
    @SpeakeasyMetadata()
    @Expose({ name: "approver_id" })
    approverId?: string;

    /**
     * The employee ID
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employee_id" })
    employeeId?: string;

    /**
     * The end date of the time off request
     */
    @SpeakeasyMetadata()
    @Expose({ name: "end_date" })
    endDate?: string;

    /**
     * The start date of the time off request
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_date" })
    startDate?: string;

    /**
     * The status of the time off request
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    @Type(() => TimeOffStatusEnum)
    status?: TimeOffStatusEnum;

    /**
     * The type of the time off request
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    @Type(() => TimeOffTypeEnum)
    type?: TimeOffTypeEnum;
}