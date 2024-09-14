import request from '@/utils/request'

// USER_CODE_BEGIN -- hsx_phone_query_config
/**
 * 获取列表
 * @param params
 * @returns
 */
export function getHsxPhoneQueryConfigList(params: Record<string, any>) {
    return request.get(`hsx_phone_query_config/hsx_phone_query_config`, {params})
}

/**
 * 获取详情
 * @param id id
 * @returns
 */
export function getHsxPhoneQueryConfigInfo(id: number) {
    return request.get(`hsx_phone_query_config/hsx_phone_query_config/${id}`);
}

/**
 * 添加
 * @param params
 * @returns
 */
export function addHsxPhoneQueryConfig(params: Record<string, any>) {
    return request.post('hsx_phone_query_config/hsx_phone_query_config', params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 编辑
 * @param id
 * @param params
 * @returns
 */
export function editHsxPhoneQueryConfig(params: Record<string, any>) {
    return request.put(`hsx_phone_query_config/hsx_phone_query_config/${params.id}`, params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 删除
 * @param id
 * @returns
 */
export function deleteHsxPhoneQueryConfig(id: number) {
    return request.delete(`hsx_phone_query_config/hsx_phone_query_config/${id}`, { showErrorMessage: true, showSuccessMessage: true })
}



// USER_CODE_END -- hsx_phone_query_config
