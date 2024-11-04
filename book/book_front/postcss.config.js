module.exports = {
  // 其他配置...
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 750, // 设计稿宽度
      unitToConvert: 'px', // 需要转换的单位，默认为"px"
      viewportUnit: 'vw', // 转换后的单位，默认为"vw"
      selectorBlackList: ['.ignore', '.hairlines'], // 不需要转换的类名
      minPixelValue: 1, // 最小的转换单位值
      mediaQuery: true,  // 控制是否允许将媒体查询中的 px 单位进行转换为 vw/vh 单位。
      exclude: [/(\/|\\)(node_modules)(\/|\\)/] // 排除第三方模块中的样式
    }
  }
}