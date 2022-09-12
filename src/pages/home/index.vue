<template>
  <div class="home-page">
    <el-header class="header">
      <div class="header__title">前端 Vue3 项目</div>
      <div class="header__link">
        <el-link
          type="info"
          href="https://github.com/sherwinshen/vue3-project-startkit"
          target="_blank"
          class="github-link"
        >
          <img src="./../../assets/images/github.png" class="github-logo" />
          Github
        </el-link>
      </div>
    </el-header>
    <el-main class="container">
      <div class="imgs">
        <img src="./../../assets/images/logos.png" class="full-height" />
      </div>
      <div class="link">
        <el-link href="https://fe-planet.netlify.app/technology/blogs-docs/vue3-startkit.html" target="_blank">
          🔗 前端 Vue3 项目搭建指南
        </el-link>
      </div>
    </el-main>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomePage',
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  border-bottom: 1px solid rgb(145 145 145 / 26.7%);

  .github-link {
    :deep(.el-link--inner) {
      display: flex;
      align-items: center;
    }

    .github-logo {
      height: 16px;
      margin-right: 4px;
    }
  }
}

.container {
  max-width: initial;
  height: calc(100vh - 48px);

  .imgs {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
  }

  .link {
    margin-top: 20px;

    :deep(.el-link--inner) {
      font-size: 20px;
    }
  }

  .full-height {
    height: 100%;
  }
}
</style>
