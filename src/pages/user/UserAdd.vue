<template>
  <div class="main-section">
    <div class="header-section">
      <PageHeader :breadcrumbs="userCreateBreadcrumb" title="User Add" />
    </div>
    <div class="grid grid-cols-3 gap-x-4 mt-6">
      <div class="user-info col-span-2">
        <div class="user-info-title pb-4">
          <span>User Information</span>
        </div>
        <el-form :model="form" label-width="auto" label-position="top">
          <div class="grid grid-cols-2 gap-x-5">
            <el-form-item label="First Name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Last Name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Email">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Phone">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Education">
              <el-select
                v-model="form.region"
                placeholder="please select user's education"
              >
                <el-option label="Master Degree" value="master" />
                <el-option label="Bachalor's Degree" value="bachalor" />
                <el-option
                  label="Under Graduate"
                  value="undergraduate"
                ></el-option>
                <el-option label="High School" value="highschool"></el-option>
                <el-option
                  label="Middle School"
                  value="middleschool"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Date Of Birth">
              <el-date-picker
                v-model="form.date1"
                type="date"
                placeholder="Pick user's date of birth"
                style="width: 100%"
              />
            </el-form-item>
          </div>
          <el-form-item label="Activity zone">
            <el-select
              v-model="form.region"
              placeholder="please select your zone"
            >
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="user-address">
        <el-form :model="form" label-width="auto" label-position="top">
          <el-form-item label="Activity name">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="Activity zone">
            <el-select
              v-model="form.region"
              placeholder="please select your zone"
            >
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="Activity time">
            <el-col :span="11">
              <el-date-picker
                v-model="form.date1"
                type="date"
                placeholder="Pick a date"
                style="width: 100%"
              />
            </el-col>
            <el-col :span="2" class="text-center">
              <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
              <el-time-picker
                v-model="form.date2"
                placeholder="Pick a time"
                style="width: 100%"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="Instant delivery">
            <el-switch v-model="form.delivery" />
          </el-form-item>
          <el-form-item label="Activity type">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="Online activities" name="type" />
              <el-checkbox label="Promotion activities" name="type" />
              <el-checkbox label="Offline activities" name="type" />
              <el-checkbox label="Simple brand exposure" name="type" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="Resources">
            <el-radio-group v-model="form.resource">
              <el-radio label="Sponsor" />
              <el-radio label="Venue" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Activity form">
            <el-input v-model="form.desc" type="textarea" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "../../components/PageHeader.vue";
import { reactive } from "vue";

const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const onSubmit = () => {
  console.log("submit!");
};
const userCreateBreadcrumb = [
  {
    name: "Home",
    routeName: "Dashboard",
  },
  {
    name: "User-List",
    routeName: "UserList",
  },
  {
    name: "User-Create",
    routeName: "",
  },
];
</script>
