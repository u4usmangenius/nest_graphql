# run nestjs using command npm run start:dev

using above approach will cause to automatically load updation and
changes you made, note in videos this command is used npm start:dev
instead of npm run start:dev, so use npm run start:dev if you want to
enable --watch mode to view changes made automatically updated

# if you use npm start

then it will run application in production mode and changes will
not be visibale and --watch mode will not be enabled

# Q2 what is actually graphql, is it database as there are others mysql for storing data permanently like for mysql in db files?

GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. It is not a database itself but rather a technology that allows you to interact with your data in a more flexible and efficient way.

Here are some key concepts related to GraphQL:

# Query Language:

GraphQL provides a syntax that allows clients to request only the data they need.
Clients can specify the shape and structure of the response, which can include nested and related data.

# API Execution:

GraphQL is often used as a layer between clients and existing data sources (like databases or APIs).
When a client sends a GraphQL query, the server resolves the query and fetches the necessary data from the underlying data sources.

# Schema:

A GraphQL schema defines the types of data that can be queried and the relationships between them.
It serves as a contract between clients and servers, specifying what data is available and how it can be accessed.

# Resolvers:

Resolvers are functions responsible for fetching the data for a particular field in the schema.
They define the behavior of the API and how to retrieve data from the underlying data sources.

# Not a Database:

GraphQL itself is not a database; it works with existing data sources.
It can be used with various types of databases (SQL, NoSQL, etc.) or APIs.
For example, you might have a GraphQL API that interacts with a MySQL database. Clients can send queries to the GraphQL API to request specific data, and the GraphQL server, along with its resolvers, will retrieve the data from the MySQL database and return it to the client.

So, while GraphQL is not a database, it provides a powerful and flexible way to interact with and query data from different sources, making it an excellent choice for modern web and mobile applications.

# why we need to intearact with graphql that client will send/request/call api to graphql then this graphql will use resolver and execture required query using server from databas(mysql,sql), instead of doing this struggle, can we not directly call apis like we do in express or not , clear me these concepts <!-- research this question again if you are not satisfied with below as it is summary of answer you need -->

# In summary

GraphQL provides a more flexible and efficient way for clients to interact with data by allowing them to request precisely what they need. While traditional RESTful APIs are still widely used and suitable for many scenarios, GraphQL is an alternative that shines in situations where clients have specific requirements or when dealing with complex data relationships. The choice between them depends on the specific needs and constraints of your project.

# is graphql a database?

GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. It is not a database itself but rather a technology that allows you to interact with your data in a more flexible and efficient way.


# dto
stands for data transfer object , the folder i created
this is another way to separate our interfaces for requests coming in and out our server.   
