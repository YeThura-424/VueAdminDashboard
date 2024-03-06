<template>
  <div class="main-section">
    <div class="header-section">
      <PageHeader :breadcrumbs="productCreateBreadcrumb" title="Product Add" />
    </div>
    <div class="grid grid-cols-3 gap-4 mt-6">
      <div class="user-info col-span-2">
        <div class="user-info-title pb-4">
          <span>User Information</span>
        </div>
        <el-form :model="userForm" label-width="auto" label-position="top">
          <div class="grid grid-cols-2 gap-x-5">
            <el-form-item label="First Name">
              <el-input v-model="userForm.firstname" />
            </el-form-item>
            <el-form-item label="Last Name">
              <el-input v-model="userForm.lastname" />
            </el-form-item>
            <el-form-item label="Email">
              <el-input v-model="userForm.email" />
            </el-form-item>
            <el-form-item label="Phone">
              <el-input v-model="userForm.phone" />
            </el-form-item>
            <el-form-item label="Education">
              <el-select
                v-model="userForm.education"
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
                v-model="userForm.dob"
                type="date"
                placeholder="Pick user's date of birth"
                style="width: 100%"
              />
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="user-login">
        <div class="user-login-info-title pb-4">
          <span>User Login Info</span>
        </div>
        <el-form :model="userForm" label-width="auto" label-position="top">
          <el-form-item label="UserName">
            <el-input v-model="userForm.username" />
          </el-form-item>
          <el-form-item label="Password">
            <el-input
              v-model="userForm.password"
              type="password"
              show-password
            />
          </el-form-item>
          <el-form-item label="Confirm Password">
            <el-input
              v-model="userForm.confirmPassowrd"
              type="password"
              show-password
            />
          </el-form-item>
          <el-form-item label="Is Active">
            <el-switch v-model="userForm.isActive" />
          </el-form-item>
        </el-form>
      </div>
      <div class="user-address col-span-3">
        <div class="user-address-title pb-4">
          <span>User Address</span>
        </div>
        <el-form :model="userForm" label-width="auto" label-position="top">
          <div class="grid grid-cols-2 gap-x-5">
            <el-form-item label="House No.">
              <el-input v-model="userForm.houseno" />
            </el-form-item>
            <el-form-item label="Ward">
              <el-input v-model="userForm.ward" />
            </el-form-item>
            <el-form-item label="Street">
              <el-input v-model="userForm.street" />
            </el-form-item>
            <el-form-item label="Township">
              <el-input v-model="userForm.township" />
            </el-form-item>
            <el-form-item label="Town" class="col-span-2">
              <el-select
                v-model="userForm.town"
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
          </div>
        </el-form>
      </div>
      <div class="form-acion col-span-3 place-self-end">
        <el-button type="info" :icon="Close">Cancel</el-button>
        <el-button type="primary" :icon="FolderAdd" @click="createUser"
          >Save</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "../../components/PageHeader.vue";
import { reactive } from "vue";
import { FolderAdd, Close } from "@element-plus/icons-vue";

const userForm = reactive({
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  education: "",
  dob: [],
  username: "",
  password: "",
  confirmPassowrd: "",
  isActive: false,
  houseno: "",
  street: "",
  ward: "",
  township: "",
  town: "",
});

const createUser = () => {
  console.log(userForm);
};
const productCreateBreadcrumb = [
  {
    name: "Home",
    routeName: "Dashboard",
  },
  {
    name: "Product-List",
    routeName: "ProductList",
  },
  {
    name: "Product-Create",
    routeName: "",
  },
];
</script>
