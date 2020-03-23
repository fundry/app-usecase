//static mock data here would later be supplied from graphql api

const state: any = {
  case: [
    {
      id: 1,
      title: "Migrating From Contentful CMS to Netlify CMS",
      author: "Facebook Engineering",
      created: "23 days",
      content:
        "We migrated from Contentful  to netlify and it was awesome migrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesomemigrated from Contentful  to netlify and it was awesome",
      tags: ""
    },
    {
      id: 2,
      title: "Migrating From Rest to Graphql",
      author: "Facebook Engineering",
      created: "23 days",
      content:
        "We migrated from Rest to Graphql and it was awesome migrated from Rest to Graphql and it was awesome migrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesome",
      tags: ""
    },
    {
      id: 3,
      title: "Migrating From Azure to Google Cloud Paltform",
      author: "Facebook Engineering",
      created: "23 days",
      content:
        "We migrated migrated from Rest to Graphql and it was awesome migrated from Rest to Graphql and it was awesome migrated from Rest to Graphql and it was awesome migrated from Rest to Graphql and it was awesome migrated from Rest to Graphql and it was awesome migrated from Rest to Graphql and it was awesome migrated from Rest to Graphql and it was awesome migrated from Rest to Graphql and it was awesome migrated from Rest to Graphql and it was awesome migrated from Rest to Graphql and it was awesomemigratedmigrated from Rest to Graphql and it was awesome migrated from Rest to Graphql and it was awesome migrated from Rest to Graphql and it was awesome migrated from Rest to Graphql and it was awesomemigrated from Rest to Graphql and it was awesome",
      tags: ""
    }
  ]
};

const getters = {
  get_case: (state: any) => state.case
};

const actions: any = {
  editCase() {
    this.case = {};
  },
  deleteCase() {
    this.case = {};
  }
};

const mutations: any = {};

export default {
  state,
  getters,
  actions,
  mutations
};
