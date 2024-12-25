import request from '@/utils/request'

/***************************************************** 系统表单 ****************************************************/

/**
 * 获取系统表单分页列表
 * @param params
 * @returns
 */
export function getDiyFormList(params: Record<string, any>) {
    return request.get(`diy/form`, { params })
}

/**
 * 获取系统表单列表
 * @param params
 * @returns
 */
export function getDiyList(params: Record<string, any>) {
    return request.get(`diy/form/list`, { params })
}

/**
 * 获取系统表单详情
 * @param form_id 系统表单id
 * @returns
 */
export function getDiyFormInfo(form_id: number) {
    return request.get(`diy/form/${ form_id }`);
}

/**
 * 添加系统表单
 * @param params
 * @returns
 */
export function addDiyForm(params: Record<string, any>) {
    return request.post('diy/form', params, { showSuccessMessage: true })
}

/**
 * 编辑系统表单
 * @param params
 */
export function editDiyForm(params: Record<string, any>) {
    return request.put(`diy/form/${ params.form_id }`, params, { showSuccessMessage: true })
}

/**
 * 修改系统表单分享内容
 * @param params
 */
export function editDiyFormShare(params: Record<string, any>) {
    return request.put(`diy/form/share`, params, { showSuccessMessage: true })
}

/**
 * 删除系统表单
 * @param form_id
 * @returns
 */
export function deleteDiyForm(form_id: number) {
    return request.delete(`diy/form/${ form_id }`, { showSuccessMessage: true })
}

/**
 * 获取系统表单初始化数据
 */
export function initPage(params: Record<string, any>) {
    return request.get(`diy/form/init`, { params })
}

/**
 * 获取页面模板类型
 */
export function getDiyTemplate(params: Record<string, any>) {
    return request.get(`diy/template`, { params })
}

/**
 * 获取模板页面列表
 */
export function getDiyTemplatePages(params: Record<string, any>) {
    return request.get(`diy/template/pages`, { params })
}

/**
 * 切换模板
 * @param params
 * @returns
 */
export function changeTemplate(params: Record<string, any>) {
    return request.put(`diy/change`, params, { showSuccessMessage: true })
}

/**
 * 系统表单状态状态
 * @param params
 * @returns
 */
export function editFormStatus(params: Record<string, any>) {
    return request.put(`diy/form/status`, params, {
        showErrorMessage: true,
        showSuccessMessage: true
    })
}

/**
 * 获取模板页面（存在的应用插件列表）
 * @param params
 * @returns
 */
export function getApps(params: Record<string, any>) {
    return request.get(`diy/apps`)
}

/**
 * 复制模版页面
 * @param params
 */
export function copyDiy(params: Record<string, any>) {
    return request.post(`diy/form/copy`, params, { showSuccessMessage: true })
}

/**
 * 获取系统表单类型
 * @param params
 * @returns
 */
export function getFormType(params: Record<string, any>) {
    return request.get(`diy/form/type`)
}

/**
 * 获取系统表单数据列表
 * @param params
 * @returns
 */
export function getFormRecords(params: Record<string, any>) {
    return request.get(`diy/form/records`, { params })
}

/**
 * 获取系统表单数据详情
 * @param params
 * @returns
 */
export function getFormRecordsInfo(id: number) {
    return request.get(`diy/form/records/${ id }`);
}

/**
 * 删除系统表单数据
 * @param params
 * @returns
 */
export function deleteFormRecords(id: number) {
    return request.delete(`diy/form/records/${ id }`, { showSuccessMessage: true })
}
