
export type FaqCategoryId =
  | "getting-started"
  | "workspaces"
  | "roles"
  | "account"
  | "sync"
  | "privacy";

export type Faq = {
  category: FaqCategoryId;
  question: string;
  /** Plain text answer; also used for search matching. */
  answer: string;
};

export const faqs: Faq[] = [
  // Getting started
  {
    category: "getting-started",
    question: "What is Spendwise?",
    answer:
      "Spendwise is a simple expense tracker for you and the people you share money with. Log expenses in seconds, sort them by category, and see where your money goes. You can use it alone or create shared workspaces for family, roommates or trips.",
  },
  {
    category: "getting-started",
    question: "How do I add my first expense?",
    answer:
      "Open the app, choose a workspace, and tap the add button. Enter the amount, pick a category, add a note if you like, and save. It appears instantly and syncs to everyone in the workspace.",
  },
  {
    category: "getting-started",
    question: "Is Spendwise free?",
    answer:
      "Yes, Spendwise is free to start. If we ever add paid features we will tell you clearly before you are charged.",
  },
  {
    category: "getting-started",
    question: "Which devices can I use?",
    answer:
      "Spendwise is available on Android through Google Play, and an iOS version is on the way. Sign in with the same account on any device to see your data.",
  },

  // Workspaces
  {
    category: "workspaces",
    question: "What is a workspace?",
    answer:
      "A workspace is a shared space for expenses, such as your home, a trip or a side project. Everyone in it sees the same expenses, updated as they happen. One account can have as many workspaces as you need and you can switch between them from the workspace switcher.",
  },
  {
    category: "workspaces",
    question: "How do I invite someone to my workspace?",
    answer:
      "Open your workspace, create an invite link, choose the role the new person should get (Admin, Editor or Viewer), and send the link by any messaging app. When they open it, they can join with that role.",
  },
  {
    category: "workspaces",
    question: "An invite link isn't working. What should I do?",
    answer:
      "Make sure the person has the latest version of Spendwise installed and is signed in. If the link was removed or replaced by an Admin it will no longer work, so ask the Admin to create a new one. Still stuck? Contact us and include the workspace name.",
  },
  {
    category: "workspaces",
    question: "How do I leave or remove someone from a workspace?",
    answer:
      "You can leave a workspace from its settings. Admins can remove other members at any time. Expenses a person added stay in the workspace unless an Admin deletes them.",
  },

  // Roles
  {
    category: "roles",
    question: "What can each role do?",
    answer:
      "Admins manage everything, including members, roles and invite links. Editors can add and edit expenses. Viewers can see the workspace but can't change anything.",
  },
  {
    category: "roles",
    question: "Can I change someone's role later?",
    answer:
      "Yes. Admins can change a member's role at any time from the workspace's member list, and the new permissions apply straight away.",
  },
  {
    category: "roles",
    question: "Why can't I edit or add expenses?",
    answer:
      "You are probably a Viewer in that workspace. Ask an Admin to change your role to Editor.",
  },

  // Account
  {
    category: "account",
    question: "Which sign-in methods are supported?",
    answer:
      "You can sign in with email, Google or Apple. Pick whichever you prefer when you sign up.",
  },
  {
    category: "account",
    question: "I can't sign in. What can I try?",
    answer:
      "Check that you are using the same method you signed up with, for example Google or Apple rather than email. Make sure you have an internet connection for the first sign-in, and update the app to the latest version. If you use email and forgot your password, use the password reset option on the sign-in screen.",
  },
  {
    category: "account",
    question: "I used Sign in with Apple and hid my email. How do I find my account?",
    answer:
      "Apple gives us a private relay address instead of your real email. Always sign in with Apple again to reach the same account. If you need help, contact us from the email linked to your Apple ID and tell us your workspace names.",
  },
  {
    category: "account",
    question: "How do I delete my account?",
    answer:
      "You can delete your account from the app's settings. If you can't, email us and we'll do it for you. Deleting your account removes your profile and personal workspaces. Expenses you added to shared workspaces may remain there without your profile details.",
  },

  // Sync & offline
  {
    category: "sync",
    question: "Does Spendwise work offline?",
    answer:
      "Yes. Spendwise keeps a copy of your data on your device, so you can view and add expenses without a connection. Changes upload automatically when you are back online.",
  },
  {
    category: "sync",
    question: "My expenses aren't showing up for other members.",
    answer:
      "Changes made offline reach others only after your device syncs. Connect to the internet and keep the app open for a moment. Ask the other person to do the same so they receive the latest data.",
  },
  {
    category: "sync",
    question: "Will I lose data if I uninstall the app?",
    answer:
      "Your synced data is safe in the cloud and returns when you sign in again. Anything that has not synced yet, for example expenses added while offline, can be lost, so reconnect before uninstalling.",
  },

  // Privacy
  {
    category: "privacy",
    question: "Who can see my expenses?",
    answer:
      "Only members of the workspace the expense belongs to. Your workspaces stay private until you invite someone, and each member sees only what their workspace shares.",
  },
  {
    category: "privacy",
    question: "Where is my data stored?",
    answer:
      "On your device for fast, offline access, and in the cloud in a Supabase database. Syncing between the two is handled by PowerSync. Read the Privacy Policy for the full picture.",
  },
  {
    category: "privacy",
    question: "Do you sell my data or show ads?",
    answer:
      "No. We don't sell your personal information and we don't show ads.",
  },
];

export type FaqCategory = {
  id: FaqCategoryId;
  title: string;
  blurb: string;
  /** Pastel palette taken from the home page feature cards. */
  className: string;
  iconName:
    | "Rocket"
    | "UsersRound"
    | "UserShield"
    | "KeyRound"
    | "RefreshCw"
    | "Lock";
};

export const faqCategories: FaqCategory[] = [
  {
    id: "getting-started",
    title: "Getting started",
    blurb: "The basics",
    className: "bg-[#a5f5cc] text-[#012d20]",
    iconName: "Rocket",
  },
  {
    id: "workspaces",
    title: "Workspaces & invites",
    blurb: "Share with your people",
    className: "bg-violet-200 text-violet-950",
    iconName: "UsersRound",
  },
  {
    id: "roles",
    title: "Roles & permissions",
    blurb: "Admin, Editor, Viewer",
    className: "bg-[#ffe1b8] text-[#441606]",
    iconName: "UserShield",
  },
  {
    id: "account",
    title: "Account & sign-in",
    blurb: "Email, Google, Apple",
    className: "bg-[#bde0fa] text-[#0b2a46]",
    iconName: "KeyRound",
  },
  {
    id: "sync",
    title: "Sync & offline",
    blurb: "Works without signal",
    className: "bg-[#fbcdcd] text-[#420d0d]",
    iconName: "RefreshCw",
  },
  {
    id: "privacy",
    title: "Privacy & data",
    blurb: "You're in control",
    className: "bg-muted text-foreground",
    iconName: "Lock",
  },
];

