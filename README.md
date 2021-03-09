# graphql-express-sample
 
## Development
#### Technology stack: NodeJs + Express, GraphQL, TypeORM, MySQL
Make sure all the dependencies installed including nodejs in your local setup. Run **npm i** in command line interface.

You need to have mysql server running in your machine at the moment. create a database **'otrium_db'**. Change the mysql server username & password in ormconfig file accordingly to manage connection options and run the initial migration.

Run following command to execute pending migrations. This action will create sample tables and metadata. **npm run typeorm:cli -- migration:run**

## Build and Run
Run **npm run start** in command line to build and run the application. This action will start running the server on port 4000.