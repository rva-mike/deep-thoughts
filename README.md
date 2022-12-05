

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# deep-thoughts


  ## Description
   This application combines all four technologies of the MERN stack (MongoDB, Express.js, React, and Node.js) to build a social media application called Deep Thoughts. Users will be able to sign up and create an account, post their thoughts, and interact with other users, just like you might find in the social media apps you use day in and day out in real life.
  
  #### Technologies Used
GraphQL (https://graphql.org/) is a query language for APIs and a runtime for fulfilling queries with your existing data, giving clients the power to ask for exactly what they need and nothing more. For this module’s application, I used the graphql https://www.npmjs.com/package/graphql package to parse GraphQL syntax in both my front-end and back-end codebase.

Apollo Server (https://www.apollographql.com/docs/apollo-server/
) is an open-source, spec-compliant GraphQL server that's compatible with any GraphQL client, including Apollo Client (https://www.apollographql.com/docs/react/), the client you’ll use in your MERN application. I used the apollo-server-express (https://www.npmjs.com/package/apollo-server-express) package to integrate GraphQL into my Express.js server, and the @apollo/client (https://github.com/apollographql/apollo-client) package to make requests from my React front end to the GraphQL API.

React Router (https://reactrouter.com/en/main
) is a collection of navigational components that compose declaratively with your application, allowing you to make your single-page React applications behave more like multi-page applications. I used the react-router-dom (https://www.npmjs.com/package/react-router-dom) npm package to work with React Router in my applications.

The concurrently (https://www.npmjs.com/package/concurrently
) npm package allows you to run multiple processes, or servers, from a single command-line interface. Rather than opening multiple terminals to start the multiple servers, you can run them both at the same time. It also allows you to keep track of different outputs in one place, and will stop all of your processes if even one of them fails.

JSON Web Tokens, or JWTs, are an alternative to using session cookies for authentication. I used the jsonwebtoken (https://www.npmjs.com/package/jsonwebtoken) package in my MERN application.

jwt-decode (https://www.npmjs.com/package/jwt-decode
) is an npm package that helps decode JWTs from their Base64Url encoding. I used it to extract non-sensitive data such as the token’s expiration date to see if it’s expired before making a request to the server.

The faker npm package (https://www.npmjs.com/package/faker
) allows you to generate massive amounts of fake data in the development environment of your Node.js applications.

The nodemon package (https://www.npmjs.com/package/nodemon
) simplifies your development environment by automatically restarting your Node.js applications when file changes in the directory are detected.

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Link](#link)
  * [Screenshot](#screenshot)
  * [License](#license)
  * [Questions](#questions)

  
  ## Link 
  
  Link to deployed application: https://deep-thoughts-xyz.herokuapp.com/

  
  ## Screenshot
  <img width="1347" alt="100-project-final" src="https://user-images.githubusercontent.com/105617274/205678986-90fefca5-05b3-4069-99fa-7a5ee365742c.png">



  ## License
  MIT

  https://opensource.org/licenses/MIT

  ## Questions
  Please send me an email if you need to reach me for additional questions.

  Email: mike.levy.rva@gmail.com

  GitHub Profile: https://github.com/rva-mike
