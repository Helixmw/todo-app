<template>
    <div>
    <div class="scroll">
      <div class="option"  v-for="itm in tasks" :key="itm.id">
        <div class="opt">

          <div class="opt-name">
            <div class="mini">
              {{itm.title}}
            </div>
          </div>
          <div class="del" @click="del(itm.id)">
            <font-awesome-icon :icon="['far', 'circle-xmark']"/>
          </div>
        </div>
      </div>
      
    </div>
    <BlankPage v-if="blank"/>
    <div class="main-list" v-else>
      <div class="item" v-for="itm in tasks" :key="itm.title">
       
          <div class="title">
            <div class="texts">

              {{itm.title}}
            </div>
          </div>
          <div class="ops">
  
            <div class="edit btn" :id="itm.id" @click="check(itm.id)">
                <font-awesome-icon :icon="['far', 'circle-check']"/>
            </div>
            <!-- <div class="edit btn" @click="toEdit(itm.id,itm.title,itm.done);">
                <font-awesome-icon :icon="['far', 'pen-to-square']"/>
            </div> -->
            <div class="delete btn" @click="del(itm.id)">
                <font-awesome-icon :icon="['far', 'trash-can']"/>
              
            </div>
          </div>
      
      </div>
    </div>
</div>
  </template>
  
  <script>
  import BlankPage from './BlankPage.vue'
  export default {
    components: {
      BlankPage
    },
    data(){
      return{
        tasks:[],
        id:0,
        editid:0,
        editTitle:"",
        blank:true
      }
    },
    methods:{
      monitor(){
       
      },
      check(id){
        var obj = this.tasks.findIndex((ob) => ob.id === id);
        let mark = document.getElementById(id);

        if( this.tasks[obj].done == false){
          this.tasks[obj].done = true;
          mark.classList.add("check");
          mark.classList.remove("edit");
        }else{
          this.tasks[obj].done = false;
          mark.classList.remove("check");
          mark.classList.add("edit");
        }
        console.log(mark)
      },
      del(id){
       let obj = this.tasks.findIndex((obj) =>obj.id === id);
       this.tasks.splice(obj, 1);
       if(this.tasks.length == 0){
          this.blank = true;
        }
      },
      toEdit(_id,_title,_done){
        let sel = {
          id: _id,
          title: _title,
          done: _done
        }
        this.$root.$emit('editSelectItem', sel);
      }
    },
    mounted(){
      this.$root.$on('addToList', (item) => {
        this.blank = false;
        this.id += 1;
        var data = {
          id: this.id,
          title: item,
          done: false
        };
        this.tasks.push(data);
      });
      this.$root.$on('saveEditId', (id) => {   
       this.editid = id;
      });
      this.$root.$on('saveEditTitle', (title,id,done) => {
         console.log(
          {
          id: id,
          title: title,
          done: done
         }
         );
      });
      this.monitor();
     
    },

    }
  </script>
  
  <style scoped>
  
  .btn{
    cursor:pointer;
    padding:0.4rem;
    margin:0.2rem;
    border-radius:100px;
  }

 
  
  .check{
    background: rgba(255, 239, 8, 0.295);
  }
  .edit{
    background: rgba(123, 192, 238, 0.644);
  }
  .delete{
    background: rgba(255, 46, 9, 0.445);
  }
  
  .title{
    width:80%;
  }
  
  .ops{
    display: flex;
    
  }
  .opt{
    display: flex;
    
  }

  .opt-name{
    margin-right:0.5rem;
  }

  .mini{
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .texts{
    width:10rem;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .item{
   
    justify-content: center;
    align-items: center;
    display: flex;
    height:1.6rem;
    padding:0.6rem;
    background: rgba(225,255,255,0.5);
    border-radius:100px;
    margin:0.8rem;
  }
  
  .main-list{
    background: rgba(225, 255, 255, 0.158);
    margin-top:0.5rem;
    margin-left:0.68rem;
    padding-top:1rem;
    padding-bottom:1rem;
    border-radius:15px;
    width: 100%;
    
  }
  
  .scroll{
    margin:0.5rem;
      overflow-x: scroll;
      overflow-y:hidden;
      white-space:nowrap;
      height:3rem;
      width:100%;
      
  }
  
  .option{
      display: inline-block;
      background:rgba(225,255,255,0.5);
      padding-top:0.5rem;
      padding-bottom:0.5rem;
      padding-left:1rem;
      padding-right:1rem;
      margin:0.2rem;
      border-radius:100px;
  }
  
  @media  screen and (max-width:768px){
  
    .main-list{
  
      width:100%;
    }
    .scroll{
      width:100%;
    }
  }
  </style>