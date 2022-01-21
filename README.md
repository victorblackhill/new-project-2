# project-2


## Local Install
- create .env with the following fields :
    - PORT = 4000
    - MONGO_URI = ***
    - CLOUDINARY_NAME = ***
    - CLOUDINARY_KEY = ***
    - CLOUDINARY_SECRET = ***
    - SESSION_SECRET = *********************
- install all packages: > *npm install*
- run : > *npm run dev*

### Folders structure

Basic express [express-generator](https://expressjs.com/en/starter/generator.html) with the following additions

| File or Folders       | Purpose           |
| ------------- |:-------------|
| config/mongoDB.js     | mongoDB with mongoose | 
| config/cloudinary.js     | Cloudinary (file storage service) and related packages (cloudinary, multer, multer-storage-cloudinary), also includes some /* commented  code */ to test if cloudinary is working well |
| models | mongoose schemas and models      |
| javascript/comments | DOM/AJAX to CRUD the comments |

### Middlewares

- seedStuff

**-----------fetch.js -----------**
- searches in the incoming req (req.body, req.request....)
- performs an operation a module via specific methods
- append it to the request in a specified key. Example :

```javascript
myFetch.creates(CommentModel,"myComment")

// => creates an element {req.body} in the comment Model

// => returns the created Mongo Element 
```

| Methods      | Purpose and remarks           |
| ------------- |:-------------|
| .findbyId     |  |
| .findOne     |  | 
| .create    |  |
| .find    |  | 
| .delete   |  | 
| .update  |  | 


**----------- renderHelp.js -----------**

| Methods       | Input          | Output          |
| ------------- |:-------------|:-------------------------------------------|
| mySender      | ```dataKeys = ["myFetch","body"] ``` | ```res.send({dataKey1: req.dataKey1...})``` |
| myRender      | ```viewRoute```, ```dataKeys = ["myFetch","body"]``` | Renders the hbs view in the route |
| myRedirect    |  ```viewRoute```| redirects to the route |

- MySender is used a development tool and as a response for AJAX requests
- myRender

## Troubleshoot
- Cloudinary connection failed : use test in the /*commented section*/ in config/cloudinary.js
