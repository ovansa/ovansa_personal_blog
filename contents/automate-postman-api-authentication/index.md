---
title: 'Automate API Authentication in Postman Using Pre-request Scripts'
slug: 'automate-postman-api-authentication'
description: 'Tired of manually copying tokens between requests? Learn how to automate API authentication in Postman using pre-request scripts and send requests faster.'
publishedAt: '05/12/2025'
imageUrl: 'https://images.pexels.com/photos/2882630/pexels-photo-2882630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
readingTime: '7 min read'
categories:
  - API Testing
  - Postman
  - Test Automation
  - JavaScript
  - QA Best Practices
tags:
  - postman authentication automation
  - api token automation
  - pre-request script postman
  - pm.sendRequest tutorial
  - api testing efficiency
  - postman token management
  - automate api login
  - postman collection variables
  - postman scripting tips
  - api testing productivity
---

<!-- # Automate API Authentication in Postman Using Pre-request Scripts -->

## Introduction

Ever find yourself repeatedly clicking the "Send" on the same authentication request before testing your actual API endpoint? If you are working with authenticated APIs in Postman, you've likely created separate requests: one for authentication and another for your actual functionality (like creating a todo item). This approach works, but can lead to inefficient workflows e.g. multiple clicks, manual copying of token, and eventually a cluttered collection.

### The challenge with traditional auth

In a typical postman workflows, testing authenticated endpoints follow this pattern:

1. Send a login request
2. Extract the authentication token from the response
3. Copy the token to your actual test request
4. Finally send your test request

For teams running hundreds of tests daily, these extra steps add up quickly.

### Here is a more elegant solution

What if your create-todo request could handle its own authentication, similar to how beforeEach or beforeTest hooks work in Cypress, Playwright or Selenium? This is precisely what postman pre-request scripts enable.

By embedding the authentication logic directly in your functional requests, you can:

- Create truly standalone endpoints that handle their own dependencies
- Reduce your collection size by eliminating separate auth requests
- Make your collections more intuitive for new team members

In this guide, I will show you how to use pm.sendRequest() within pre-request scripts to automate authentication before your main request executes, storing tokens in collection variables that your request can then utilize.

## What pm.sendRequest does

So in postman, pm.sendRequest is a postman API that allows you to programmatically send http requests from within a pre-request or post-request script.

The syntax looks like this:

```javascript
pm.sendRequest(request, callback);
```

Where:

- `request` can be a URL string or an object with method, headers, body, etc.
- `callback` is a function that handles the response and does something with it

## How to implement

To begin, we would be using this sample todo api: https://todo-app-go-jq45.onrender.com/swagger/index.html

Here is the scenario we will be simulating:

- Call the login endpoint with valid email and password
- Then use token to authenticate and create a todo

### Step 1: Import the endpoints into Postman

Import the Login endpoint using the curl:

```
curl -X 'POST' \
  'https://todo-app-go-jq45.onrender.com/auth/login' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "email": "string",
  "password": "string"
}'
```

Then import the create todo using the curl:

```
curl -X 'POST' \
  'https://todo-app-go-jq45.onrender.com/todos' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "completed": true,
  "createdAt": "string",
  "id": "string",
  "title": "string",
  "updatedAt": "string",
  "userId": "string"
}'
```

### Step 2: Understand the traditional approach

Explore the login endpoint in order to make a successful login request, observe that a token is returned. Observe the url with the method, content type and request body - this is required when sending the request in the pre-request script. Note: register a new user and use details to login.

Now go into the create todo request, fill up the request payload with valid data and send. Observe that the error "authorization header is required" is returned. Navigate to the headers section of the request, add a header with key "authorization" and value "Bearer invalid", observe the error messge indicating an invalid token.

Replace the invalid with the token from the login, observe the request is now successful. This is an example of the traditional way. Now lets merge the login within the create todo request as one.

### Step 3: Embedding the login in pre-request script

In the pre-request section of the create todo request, add this snippet:

```javascript
pm.sendRequest(
  {
    url: 'https://todo-app-go-jq45.onrender.com/auth/login',
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
    },
    body: {
      mode: 'raw',
      raw: JSON.stringify({
        email: 'tester@gmail.com',
        password: 'Password123',
      }),
    },
  },
  function (err, res) {
    if (err) {
      console.log('Login request failed:', err);
    } else {
      const jsonData = res.json();
      if (jsonData && jsonData.token) {
        pm.collectionVariables.set('token', jsonData.token);
        console.log('Token saved to collection variable.');
      } else {
        console.warn('Token not found in response:', jsonData);
      }
    }
  }
);
```

So here, we are making the request to the login endpoint with a valid email and password.
Then storing the token in a collection variable called "token"
Then using the token stored in collection variable in the request.

Now that we have this, go to your header section and replace the token with the collection variable "{{token}}". And send the request once again.

Check postman console to monitor the request.

Observe that the todo was created successfully.

If you check the console, you would see that the login request was first initiated before the create todo was done.

## Tips to improve your implementation

<!-- ### Better Error Handling

You can enhance the callback function to handle more error cases:

```javascript
function (err, res) {
    if (err) {
        console.error('Login request failed:', err);
        return;
    }

    if (res.code >= 400) {
        console.error('Login returned error status:', res.code);
        return;
    }

    try {
        const jsonData = res.json();
        if (jsonData && jsonData.token) {
            pm.collectionVariables.set('token', jsonData.token);
            console.log('Token saved to collection variable.');
        } else {
            console.warn('Token not found in response:', jsonData);
        }
    } catch (e) {
        console.error('Failed to parse response JSON:', e);
    }
}
``` -->

### Checking for existing tokens

To avoid making unnecessary login requests, you can check if you already have a valid token:

```javascript
const currentToken = pm.collectionVariables.get('token');
if (!currentToken) {
  // Perform login request as shown earlier
  pm.collectionVariables.set('token', token);
}
```

## Ready-to-Use Example Collection

To help you get started quickly, I've created a complete Postman collection with the authentication logic already implemented. This collection includes:

- The login request
- The create todo request with pre-request script for authentication
- Environment variables set up correctly

### How to use the example collection

1. Download the collection: [Todo App with Authentication Automation](https://d1odwqewagcdkp.cloudfront.net/Postman/todo-auth.postman_collection.json).
2. Import into Postman by clicking "Import" in Postman and selecting the downloaded file.
3. Create a new environment with your login credentials (or use the included defaults).
4. Send the create todo request and watch the automatic authentication in action.

The collection serves as a working reference that you can study and adapt for your own API testing needs.

## Conclusion

By leveraging Postman's pre-request scripts and pm.sendRequest(), you can create standalone API requests that handle their own authentication. This approach saves time and makes your Postman collections cleaner.

You can use this technique for more than just authentication. You could use pre-request scripts to:

- Generate test data dynamically
- Fetch configuration values
- Setup prerequisites for your test

As your API tests get more complex, these automation techniques will help keep your collections organized and efficient.
