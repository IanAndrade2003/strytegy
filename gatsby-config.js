module.exports = {
  plugins: ["gatsby-plugin-styled-components",
  {
        resolve: "gatsby-source-graphql",
        options:{
          typeName: "alldata",
          fieldName: "alldata",
          url: "https://api-us-east-1.graphcms.com/v2/cku8v9eud461601xh69i0h9n3/master",
        }
      }
      ]
    }
