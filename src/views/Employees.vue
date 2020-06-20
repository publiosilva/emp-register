<template>
  <div class="employees">
    <v-container>
      <v-row>
        <v-col cols="4">
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
                  <v-text-field
                    v-model="employee.position"
                    label="Position"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="employee.id"
                    label="Emp. code"
                    disabled
                    readonly
                  ></v-text-field>
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
        </v-col>
        <v-col cols="8">
          <v-simple-table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Mobile</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in employees" :key="item.id">
                <td @click="getEmployee(item.id)" style="cursor: pointer;">{{ item.name }}</td>
                <td>{{ item.position }}</td>
                <td>{{ item.mobile }}</td>
                <td>
                  <v-btn icon color="red" @click="removeEmployee(item.id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'employees',

  computed: {
    ...mapState('employees', ['employees', 'employee']),
  },

  methods: {
    ...mapActions('employees', [
      'getAllEmployees',
      'getEmployee',
      'createEmployee',
      'updateEmployee',
      'removeEmployee',
    ]),
    ...mapMutations('employees', ['clearFields']),

    submit() {
      if (!this.employee.id) {
        this.createEmployee();
      } else {
        this.updateEmployee();
      }
    },
  },

  created() {
    this.getAllEmployees();
  },
};
</script>

<style></style>
