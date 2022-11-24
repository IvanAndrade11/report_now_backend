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

| Parameter | Type     | Description                       | Required           |
| :-------- | :------- | :-------------------------------- | :----------------- |
| `id`      | `number` | Id of user to search              | :white_check_mark: |

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
| `id`      | `number` | Id of user to identity | :white_check_mark: |
| `user`    | `string` | User to identify in Report Now | :white_check_mark: |
| `name`    | `string` | Full name of user | :white_check_mark: |
| `email`   | `string` | Email to sing in | :white_check_mark: |
| `phone`   | `string` | Phone to send notifications and code otp | :white_check_mark: |
| `admin`   | `boolean`| Param to create user admin |:heavy_minus_sign: |

#### Delete user

```http
  [DELETE] /api/users/${id}
```

| Parameter | Type     | Description                       | Required           |
| :-------- | :------- | :-------------------------------- | :----------------- |
| `id`      | `number` | Id of user to search              | :white_check_mark: |


#### Change Password

```http
  [POST] /api/users/changePassword
```

| Parameter | Type     | Description                       | Required           |
| :-------- | :------- | :-------------------------------- | :----------------- |
| `id`      | `number` | Id of user to identify            | :white_check_mark: |
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


## Authors

- [@IvanAndrade11](https://github.com/IvanAndrade11)

