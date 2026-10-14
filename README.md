# Element Atlas

### See it. Name it. Build it.

Element Atlas is a visual learning platform that helps beginners understand website components and describe them clearly to AI coding agents.

You may recognise a feature without knowing its name: the popup before deleting a project, the message after saving, or the section that expands when clicked. Element Atlas connects those everyday descriptions to the vocabulary developers use—and explains the behaviour behind each component.

It is a personal benefit programme created to help people develop practical technology skills through exploration and building.

## Why Element Atlas Exists

AI coding tools make it easier to start building websites, but beginners still face an important challenge: knowing what to ask for.

Instructions such as “add a popup” leave many decisions open. Should it display information, collect input, or confirm a destructive action? What happens when someone cancels? How should it work on a phone or with a keyboard?

Element Atlas helps learners answer these questions before asking an agent to write code.

The goal is to make software concepts easier to understand, improve communication with AI, and encourage thoughtful problem-solving. Clearer instructions may reduce unnecessary retries and token usage, although those benefits depend on the task, model, and project.

## Who It Is For

Element Atlas is designed for:

- Beginners learning to build websites.
- Vibe coders using AI agents to turn ideas into working projects.
- Students developing their software vocabulary.
- Facilitators running practical technology workshops.
- People who want to understand the decisions behind a website’s interface.

You do not need previous programming experience to explore the platform.

## How It Works

The learning journey follows five steps:

1. **See it:** Browse a visual example of a website component.
2. **Name it:** Learn its common name and related terminology.
3. **Try it:** Interact with a demonstration to understand its behaviour.
4. **Understand it:** Learn when to use it and how it differs from similar components.
5. **Prompt it:** Adapt a clear example prompt for your own project.

The platform encourages learners to understand their requirements before asking AI to implement them.

## What You Can Explore

### Visual Component Library

The initial library introduces 12 components across four categories:

| Category | Components |
|---|---|
| Navigation | Navbar, tabs, dropdown menu |
| Forms | Text input, select, checkbox, button |
| Feedback | Inline alert, toast, confirmation dialog |
| Content | Card, accordion |

Each guide includes a visual example, a plain-language explanation, practical usage advice, a copyable prompt, and a short exercise.

### Everyday-Language Search

You can search using familiar descriptions as well as component names.

For example, searching **“popup before deleting”** helps you find a confirmation dialog. This makes the library useful even when you do not yet know the technical vocabulary.

Search currently matches the descriptions and keywords included in the library; it is not an AI-powered search engine.

### Interactive Demonstrations

Demonstrations let you explore behaviours such as:

- Switching between tabs.
- Opening a menu.
- Validating an email address.
- Selecting a topic.
- Toggling a checkbox.
- Observing a button’s loading state.
- Displaying a temporary notification.
- Confirming or cancelling a sample deletion.
- Expanding an FAQ answer.

These examples are for learning. Registration, saving, and deletion demonstrations do not submit personal information or change real project data.

### Copyable AI Prompts

Each component includes a starting prompt that describes more than its appearance.

Prompts introduce considerations such as user actions, validation, loading states, mobile layouts, keyboard accessibility, and expected outcomes.

Replace the bracketed project details and adapt the requirements before sending a prompt to your coding agent. Examples are intended to work across agents rather than depend on one AI product.

### Annotated Templates

Two starter templates show how components work together:

- **Simple landing page:** Introduces an idea using navigation, a hero section, cards, and a call to action.
- **Event registration page:** Demonstrates inputs, topic selection, optional reminders, validation, and submission feedback.

The templates explain the purpose of their parts so learners can make informed choices when designing their own pages.

## Learning to Prompt More Clearly

Element Atlas encourages a simple approach:

**Describe the problem → choose the component → define its behaviour → explain how to check the result.**

Instead of:

> Add a popup for deleting projects.

Try:

> Before deleting a project, show a confirmation dialog explaining what will be removed. Include Cancel and Delete project buttons. Cancel must preserve the project, and deletion must happen only after confirmation. Support keyboard navigation and return focus to the original control when the dialog closes.

The second instruction gives the agent clearer requirements and gives you a way to assess its work.

Learning component names is useful, but understanding behaviour is what helps you make better software decisions.

## Learning Through Practice

Element Atlas is intended for independent exploration and guided build sessions, including Elimika sessions.

A practical learning activity is to:

1. Find a component from an everyday description.
2. Explain what problem it solves.
3. Compare it with a similar component.
4. Adapt its prompt to a small project.
5. Ask an agent to implement it.
6. Check whether the result matches the intended behaviour.

This process develops observation, communication, and problem-solving alongside familiarity with AI tools.

## Project Status

Element Atlas is an initial pilot.

The current implementation includes the component library, search and category filters, demonstrations, prompts, exercises, and two annotated templates.

The platform is prepared for static hosting on Vercel. Publication depends on deployment by the project owner.

Full interaction checks across target browsers and devices, learner testing, and measurement of token savings remain part of the pilot evaluation. The project does not claim a guaranteed reduction in token usage or that any particular AI model is best.

## Built to Stay Simple

The pilot uses **HTML, CSS, and JavaScript**.

It has no required application dependencies, database, user accounts, or embedded AI service. Component explanations and prompts are stored with the source code, making the library straightforward to edit and expand.

The source is commented to help beginners understand how the page structure, styling, content, and interactions fit together.

## Exploring the Source

| File | Purpose |
|---|---|
| `index.html` | Page structure, introduction, gallery containers, template previews, and footer |
| `styles.css` | Colours, typography, layouts, component previews, and responsive styling |
| `app.js` | Learning content, search, filters, guide views, demonstrations, and prompts |
| `server.cjs` | A small server for local preview |
| `package.json` | Project information and local commands |
| `vercel.json` | Static hosting configuration |

In `app.js`, the `components` array is the main content catalogue. The `templates` object contains the annotated template content.

Start there if you want to improve explanations or add learning examples. New interactive components also need corresponding demonstration markup and behaviour.

## Run Locally

With Node.js installed, run:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

No dependency installation is required.

To check the application’s JavaScript syntax:

```bash
npm run check
```

## Deploy on Vercel

Place the project files at the root of a GitHub repository, then import that repository into Vercel.

The included configuration selects static hosting, skips the build step, and serves the project’s root directory. No environment variables or API keys are required.

If configuring the project manually, select **Other** as the framework preset, leave the build command empty, and use **`.`** as the output directory.

## Feedback and Future Contributions

Feedback is especially useful when an explanation is confusing, a demonstration behaves unexpectedly, or a familiar search phrase does not find the right component.

If issues are enabled on this repository, you can report:

- The component or page involved.
- What you expected.
- What happened.
- Your browser and device, where relevant.
- A suggested improvement or clearer explanation.

The project may open to wider contributions as the pilot develops. Useful contributions could include beginner-friendly explanations, everyday search terms, accessibility improvements, demonstrations, and carefully chosen templates.

Future additions should serve a clear learning need and keep the platform approachable.

## The Guiding Principle

Build what helps learners understand and act.

Element Atlas aims to give beginners enough vocabulary and practical understanding to make clearer decisions, direct their coding agents, and assess what those agents produce.

**See the component. Understand the choice. Build with purpose.**

## Interactive edition

Includes live component demos, editable playgrounds (button, toast, dialog, accordion, input), a prompt builder for all 12 guides, six learning challenges, a clickable page anatomy explorer, and a persistent build brief basket. Briefs and theme settings are saved only in browser local storage; no account or network submission is used. The neutral interface includes a sidebar, system sans-serif typography, and light/dark themes.

Validated with Node syntax checking and 13 headless Chrome interaction checks.
