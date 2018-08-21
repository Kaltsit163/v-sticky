<template>
 <transition name="fadeIn">
	<div class="cover" v-show="show" @click="cancleCallbck">
		<div class="dialog-body">
      <div class="main-title" v-if="title">{{title}}</div>
			<div class="text">{{msg}}</div>
			<div class="operate-dialog">
				<span @click="cancleCallbck" v-if="cancelTXT" class="cancle">{{cancelTXT}}</span>
				<span @click="sureCallBack" v-if="sureTXT">{{sureTXT}}</span>
			</div>
		</div>
	</div>
  </transition>
</template>
<script>

export default {
  data () {
    return {
      show: false,
      title: '提示',
      msg: '',
      cancelTXT: '取消',
      sureTXT: '确定',
      success: () => {},
      cancel: () => {}
    }
  },
  methods: {
    sureCallBack () {
      this.show = false
      this.success && this.success()
    },
    cancleCallbck () {
      this.show = false
      this.cancel && this.cancel()
    }
  }
}
</script>

<style lang="scss" scoped>
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .fadeIn-enter-active,.fadeIn-leave-active {
      transition: all 0.4s ease;
  }
  .fadeIn-enter,
  .fadeIn-leave-active {
      opacity: 0;
  }

  .cover{
    animation: fadeIn 0.2s linear;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0,0,0,.5);
    z-index: 10000;
  }

  .dialog-body{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 540px;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 6px;
    text-align: center;
    color: #333;
    .text{
      width: 90%;
      margin: auto;
      color: #666666;
      font-size: 28px;
      line-height: 40px;
      text-align: center;
      padding-top: 60px;
      padding-bottom: 52px;
    }
    .operate-dialog{
      position: relative;
      font-size: 32px;
      // height: 52px;
      display: flex;
      line-height: 52px;
      padding: 25px 0;
      color: #FF4545;
      align-items: center;
      justify-content: center;
      span{
        flex: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
        width: 100%;
        overflow: hidden;
      }
      span:first-child{
        color: #BEBEBE;
      }
      .cancle:after{
        content:"";
          pointer-events:none;
          box-sizing:border-box;
          position:absolute;
          width:200%;
          height:84px;
          left:0;
          top:0;
          border-right:1px solid #E0E0E0;/*no*/
          -webkit-transform:scale(0.5);
          -webkit-transform-origin:0 0;
          transform:scale(0.5);
          transform-origin:0 0;
      }
    }

    .operate-dialog:before{
      position: absolute;
      width:200%;
      height: 200%;
      content:"";
      pointer-events:none;
      box-sizing:border-box;
      left:0;
      top:0;
      border-top:1px solid #E0E0E0;/*no*/
      -webkit-transform:scale(0.5);
      -webkit-transform-origin:0 0;
      transform:scale(0.5);
      transform-origin:0 0;
    }
  }

  .main-title{
    margin-top: 50px;
    margin-bottom: -25px;
  }

  .btn-left{
    position: absolute;
    top: 0;
    right: 10px;
    padding:10px  15px;
    color: #B0B0B0;
  }
</style>
