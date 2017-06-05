# billboard-server
Server service for *Billboard* project.

```
knex migrate:latest --env [productuion|development]
# or
NODE_ENV=[productuion|development] knex migrate:latest

#####
knex seed:make seed_name
knex seed:run
```