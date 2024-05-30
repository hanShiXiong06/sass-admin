
import request from '@/utils/request'

/***************************************************** hello world ****************************************************/
export function getCategoryList(params: Record<string, any>) {
    return request.get(`detail_form/category_list`, {params})
}

export function getCategoryInfo(id:number) {
    return request.get(`detail_form/category_list/${id}`)
}


export function deleteCategoryList(id:number) {
    return request.delete(`detail_form/category_list/${id}`,{showErrorMessage: true, showSuccessMessage: true})
}

export function updateCategoryList(params: Record<string, any>) {
    return request.put(`detail_form/category_list/${params.id}`,params,{showErrorMessage: true, showSuccessMessage: true})
}

export function addCategoryList(params: Record<string, any>) {
    return request.post(`detail_form/category_list`, params,{showErrorMessage: true, showSuccessMessage: true})
}
/***************************************************** 质检option ****************************************************/

export function getList() {
    return request.get(`detail_form/list`)
}

export function getInfo(id:number) {
    return request.get(`detail_form/list/${id}`)
}


export function deleteList(id:number) {
    return request.delete(`detail_form/list/${id}`,{showErrorMessage: true, showSuccessMessage: true})
}

export function updateList(params: Record<string, any>) {
    return request.put(`detail_form/list/${params.id}`,params,{showErrorMessage: true, showSuccessMessage: true})
}

export function addList(params: Record<string, any>) {
    return request.post(`detail_form/list`, params, {showErrorMessage: true, showSuccessMessage: true})
}