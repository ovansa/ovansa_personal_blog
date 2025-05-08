---
title: 'Stop Manually Typing Test Data: Automate Your Postman API Tests Like a Pro'
slug: 'automate-postman-test-data-generation'
description: 'Tired of manually changing data for each test run? Learn how to generate random test data in Postman and make API testing fun again!'
publishedAt: '04/29/2025'
imageUrl: 'https://images.unsplash.com/photo-1602468432285-0fe26e8352ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
readingTime: '10 min read'
categories:
  - API Testing
  - Postman
  - Test Automation
  - JavaScript
  - QA Best Practices
tags:
  - postman test data automation
  - api automation tips
  - random data generation in postman
  - pre-request script postman
  - postman scripting tutorial
  - automate test inputs
  - software testing efficiency
  - javascript in postman
  - qa productivity hacks
---

### Introduction

Ever been in a situation where you've used Postman in the past or are currently using Postman to automate some test checklist, and you find yourself always manually changing data in your request payload (say you're using a register user endpoint)? Especially when you want to quickly do some sanity or smoke checks and need to give feedback quickly?

I've been there, and I tell you, it can be quite repetitive, boring, and as a result, takes some of the fun away from testing. It's like filling out the same form over and over again with different variations of your name and email.

Here I'm going to show you how I save time and have some fun using Postman to automate this little task that can be such a time-waster.

### What You'll Get from this Tutorial

By the end of this tutorial, you'll be able to:

- Generate random data automatically for your API tests
- Stop wasting time manually changing request data
- Run your tests multiple times without data conflicts
- Make your testing process way more efficient and fun!

### Before We Start

Note: You need to be familiar with basic JavaScript and chai assertion library. Nothing complicated, just enough to understand what's happening in the scripts.

### Let's Begin

If you haven't already, download Postman and fire it up.

For this tutorial, we'll be using the Register User endpoint from a Todo List API as our example:

`https://todo-app-go-jq45.onrender.com/swagger/index.html`

Now open your Postman and let's get started.

### Step 1: Import the API Request

Import this curl command into Postman:

```
curl -X 'POST' \
  'https://todo-app-go-jq45.onrender.com/auth/register' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "email": "string",
  "fullName": "string",
  "password": "string"
}'
```

Take a look at the request payload - it has fields for email, fullName, and password. These are exactly the fields we want to generate random data for, so we don't have to keep changing them manually every time.

### Step 2: Write Your Pre-request Script Magic

This is where the magic happens! Click on the "Pre-request Script" tab in your request.

