define({ "api": [  {    "type": "post",    "url": "/session/login",    "title": "Logs a user in",    "name": "Login",    "group": "Auth",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Object",            "optional": false,            "field": "request",            "description": "<p>The payload of the request.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "request.userName",            "description": "<p>The username of a given user</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "request.password",            "description": "<p>The users password</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "status",            "description": "<p>Status code</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Success Message</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>Access token</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  status: 200,\n  message: \"success\",\n  token: \"access token\"\n }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "MissingRequiredField",            "description": "<p>The required fields of userName or password are empty</p>"          },          {            "group": "Error 4xx",            "optional": false,            "field": "IncorrectUsername/Password",            "description": "<p>The username or password were incorrect</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Not Found\n{\n  status: 400,\n  message: \"you must enter a username and password\",\n  token: null\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n  status: 404,\n  message: 'incorrect username/password',\n  token: null\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "routes/sessions.js",    "groupTitle": "Auth"  },  {    "type": "get",    "url": "/season",    "title": "Request all seasons",    "name": "GetSeason",    "group": "Seasons",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "status",            "description": "<p>Status code</p>"          },          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "response",            "description": "<p>Successful response object with season data</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "response.id",            "description": "<p>Seasons unique id</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "response.league",            "description": "<p>Seasons league (NFL or NCAA only)</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "response.start_date",            "description": "<p>Date of seasons start</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "response.end_date",            "description": "<p>Date of seasons end</p>"          },          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "response.active_seasons",            "description": "<p>Seasons active or inactive</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "response.created_at",            "description": "<p>Date of users account creation</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "response.updated_at",            "description": "<p>Date of users last update</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Success Message</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  response: [\n             {\n               id: 2,\n               league: \"NFL\",\n               start_date: \"2017-10-15T05:00:00.000Z\",\n               end_date: \"2018-02-25T06:00:00.000Z\",\n               active_season: true,\n               created_at: \"2017-12-10T02:33:07.447Z\",\n               updated_at: \"2017-12-10T02:33:07.447Z\"\n             },\n             {\n               id: 1,\n               league: \"NCAA\",\n               start_date: \"2017-10-06T05:00:00.000Z\",\n               end_date: \"2018-02-11T06:00:00.000Z\",\n               active_season: true,\n               created_at: \"2017-12-10T02:33:07.447Z\",\n               updated_at: \"2017-12-10T02:33:07.447Z\"\n             }\n           ],\n           status: 200,\n           message: \"success\"\n          }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "SeasonsNotFound",            "description": "<p>The response of no seasons found or an error grabbing them.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n  status: 404,\n  response: \"unexpected error occured\",\n  message: \"error\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "routes/seasons.js",    "groupTitle": "Seasons"  },  {    "type": "post",    "url": "/users/new",    "title": "Creates a new user",    "name": "CreateUser",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Object",            "optional": false,            "field": "request",            "description": "<p>The payload of the request.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "request.firstName",            "description": "<p>The desired first name of the new user</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "request.lastName",            "description": "<p>The desired last name of the new user</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "request.userName",            "description": "<p>The desired username of the new user</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "request.password",            "description": "<p>The desired password of the new user to be hashed</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "request.email",            "description": "<p>The users email address</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "status",            "description": "<p>Status code</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "response",            "description": "<p>Successful response object with user data</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "response.id",            "description": "<p>Users unique id</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "response.first_name",            "description": "<p>Users first name</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "response.last_name",            "description": "<p>Users last name</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "response.username",            "description": "<p>Users user name</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "response.email",            "description": "<p>Users email</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "response.password",            "description": "<p>Users hashed password</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "response.created_at",            "description": "<p>Date of users account creation</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "response.updated_at",            "description": "<p>Date of users last update</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Success Message</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>Access token</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  response: {\n               id: 1,\n               first_name: \"firstName\",\n               last_name: \"lastName\",\n               username: \"userName\",\n               email: \"someEmail@email.com\",\n               password: \"hashedPassword\",\n               created_at: \"2017-12-10T02:33:07.444Z\",\n               updated_at: \"2017-12-10T02:33:07.444Z\"\n             },\n  status: 200,\n  message: \"success\",\n  token: \"access token\"\n }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "MissingRequiredField",            "description": "<p>The required fields of userName, firstName, lastName, password, or email are empty</p>"          },          {            "group": "Error 4xx",            "optional": false,            "field": "UsernameOrEmailExists",            "description": "<p>The username or email already exists</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n  status: 404,\n  response: \"error\",\n  message: \"missing required field\",\n  token: null\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n  status: 404,\n  message: 'username or email already exists',\n  response: 'error',\n  token: null\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "routes/users.js",    "groupTitle": "Users"  },  {    "type": "get",    "url": "/users/:id",    "title": "Request single user by id",    "name": "GetUser",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Users unique ID.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "status",            "description": "<p>Status code</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "response",            "description": "<p>Successful response object with user data</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "response.id",            "description": "<p>Users unique id</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "response.first_name",            "description": "<p>Users first name</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "response.last_name",            "description": "<p>Users last name</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "response.username",            "description": "<p>Users user name</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "response.email",            "description": "<p>Users email</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "response.password",            "description": "<p>Users hashed password</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "response.created_at",            "description": "<p>Date of users account creation</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "response.updated_at",            "description": "<p>Date of users last update</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Success Message</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  status: 200,\n  response: {\n   id: 1,\n   first_name: \"firstName\",\n   last_name: \"lastName\",\n   username: \"userName\",\n   email: \"someEmail@email.com\",\n   password: \"hashed password\",\n   created_at: \"2017-12-10T02:33:07.444Z\",\n   updated_at: \"2017-12-10T02:33:07.444Z\"\n  },\n  message: \"success\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>The id of the User was not found.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n  status: 404,\n  response: \"no user found with id: 100\",\n  message: \"error\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "routes/users.js",    "groupTitle": "Users"  },  {    "type": "get",    "url": "/users/",    "title": "Request all users",    "name": "GetUsers",    "group": "Users",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "status",            "description": "<p>Status code</p>"          },          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "response",            "description": "<p>Successful response object with user data</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "response.id",            "description": "<p>Users unique id</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "response.first_name",            "description": "<p>Users first name</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "response.last_name",            "description": "<p>Users last name</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "response.username",            "description": "<p>Users user name</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "response.email",            "description": "<p>Users email</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "response.password",            "description": "<p>Users hashed password</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "response.created_at",            "description": "<p>Date of users account creation</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "response.updated_at",            "description": "<p>Date of users last update</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Success Message</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  response: [\n             {\n               id: 1,\n               first_name: \"Joey\",\n               last_name: \"Tongay\",\n               username: \"jtongay\",\n               email: \"joseph.tongay@gmail.com\",\n               password: \"hashedPassword\",\n               created_at: \"2017-12-10T02:33:07.444Z\",\n               updated_at: \"2017-12-10T02:33:07.444Z\"\n             },\n             {\n               id: 2,\n               first_name: \"Erin\",\n               last_name: \"Miller\",\n               username: \"emiller\",\n               email: \"erin.miller@junkmail.gmail.com\",\n               password: \"hashedPassword\",\n               created_at: \"2017-12-10T02:33:07.444Z\",\n               updated_at: \"2017-12-10T02:33:07.444Z\"\n             }\n           ],\n           status: 200,\n           message: \"success\"\n          }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UsersNotFound",            "description": "<p>The response of no users found or an error grabbing them.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n  status: 404,\n  response: \"e\",\n  message: \"Had a hard time finding users\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "routes/users.js",    "groupTitle": "Users"  }] });
