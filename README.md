# TableBookingAPI

This is a simple Node.js and Express-based REST API for managing a restaurant reservation system. 

- Create, retrieve, and delete client information.
- Create, view, and delete reservations for specific clients.
- Assign tables to reservations and manage table availability.

How to run
- open terminal in backend project
- npm init -y
- npm install express
- type command "nodemon ."
- the project will open



## Team Resources

- [![JIRA](https://upload.wikimedia.org/wikipedia/commons/8/8a/Jira_Logo.svg)](https://bookingtargv23.atlassian.net/jira/software/projects/TB/boards/1?atlOrigin=eyJpIjoiZmIxYjIwMGMwYmE0NDdhOGIwYzlmY2NjZTdjYTI5YzkiLCJwIjoiaiJ9)
- [![linkedin](https://www.apicur.io/images/subprojects/apicurio_studio_logo_default_h50px.png)](https://studio-ws.apicur.io/sharing/00d7d3a4-e248-43d2-b5b0-05ee50533857)



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

