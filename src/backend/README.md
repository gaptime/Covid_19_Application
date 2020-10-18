# How to connect to the database to make the backend work? 
To keep the database password safe, the keys.js file is not uploaded to the Github. To make the backend work, create keys.js under the config folder.

In the keys.js file, you should write the code like this down below:

```
module.exports = {
    mongodb+srv://gaptime:<password>@cluster0.cxibk.mongodb.net/<dbname>?retryWrites=true&w=majority,
    secretOrKey: "secret" 
  };
```
