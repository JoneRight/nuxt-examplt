<template>
  <div class="bread">
    <el-breadcrumb
      class="app-levelbar"
      separator-class="el-icon-arrow-right"
    >
      <el-breadcrumb-item
        v-for="(item,index)  in levelList"
        :key="item.path"
      >
        <span
          v-if='item.redirect==="noredirect"||index==levelList.length-1'
          class="no-redirect"
        >{{item.name}}</span>
        <!-- <span v-else
              class="no-redirect">{{item.name}}</span> -->
        <router-link
          v-else
          :to="item.redirect||item.path"
        >{{item.name}}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'bread',
  data() {
    return {
      levelList: null,
      routesName: {
        example: '实例',
        swiper: '轮播图',
        quill: '富文本',
        axios: 'ajax',
        lazy: '懒加载',
        vuex: '数据持久化',
        table: '表格',
        detail: '详情',
      },
    }
  },
  mounted() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      var _levelList = []
      var _path = this.$route.matched[0].path
      var _name = this.$route.matched[0].name
      var names = _path.split('/')
      names.forEach((element) => {
        if (element !== '') {
          _levelList = _levelList.concat([{ name: this.routesName[element], path: '/' + element }])
        }
      })
      if (_name !== '首页' || _path !== '') {
        _levelList = [{ name: '首页', path: '/' }].concat(_levelList)
      }
      this.levelList = _levelList
    },
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    },
  },
}
</script>

<style lang="scss" scoped>
.bread {
  padding: 20px 0;
  .el-breadcrumb {
    font-size: 16px;
  }
}
</style>