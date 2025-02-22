/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { marketingCreateContentBlock } from "../funcs/marketingCreateContentBlock.js";
import { marketingCreateEmailTemplate } from "../funcs/marketingCreateEmailTemplate.js";
import { marketingCreateInAppTemplate } from "../funcs/marketingCreateInAppTemplate.js";
import { marketingCreateOmniChannelTemplate } from "../funcs/marketingCreateOmniChannelTemplate.js";
import { marketingCreatePushTemplate } from "../funcs/marketingCreatePushTemplate.js";
import { marketingCreateSmsTemplate } from "../funcs/marketingCreateSmsTemplate.js";
import { marketingGetCampaign } from "../funcs/marketingGetCampaign.js";
import { marketingGetContentBlock } from "../funcs/marketingGetContentBlock.js";
import { marketingGetEmailTemplate } from "../funcs/marketingGetEmailTemplate.js";
import { marketingGetInAppTemplate } from "../funcs/marketingGetInAppTemplate.js";
import { marketingGetOmniChannelTemplate } from "../funcs/marketingGetOmniChannelTemplate.js";
import { marketingGetPushTemplate } from "../funcs/marketingGetPushTemplate.js";
import { marketingGetSmsTemplate } from "../funcs/marketingGetSmsTemplate.js";
import { marketingListCampaigns } from "../funcs/marketingListCampaigns.js";
import { marketingListContentBlocks } from "../funcs/marketingListContentBlocks.js";
import { marketingListEmailTemplates } from "../funcs/marketingListEmailTemplates.js";
import { marketingListInAppTemplates } from "../funcs/marketingListInAppTemplates.js";
import { marketingListOmniChannelTemplates } from "../funcs/marketingListOmniChannelTemplates.js";
import { marketingListPushTemplates } from "../funcs/marketingListPushTemplates.js";
import { marketingListSmsTemplates } from "../funcs/marketingListSmsTemplates.js";
import { marketingUpdateContentBlock } from "../funcs/marketingUpdateContentBlock.js";
import { marketingUpdateEmailTemplate } from "../funcs/marketingUpdateEmailTemplate.js";
import { marketingUpdateInAppTemplate } from "../funcs/marketingUpdateInAppTemplate.js";
import { marketingUpdateOmniChannelTemplate } from "../funcs/marketingUpdateOmniChannelTemplate.js";
import { marketingUpdatePushTemplate } from "../funcs/marketingUpdatePushTemplate.js";
import { marketingUpdateSmsTemplate } from "../funcs/marketingUpdateSmsTemplate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { PageIterator, unwrapResultIterator } from "../sdk/types/operations.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Marketing extends ClientSDK {
  /**
   * Create Content Block
   */
  async createContentBlock(
    request: operations.MarketingCreateContentBlockRequest,
    options?: RequestOptions,
  ): Promise<operations.MarketingCreateContentBlockResponse> {
    return unwrapAsync(marketingCreateContentBlock(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Email Templates
   */
  async createEmailTemplate(
    request: operations.MarketingCreateEmailTemplateRequest,
    options?: RequestOptions,
  ): Promise<operations.MarketingCreateEmailTemplateResponse> {
    return unwrapAsync(marketingCreateEmailTemplate(
      this,
      request,
      options,
    ));
  }

  /**
   * Create In-App Template
   */
  async createInAppTemplate(
    request: operations.MarketingCreateInAppTemplateRequest,
    options?: RequestOptions,
  ): Promise<operations.MarketingCreateInAppTemplateResponse> {
    return unwrapAsync(marketingCreateInAppTemplate(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Omni-Channel Template
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async createOmniChannelTemplate(
    request: operations.MarketingCreateOmniChannelTemplateRequest,
    options?: RequestOptions,
  ): Promise<operations.MarketingCreateOmniChannelTemplateResponse> {
    return unwrapAsync(marketingCreateOmniChannelTemplate(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Push Template
   */
  async createPushTemplate(
    request: operations.MarketingCreatePushTemplateRequest,
    options?: RequestOptions,
  ): Promise<operations.MarketingCreatePushTemplateResponse> {
    return unwrapAsync(marketingCreatePushTemplate(
      this,
      request,
      options,
    ));
  }

  /**
   * Create SMS Template
   */
  async createSmsTemplate(
    request: operations.MarketingCreateSmsTemplateRequest,
    options?: RequestOptions,
  ): Promise<operations.MarketingCreateSmsTemplateResponse> {
    return unwrapAsync(marketingCreateSmsTemplate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get campaign
   */
  async getCampaign(
    request: operations.MarketingGetCampaignRequest,
    options?: RequestOptions,
  ): Promise<operations.MarketingGetCampaignResponse> {
    return unwrapAsync(marketingGetCampaign(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Content Blocks
   */
  async getContentBlock(
    request: operations.MarketingGetContentBlockRequest,
    options?: RequestOptions,
  ): Promise<operations.MarketingGetContentBlockResponse> {
    return unwrapAsync(marketingGetContentBlock(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Email Templates
   */
  async getEmailTemplate(
    request: operations.MarketingGetEmailTemplateRequest,
    options?: RequestOptions,
  ): Promise<operations.MarketingGetEmailTemplateResponse> {
    return unwrapAsync(marketingGetEmailTemplate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get In-App Template
   */
  async getInAppTemplate(
    request: operations.MarketingGetInAppTemplateRequest,
    options?: RequestOptions,
  ): Promise<operations.MarketingGetInAppTemplateResponse> {
    return unwrapAsync(marketingGetInAppTemplate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Omni-Channel Template
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async getOmniChannelTemplate(
    request: operations.MarketingGetOmniChannelTemplateRequest,
    options?: RequestOptions,
  ): Promise<operations.MarketingGetOmniChannelTemplateResponse> {
    return unwrapAsync(marketingGetOmniChannelTemplate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Push Template
   */
  async getPushTemplate(
    request: operations.MarketingGetPushTemplateRequest,
    options?: RequestOptions,
  ): Promise<operations.MarketingGetPushTemplateResponse> {
    return unwrapAsync(marketingGetPushTemplate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get SMS Template
   */
  async getSmsTemplate(
    request: operations.MarketingGetSmsTemplateRequest,
    options?: RequestOptions,
  ): Promise<operations.MarketingGetSmsTemplateResponse> {
    return unwrapAsync(marketingGetSmsTemplate(
      this,
      request,
      options,
    ));
  }

  /**
   * List campaigns
   */
  async listCampaigns(
    request: operations.MarketingListCampaignsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.MarketingListCampaignsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(marketingListCampaigns(
      this,
      request,
      options,
    ));
  }

  /**
   * List Content Blocks
   */
  async listContentBlocks(
    request: operations.MarketingListContentBlocksRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.MarketingListContentBlocksResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(marketingListContentBlocks(
      this,
      request,
      options,
    ));
  }

  /**
   * List Email Templates
   */
  async listEmailTemplates(
    request: operations.MarketingListEmailTemplatesRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.MarketingListEmailTemplatesResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(marketingListEmailTemplates(
      this,
      request,
      options,
    ));
  }

  /**
   * List In-App Templates
   */
  async listInAppTemplates(
    request: operations.MarketingListInAppTemplatesRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.MarketingListInAppTemplatesResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(marketingListInAppTemplates(
      this,
      request,
      options,
    ));
  }

  /**
   * List Omni-Channel Templates
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async listOmniChannelTemplates(
    request: operations.MarketingListOmniChannelTemplatesRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.MarketingListOmniChannelTemplatesResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(marketingListOmniChannelTemplates(
      this,
      request,
      options,
    ));
  }

  /**
   * List Push Templates
   */
  async listPushTemplates(
    request: operations.MarketingListPushTemplatesRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.MarketingListPushTemplatesResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(marketingListPushTemplates(
      this,
      request,
      options,
    ));
  }

  /**
   * List SMS Templates
   */
  async listSmsTemplates(
    request: operations.MarketingListSmsTemplatesRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.MarketingListSmsTemplatesResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(marketingListSmsTemplates(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Content Block
   */
  async updateContentBlock(
    request: operations.MarketingUpdateContentBlockRequest,
    options?: RequestOptions,
  ): Promise<operations.MarketingUpdateContentBlockResponse> {
    return unwrapAsync(marketingUpdateContentBlock(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Email Templates
   */
  async updateEmailTemplate(
    request: operations.MarketingUpdateEmailTemplateRequest,
    options?: RequestOptions,
  ): Promise<operations.MarketingUpdateEmailTemplateResponse> {
    return unwrapAsync(marketingUpdateEmailTemplate(
      this,
      request,
      options,
    ));
  }

  /**
   * Update In-App Template
   */
  async updateInAppTemplate(
    request: operations.MarketingUpdateInAppTemplateRequest,
    options?: RequestOptions,
  ): Promise<operations.MarketingUpdateInAppTemplateResponse> {
    return unwrapAsync(marketingUpdateInAppTemplate(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Omni-Channel Template
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async updateOmniChannelTemplate(
    request: operations.MarketingUpdateOmniChannelTemplateRequest,
    options?: RequestOptions,
  ): Promise<operations.MarketingUpdateOmniChannelTemplateResponse> {
    return unwrapAsync(marketingUpdateOmniChannelTemplate(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Push Template
   */
  async updatePushTemplate(
    request: operations.MarketingUpdatePushTemplateRequest,
    options?: RequestOptions,
  ): Promise<operations.MarketingUpdatePushTemplateResponse> {
    return unwrapAsync(marketingUpdatePushTemplate(
      this,
      request,
      options,
    ));
  }

  /**
   * Update SMS Template
   */
  async updateSmsTemplate(
    request: operations.MarketingUpdateSmsTemplateRequest,
    options?: RequestOptions,
  ): Promise<operations.MarketingUpdateSmsTemplateResponse> {
    return unwrapAsync(marketingUpdateSmsTemplate(
      this,
      request,
      options,
    ));
  }
}
