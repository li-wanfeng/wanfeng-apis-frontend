// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getUserInterfaceInfoVOById GET /api/userInterface */
export async function getUserInterfaceInfoVOByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: wfAPI.getUserInterfaceInfoVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<wfAPI.BaseResponseUserInterfaceInfoVO_>('/api/userInterface', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateUserInterface PUT /api/userInterface */
export async function updateUserInterfaceUsingPUT(
  body: wfAPI.UserInterfaceInfoUpdateRequset,
  options?: { [key: string]: any },
) {
  return request<wfAPI.BaseResponse>('/api/userInterface', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** addUserInterface POST /api/userInterface */
export async function addUserInterfaceUsingPOST(
  body: wfAPI.UserInterfaceInfo,
  options?: { [key: string]: any },
) {
  return request<wfAPI.BaseResponse>('/api/userInterface', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteUserInterface DELETE /api/userInterface */
export async function deleteUserInterfaceUsingDELETE(
  body: wfAPI.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<wfAPI.BaseResponse>('/api/userInterface', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** PageUserInterfaceInfoVO POST /api/userInterface/page */
export async function PageUserInterfaceInfoVOUsingPOST(
  body: wfAPI.UserInterfaceInfoQueryRequset,
  options?: { [key: string]: any },
) {
  return request<wfAPI.BaseResponsePageUserInterfaceInfoVO_>('/api/userInterface/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
