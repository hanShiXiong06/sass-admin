<template>
  1222
</template>
<script setup lang="ts">
import axios from 'axios';

const url = 'http://localhost:82/api/shop/goods/pages';
const params = {
  page: 1,
  limit: 10,
  keyword: '',
  goods_category: 61,
  brand_id: '',
  label_ids: '',
  start_price: '',
  end_price: '',
  order: 'price',
  sort: 'desc'
};

axios.get(url, {
  params: params,
  headers: {
    'site-id': '100005'
  }
})
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('There was an error making the request!', error);
    });
const categoryUrl = 'http://localhost:82/api/shop/goods/category/tree'
axios.get(categoryUrl,{
  headers: {
    'site-id': '100005'
  }
}).then(res=>{
  console.log(res.data)
})


</script>