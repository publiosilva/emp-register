<template>
  <div class="form">
    <v-form @submit="submit">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-h3">EMP. Register</div>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="employee.name" label="Full name" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="employee.position" label="Position" required></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="employee.id" label="Emp. code" disabled readonly></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="employee.mobile" label="Mobile" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn color="secondary" @click="clearFields">Clear</v-btn>
            <v-btn color="primary" class="ml-2" @click="submit">Submit</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'employees-form',

  computed: {
    ...mapState('employees', ['employee']),
  },

  methods: {
    ...mapActions('employees', ['createEmployee', 'updateEmployee']),
    ...mapMutations('employees', ['clearFields']),

    submit() {
      if (!this.employee.id) {
        this.createEmployee();
      } else {
        this.updateEmployee();
      }
    },
  },
};
</script>

<style></style>
