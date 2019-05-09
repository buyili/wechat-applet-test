// components/check-group/check-group.js
Component({
  behaviors: ['wx://form-field'],
  /**
   * 组件的属性列表
   */
  properties: {
    items: {
      type: Array,
      value: [],
      observer: function () {
        let checkedItems,
          items = this.data.items;
        checkedItems = items.filter((item) => {
          return item.checked
        })
        this.setData({ value: checkedItems })
      }
    }
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
    handleCheckboxTap: function ({ currentTarget: { dataset } }) {
      let { index } = dataset,
        items = this.data.items,
        key = `items[${index}].checked`;
      this.setData({ [key]: !items[index].checked });
    }
  }
})
