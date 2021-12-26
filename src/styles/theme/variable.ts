/*
 * @Author: Liaoshuping
 * @Date: 2021-01-08 11:04:36
 * @LastEditTime: 2021-02-05 13:44:03
 * @Description: Global Theme Variable
 */

// -------- Colors -----------

const color = {
  "primary-color": "#04CB67", // 主题色
  "primary-color-secondary": "#42D084", // 主题色(辅助)
  "primary-color-light": "#F1FDF6", // 主题色(辅助浅色,一般用于背景色)
  // 'info-color': '',
  // 'success-color': '',
  // 'processing-color': '',
  "error-color": "#F45B5B", // 错误颜色
  "highlight-color": "#F45B5B", // 高亮颜色
  "warning-color": "#FF9900", // 警告颜色
  // 'normal-color': '',
  white: "#fff", // 基础白
  black: "#000", // 基础黑
  "link-color": "#0074FF" // 文字链颜色
};

// Text color
const textColor = {
  "text-color": "#182A4E", // 字体主色
  "text-color-secondary": "#6C7C98", // 字体辅色一
  "text-color-third": "#C9C9C9", // 字体辅色二 (输入框占位符位子)
  "text-color-fourth": "#7E7E7E" // 字体辅色三
};

// Base background color for most components
const background = {
  "body-background": "#fff", // 全局背景色
  // 'heading-color': textColor['text-color'],
  "component-background": "#fff", // 通用组件背景色（antd的定义组件背景色）
  "background-color-base": "#F6F6F7", // 基础背景色
  "background-color-light": "#FBFBFB" // 浅色背景色
};

// Border
const border = {
  "border-color-base": "#DFE1E5", // 辅助色/输入框边框
  "border-radius-base": "4px"
};
// Buttons
const button = {
  // default类型的btn属性
  "btn-default-color": textColor["text-color-secondary"],
  "btn-default-bg": background["background-color-base"],
  "btn-default-border": background["background-color-base"]
};

// BreadCrumb
const breadCrumb = {
  "bread-crumb-height": "90px" // 面包屑高度
};

// form
const form = {
  "label-color": "#000",
  "form-item-margin-bottom": "30px",
  "form-vertical-label-padding": "0 0 0"
};

// Input
const input = {
  "input-placeholder-color": textColor["text-color-third"],
  "input-height-base": "44px"
};

// Table
const table = {
  "table-header-bg": "#F7FAFC",
  "table-header-color": "#2E3A59",
  "table-body-sort-bg": "#fff",
  "table-padding-vertical": "13.5px",
  "table-padding-horizontal": "8px"
};

// Tabs
const tabs = {
  "tabs-vertical-padding": "10px 28px",
  "tabs-vertical-margin": "0 0 10px 0"
  // 'tabs-card-head-background': background['background-color-light'],
};

// Tree
const tree = {
  "tree-node-selected-bg": color["primary-color-light"]
};

const message = {
  "message-success-border-color": "#04CB67",
  "message-success-bg-color": "#F0F9EB",
  "message-success-icon-color": color["primary-color"],
  "message-info-border-color": "#69C0FF",
  "message-info-bg-color": "#E6F7FF",
  "message-info-icon-color": "#1890FF",
  "message-warning-border-color": "#FFE58F",
  "message-warning-bg-color": "#FFFBE6",
  "message-warning-icon-color": "#FAAD14",
  "message-error-border-color": "#F45B5B",
  "message-error-bg-color": "#FDE7E7",
  "message-error-icon-color": color["error-color"]
};

const pagination = {
  "pagination-item-size": "32px"
};

module.exports = {
  ...color,
  ...textColor,
  ...background,
  ...table,
  ...button,
  ...border,
  ...breadCrumb,
  ...tabs,
  ...tree,
  ...form,
  ...input,
  ...message
};
