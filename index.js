import SideBar from './side-bar.vue';

export default {
    install(Vue, componentName = 'SideBar'){
        Vue.component(componentName,SideBar)
    }
}

