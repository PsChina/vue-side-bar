<template>
    <div :class="['sider-bar',{opacity:!isOpen}]" v-show="open" @touchend.self="hideSelf">
        <div ref="content" :class="['content-part',{open:isOpen}]">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        open:{
            type:Boolean,
            default:false,
            required:true,
        },
    },
    data(){
        return {
            isOpen:false,
        }
    },
    watch:{
        open(newValue){
            setTimeout(()=>{
                this.isOpen = newValue
            },30)
        }
    },
    methods:{
        hideSelf(){
            this.isOpen = false
            setTimeout(()=>{
                this.$emit('update:open',this.isOpen)
            },300)
        }
    }
}
</script>
<style scoped>
.sider-bar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999; /* 动态设置 */
    transition: all 0.3s ease; /* 动态设置 */
}
.opacity{
    background: transparent;
}
.content-part{
    position: absolute;
    right: -100%;
    top: 0;
    /* width: 100%; 可以用 rem 代替百分比布局*/
    height: 100%;
    background-color: transparent;
    transition: right 0.3s ease; /* 动态设置 */
}
.open{
    right: 0;  /* type 动态设置 */
}
</style>