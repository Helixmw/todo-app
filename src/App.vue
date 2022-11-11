<template>
  <div id="app">
    <div class="content">
  <div class="box left"></div>
  <div class="box middle">
    <div class="input"><InputPage/></div>
    <div class="list">
      <ListPage/>
    </div>
  </div>
  <div class="box right"></div>
 </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import InputPage from './components/InputPage.vue'
import ListPage from './components/ListPage.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    InputPage, ListPage
  },
  data(){
    return{
      task:""
    }
  }
}
</script>

<style>



@font-face {
  font-family: Metropolis;
  src: url('./assets/fonts/Metropolis-Regular.otf');
}

body{
  background: rgb(78,77,154);
  background: linear-gradient(138deg, rgba(78,77,154,1) 14%, rgba(4,20,50,1) 62%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  height:100vh;
  color:white;
}

::-webkit-scrollbar{
 width:5px;
 height:5px;
}

::-webkit-scrollbar-thumb{
 background-color:rgb(255, 255, 255,0.5);
 border-radius:100px;
}

::-webkit-scrollbar-track-piece{
  background:transparent;
}

/* ::-webkit-scrollbar-track{
  background-color:rgba(185, 24, 24, 0);
}

::-webkit-scrollbar-button{
  color:blue;
} */

#app {
  font-family: Metropolis, Avenir, Helvetica, Arial, sans-serif;
}

.content{
  display:flex;
  justify-content: center;
  padding-top:5rem;
}
/* 
.middle{
 
} */

.input{
  margin-bottom:0.9rem;
}

.box{
  width:40%;
}

@media screen and (max-width:768px){
  .content{
    padding-top:1rem;
    margin-right:1.5rem;
  }

  .left, .right{
    display:none;
  }

  .middle{
   width:100%;
  }

::-webkit-scrollbar{
  display:none;
}
}

</style>
