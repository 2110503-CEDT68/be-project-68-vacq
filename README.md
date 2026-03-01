# Online Job Fair Registration API

Simple Express + MongoDB backend adapted from the original template.

## Main Features
- Register user with `name`, `tel`, `email`, `password`
- Login / logout
- Company list for job fair
- Book up to 3 interview sessions per user
- Interview date must be during **May 10-13, 2022**
- User can view / edit / delete own interview bookings
- Admin can view / edit / delete any interview booking

## API Routes

### Auth
- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `GET /api/v1/auth/logout`
- `GET /api/v1/auth/me`

### Companies
- `GET /api/v1/companies`
- `GET /api/v1/companies/:id`
- `POST /api/v1/companies` (admin)
- `PUT /api/v1/companies/:id` (admin)
- `DELETE /api/v1/companies/:id` (admin)

### Interviews
- `GET /api/v1/interviews`
- `GET /api/v1/interviews/:id`
- `POST /api/v1/companies/:companyId/interviews`
- `PUT /api/v1/interviews/:id`
- `DELETE /api/v1/interviews/:id`
