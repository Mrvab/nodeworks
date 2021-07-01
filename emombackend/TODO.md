# Structure

- helpers

  - db connection
    > connect to database
  - jwt
    > json web token
  - error handler
    > front end request handler

- Controller

  - get req feom front send to service mid-ware
    > appdata
    > notes
    > users

- services
  - database communications
    > appdata
    > notes
    > users

# TODO

- add sequlizer to the project
- structure
  - model
    > tables structure
  - connector
    > db connection
    > update db
  - services
    > communication setup with db
    > update services.js

# MISC Sequelizer

- sync

  > User.sync()
  > User.sync({ force: true })
  > User.sync({ alter: true })

- Pool
  - > max : Maximum number of connection in pool
  - > min : minimum number of connection in pool
  - > idle : The maximum time, in milliseconds, that a connection can be idle before being released.
  - > acquire : The maximum time, in milliseconds, that pool will try to get connection before throwing error
  - > evict : The time interval, in milliseconds, after which sequelize-pool will remove idle connections.
  - > validate : A function that validates a connection. Called with client. The default function checks that client is an object, and that its state is not disconnected
  - > maxUses : The number of times a connection can be used before discarding it for a replacement, used for eventual cluster rebalancing.
