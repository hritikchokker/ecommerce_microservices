# Ecommerce Microservices App

This is an ecommerce microservices app consisting of several microservices as listed below:

- Orders App
- Products App
- Payments App
- Users App
- Database (Postgres)
- API Gateway App

## Instructions for Building and Running the App

1. Clone the repository to your local machine.

2. Install Docker and Docker Compose on your machine if not already installed.

3. Navigate to the root directory of the repository in your terminal.

4. Create a .env file in the root directory of the repository with the following environment variables:

POSTGRES_HOST=<database_host>
POSTGRES_DATABASE_PORT=<database_port>
POSTGRES_DATABASE_USER=<database_user>
POSTGRES_DATABASE_PASSWORD=<database_password>
POSTGRES_DATABASE_NAME=<database_name>

Replace the placeholders with your own values for the Postgres database. This file will be used by the Docker Compose configuration to set environment variables in the containers.

5. Run the following command to build and start the app:

```
docker-compose up -d
```

6. Once the containers are up and running, you can access the various services using the following URLs:

- Orders App: http://localhost:3000
- Products App: http://localhost:3002
- Payments App: http://localhost:3001
- Users App: http://localhost:3003

Note: The API Gateway App is not accessible directly, as it is only meant to be accessed by the other microservices.

7. When you are done using the app, you can stop and remove the containers using the following command:

```
docker-compose down
```

## Services

### Orders App

The Orders App is responsible for managing orders for the ecommerce site. It communicates with the Products App and Payments App to fulfill orders.

### Products App

The Products App is responsible for managing the products available for purchase on the ecommerce site. It communicates with the Orders App to fulfill orders.

### Payments App

The Payments App is responsible for handling payments for orders on the ecommerce site. It communicates with the Orders App to fulfill orders.

### Users App

The Users App is responsible for managing user accounts and authentication for the ecommerce site. It communicates with the Orders App and Products App to fulfill orders.

### Database

The database used by the microservices app is Postgres.

### API Gateway App

The API Gateway App is responsible for routing requests between the various microservices in the app. It provides a unified API for the ecommerce site.
