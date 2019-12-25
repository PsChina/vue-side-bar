import SideBar from './side-bar.vue';

export default {
    install(Vue, componentName = 'VSideBar'){
        Vue.component(componentName,SideBar)
    }
}

