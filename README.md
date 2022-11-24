## Location Data Base
https://cloud.mongodb.com/

## Page Heroku to deploy API 
https://dashboard.heroku.com

## User Mailer Provider
* report.now.mailer@gmail.com

## API Reference

### Endpoint
* https://report-now.herokuapp.com

### USER

#### List all users

```http
  [GET] /api/users
```

#### Get user

```http
  [GET] /api/users/${id}
```

#### Create user

```http
  [POST] /api/users/create
```

| Parameter | Type     | Description                       | Required           |
| :-------- | :------- | :-------------------------------- | :----------------- |
| `user`    | `string` | User to identify in Report Now | :white_check_mark: |
| `name`    | `string` | Full name of user | :white_check_mark: |
| `email`   | `string` | Email to sing in | :white_check_mark: |
| `phone`   | `string` | Phone to send notifications and code otp | :white_check_mark: |
| `password`| `string` | Password with specific characters | :white_check_mark: |

#### Update user

```http
  [PUT] /api/users/${id}
```

| Parameter | Type     | Description                       | Required           |
| :-------- | :------- | :-------------------------------- | :----------------- |
| `user`    | `string` | User to identify in Report Now | :heavy_minus_sign: |
| `name`    | `string` | Full name of user | :heavy_minus_sign: |
| `email`   | `string` | Email to sing in | :heavy_minus_sign: |
| `phone`   | `string` | Phone to send notifications and code otp | :heavy_minus_sign: |
| `admin`   | `boolean`| Param to create user admin |:heavy_minus_sign: |

#### Delete user

```http
  [DELETE] /api/users/${id}
```

#### Change Password

```http
  [POST] /api/users/changePassword
```

| Parameter | Type     | Description                       | Required           |
| :-------- | :------- | :-------------------------------- | :----------------- |
| `email`   | `string` | Email to sing in | :white_check_mark: |
| `password` | `string` | Current Password | :white_check_mark: |
| `newPassword` | `string` | Password to change | :white_check_mark: |

#### Sing In

```http
  [POST] /api/users/validate
```

| Parameter | Type     | Description                       | Required           |
| :-------- | :------- | :-------------------------------- | :----------------- |
| `email`   | `string` | Email to sing in | :white_check_mark: |
| `password` | `string` | Current Password | :white_check_mark: |

### REPORT

#### List all reports

```http
  [GET] /api/news
```

#### Get report

```http
  [GET] /api/news/${id}
```

#### Create report

```http
  [POST] /api/users/create
```

| Parameter | Type     | Description                       | Required           |
| :-------- | :------- | :-------------------------------- | :----------------- |
| `title`   | `string` | Title of report | :white_check_mark: |
| `description`    | `string` | Complet content of report | :white_check_mark: |
| `likes`   | `number` | Amount of appreciations | :white_check_mark: |
| `id_user`   | `string` | Report creator id | :white_check_mark: |

#### Update report

```http
  [PUT] /api/users/${id}
```

| Parameter | Type     | Description                       | Required           |
| :-------- | :------- | :-------------------------------- | :----------------- |
| `title`   | `string` | Title of report | :heavy_minus_sign: |
| `description`    | `string` | Complet content of report | :heavy_minus_sign: |
| `likes`   | `number` | Amount of appreciations | :heavy_minus_sign: |
| `id_user`   | `string` | Report creator id | :heavy_minus_sign: |

#### Delete report

```http
  [DELETE] /api/users/${id}
```

## Authors

- [@IvanAndrade11](https://github.com/IvanAndrade11)

