# HrisCreateTimeOffRequestDto


## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `approverId`                                                  | *string*                                                      | :heavy_minus_sign:                                            | The approver ID                                               | 1687-4                                                        |
| `employeeId`                                                  | *string*                                                      | :heavy_minus_sign:                                            | The employee ID                                               | 1687-3                                                        |
| `endDate`                                                     | *string*                                                      | :heavy_minus_sign:                                            | The end date of the time off request                          |                                                               |
| `startDate`                                                   | *string*                                                      | :heavy_minus_sign:                                            | The start date of the time off request                        |                                                               |
| `status`                                                      | [TimeOffStatusEnum](../../models/shared/timeoffstatusenum.md) | :heavy_minus_sign:                                            | The status of the time off request                            |                                                               |
| `type`                                                        | [TimeOffTypeEnum](../../models/shared/timeofftypeenum.md)     | :heavy_minus_sign:                                            | The type of the time off request                              |                                                               |