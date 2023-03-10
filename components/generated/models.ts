// Code generated by wunderctl. DO NOT EDIT.

import type function_users_get from "../../.wundergraph/operations/users/get";
import type function_users_subscribe from "../../.wundergraph/operations/users/subscribe";
import type function_users_update from "../../.wundergraph/operations/users/update";
import type { ExtractInput, ExtractResponse } from "@wundergraph/sdk/operations";

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}

export type users_getInput = ExtractInput<typeof function_users_get>;

export type users_subscribeInput = ExtractInput<typeof function_users_subscribe>;

export type users_updateInput = ExtractInput<typeof function_users_update>;

export interface DragonsResponse {
	data?: DragonsResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface users_getResponse {
	data?: users_getResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface users_subscribeResponse {
	data?: users_subscribeResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface users_updateResponse {
	data?: users_updateResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface DragonsResponseData {
	spacex_dragons?: {
		name?: string;
		active?: boolean;
	}[];
}

export type users_getResponseData = ExtractResponse<typeof function_users_get>;

export type users_subscribeResponseData = ExtractResponse<typeof function_users_subscribe>;

export type users_updateResponseData = ExtractResponse<typeof function_users_update>;
