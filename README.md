# Getting Started

## Installation

### Install Feathers

```
npm install feathers-cli -g
```

### Clone & Installing dependencies

```
git clone https://github.com/telecreative-developer/trisakti-connect-services.git
cd trisakti-connect-services
npm install
```

### Configure Database

Config file location

```
cd trisakti-connect-services/config
```

Edit file default.json

```
"mysql": "mysql://MYSQL_USERNAME:MYSQL_PASSWORD@MYSQL_HOST:MYSQL_PORT/MYSQL_DATABASE_NAME"
```

# Endpoints

### Ads

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/ads

#### Request & Response

```javascript
ads_id: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
},
thumbnail: {
  type: DataTypes.STRING,
  allowNull: false
}
```

### Careers

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/careers

#### Request & Response

```javascript
id_career: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
},
job_title: {
  type: DataTypes.STRING,
  allowNull: false
},
company: {
  type: DataTypes.STRING,
  allowNull: false
},
experience: {
  type: DataTypes.STRING,
  allowNull: true
},
job_function: {
  type: DataTypes.STRING,
  allowNull: true
},
work_location: {
  type: DataTypes.STRING,
  allowNull: false
},
salary: {
  type: DataTypes.INTEGER,
  allowNull: false
},
overview: {
  type: DataTypes.TEXT,
  allowNull: false
},
id: {
  type: DataTypes.INTEGER,
  allowNull: false
}
```

### Categories

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/categories

#### Request & Response

```javascript
id_category: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
},
category: {
  type: DataTypes.STRING,
  allowNull: false
}
```

### Chat

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/chats

#### Request & Response

```javascript
id_chat: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
},
id: {
  type: DataTypes.INTEGER,
  allowNull: false
},
myid: {
  type: DataTypes.INTEGER,
  allowNull: false
},
message: {
  type: DataTypes.TEXT,
  allowNull: true
},
image: {
  type: DataTypes.TEXT,
  allowNull: true
},
sender: {
  type: DataTypes.INTEGER,
  allowNull: false
}
```

### Comments

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/comments

#### Request & Response

```javascript
id_comment: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
},
comment: {
  type: DataTypes.STRING,
  allowNull: false
},
id_news: {
  type: DataTypes.INTEGER,
  allowNull: false
},
id: {
  type: DataTypes.INTEGER,
  allowNull: false
}
```

### Faculties

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/faculties

#### Request & Response

```javascript
id_faculty: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
},
faculty: {
  type: DataTypes.STRING,
  allowNull: false
}
```

### Friends

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/friends

#### Request & Response

```javascript
id_friend: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
},
id: {
  type: DataTypes.INTEGER,
  allowNull: false
},
confirm_by: {
  type: DataTypes.INTEGER,
  allowNull: false
}
```

### Friend Request

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/friendsrequest

#### Request & Response

```javascript
id_friendrequest: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
},
id: {
  type: DataTypes.INTEGER,
  allowNull: false
},
request_to: {
  type: DataTypes.INTEGER,
  allowNull: false
}
```

### Majors

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/majors

#### Request & Response

```javascript
id_major: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
},
major: {
  type: DataTypes.STRING,
  allowNull: false
},
id_faculty: {
  type: DataTypes.INTEGER,
  allowNull: false
}
```

### News

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/news

#### Request & Response

```javascript
id_news: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
},
thumbnail: {
  type: DataTypes.STRING,
  allowNull: false
},
title: {
  type: DataTypes.STRING,
  allowNull: false
},
content: {
  type: DataTypes.TEXT,
  allowNull: false
},
status: {
  type: DataTypes.STRING,
  allowNull: false
},
id: {
  type: DataTypes.INTEGER,
  allowNull: false
},
id_category: {
  type: DataTypes.INTEGER,
  allowNull: false
},
claps: {
  type: DataTypes.INTEGER,
  allowNull: true
}
```

### Notifications

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/notifications

#### Request & Response

```javascript
id_notification: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
},
text: {
  type: DataTypes.STRING,
  allowNull: false
},
receiver: {
  type: DataTypes.INTEGER,
  allowNull: false
}
```

### Polls

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/polls

#### Request & Response

```javascript
id_poll: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
},
title_poll: {
  type: DataTypes.STRING,
  allowNull: false
},
thumbnail_poll: {
  type: DataTypes.STRING,
  allowNull: false
},
content_poll: {
  type: DataTypes.STRING,
  allowNull: false
}
```

### Poll Answers

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/pollanswers

#### Request & Response

```javascript
idpoll_answer: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
},
id: {
  type: DataTypes.INTEGER,
  allowNull: false
},
id_poll: {
  type: DataTypes.INTEGER,
  allowNull: false
},
idpoll_choice: {
  type: DataTypes.INTEGER,
  allowNull: false
}
```

### Poll Choices

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/pollchoices

#### Request & Response

```javascript
idpoll_choice: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncement: true
},
candidate: {
  type: DataTypes.STRING,
  allowNull: false
},
id_poll: {
  type: DataTypes.INTEGER,
  allowNull: false
}
```

### Reports

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/reports

#### Request & Response

```javascript
id_report: {
  primaryKey: true,
  autoIncrement: true,
  type: DataTypes.INTEGER
},
email: {
  type: DataTypes.STRING,
  allowNull: false
},
fullname: {
  type: DataTypes.STRING,
  allowNull: false
},
subject: {
  type: DataTypes.STRING,
  allowNull: false
},
graduated: {
  type: DataTypes.INTEGER,
  allowNull: false
},
id_major: {
  type: DataTypes.INTEGER,
  allowNull: false
},
id_faculty: {
  type: DataTypes.INTEGER,
  allowNull: false
}
```

### Shop

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/shop

#### Request & Response

```javascript
shop_id: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
},
name: {
  type: DataTypes.STRING,
  allowNull: false
},
cover: {
  type: DataTypes.STRING,
  allowNull: false
},
price: {
  type: DataTypes.STRING,
  allowNull: false
},
description: {
  type: DataTypes.TEXT,
  allowNull: false
},
shopcategory_id: {
  type: DataTypes.INTEGER,
  allowNull: false
},
status:{
  type: DataTypes.BOOLEAN,
  allowNull: false,
  defaultValue: false
},
id: {
  type: DataTypes.INTEGER,
  allowNull: false
}
```
