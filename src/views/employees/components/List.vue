<template>
  <div class="form">
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
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'employees-list',

  computed: {
    ...mapState('employees', ['employees']),
  },

  methods: {
    ...mapActions('employees', ['getAllEmployees', 'getEmployee', 'removeEmployee']),
  },

  created() {
    this.getAllEmployees();
  },
};
</script>

<style></style>
