## Canvas app
Build a single page application that allows user to add text and image into canvas. Below are the specification for the application:

- user can add, edit and remove text from canvas
- user can upload image to images list
- user can move image and text around canvas.

## To set up the environment dependencies ( node version 5++ )
```
$ npm install
```

## To run the node server

```
$ npm run start
```

Server is listening to port `8000`

## Instruction on file upload

## routes

#### get uploaded images
```
/images
```

#### upload image to server
```
/uploads
```


**Note:**
1. To allow file uploaded to node server, your `httprequest content type` has to be `multipart/form-data`
2. The server only accepts `png` and `jpeg` file format
