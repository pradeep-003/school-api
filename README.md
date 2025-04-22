# School API Documentation

This document provides an overview of the endpoints available in the School API, including descriptions, expected request data, and possible status codes.

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

## 2. List Schools Endpoint

### **Endpoint**

### **Description**

Retrieves a list of schools sorted based on proximity to the user's current geographical location.

---

### **Query Parameters**

| Parameter   | Type   | Required | Description                           |
| ----------- | ------ | -------- | ------------------------------------- |
| `latitude`  | number | Yes      | The latitude of the user's location.  |
| `longitude` | number | Yes      | The longitude of the user's location. |

---

### **Example Request**

---

### **Response**

Returns a JSON array of school objects sorted by distance from the provided coordinates.

#### ✅ Example Response

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
