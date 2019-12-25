# v-side-bar

这是一个基于Vue的侧边栏插件。

This is a Vue - based sidebar plug-in.

# How to use

```js
import SideBar from 'v-side-bar';
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
        <v-side-bar :open.sync="open">
            <div style="width:200px;height:100px;background:white">
            </div>
        </v-side-bar>
    </div>
</template>
```

## demo

![demo-gif](https://github.com/PsChina/utility/blob/master/img/side-bar-demo.gif)