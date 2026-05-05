---
title: 'Why Writing API Tests in Code Matters'
slug: 'api-tests-in-code'
description: 'Why API tests belong in your codebase, common objections I hear, and how I approach testing critical flows in a Spring Boot task API.'
publishedAt: '12/27/2025'
imageUrl: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1489&auto=format&fit=crop'
readingTime: '8 min read'
categories:
  - Software Testing
  - API Testing
  - Software Development
  - Software Testing
tags:
  - API testing
  - test automation
  - Spring Boot
  - integration testing
  - test strategy
  - code reliability
  - developer testing
  - authentication testing
  - test-driven development
  - testing best practices
---

<!-- # Why Writing API Tests in Code Matters -->

Over the years, working with different project teams, I've heard many reasons why API tests don't get written in code. Some of them are understandable. Timelines are tight, and the pressure to ship APIs quickly is real. Some developers feel there's no point because there's a testing person or team that will test the APIs anyway. Others point out that authentication is external, so it's hard to get valid tokens in tests.

I get all of that. These aren't imaginary problems.

But from experience, skipping API tests in code usually just pushes the pain down the line. Someone will still find the bug - just later, under more pressure, and often when it's more expensive to fix.

This write-up is based on my experience working with project teams over the years. I built a small Spring Boot task (todo) API to illustrate these points - the code is [on GitHub](https://github.com/ovansa/task-api). This isn't about Spring Boot specifically. The same thinking applies to Node.js applications or any other backend service.

Also, this isn't about testing everything. It's about testing the things that matter - the parts where a break is costly.

## Why API Tests in Code Are Worth It

**Fast feedback**  
When someone updates an endpoint, fixes a bug, or refactors logic, tests in code give quick feedback. You don't need to wait for someone else to discover that something broke. You'll know almost immediately.

**They explain how the API really works**  
For someone new to the codebase, API tests are one of the fastest ways to understand the system. They show what inputs are expected, how authentication works, what responses look like, and what happens when things go wrong. That's far more useful than comments or assumptions.

**They reduce fear when touching code**  
A lot of people are scared to touch existing endpoints, especially in older systems. Tests reduce that fear. You can make changes knowing that the important behaviours are still covered.

**They force you to think about failure cases**  
Things like “what happens if the title is missing?”, “what if the user isn’t authenticated?”, or “should this user even be allowed to do this?” often get missed when moving fast.

This also includes access control and role-based restrictions - who can create, update, delete, or change the state of a resource. Writing tests forces these decisions to be explicit and ensures they remain enforced as the system evolves.

**Easier setup of realistic test data**

One underrated benefit of in-code API tests is controlled test data setup. You can create users, tasks, and states that mirror real-world scenarios - and clean them up after.

This makes it much easier to reproduce tricky bugs:

- A task in a specific state
- A user with limited permissions
- Edge cases that only happen with certain data combinations

When bugs show up, having these scenarios already modeled in tests often makes them much easier to understand and fix.

## The Usual Objections (And Why I Still Push for Tests)

In my testing career, I've heard these a lot:

- "Timelines are too tight."
- "Testing will cover it anyway."
- "Auth is external, testing is complicated."

Sometimes these are valid constraints. But skipping tests doesn't remove the work - it just shifts it. Testing ends up catching issues late, developers context-switch to fix bugs under pressure, and confidence in the system drops.

This doesn't mean testers shouldn't automate parts of their checks when it makes sense - they should. But testing is not owned by one role. Everyone carries part of the responsibility.

## The Real Cost vs. Benefit

There are some upfront costs to writing API tests. For the task API, it added a bit of extra time during development to think through scenarios, handle authentication in tests, and set up realistic test data.

Based on my experience on similar projects, this upfront effort usually pays for itself fairly quickly. I’ve often seen these tests catch issues before they reached testing and make refactoring much less stressful when requirements changed. While I don’t have hard metrics to prove an exact break-even point, the practical benefit becomes obvious once the codebase is actively changing and multiple people are touching the same endpoints.

Rather than thinking in terms of precise timelines, I see API tests as a way to trade a small, known cost upfront for fewer surprises later.

## Where This Fits

These tests sit between unit tests and E2E tests. They verify the API contract without testing business logic (that's what unit tests do) and without testing full user journeys (that's what E2E tests do).

For the task API, this means testing "POST /task returns 201 with a valid token" - not testing TaskService logic, not testing "user completes 10 tasks end-to-end."

At scale, this distinction matters. It keeps test suites fast and maintainable. I've seen projects where everything got lumped into E2E tests, and CI took 45 minutes to run. That kills productivity (I learned this the hard way).

## How I Approached It in My Task API

For the task API, I didn't try to test everything. I focused on the core flows:

- Creating a task
- Updating a task
- Updating task status
- Input validation
- Authentication and authorization

These are the things that, if broken, would cause real issues.

Here are a few examples from the project.

### Example: Creating a Task (Authenticated)

```java
@Test
@DisplayName("Should create task successfully as authenticated user")
void shouldCreateTaskAsAuthenticatedUser() throws Exception {
    String rawPassword = "Password@123";
    User user = TestUtils.saveUser(userRepository, passwordEncoder, rawPassword);

    String token = TestUtils.loginAndGetToken(mockMvc, user.getEmail(), rawPassword);

    CreateTaskRequest request = new CreateTaskRequest();
    request.setTitle("Eat");

    mockMvc.perform(post("/task")
                    .header("Authorization", "Bearer " + token)
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(objectMapper.writeValueAsString(request)))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.message").value(Messages.TASK_CREATED))
            .andExpect(jsonPath("$.data.id").exists())
            .andExpect(jsonPath("$.data.title").value(request.getTitle()))
            .andExpect(jsonPath("$.data.status").value("PENDING"));
}
```

This test does a few important things:

- Logs in a real user and gets a token
- Calls the endpoint the same way a client would
- Verifies both the HTTP status and the response body

If someone breaks task creation, this test will fail immediately.

### Example: Creating a Task Without Authentication

```java
@Test
@DisplayName("Should fail to create task without authentication")
void shouldFailTaskCreationWithoutAuth() throws Exception {
    CreateTaskRequest request = new CreateTaskRequest();
    request.setTitle("Eat");

    mockMvc.perform(post("/task")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(objectMapper.writeValueAsString(request)))
            .andExpect(status().isUnauthorized())
            .andExpect(jsonPath("$.message").value("Not authorized"));
}
```

This protects against accidental security regressions. Without this, someone could easily remove or misconfigure security and not notice.

### Example: Updating a Task

```java
@Test
@DisplayName("Should update task title successfully")
void shouldUpdateTaskTitle() throws Exception {
    User user = TestUtils.saveUser(userRepository, passwordEncoder);
    Task task = TestUtils.saveTask(taskRepository, user);

    UpdateTaskRequest request = new UpdateTaskRequest();
    request.setTitle("Updated Task Title");

    mockMvc.perform(put("/task/" + task.getId())
                    .header("Authorization", "Bearer " +
                            TestUtils.loginAndGetToken(mockMvc, user.getEmail(), "StrongPass1"))
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(objectMapper.writeValueAsString(request)))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.data.title").value("Updated Task Title"));
}
```

This confirms that updates work and that users can only update their own data.

### Example: Updating Task Status

```java
@Test
@DisplayName("Should mark task as completed")
void shouldUpdateTaskStatus() throws Exception {
    User user = TestUtils.saveUser(userRepository, passwordEncoder);
    Task task = TestUtils.saveTask(taskRepository, user);

    mockMvc.perform(patch("/task/" + task.getId() + "/status")
                    .param("status", "COMPLETED")
                    .header("Authorization", "Bearer " +
                            TestUtils.loginAndGetToken(mockMvc, user.getEmail(), "StrongPass1")))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.data.status").value("COMPLETED"))
            .andExpect(jsonPath("$.data.completedAt").exists());
}
```

This covers a critical business rule. If task completion breaks, it's caught early.

## What About External Authentication?

Sometimes auth lives outside your service. In those cases:

- If you can, authenticate in tests (like I did here)
- If you can't, test the service logic directly instead of the controller

The goal isn't perfection. It's meaningful coverage.

Speaking of auth complications - I've worked on projects where getting tokens in tests required three different service calls and a bunch of environment setup. In those cases, we mocked the auth layer and focused on testing the business logic. Not ideal, but pragmatic.

## What These Tests Don't Catch

Be realistic about limitations. API tests like these won't catch:

- Race conditions under concurrent load
- Performance degradation (tests pass but p99 latency doubles)
- Issues in dependent services
- Data corruption that happens over time

For those, you need load testing, monitoring, chaos engineering, and proper observability. API tests are necessary but not sufficient for production confidence.

## Don't Overdo It

Not every endpoint needs heavy testing. Not every edge case needs a test. Focus on:

- Core business logic
- Security-sensitive flows
- Things that would hurt if they broke

Testing everything usually creates more maintenance work than value.

## Final Thoughts

Writing API tests in code isn't about slowing teams down. It's about giving teams confidence to move faster without constantly worrying about what might break.

The task API I built uses tests to cover authentication, creation, validation, updates, and status changes - the parts that matter most. That same idea applies whether you're using Spring Boot, Node.js, or anything else.

The reality is reliability is a shared responsibility. Tests in code do not replace thoughtful exploratory testing, and exploratory testing does not replace tests in code. When both exist, everyone's job gets easier - and systems become far less fragile.
