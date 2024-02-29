

# ScholarSync API Documentation

Welcome to the ScholarSync API documentation! This API allows you to interact with user and course information in the ScholarSync system.

## Base URL
[https://scholarsync.e3lanotopia.software/](https://scholarsync.e3lanotopia.software/)

## Endpoints

### 1. Get All Users
- **Endpoint:** `/api/th/get_all_users`
- **Method:** `GET`
- **Description:** Retrieve information for all users.
- **Response:**
  ```json
  {
    "users": [
      {
        "user_id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone_number": "123-456-7890",
        "academic_year": 2023,
        "academic_section": "A",
        "city": "Example City"
      },

    ]
  }
  ```

### 2. Get Users by Year, Section, and Location
- **Endpoint:** `/api/th/get_users/<int:year>/<section>/<location>`
- **Method:** `GET`
- **Description:** Retrieve users based on academic year, section, and location.
- **Parameters:**
  - `year` (int): Academic year
  - `section` (str): Academic section
  - `location` (str): City location
- **Response:**
  ```json
  {
    "users": [
      {
        "user_id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone_number": "123-456-7890",
        "academic_year": 2023,
        "academic_section": "A",
        "city": "Example City"
      },

    ]
  }
  ```

### 3. Get All Courses
- **Endpoint:** `/api/th/get_all_courses`
- **Method:** `GET`
- **Description:** Retrieve information for all courses.
- **Response:**
  ```json
  {
    "courses": [
      {
        "course_id": 1,
        "course_name": "Computer Science",
        "course_code": "CS101",

      },

    ]
  }
  ```

### 4. Search Users
- **Endpoint:** `/api/th/search/<search>`
- **Method:** `GET`
- **Description:** Search for users based on various criteria (name, email, phone number, etc.).
- **Parameters:**
  - `search` (str): Search query
- **Response:**
  ```json
  {
    "users": [
      {
        "user_id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone_number": "123-456-7890",
        "academic_year": 2023,
        "academic_section": "A",
        "city": "Example City"
      },
 
    ]
  }
  ```


# API Documentation for Course Management

## Add Course

### Endpoint
```
POST /api/th/add_course
```

### Request

- **Content-Type**: application/json

#### Parameters

| Name               | Type    | Description                             |
|--------------------|---------|-----------------------------------------|
| name               | string  | Name of the course                       |
| academicYear       | string  | Academic year of the course             |
| academicSection    | string  | Academic section of the course          |
| price              | float   | Price of the course                     |
| isFree (optional)  | boolean | Indicates if the course is free (default: false) |
| bannerUrl          | string  | URL of the banner for the course        |
| category           | string  | Category of the course                  |

### Response

- **Content-Type**: application/json

#### Success

```json
{
  "success": true
}
```

## Add Lesson

### Endpoint
```
POST /api/th/add_lesson
```

### Request

- **Content-Type**: application/json

#### Parameters

| Name               | Type    | Description                             |
|--------------------|---------|-----------------------------------------|
| name               | string  | Name of the lesson                       |
| courseId           | integer | ID of the course to which the lesson belongs |
| iframeCode         | string  | Embed code or URL for the lesson        |
| Ltype              | string  | Type of the lesson                      |

### Response

- **Content-Type**: application/json

#### Success

```json
{
  "success": true
}
```

---


