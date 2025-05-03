---
title: 'The Hidden Bias in Testing: When Familiarity Clouds Judgment'
slug: 'hidden-bias-testing-familiarity'
description: 'How working closely with developers can affect your objectivity as a software tester, and practical tactics to maintain your testing integrity.'
readingTime: '5 min read'
categories:
  [
    'Software Testing',
    'Quality Assurance',
    'Development Process',
    'Team Dynamics',
    'Ethics in Tech',
  ]
tags:
  [
    'bias',
    'software-testing',
    'quality-assurance',
    'test-mindset',
    'developer-collaboration',
    'cognitive-bias',
    'professionalism',
    'qa',
  ]
publishedAt: '05/03/2025'
imageUrl: 'https://images.unsplash.com/photo-1720787139289-29f45eb64c79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1pc3QlMjBvdmVyJTIwYSUyMGNsZWFyJTIwcGF0aHxlbnwwfHwwfHx8MA%3D%3D'
---

### The Relationship Challenge

As software testers, we often find ourselves at the center of the development process. Our role requires us to liaise with developers, project managers, and product owners to stay aligned with product goals, user needs, and stakeholder expectations.

To be effective, it's essential to maintain a close, cordial, and professional relationship with developers - especially during bug fixes, retesting, and regression testing.

### The Familiarity Trap

Last week, I encountered an example of this trap in action. We had an API that didn't validate correctly the field type when another is used. For the sake of confidentiality, let's call this endpoint `POST /payment` where the field 'bankAccount` is not needed if the paymentType is card. This validation is done correctly as the bankAccount was implemented to be mandatory for any payment type, even though the bank account isn't validated when the type is card, it simply returned the exact bank account you entered. When I raised this with the developer, they explained that implementing proper validation would delay the release by a week due to the possible cascading effect of the changes in the code. I understood their reasoning and nearly let it slide. Until I recalled our target users would get confused why they needed to supply bankAccount when they already supplied card info for the type of payment they selected.

This is where the trap lies. You begin to understand the rationale, even sympathise with it despite the fact that decisions were never documented or discussed with stakeholders. Over time, this can lead to overlooking real issues - discomfort that can affect the users or diminish the value of the product.

Another instance occurred during a major feature release when I noticed inconsistent error messages across the API services we used within the company. The lead developer explained it was due to multiple teams working on different services. Because we worked in entirely different teams, with different priorities, I almost rationalized it away as an acceptable compromise.

I have found myself doing this more than once; and I suspect many testers face the same challenge.

### My 2 Cents

**Remember your primary allegiance (or maintain objectivity)**:
While it's important to have a good working relationship with developers, you must also be conscious of how this can influence your decision-making. Your responsibility is not to justify a developer's actions, but to understand the system well enough to identify problems - especially those that could impact the user experience, stakeholders' expectations, or the overall value of the product. When evaluating potential issues, ask yourself: "How would a new user experience this?" not "What would my developer friend think if I report this?"

**Separate explanation from acceptance**:
Understanding why an issue exists doesn't mean it should not be addressed. Train yourself to say that you understand the constraints, but this still impacts the user experience and should be documented.

**Document unresolved concerns**:
When your observations aren't acted upon, ensure they are recorded in your testing documentation or issue tracking system. In my experience, decisions made under pressure or convenience are often forgotten - until they result in real problems. And when that happens, someone will need to be held accountable. Having a written record protects your integrity, shows that you raised the issue, and ensures the team learns from these oversights rather than repeating them.

**Regularly calibrate with users**:
Nothing cuts through familiarity bias like watching real users struggle with features that the team has rationalized as "good enough." When possible, participate in user testing sessions or review user feedback directly.

### Balancing Relationships and Responsibility

The trade of testing is not just technical - it's also very human. And we have to navigate relationships while maintaining our professional standards. The most respected testers I know have mastered this balance; they are team players who understand constraints, yet they remain unyielding advocates for quality.

What tactic have you adopted to maintain your testing objectives while working closely with development teams?
