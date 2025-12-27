---
title: "You're Not Testing the Whole System"
slug: 'testing-dependent-systems'
description: 'A testing story about how a payment bug slipped through because we only observed our own layer - and what it taught me about testing distributed systems.'
publishedAt: '12/26/2025'
imageUrl: 'https://images.unsplash.com/photo-1636361479581-5ab1a7a72beb?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
readingTime: '6 min read'
categories:
  - Software Testing
  - API Testing
  - Distributed Systems
  - Quality Assurance
tags:
  - integration testing
  - payment testing
  - distributed systems testing
  - retry logic
  - idempotency
  - test strategy
  - system dependencies
  - downstream testing
  - testing assumptions
  - QA best practices
---

# You're Not Testing the Whole System

_This uses a fictionalised system and abstracted details to illustrate a testing lesson. No real company, product, or incident is described._

---

"You can never understand everything. But you should push yourself to understand the system."

I came across this quote a while back, and I didn't think much of it until we found a bug that made me realize how true it was.

## The setup

I joined a project testing a payment processing API - let's call it Sendit. Pretty straightforward setup: users initiate bank transfers from their wallet, and the system handles getting the money to the destination account. This meant integrating with a wallet service (for debiting funds) and a transfer processing service (for actually moving the money).

The testing strategy focused on the usual suspects: duplicate transactions, incorrect charges, wallet validation, handling insufficient balances, verifying success and failure responses, making sure reversals work when things go wrong. Standard payment testing stuff. Most of these tests stayed within Sendit itself - we didn't need to know the intimate details of how the wallet or transfer services worked internally. Or so we thought.

## The bug

The bug showed up in the retry logic.

Here's what was supposed to happen: Sendit sends a request to the transfer service. Sometimes the transfer service returns an initial failure - not a final "this will never work" failure, but more like "something went wrong, check back later." Sendit would then requery the transaction to see if it eventually succeeded or failed.

Sounds reasonable, right?

Except here's what was actually happening: every time Sendit requeried, it wasn't just checking the status of the original transfer. It was creating and sending a brand new transfer request.

So if Sendit retried five times, the recipient got paid five times. But in Sendit's records? Just one transaction.

## How we missed it

When we discovered this, my first thought was "how did we miss this?" We tested retries. We tested failure scenarios. We verified that Sendit showed the correct transaction state. Everything looked fine from where we were standing.

The problem was where we were standing.

We made an assumption: if Sendit shows one transaction, then only one transaction exists everywhere. That assumption was wrong. If we'd been watching the transfer service's database or logs while testing, we would've seen multiple records being created with each retry. But we weren't looking there, so we didn't see it.

This happens more often than I'd like to admit. You join a project where systems are already running, integrations seem stable, and you trust that the existing setup basically works. There's this subtle bias that creeps in: "People are already using this. It's been working. Maybe I don't need to dig into how that other service handles things."

Sometimes you don't even get full context on what was implemented before you arrived. The idea to check downstream state might not even occur to you - not because you're careless, but because you're working with incomplete information and reasonable assumptions that turn out to be wrong.

I don't think I'm alone in this. We all carry assumptions into testing, often without realizing it. They shape what we look for and where we look for it.

## What it means

What I learned is that the systems your system depends on aren't separate - they're part of what you're testing. You don't need to understand every detail of how they work, but you need to understand enough to reason about things like: What happens when we retry? Are operations idempotent? What side effects cross system boundaries? How does state transition in failure scenarios?

Retries sound harmless - you're just asking again, right? But every retry is a potential side effect. In payment systems, there's a critical difference between "check if this transaction succeeded" (safe to repeat) and "create a new transaction" (definitely not safe to repeat). When you only observe your own layer, you can miss that distinction entirely.

## What changed

This experience brought things into perspective for me. I already knew these principles in theory - challenge assumptions, look beyond your immediate scope, understand the dependencies. But this made them real. Now I pay more attention to things like: Can I see what's happening in downstream systems? Are there logs or databases I should be monitoring during testing? What actually happens when requests cross system boundaries?

If you're testing a system with integrations and no one's checking what happens downstream - it might be worth asking for that visibility. Even if it seems like extra work or outside your direct scope.

Because here's the thing: testing has to involve the dependent systems. They're not separate from what you're testing - they are part of it. You don't need to become an expert in how they work, but you need enough visibility to spot when things go wrong across boundaries.

And even then, there are always more problems to find. Systems change, new integrations get added, failure modes you never imagined suddenly become real. Testing isn't about following a perfect process that catches everything - it requires creativity. You need to imagine scenarios that aren't in the documentation, question what "should" work, and look in places others haven't thought to check.

Understanding the system gives you the foundation. Creativity helps you find the problems hiding in the gaps.
