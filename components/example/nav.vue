<template>
  <div class="exampleNav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="home">
        {{ $t('links.home') }}
      </el-menu-item>
      <el-menu-item index="swiper">
        轮播图
      </el-menu-item>
      <el-menu-item index="quill">
        富文本
      </el-menu-item>
      <el-menu-item index="axios">
        Axios
      </el-menu-item>
      <el-menu-item index="lazy">
        懒加载
      </el-menu-item>
      <el-menu-item index="vuex">
        数据持久化
      </el-menu-item>
      <el-menu-item index="table">
        Table
      </el-menu-item>
    </el-menu>
    <div
      id="change-language"
      class="change-language"
      @click="changeLanguage()"
    >
      <i
        v-if="language== 'zh'"
        class="iconfont icon-yingwen"
      ><span>切换语言</span></i>
      <i
        v-else
        class="iconfont icon-zhongwen1"
      ><span>change Language</span> </i>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'ExampleNav',
  data() {
    return {
      activeIndex: '2',
      language: 'zh',
    }
  },
  mounted() {
    this.language = Cookies.get('language') ? Cookies.get('language') : 'zh'
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key === 'home') {
        this.$router.push('/')
      } else {
        this.$router.push('/example/' + key)
      }
      this.activeIndex = key
    },
    Cookies,
    changeLanguage() {
      if (!Cookies.get('language') || Cookies.get('language') == 'zh') {
        Cookies.set('language', 'en')
      } else {
        Cookies.set('language', 'zh')
      }
      location.reload()
    },
  },
}
</script>

<style scoped lang="scss">
.exampleNav {
  position: relative;
  .change-language {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
  }
}
</style>