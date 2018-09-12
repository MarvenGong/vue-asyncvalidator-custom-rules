## vue asyncvalidator 自定义验证规则 vue-asyncvalidator-custom-rules
#### 更新历史
- v1.0.0 基本规则创建

#### 使用方法
- 通过npm安装插件 npm install --save-dev vue-asyncvalidator-custom-rules
- 在需要验证表单的组件内导入插件
  ~~~
  import AsyncvalidatorCustomRules from 'vue-asyncvalidator-custom-rules';
  ~~~
- 混入验证方法
  ~~~
  export default {
    name: 'componentName',
    mixins: [AsyncvalidatorCustomRules],
    data: {
      return {};
    }
    // ...
  }  
  ~~~
- 在表单中添加验证规则（以element-ui框架为例）
  ~~~
  <el-form-item label="价值" prop="price"
    :rules="[{required: true, message: '请输入优惠券价值'}, {type:'number', message: '价值必须是整数或者小数'}, {validator: idcard, message: '身份证格式不合法'}]">
    <el-input type="number" v-if="!isFromDetail" placeholder="" v-model.number="form.price"></el-input>
  </el-form-item>
  ~~~

#### 验证规则列表
  - money : 价格-必须是整数或者两位小数
  - idcard ：身份证-18位第二代身份证
  - telephone ：电话号码-中间用“-”隔开的带区号的座机号码
  - mobile ：手机号码
  - plusdigital ： 无符号正整数
  - url ：浏览器url
