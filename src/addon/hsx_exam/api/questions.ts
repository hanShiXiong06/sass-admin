import request from '@/utils/request'

/*
* 获取试题列表
* method:get
*
* */
export function getQuestionsPageList(params: Record<string, any>) {
    return request.get(`hsx_exam/questions`, { params })
}
/*
* 获取单个试题
* method:get
*
* */
export function getQuestionsInfo(params: Record<string, any>) {
    return request.get(`hsx_exam/questions/${ params.id }`)
}
/*
* 添加问题
* method:post
*
* */
export function addQuestions(params: Record<string, any>) {
    return request.post('hsx_exam/questions', params, { showErrorMessage: true, showSuccessMessage: true })
}
export function editQuestions(params: Record<string, any>) {
    return request.put(`hsx_exam/questions/${ params.id }`, params, { showErrorMessage: true, showSuccessMessage: true })
}
export function deleteQuestions(params: Record<string, any>) {
    return request.delete(`hsx_exam/questions/${ params.id }`, { showErrorMessage: true, showSuccessMessage: true })
}


/*
* 获取问题的类型
* getQuestionType
* */
export function getQuestionTypes() {
    return request.get(`hsx_exam/questions/type`);
}



/*获取分类列表*/
export function getCategoryTree(params: Record<string, any>) {
    return request.get(`hsx_exam/questions/tree`, { params })
}

/**
 * 获取商品分类列表
 * @param params
 * @returns
 */
export function getCategoryList(params: Record<string, any>) {
    return request.get(`hsx_exam/questions/category`, { params })
}

/**
 * 获取商品分类详情
 * @param category_id 商品分类category_id
 * @returns
 */
export function getCategoryInfo(category_id: number) {
    return request.get(`hsx_exam/questions/category/${ category_id }`);
}

/**
 * 添加商品分类
 * @param params
 * @returns
 */
export function addCategory(params: Record<string, any>) {
    return request.post('hsx_exam/questions/category', params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 编辑商品分类
 * @param params
 * @returns
 */
export function editCategory(params: Record<string, any>) {
    return request.put(`hsx_exam/questions/category/${ params.category_id }`, params, {
        showErrorMessage: true,
        showSuccessMessage: true
    })
}

/**
 * 删除商品分类
 * @param category_id
 * @returns
 */
export function deleteCategory(category_id: number) {
    return request.delete(`hsx_exam/questions/category/${ category_id }`, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 拖拽编辑商品分类
 * @param params
 * @returns
 */
export function updateCategory(params: Record<string, any>) {
    return request.post(`hsx_exam/questions/category/update`, params, { showErrorMessage: true, showSuccessMessage: true })
}