# Quiz

A quiz application built with React and Tailwind CSS. This project was developed to practice state management, asynchronous UI feedback, and clean component architecture.

**Features**
- Dynamic Questions: Loads questions from a structured data set.

- Real-time Scoring: Tracks user performance throughout the session.

- Visual Feedback: Instant color-coded feedback (Success/Error) on answer selection.

- Smart UX: Prevents multiple clicks during feedback timeout and provides a full results recap at the end.

- Responsive Design: Fully optimized for mobile, tablet, and desktop using Tailwind's utility-first classes.

**Tech Stack**
- Library: React (Functional Components, Hooks)

- Styling: Tailwind CSS

- Icons/UI: Custom CSS transitions for feedback delays.

**Technical Highlights**
- State Management: Used useState to orchestrate question flow, scoring, and UI locking.

- Asynchronous Logic: Implemented setTimeout to allow users to visualize their answer's correctness before transitioning.

- Conditional Rendering: Built a multi-stage UI (Quiz -> Feedback -> Summary) within a single main component for seamless transitions.