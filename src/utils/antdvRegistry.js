/*
 * @Author: liaoshuping
 * @Date: 2021-01-21 14:19:32
 * @LastEditTime: 2021-01-22 10:29:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \auth\src\utils\antdvRegistry.js
 */
import {
    Button, 
    Tree,
    TreeSelect,
    Row, 
    Col, 
    Form, 
    Divider, 
    Table,
    Input,
    Tabs,
    Select,
    DatePicker,
    Modal,
    Tooltip,
    ConfigProvider
} from  'ant-design-vue';

const components = [
    Button, 
    Tree,
    TreeSelect,
    Row, 
    Col, 
    Form, 
    Divider, 
    Table,
    Input,
    Tabs,
    Select,
    DatePicker,
    Modal,
    Tooltip,
    ConfigProvider
]
export const useComponent = (app) => {
    components.forEach((component) => {
        app.use(component)
    })
}