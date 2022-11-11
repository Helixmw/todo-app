<template>
    <div class="input-field">
      <input placeholder="What To do?" type="text" class="inputs" v-model="task">
      <div v-if="add" class="inputs btn" @click="addItem()">
      <font-awesome-icon :icon="['far', 'square-plus']" />
    </div>
      <div class="inputs btn" @click="editItem()" v-else>
      <font-awesome-icon :icon="['far', 'pen-to-square']" />
    </div>
   </div>
  </template>
  
  <script>
  export default {
     data(){
        return{
           task:"",
           done:true,
           editid: 0,
           add:true

        }
     },
     mounted(){
      this.$root.$on('editSelectItem', (sel) => {
         
         this.editid = sel.id;
         this.task = sel.title;
         this.done = sel.done;
         this.add = false;
      });
      this.$root.$on('resetList', () => {
         this.blank = true;
      });
     },
     methods:{
        addItem(){
            if(this.task.trim()==""){
               return;
            }else{
               this.$root.$emit('addToList', this.task.trim());
               this.task = "";
            }
        },
        editItem(){ 
         this.$root.$emit('saveEditTitle', {id:this.editid, title:this.task, done:this.done});
         this.task = "";
         this.add = true;
        }
     }
  
  }
  </script>
  
  <style scoped>
   .input-field{
      width:98.5%;
      height:3rem;
      border-radius:100px;
      background:rgba(255, 255,255, 0.158);
      padding:0.7rem;
      display:flex;
      align-items: center;
      justify-content: center;
   }
  
   input, .btn{
      height:2.5rem;
      background:rgba(0,0,0, 0.5);
      border-radius:100px;
   }
  
   input{
      color:white;
      padding-left:0.6rem;
      font-size:1.6rem;
   }
  
   .btn{
      cursor:pointer;
      background:rgba(255,255,255,0.6);
      font-size:1.6rem;
      display: flex;
      justify-content: center;align-items: center;
      height:2.6rem;
      width:2.6rem;
   }
  
   input{
      width:70%;
      border:0px;
    
   }
  
   .inputs{
      margin:0.2rem;
   }
  
   @media screen and (max-width:768px){
      .input-field{
          height:2rem;
          padding:0.6rem;
          width:100%;
      }
  
      input{
  
          font-size:1.1rem;
          padding-left: 0.5rem;
          width:80%;
      }
   }
  </style>