<template>
  <div class="employees">
    <v-container>
      <v-row>
        <v-col cols="4">
          <EmployeesForm />
        </v-col>
        <v-col cols="8">
          <EmployeesList />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import EmployeesForm from './components/Form.vue';
import EmployeesList from './components/List.vue';

export default {
  name: 'employees',

  components: {
    EmployeesForm,
    EmployeesList,
  },
};
</script>

<style></style>
