// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getInterfaceInfoVOById GET /api/interface */
export async function getInterfaceInfoVOByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: wfAPI.getInterfaceInfoVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<wfAPI.BaseResponseInterfaceInfoVO_>('/api/interface', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateInterface PUT /api/interface */
export async function updateInterfaceUsingPUT(
  body: wfAPI.InterfaceInfoUpdateRequset,
  options?: { [key: string]: any },
) {
  return request<wfAPI.BaseResponse>('/api/interface', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** addInterface POST /api/interface */
export async function addInterfaceUsingPOST(
  body: wfAPI.InterfaceInfo,
  options?: { [key: string]: any },
) {
  return request<wfAPI.BaseResponse>('/api/interface', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteInterface DELETE /api/interface */
export async function deleteInterfaceUsingDELETE(
  body: wfAPI.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<wfAPI.BaseResponse>('/api/interface', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** interfaceInfoinvoke POST /api/interface/invoke */
export async function interfaceInfoinvokeUsingPOST(
  body: wfAPI.InterfaceInfoInvokeRequset,
  options?: { [key: string]: any },
) {
  return request<wfAPI.BaseResponseObject_>('/api/interface/invoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** offlineInterface PUT /api/interface/offline */
export async function offlineInterfaceUsingPUT(
  body: wfAPI.IDRequest,
  options?: { [key: string]: any },
) {
  return request<wfAPI.BaseResponse>('/api/interface/offline', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** onlineInterface PUT /api/interface/online */
export async function onlineInterfaceUsingPUT(
  body: wfAPI.IDRequest,
  options?: { [key: string]: any },
) {
  return request<wfAPI.BaseResponse>('/api/interface/online', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** PageInterfaceInfoVO POST /api/interface/page */
export async function PageInterfaceInfoVOUsingPOST(
  body: wfAPI.InterfaceInfoQueryRequset,
  options?: { [key: string]: any },
) {
  return request<wfAPI.BaseResponsePageInterfaceInfoVO_>('/api/interface/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
