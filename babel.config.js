module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    ["@vue/babel-plugin-jsx"],
    "@babel/plugin-proposal-optional-chaining",
    ["@babel/plugin-proposal-unicode-property-regex", { "useUnicodeFlag": false }],
    // `style: true` 会加载 less 文件, 'style: css'会加载css文件
    ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": true }] 
  ]
}
