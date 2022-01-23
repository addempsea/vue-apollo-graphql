<template>
  <div table-container>
    <div center>
      <label for="">From: </label>
      <input type="date" name="date" id="from" v-model="filter.from" />

      <label for="">To: </label>
      <input type="date" name="date" id="to" v-model="filter.to" />

      <button class="button is-primary" @click="filterTransaction()">Filter</button>
    </div>
    <table class="table is-hoverable is-narrow is-bordered">
      <caption>
        AirBank dummy transaction data
      </caption>
      <thead>
        <tr>
          <th id="1">Id</th>
          <th id="2">Account</th>
          <th id="3">Amount</th>
          <th id="4">Category</th>
          <th id="5">Description</th>
          <th id="6">Currency</th>
          <th id="7">Status</th>
          <th id="8">Reference</th>
          <th id="9">Transaction Date</th>
          <th id="10">Created At</th>
          <th id="11">Updated At</th>
          <th id="12">View</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in Transactions" :key="index">
        <tr>
          <td>{{ item.id }}</td>
          <td>{{ item.account }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.currency }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.reference }}</td>
          <td>{{ item.transactionDate }}</td>
          <td>{{ item.createdAt }}</td>
          <td>{{ item.updatedAt }}</td>
          <td>
            <a :href="'/transaction/' + item.id">view</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'Home',
  data() {
    return {
      filter: {
        from: '',
        to: '',
      },
      Transactions: [],
    };
  },
  apollo: {
    Transactions: {
      query: gql`
        query GetAllTransactions($filter: TransactionFilter) {
          Transactions(filter: $filter) {
            id
            account
            category
            currency
            createdAt
            transactionDate
            updatedAt
            amount
            description
            status
            reference
          }
        }
      `,
      variables() {
        return {
          filter: this.filter,
        };
      },
      fetchPolicy: 'cache-and-network',
    },
  },
  methods: {
    filterTransaction() {
      this.$apollo.queries.Transactions.refetch({
        variables: {
          filter: this.filter,
        },
      });
    },
  },
};
</script>
<style scoped></style>
