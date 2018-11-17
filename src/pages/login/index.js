import "./index.scss";
console.log('login');

  var vm;
  vm = new Vue({
    el:'#divIbox',
    data: function (){
      return {
        tableData3 : gettbdata(),
        multipleSelection: [],
        currentPage4: 4
      }
    },
    methods:{
      handleSelectionChange(val) {
            this.multipleSelection = val;
          },
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
           console.log(`当前页: ${val}`);
        }
    },
    
  })

 function gettbdata(){
     var data = [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
   return data;
 }
