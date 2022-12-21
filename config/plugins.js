module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        blog: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },
});