<template lang="">
  <div>
    <div class="card" v-if="Transaction">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ Transaction.account }}'s
                Transaction with id {{ Transaction.id }}</p>
          </div>
        </div>

        <div class="content">
          <strong> Description : </strong> {{ Transaction.description }}
          <br />
          <strong> Transaction Date : </strong>
          <time datetime="2016-1-1"> {{ new Date(Transaction.transactionDate) }} </time>
          <br />
          <strong> Amount : </strong>
          {{ Transaction.amount }}
          <br />
          <strong> Currency : </strong>
          {{ Transaction.currency }}
          <br />
          <strong> Category : </strong>
          {{ Transaction.category }}
          <br />
          <strong> Status : </strong>
          {{ Transaction.status }}
          <br />
          <strong> Reference : </strong>
          {{ Transaction.reference }}
          <br />
          <strong> Created At : </strong>
          {{ Transaction.createdAt }}
          <br />
          <strong> Updated At : </strong>
          {{ Transaction.updatedAt }}
        </div>
      </div>
    </div>
    <div v-else>
        <H1>No Transaction Found</H1>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'Single-Transaction',
  data() {
    return {
      transactionId: this.$route.params.id,
      Transaction: {},
    };
  },
  apollo: {
    Transaction: {
      query: gql`
        query GetSingleTransaction($transactionId: ID!) {
          Transaction(id: $transactionId) {
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
          transactionId: this.transactionId,
        };
      },
      fetchPolicy: 'cache-and-network',
    },
  },
};
</script>
