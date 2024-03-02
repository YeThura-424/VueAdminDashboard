<template>
  <div>
    <div class="grid grid-cols-3 gap-x-5">
      <div class="col-span-2">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{ "List item " + o }}
          </div>
        </el-card>
      </div>
      <div class="col-span-1">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{ "List item " + o }}
          </div>
        </el-card>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-x-5 mt-6">
      <div class="col-span-1">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{ "List item " + o }}
          </div>
        </el-card>
      </div>
      <div class="col-span-2">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{ "List item " + o }}
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
