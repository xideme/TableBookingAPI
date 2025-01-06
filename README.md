# TableBookingAPI

This is a simple Node.js and Express-based REST API for managing a restaurant reservation system. 

**[API Documentation on Github Pages](https://xideme.github.io/TableBookingAPI/swagger.html)**

- Create, retrieve, and delete client information.
- Create, view, and delete reservations for specific clients.
- Assign tables to reservations and manage table availability.

To run backend/frontend, we need to install some packages to the project.
Here is some steps, if you want to launch the project.

How to run backend
- open terminal in 'backend' folder
- type 'npm install express'
- type 'node .'
- backend should be launched

How to run frontend
- open terminal in 'tablebookingFrontend' folder
- type 'npm install express'
- type 'npm run dev'
- frontend should be launched

How to start backend & frontend with one script(IF YOU MANAGED TO INSTALL PACKAGES TO backend & frontend)
- open terminal in project itself
- try to type 'npm start'
- both parts of ends shoulb be launched 😊

## Team Resources

- **[JIRA](https://bookingtargv23.atlassian.net/jira/software/projects/TB/boards/1?atlOrigin=eyJpIjoiZmIxYjIwMGMwYmE0NDdhOGIwYzlmY2NjZTdjYTI5YzkiLCJwIjoiaiJ9)**

- **[Apicurio Studio](https://studio-ws.apicur.io/sharing/00d7d3a4-e248-43d2-b5b0-05ee50533857)**



## Authors

- Martin Rosman [@xideme](https://www.github.com/xideme)

- Jegor Skljar [@jegor21](https://github.com/jegor21)


## API Reference

#### Get all items

```http
  GET /clients
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `clients` | `string` | Get a list of all clients |

#### Get item

```http
  GET /clients/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




## Database

![Database](https://raw.githubusercontent.com/xideme/TableBookingAPI/refs/heads/main/erm.png)

