<template>
  <section class="container">
    <div>
      <h2 class="subtitle">
        {{ $t('links.des') }}
      </h2>
    </div>
    <div class="icon">
      <i class="cosmo-icon-gongyeAPPS1" />
      <i class="cosmo-icon-gongyeAPPS" />
      <no-ssr>
        <icon-svg icon-class="cosmo-icon-gongyeAPPS1" />
        <icon-svg icon-class="cosmo-icon-gongyeAPPS" />
      </no-ssr>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'example',
  data() {
    return {
      input: '',
      imgSrc: 'http://lorempixel.com/640/480',
    }
  },
  mounted() {
    console.log('this is current quill instance object', this.myQuillEditor)
  },
  methods: {
    onEditorBlur(editor) {},
    onEditorFocus(editor) {},
    onEditorReady(editor) {},
    onEditorChange({ editor, html, text }) {
      this.content = html
    },
  },
}
</script>

<style scope lang="scss">
.subtitle {
  padding-top: 30px;
  text-align: center;
  @include fontsize30();
  @include xs() {
    color: blue;
  }
  @include sm() {
    color: yellow;
  }
  @include md() {
    color: green;
  }
}
.icon {
  font-size: 40px;
}
[class^='cosmo-icon'] {
  font-size: 50px;
  color: inherit;
}
</style>
