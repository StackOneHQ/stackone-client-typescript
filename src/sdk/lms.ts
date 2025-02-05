/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { lmsBatchUpsertContent } from "../funcs/lmsBatchUpsertContent.js";
import { lmsBatchUpsertCourse } from "../funcs/lmsBatchUpsertCourse.js";
import { lmsCreateCollection } from "../funcs/lmsCreateCollection.js";
import { lmsCreateUserAssignment } from "../funcs/lmsCreateUserAssignment.js";
import { lmsCreateUserCompletion } from "../funcs/lmsCreateUserCompletion.js";
import { lmsDeleteUserCompletion } from "../funcs/lmsDeleteUserCompletion.js";
import { lmsGetAssignment } from "../funcs/lmsGetAssignment.js";
import { lmsGetCategory } from "../funcs/lmsGetCategory.js";
import { lmsGetCompletion } from "../funcs/lmsGetCompletion.js";
import { lmsGetContent } from "../funcs/lmsGetContent.js";
import { lmsGetCourse } from "../funcs/lmsGetCourse.js";
import { lmsGetSkill } from "../funcs/lmsGetSkill.js";
import { lmsGetUser } from "../funcs/lmsGetUser.js";
import { lmsGetUserAssignment } from "../funcs/lmsGetUserAssignment.js";
import { lmsGetUserCompletion } from "../funcs/lmsGetUserCompletion.js";
import { lmsListAssignments } from "../funcs/lmsListAssignments.js";
import { lmsListCategories } from "../funcs/lmsListCategories.js";
import { lmsListCompletions } from "../funcs/lmsListCompletions.js";
import { lmsListContent } from "../funcs/lmsListContent.js";
import { lmsListCourses } from "../funcs/lmsListCourses.js";
import { lmsListSkills } from "../funcs/lmsListSkills.js";
import { lmsListUserAssignments } from "../funcs/lmsListUserAssignments.js";
import { lmsListUserCompletions } from "../funcs/lmsListUserCompletions.js";
import { lmsListUsers } from "../funcs/lmsListUsers.js";
import { lmsUpdateCollection } from "../funcs/lmsUpdateCollection.js";
import { lmsUpsertContent } from "../funcs/lmsUpsertContent.js";
import { lmsUpsertCourse } from "../funcs/lmsUpsertCourse.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { PageIterator, unwrapResultIterator } from "../sdk/types/operations.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Lms extends ClientSDK {
  /**
   * Batch Upsert Content
   */
  async batchUpsertContent(
    request: operations.LmsBatchUpsertContentRequest,
    options?: RequestOptions,
  ): Promise<operations.LmsBatchUpsertContentResponse> {
    return unwrapAsync(lmsBatchUpsertContent(
      this,
      request,
      options,
    ));
  }

  /**
   * Batch Upsert Course
   */
  async batchUpsertCourse(
    request: operations.LmsBatchUpsertCourseRequest,
    options?: RequestOptions,
  ): Promise<operations.LmsBatchUpsertCourseResponse> {
    return unwrapAsync(lmsBatchUpsertCourse(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Collection
   */
  async createCollection(
    request: operations.LmsCreateCollectionRequest,
    options?: RequestOptions,
  ): Promise<operations.LmsCreateCollectionResponse> {
    return unwrapAsync(lmsCreateCollection(
      this,
      request,
      options,
    ));
  }

  /**
   * Create User Assignment
   */
  async createUserAssignment(
    request: operations.LmsCreateUserAssignmentRequest,
    options?: RequestOptions,
  ): Promise<operations.LmsCreateUserAssignmentResponse> {
    return unwrapAsync(lmsCreateUserAssignment(
      this,
      request,
      options,
    ));
  }

  /**
   * Create User Completion
   */
  async createUserCompletion(
    request: operations.LmsCreateUserCompletionRequest,
    options?: RequestOptions,
  ): Promise<operations.LmsCreateUserCompletionResponse> {
    return unwrapAsync(lmsCreateUserCompletion(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete User Completion
   */
  async deleteUserCompletion(
    request: operations.LmsDeleteUserCompletionRequest,
    options?: RequestOptions,
  ): Promise<operations.LmsDeleteUserCompletionResponse> {
    return unwrapAsync(lmsDeleteUserCompletion(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Assignment
   */
  async getAssignment(
    request: operations.LmsGetAssignmentRequest,
    options?: RequestOptions,
  ): Promise<operations.LmsGetAssignmentResponse> {
    return unwrapAsync(lmsGetAssignment(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Category
   */
  async getCategory(
    request: operations.LmsGetCategoryRequest,
    options?: RequestOptions,
  ): Promise<operations.LmsGetCategoryResponse> {
    return unwrapAsync(lmsGetCategory(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Completion
   */
  async getCompletion(
    request: operations.LmsGetCompletionRequest,
    options?: RequestOptions,
  ): Promise<operations.LmsGetCompletionResponse> {
    return unwrapAsync(lmsGetCompletion(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Content
   */
  async getContent(
    request: operations.LmsGetContentRequest,
    options?: RequestOptions,
  ): Promise<operations.LmsGetContentResponse> {
    return unwrapAsync(lmsGetContent(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Course
   */
  async getCourse(
    request: operations.LmsGetCourseRequest,
    options?: RequestOptions,
  ): Promise<operations.LmsGetCourseResponse> {
    return unwrapAsync(lmsGetCourse(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Skill
   */
  async getSkill(
    request: operations.LmsGetSkillRequest,
    options?: RequestOptions,
  ): Promise<operations.LmsGetSkillResponse> {
    return unwrapAsync(lmsGetSkill(
      this,
      request,
      options,
    ));
  }

  /**
   * Get User
   */
  async getUser(
    request: operations.LmsGetUserRequest,
    options?: RequestOptions,
  ): Promise<operations.LmsGetUserResponse> {
    return unwrapAsync(lmsGetUser(
      this,
      request,
      options,
    ));
  }

  /**
   * Get User Assignment
   */
  async getUserAssignment(
    request: operations.LmsGetUserAssignmentRequest,
    options?: RequestOptions,
  ): Promise<operations.LmsGetUserAssignmentResponse> {
    return unwrapAsync(lmsGetUserAssignment(
      this,
      request,
      options,
    ));
  }

  /**
   * Get User Completion
   */
  async getUserCompletion(
    request: operations.LmsGetUserCompletionRequest,
    options?: RequestOptions,
  ): Promise<operations.LmsGetUserCompletionResponse> {
    return unwrapAsync(lmsGetUserCompletion(
      this,
      request,
      options,
    ));
  }

  /**
   * List Assignments
   */
  async listAssignments(
    request: operations.LmsListAssignmentsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.LmsListAssignmentsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(lmsListAssignments(
      this,
      request,
      options,
    ));
  }

  /**
   * List Categories
   */
  async listCategories(
    request: operations.LmsListCategoriesRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.LmsListCategoriesResponse, { cursor: string }>
  > {
    return unwrapResultIterator(lmsListCategories(
      this,
      request,
      options,
    ));
  }

  /**
   * List Completions
   */
  async listCompletions(
    request: operations.LmsListCompletionsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.LmsListCompletionsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(lmsListCompletions(
      this,
      request,
      options,
    ));
  }

  /**
   * List Content
   */
  async listContent(
    request: operations.LmsListContentRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.LmsListContentResponse, { cursor: string }>
  > {
    return unwrapResultIterator(lmsListContent(
      this,
      request,
      options,
    ));
  }

  /**
   * List Courses
   */
  async listCourses(
    request: operations.LmsListCoursesRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.LmsListCoursesResponse, { cursor: string }>
  > {
    return unwrapResultIterator(lmsListCourses(
      this,
      request,
      options,
    ));
  }

  /**
   * List Skills
   */
  async listSkills(
    request: operations.LmsListSkillsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.LmsListSkillsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(lmsListSkills(
      this,
      request,
      options,
    ));
  }

  /**
   * List User Assignments
   */
  async listUserAssignments(
    request: operations.LmsListUserAssignmentsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.LmsListUserAssignmentsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(lmsListUserAssignments(
      this,
      request,
      options,
    ));
  }

  /**
   * List User Completions
   */
  async listUserCompletions(
    request: operations.LmsListUserCompletionsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.LmsListUserCompletionsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(lmsListUserCompletions(
      this,
      request,
      options,
    ));
  }

  /**
   * List Users
   */
  async listUsers(
    request: operations.LmsListUsersRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.LmsListUsersResponse, { cursor: string }>
  > {
    return unwrapResultIterator(lmsListUsers(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Collection
   */
  async updateCollection(
    request: operations.LmsUpdateCollectionRequest,
    options?: RequestOptions,
  ): Promise<operations.LmsUpdateCollectionResponse> {
    return unwrapAsync(lmsUpdateCollection(
      this,
      request,
      options,
    ));
  }

  /**
   * Upsert Content
   */
  async upsertContent(
    request: operations.LmsUpsertContentRequest,
    options?: RequestOptions,
  ): Promise<operations.LmsUpsertContentResponse> {
    return unwrapAsync(lmsUpsertContent(
      this,
      request,
      options,
    ));
  }

  /**
   * Upsert Course
   */
  async upsertCourse(
    request: operations.LmsUpsertCourseRequest,
    options?: RequestOptions,
  ): Promise<operations.LmsUpsertCourseResponse> {
    return unwrapAsync(lmsUpsertCourse(
      this,
      request,
      options,
    ));
  }
}
