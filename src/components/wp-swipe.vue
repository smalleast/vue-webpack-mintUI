<template>
  <div class="page-swipe">
    <mt-swipe :auto="0">
      <mt-swipe-item>
        <img src="http://testimg.dcpai.cn/DBED5F26-84D2-494B-A8ED-3A6CF4E5DABC.JPG?imageView/2/w/600"/>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://testimg.dcpai.cn/3788B52C-3321-4E85-A770-58A1A280189C.JPG?imageView/2/w/600">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://testimg.dcpai.cn/345784fd-0118-490d-ba09-5b72f488dfb7.jpg?imageView/2/w/600">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://testimg.dcpai.cn/7B6660ED-09B1-46B0-AA22-B6F3B3889834.JPG?imageView/2/w/600">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<style lang="scss">
  .mint-swipe {
    height: 300px;
    .mint-swipe-indicators {
      width: 98%;
      text-align: right;
      left: 0;
      transform: translateX(-0);
      .mint-swipe-indicator {
        opacity: .8;
        background: #ddd;
      }
      .is-active {
        background: #2745FF;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>


