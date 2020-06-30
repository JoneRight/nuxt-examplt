<template>
  <div class="exampleQuill">
    <div
      class="de-quill-editor"
      :content="content"
      @change="onEditorChange($event)"
      @blur="onEditorBlur($event)"
      @focus=" onEditorFocus($event)"
      @ready="onEditorReady($event)"
      v-quill:myQuillEditor="editorOption"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'exampleQuill',
  layout: 'example',
  data() {
    return {
      content: '',
      editorOption: {
        onOff: true,
        placeholder: '在此插入。。。',
        modules: {
          toolbar: [
            [{ size: ['10px', false, '20px', '24px', '32px'] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ color: [] }, { background: [] }],
            [{ align: '' }, { align: 'center' }, { align: 'right' }],
          ],
        },
        theme: 'snow',
      },
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

<style lang="scss" scoped>
</style>