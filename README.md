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
