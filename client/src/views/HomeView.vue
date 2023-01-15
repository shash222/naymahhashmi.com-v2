<script setup lang="ts">
import { ProjectCategoryModel } from "@/models/ProjectCategoryModel"
import { ProjectCategoryProvider } from "@/providers/ProjectCategoryProvider"
const categories = ProjectCategoryProvider.PROJECT_CATEGORIES;

</script>

<template>
  <div id="categoriescontainer">
    <div v-for="items in categories" v-bind:style="{color: items.color}" id="categories"> 
      <div class="circle" v-bind:style="{background: items.color}" >
        <img class="pictures" src="https://cdn-icons-png.flaticon.com/512/4635/4635381.png">
      </div>
      <p style="margin-top:0px"> {{ items.name }} </p>
    </div>
  </div>
</template>

<style>
#categoriescontainer{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  margin-right: 25%;
  margin-left: 25%;
  gap: 50px;
;}

#categories{
  width: 120px;
  text-align: center;
  cursor: pointer;
}
.circle{
  border-radius: 50%;
  height: 75px;
  width: 75px;
  display: inline-block;
  margin-bottom: 30px;
  transition: height 0.5s, width 0.5s, margin-bottom 0.5s;
}
.circle:hover{
  height: 90px;
  width: 90px;
  margin-bottom: 15px;
}
.pictures{
  width: 45px;
  height: 45px;
  object-fit: contain;
  margin-top: 15%;
  transition: margin-top 0.5s;
  }
.pictures:hover{
  margin-top: 22%;
}
</style>
