// pages/detail/components/dashBoard/dashBoard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    state: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapBtn(event) {
      this.triggerEvent('tapBtn', {btn: event.target.dataset.btn}, {})
    }
  }
})
