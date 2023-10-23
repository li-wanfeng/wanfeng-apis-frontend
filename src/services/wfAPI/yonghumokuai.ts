// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** logout GET /api/users/ */
export async function logoutUsingGET(options?: { [key: string]: any }) {
  return request<wfAPI.BaseResponse>('/api/users/', {
    method: 'GET',
    ...(options || {}),
  });
}

/** updateUser PUT /api/users/ */
export async function updateUserUsingPUT(
  body: wfAPI.UserUpdateRequset,
  options?: { [key: string]: any },
) {
  return request<wfAPI.BaseResponse>('/api/users/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** addUser POST /api/users/ */
export async function addUserUsingPOST(body: wfAPI.User, options?: { [key: string]: any }) {
  return request<wfAPI.BaseResponse>('/api/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteUserById DELETE /api/users/ */
export async function deleteUserByIdUsingDELETE(
  body: wfAPI.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<wfAPI.BaseResponse>('/api/users/', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getloginUser GET /api/users/info */
export async function getloginUserUsingGET(options?: { [key: string]: any }) {
  return request<wfAPI.BaseResponseUserLoginVO_>('/api/users/info', {
    method: 'GET',
    ...(options || {}),
  });
}

/** listUserVOByPage POST /api/users/list/page */
export async function listUserVOByPageUsingPOST(
  body: wfAPI.UserQueryRequset,
  options?: { [key: string]: any },
) {
  return request<wfAPI.BaseResponsePageUserVO_>('/api/users/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** userlogin POST /api/users/login */
export async function userloginUsingPOST(
  body: wfAPI.UserLoginRequest,
  options?: { [key: string]: any },
) {
  return request<wfAPI.BaseResponseUserLoginVO_>('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
