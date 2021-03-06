import Vue from 'vue'
import { Button } from 'element-ui'
import { Form, FormItem } from 'element-ui'
import {Input} from 'element-ui'
import { Message } from 'element-ui'
import { Container } from 'element-ui'
import { Header } from 'element-ui'
import { Aside } from 'element-ui'
import { Main,
    Menu,
    Submenu,
    MenuItem,} from 'element-ui'



Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.prototype.$message = Message;
