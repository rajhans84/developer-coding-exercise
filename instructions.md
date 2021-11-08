# How to run API server

I have used express to create API server. 
To install, run the following command in `express` folder
`npm install`
To start it, run the following command:
`sh run_express.sh`

It should run on `http://localhost:3000`

## Endpoints: 
1. List all posts:
`http://localhost:3000/posts`
2. Get single post:
`http://localhost:3000/post/people-do-good`

# How to run client application
The client application is located in `client` folder. It is built using `React`, `Redux` and `Material UI`. 

To install, run the following command in `client` folder:
`yarn`

To start it, run the following command:
`yarn start`

Application should be available on `http://localhost:3005/posts`

