// All marketing copy lives here so product/content changes never touch components.

// Fill these in when they exist; the UI adapts automatically (empty = hidden / fallback).
export const links = {
  appUrl: '', // shows "Sign in" in the header when set
  waitlistUrl: '', // turns the main CTA into "Get early access" when set
};

export const nav = [
  ['Why Pomodot', '#why'],
  ['Product', '#product'],
  ['Views', '#views'],
  ['Roadmap', '#roadmap'],
  ['FAQ', '#faq'],
];

export const hero = {
  kicker: 'Offline-first tasks + Pomodoro · Web, Android & iOS',
  title: 'Your tasks and your focus timer, ',
  titleAccent: 'finally in sync.',
  text: 'Pomodot pairs a calm task manager with a Pomodoro timer that follows you. Start a sprint on your laptop, pause it from your phone, and keep working offline without losing a thing.',
  trust: ['Cross-device timer', 'Works offline', 'Web · Android · iOS'],
};

export const why = {
  eyebrow: 'Why Pomodot',
  title: 'Your to-do list and your timer should',
  accent: 'know each other.',
  before: {
    label: 'The usual setup',
    items: [
      'A task app here, a timer app there',
      'The timer has no idea what you’re working on',
      'Start a sprint on your laptop and your phone has no clue',
      'Lose signal and your list is stuck behind a spinner',
    ],
  },
  after: {
    label: 'With Pomodot',
    items: [
      'Tasks and focus sessions live in one place',
      'Start a Pomodoro straight from the task you picked',
      'One timer, every device — pause it from whichever is closest',
      'Everything works offline and syncs when you’re back',
    ],
  },
};

export const pillars = {
  eyebrow: 'Everything v1 is built around',
  title: 'Three things,',
  accent: 'done properly.',
  text: 'We’re not adding features for the sake of it. Pomodot v1 is about tasks you can trust, a timer you can rely on, and data that’s always there.',
  items: [
    {
      icon: 'list',
      title: 'Capture fast. Organize when ready.',
      tag: 'Tasks & projects',
      points: [
        'Quick add drops thoughts into your Inbox',
        'Move them into projects when you’re ready',
        'Subtasks, tags, priority, due dates and notes',
        'Inbox, Today, List and Kanban views',
      ],
    },
    {
      icon: 'clock',
      title: 'A Pomodoro timer that follows you.',
      tag: 'Cross-device timer',
      points: [
        'Start, pause, resume or skip from any device',
        'Link a session to the task you’re working on',
        'Custom focus and break lengths',
        'Every session logged with task, project and device',
      ],
    },
    {
      icon: 'sync',
      title: 'Works offline. Syncs when you’re back.',
      tag: 'Offline-first sync',
      points: [
        'Create, edit and complete tasks with no signal',
        'Run the timer offline, too',
        'Changes queue up and sync automatically',
        'Deleted something? 30 days to bring it back',
      ],
    },
  ],
};

export const sync = {
  eyebrow: 'The cross-device timer',
  title: 'Start on your laptop.',
  accent: 'Pause from your phone.',
  text: 'Pomodot syncs the state of your timer, not a ticking number, so every device agrees on how much time is left, even after a brief offline stretch.',
  points: [
    ['One timer, every device', 'Start, pause, skip or stop from any signed-in device. The rest update straight away.'],
    ['Survives going offline', 'Lose connection mid-sprint and your timer keeps counting. It catches up when you reconnect.'],
    ['A history you can trust', 'Each session is recorded with its task, project, time and the device that started it.'],
  ],
  devices: [
    ['Laptop', 'Started the sprint', '24:12', 'running'],
    ['Phone', 'Live, one tap to pause', '24:12', 'running'],
    ['Tablet', 'Live, one tap to skip', '24:12', 'running'],
  ],
  promise: 'Create a task on one device, edit it on another, go offline, reconnect, and trust that your data is still correct.',
};

export const workflow = {
  eyebrow: 'A rhythm you can return to',
  title: 'From scattered',
  accent: 'to settled.',
  text: 'Great work rarely happens in one giant leap. Pomodot makes it easier to begin, stay present, and finish with energy left over.',
  steps: [
    ['01', 'Capture in a second', 'Hit quick add and get it out of your head. It lands in your Inbox, no decisions required.'],
    ['02', 'Organize when you’re ready', 'Move tasks into projects and add priority, tags and a due date, or leave them in the Inbox until later.'],
    ['03', 'Focus on one thing', 'Pick a task, start a Pomodoro, then take a real break. The session is logged for you.'],
  ],
};

