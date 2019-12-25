# Vue-side-bar

这是一个基于Vue的侧边栏插件。

This is a Vue - based sidebar plug-in.

# How to use

```js
import SideBar from 'vue-side-bar';
import Vue from 'vue';

Vue.use(SideBar);
// or
// Vue.use(SideBar,'component-name');
```


```html
<!--  data(){ retuen {open:false} } -->
<template>
    <div>
        <button @touchend="open=true;">open</button>
        <side-bar :open.sync="open">
            <div style="width:200px;height:100px;background:white">
            </div>
        </side-bar>
    </div>
</template>
```