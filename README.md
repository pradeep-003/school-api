# School API Documentation

This document provides an overview of the endpoints available in the School API, including descriptions, expected request data, status codes, and the project folder structure.

---

## Base URL

All endpoints are prefixed with `/api`. For example, if you're running the server locally, the base URL might be:  
`http://localhost:3006/api`

---

## Endpoints

### 1. Add a School

**Endpoint:**  
`POST /api/addSchool`

**Description:**  
Adds a new school to the database.

**Request Body:**  
The request body must be in JSON format with the following properties:

- **name** (string): The name of the school.
- **address** (string): The address of the school.
- **latitude** (number): The latitude coordinate of the school.
- **longitude** (number): The longitude coordinate of the school.

**Example Request Body:**

```json
{
  "name": "Example School",
  "address": "123 Main St",
  "latitude": 40.7128,
  "longitude": -74.006
}
```

**Success Response:**

- **Status Code:** 201 Created
- **Response Body:**

```json
{
  "message": "School added successfully",
  "id": 1 // The inserted record id
}
```

**Error Response:**

- **Status Code:** 500 Internal Server Error
- **Response Body:**

```json
{
  "error": "Database error"
}
```

---

### 2. List Schools

**Endpoint:**  
`GET /api/listSchools`

**Description:**  
Retrieves a list of schools sorted based on proximity to the provided location.

**Query Parameters:**

- **latitude** (required, number): The latitude of the user's location.
- **longitude** (required, number): The longitude of the user's location.

**Example Request URL:**

```
http://localhost:3006/api/listSchools?latitude=40.7128&longitude=-74.006
```

**Success Response:**

- **Status Code:** 200 OK
- **Response Body:**  
  An array of school objects. Each object contains the school details along with a computed `distance` value showing how far the school is from the user's provided coordinates.

**Example Response:**

```json
[
  {
    "id": 1,
    "name": "Example School",
    "address": "123 Main St",
    "latitude": 40.7128,
    "longitude": -74.006,
    "distance": 0
  },
  {
    "id": 2,
    "name": "Another School",
    "address": "456 Another St",
    "latitude": 40.7138,
    "longitude": -74.007,
    "distance": 0.15
  }
]
```

**Error Responses:**

- **Status Code:** 400 Bad Request  
  **Response Body:**

  ```json
  {
    "error": "Invalid latitude or longitude"
  }
  ```

  _Description:_ Returned if the `latitude` or `longitude` query parameters are missing or invalid.

- **Status Code:** 500 Internal Server Error  
  **Response Body:**

  ```json
  {
    "error": "Database error"
  }
  ```

  _Description:_ Returned if there's an issue retrieving the data from the database.

---

## Folder Structure

Below is the project folder structure for the School API:

```
school-api/
├── config/
│   └── db.js
├── controllers/
│   └── schoolController.js
├── docs/
│   └── swagger.json
├── routes/
│   └── schoolRoutes.js
├── utils/
│   └── haversine.js
├── .env
├── app.js
├── package.json
└── README.md
```

**Description of Key Folders/Files:**

- **config/db.js:** Handles the MySQL database connection.
- **controllers/schoolController.js:** Contains the logic for handling school-related operations (adding and listing schools).
- **docs/swagger.json:** Contains the Swagger documentation for the API.
- **routes/schoolRoutes.js:** Defines the API routes.
- **utils/haversine.js:** Utility function for calculating the distance between two geographical coordinates.
- **.env:** Environment variables (e.g., database credentials, port number).
- **app.js:** Main application file that sets up middleware and starts the server.
- **package.json:** Project metadata and dependencies.

---

## Notes

- Ensure that the MySQL database is properly configured and running.
- The `schools` table must exist in the `schooldb` database with the columns: `name`, `address`, `latitude`, and `longitude`.
- Use tools like Postman or curl to test these endpoints during development.

---

Happy coding!
