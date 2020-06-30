<template>
  <div>
    <el-table
      ref="multipleTable"
      border
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column
        type="selection"
        width="36"
      >
      </el-table-column>
      <el-table-column
        label="ID"
        width="50"
        align="center"
      >
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column
        label="日期"
        width="120"
        align="center"
      >
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        align="center"
        width="160"
      >
        <template slot="header">
          操作
        </template>
        <template>
          <el-button
            class="cosmo-icon-edit"
            size="mini"
            type="primary"
            circle
            title="编辑"
          ></el-button>
          <el-button
            class="cosmo-icon-delete"
            size="mini"
            type="danger"
            circle
            title="删除"
          ></el-button>
          <el-button
            class="cosmo-icon-vertical-align-top"
            size="mini"
            type="success"
            circle
            title="置顶"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pageBox">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      currentPage1: 5,
      tableData: [
        {
          id: 1,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          id: 2,
          date: '2016-05-02',
          name: '是的法律上',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          id: 3,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          id: 4,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          id: 5,
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          id: 1,
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          id: 1,
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
      ],
      multipleSelection: [],
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
  },
}
</script>


<style lang="scss" scoped>
</style>