export const views = {
  eyebrow: 'Your work, your preferred view',
  title: 'One set of tasks,',
  accent: 'four ways to see them.',
  text: 'Switch between your Inbox, today’s plan, a simple list, or a Kanban board for each project, without duplicating a thing.',
  note: 'A full calendar is coming next.',
  tabs: {
    Today: [
      { heading: 'Overdue', pill: 'Needs attention', tasks: [['Send invoice to client', 'Due yesterday'], ['Book dentist', 'Due Mon']] },
      { heading: 'Due today', pill: 'In focus', active: true, tasks: [['Draft launch announcement', '2 Pomodoros · Writing'], ['Review pull request', 'High priority']], progress: 60 },
      { heading: 'Done', pill: 'Complete', tasks: [['Plan the day', 'Finished in 1 sprint']] },
    ],
    Inbox: [
      { heading: 'Just captured', pill: 'New', tasks: [['Look into flight prices', 'Added from phone'], ['Idea: weekly review ritual', 'Added 2 min ago']] },
      { heading: 'Organizing', pill: 'Next', active: true, tasks: [['Prepare design review', 'Move to a project'], ['Call Mom', 'Reminder · 6:00 PM']], progress: 40 },
      { heading: 'Filed away', pill: 'Sorted', tasks: [['Update portfolio', 'Moved to “Career”']] },
    ],
    List: [
      { heading: 'High priority', pill: 'High', tasks: [['Finish Q3 report', 'Due Fri · #work'], ['Renew passport', 'Due next week · #personal']] },
      { heading: 'In progress', pill: 'Doing', active: true, tasks: [['Synthesize user feedback', '18 min left in this sprint'], ['Outline launch brief', '3 subtasks']], progress: 68 },
      { heading: 'Later', pill: 'Someday', tasks: [['Learn to sketch', '#learning']] },
    ],
    Kanban: [
      { heading: 'Backlog', pill: 'Ideas', tasks: [['Research competitors', '#research'], ['Plan Q4 offsite', 'No date yet']] },
      { heading: 'Doing', pill: 'Active focus', active: true, tasks: [['Synthesize user feedback', '18 min remaining'], ['Write onboarding copy', '1 sprint to go']], progress: 68 },
      { heading: 'Done', pill: 'Complete', tasks: [['Send weekly team digest', 'Finished in one sprint']] },
    ],
  },
};

export const details = {
  eyebrow: 'Small details, deeply considered',
  title: 'Designed to protect your',
  accent: 'attention.',
  items: [
    ['keys', 'Keyboard-friendly', 'Quick add, search, start or pause the timer, all without leaving the keyboard.'],
    ['bell', 'Gentle reminders', 'Add a reminder to any task and get a quiet nudge, with soft sounds for sprints and breaks.'],
    ['trash', 'A 30-day safety net', 'Deleted a task or project by mistake? Restore it from Trash within 30 days.'],
    ['sun', 'Light, dark or system', 'Pomodot follows your theme so it feels at home on every device.'],
    ['lock', 'Your data stays yours', 'Export your data and delete your account whenever you like. No lock-in.'],
    ['clock', 'Timers your way', 'Set your own focus and break lengths, and how many sessions before a long break.'],
  ],
};

// status: 'v1' | 'next' | 'later'. Edit this list as plans change.
export const roadmap = {
  eyebrow: 'Roadmap',
  title: 'What’s in v1,',
  accent: 'and what’s next.',
  text: 'Pomodot v1 has one job: your tasks and your timer stay reliable across web, Android and iOS, online or off. Everything else is built on top of that.',
  note: 'This is a plan, not a promise. Priorities may change as we learn from real use.',
  columns: [
    {
      status: 'v1',
      label: 'Building now',
      sub: 'Pomodot v1',
      items: [
        ['Tasks & subtasks', 'Priority, due dates, notes and tags'],
        ['Inbox & projects', 'Quick capture, then organize'],
        ['Inbox, Today, List & Kanban', 'Four views over the same tasks'],
        ['Pomodoro timer', 'Custom durations, linked to tasks, with session history'],
        ['Cross-device timer', 'Start on one device, control it from another'],
        ['Task reminders', 'One reminder per task, synced to your devices'],
        ['Offline-first sync', 'Works with no signal, syncs when you’re back'],
        ['Web, Android & iOS', 'Email & password sign-in'],
      ],
    },
    {
      status: 'next',
      label: 'Up next',
      sub: 'After v1',
      items: [
        ['Sign in with Google & Apple', ''],
        ['Calendar', 'Month view, then day and week'],
        ['Recurring tasks', 'Daily, weekly, monthly and custom'],
        ['Smarter reminders', 'Multiple reminders, snooze, dismiss everywhere'],
        ['Advanced search', 'Search notes, tags and completed tasks'],
        ['Device management', 'See and sign out your devices'],
        ['More languages', 'Starting with Indian languages'],
      ],
    },
    {
      status: 'later',
      label: 'On the horizon',
      sub: 'Exploring',
      items: [
        ['Focus statistics', 'Insights from your Pomodoro history'],
        ['Multiple workspaces', 'Personal, work and team'],
        ['Due-by escalation', 'Email or Telegram nudges for what can’t slip'],
        ['More export formats', ''],
      ],
    },
  ],
};

export const faq = {
  eyebrow: 'Questions',
  title: 'Good to',
  accent: 'know.',
  items: [
    ['Is Pomodot available yet?', 'Pomodot v1 is in development. The timer on this page is a free preview that runs in your browser with no sign-up.'],
    ['Which devices will it run on?', 'v1 targets web, Android and iOS, with your tasks and your timer in sync across all three.'],
    ['Does it really work offline?', 'Yes, it’s offline-first by design. Create, edit and complete tasks and run the timer with no connection. Changes queue up and sync automatically when you’re back online.'],
    ['What if two devices change the same task?', 'Changes merge field by field, so editing a title on your phone and a due date on your laptop keeps both. If one device deletes a task while another edits it, the delete wins, and you can restore it from Trash within 30 days.'],
    ['Can I take my data with me?', 'Yes. Exporting your data and deleting your account are part of the plan, so you’re never locked in.'],
    ['What’s not in v1?', 'Calendar, recurring tasks, Google and Apple sign-in, statistics and multiple workspaces are planned for after v1. See the roadmap above.'],
  ],
};

export const cta = {
  eyebrow: 'Your next good hour starts here',
  title: 'Make room for',
  accent: 'meaningful work.',
  text: 'Try the focus timer right now, and follow along as we build the rest.',
  note: 'Free preview · no sign-up needed',
};
