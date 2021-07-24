# Serverless CORS

> Sample NodeJS app using the Serverless CORS rules

1. Deploy the Lambda Function using Serverless with `serverless deploy`
2. Replace the `url` variable inside the `client/index.html` file with the Function endpoint
3. Run the frontend app with `yarn start:client`
4. Use ngRok to serve your application from a public domain
5. Click the `GET` button to see the request failing
6. List your ngRok URL under the `cors.origins` inside the `serverless.yml`
7. Deploy the Lambda Function using Serverless with `serverless deploy` again
8. Now the request should go through