![Pre-request Script Tab](https://d1odwqewagcdkp.cloudfront.net/pre-request-tab.png)
_Navigate to the "Pre-request Script" tab (highlighted above) to add your custom JavaScript code that will generate random test data before each request is sent._

First, let's generate a random string using JavaScript's MAath random function:

```javascript
const randomString = Math.random().toString(36).slice(2, 10);
```

Now, let's create variables for email, password, and fullName based on our randomString:

```javascript
const email = `user_${randomString}@gmail.com`;
const fullName = `User ${randomString.toUpperCase()}`;
const password = `Pass_${randomString}_123`;
```

I like to confirm what's being generated, so I usually add some console logs:

```javascript
// Let's see what we've created (check the Postman console after running)
console.log('Generated Email:', email);
console.log('Generated Full Name:', fullName);
console.log('Generated Password:', password);
```

![Postman Console](https://d1odwqewagcdkp.cloudfront.net/postman-console.png)
_View your generated test data in the Postman Console (Ctrl+Alt+C). This debugging feature lets you verify the values being created before they're used in your request._

Now we need to save these generated values somewhere so our request can use them. Depending on your needs, you can save them as collection variables, environment variables, or global variables. I typically use collection or environment variables.

For collection variables (my preference), use:

```javascript
pm.collectionVariables.set('randomEmail', email);
pm.collectionVariables.set('randomFullName', fullName);
pm.collectionVariables.set('randomPassword', password);
```

![Collection Variable Section](https://d1odwqewagcdkp.cloudfront.net/collection-variable-section.png)
_The Collection Variables section stores your generated values for reuse across multiple requests. Access this panel from the collection sidebar to inspect or manually edit your variables._

Alternatively, if you prefer environment variables, use:

```javascript
pm.environment.set('randomEmail', email);
pm.environment.set('randomFullName', fullName);
pm.environment.set('randomPassword', password);
```

### Step 3: Update Your Request Body

Now for the final piece of the puzzle! Go to the "Body" tab of your request and replace the static values with our new variables:

From:

```json
{
  "email": "sample@gmail.com",
  "password": "Password123",
  "fullName": "Simple Username"
}
```

To:

```json
{
  "email": "{{randomEmail}}",
  "password": "{{randomPassword}}",
  "fullName": "{{randomFullName}}"
}
```

![Request Comparison](https://d1odwqewagcdkp.cloudfront.net/request-comparison.png)
_Transform static request bodies (left) into dynamic templates (right) by replacing hardcoded values with variable references. This simple change enables endless test variations without manual editing._

### Step 4: Send Your Request

Hit that "Send" button and watch the magic happen! Every time you send the request, your pre-request script will generate new random values, so you'll be creating a unique user each time without having to type anything manually.

![Successful Response](https://d1odwqewagcdkp.cloudfront.net/successful-response.png)
_A successful API response confirms your dynamically generated data was accepted by the server. Note how each request creates a unique user with randomized credentials from your pre-request script._

### Step 5: Verify Your Results (Optional but Recommended)

Want to make sure everything worked as expected? Add a simple test script to your post-request script:

```javascript
pm.test('Status code is 200', function () {
  pm.response.to.have.status(200);
});

pm.test('Response contains our generated email', function () {
  const responseData = pm.response.json();
  pm.expect(responseData.email).to.equal(
    pm.collectionVariables.get('randomEmail')
  );
});
```

## An Extra Tips I've Found Useful

### Using Your Variables in Multiple Requests

The beauty of saving these variables is that you can use them across multiple requests. For example, after registering a user, you might want to log them in using the same credentials:

```json
{
  "email": "{{randomEmail}}",
  "password": "{{randomPassword}}"
}
```

## Wrapping Up

That's it! With this pre-request script approach, you've created a tool that genuinely serves your testing purpose.

This setup allows you to:

- **Focus on critical thinking and test design** rather than repetitive data management
- **Invest time strategically** – automation that pays off by supporting exploratory testing
- **Run varied test scenarios** without the cognitive overhead of manual data coordination
- **Create space for deeper investigation** when you discover interesting system behaviors

Remember: The goal isn't "full automation" but thoughtful application of tools that extend your capabilities as a tester. Your context matters, and be ready to adapt this approach as you learn more about your system's behaviors and risks.

### What's Next?

Now that you've automated your test data generation:

1. **Try expanding this approach** to other endpoints in your collection
2. **Create a dedicated environment** for your random variables
3. **Share this technique** with your team to improve everyone's workflow
4. **Challenge yourself** to generate even more complex data patterns

<!-- I'd love to hear how this approach works for you! Drop a comment below or reach out on [Twitter/LinkedIn] to share your own Postman automation tips. -->

Happy testing!

<!--
### What's Next?

Now that you've automated your test data generation:

1. **Try expanding this approach** to other endpoints in your collection
2. **Create a dedicated environment** for your random variables
3. **Share this technique** with your team to improve everyone's workflow
4. **Challenge yourself** to generate even more complex data patterns

I'd love to hear how this approach works for you! Drop a comment below or reach out on [Twitter/LinkedIn] to share your own Postman automation tips.

Happy testing!

## Common Issues and Solutions

### "My variable isn't being recognized"
- Check that you're using double curly braces: `{{variableName}}`
- Verify the variable scope (collection vs environment)
- Look for typos in variable names

### "I keep getting the same random values"
- Make sure your pre-request script runs before each request
- Check that you haven't accidentally disabled the pre-request script

### "I need to use the same random data across my collection"
- Save your variables at the collection level instead of request level
- Consider using a Postman environment for more persistent storage -->
