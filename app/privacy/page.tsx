import type { Metadata } from "next";
import type { ElementType, ReactNode } from "react";
import { Database, EyeOff, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { AppUtil } from "@/lib/app_util";
import { cn } from "@/lib/utils";
import PageShell from "@/components/legal/page-shell";
import PageHeader from "@/components/legal/page-header";
import LegalDocument, {
  InfoRow,
  List,
  Note,
  P,
  SupportEmail,
  Sub,
  TextLink,
  type LegalSection,
} from "@/components/legal/legal-document";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${AppUtil.appName} collects, stores and protects your information.`,
  alternates: { canonical: "/privacy" },
};

const app = AppUtil.appName;

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Who we are and what this covers",
    content: (
      <>
        <P>
          This policy explains how {AppUtil.legalName} (“we”, “us”) handles your
          personal information when you use the {app} mobile app and this
          website. {app} is an expense tracker that lets you log spending on
          your own or in shared workspaces with other people.
        </P>
        <P>
          For data protection purposes we are the controller of the information
          described below. You can reach us any time at <SupportEmail />.
        </P>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: (
      <>
        <Sub>Account information</Sub>
        <List>
          <li>
            Your <strong>email address</strong>, whichever sign-in method you
            choose.
          </li>
          <li>
            If you sign in with <strong>Google</strong> or{" "}
            <strong>Apple</strong>: your name, email address and profile photo
            where the provider shares them, plus an identifier that links your
            account to that provider. With Apple you may choose to hide your
            email, in which case we only receive Apple’s private relay address.
          </li>
          <li>
            If you sign in with email and a password, the password is stored
            only as a secure hash. We never receive your Google or Apple
            password.
          </li>
        </List>

        <Sub>Content you create</Sub>
        <List>
          <li>
            Expenses (amount, date, category, description and any notes you
            add), categories, and workspace names.
          </li>
          <li>
            Workspace membership: who belongs to a workspace, their role (Admin,
            Editor or Viewer), and the invite links you create.
          </li>
        </List>

        <Sub>Technical information</Sub>
        <P>
          Like most online services, our infrastructure records standard logs
          such as IP address, app version, device type and timestamps. We use
          these to keep the service running, prevent abuse and fix bugs.
        </P>

        <Note>
          {app} does not ask for your bank logins, card numbers, contacts or
          precise location, and it does not connect to your bank accounts.
          Expenses are the ones you enter yourself.
        </Note>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How we use your information",
    content: (
      <>
        <List>
          <li>To create your account and sign you in securely.</li>
          <li>
            To store your expenses, keep them in sync across your devices, and
            show them to the people you share a workspace with.
          </li>
          <li>
            To enforce workspace roles and process invite links you send or
            accept.
          </li>
          <li>
            To respond to support requests and send essential service messages
            such as security or account notices.
          </li>
          <li>To protect the service, detect misuse and meet legal duties.</li>
        </List>
        <P>
          Our legal bases are performing our contract with you (providing the
          app), our legitimate interests in running and securing it, and
          compliance with the law. We do not use your expense data for
          advertising or to build advertising profiles.
        </P>
      </>
    ),
  },
  {
    id: "shared-workspaces",
    title: "Shared workspaces",
    content: (
      <>
        <P>
          {app} is built for sharing, so it helps to know exactly who can see
          what:
        </P>
        <List>
          <li>
            Everyone in a workspace can see its expenses and its member list,
            including each member’s display name and the email or profile photo
            they use in the app.
          </li>
          <li>
            Roles control what members can do: <strong>Admins</strong> manage
            everything, <strong>Editors</strong> add and edit expenses, and{" "}
            <strong>Viewers</strong> can only look.
          </li>
          <li>
            Anyone who has an invite link can join with the role it was created
            for, so share links only with people you trust and remove links you
            no longer need.
          </li>
          <li>
            Expenses you add belong to the workspace. If you leave, they stay
            visible to the remaining members unless an Admin deletes them.
          </li>
        </List>
        <P>A workspace is private to you until you invite someone into it.</P>
      </>
    ),
  },
  {
    id: "storage-and-sync",
    title: "How your data is stored and synced",
    content: (
      <>
        <P>
          {app} is designed to work offline and stay fast, which means your data
          lives in two places:
        </P>
        <List>
          <li>
            <strong>On your device.</strong> We use <strong>PowerSync</strong>{" "}
            to keep a local copy of the data you have access to, so you can view
            and add expenses without a connection. Uninstalling the app removes
            this local copy.
          </li>
          <li>
            <strong>In the cloud.</strong> Your account and expenses are stored
            in a <strong>Supabase</strong> database. When you are online,
            changes you make are uploaded and changes from other members are
            downloaded.
          </li>
        </List>
        <P>
          Data is encrypted in transit using TLS. Access to cloud records is
          limited by database access rules, so you can only read and change data
          for workspaces you belong to, within your role.
        </P>
      </>
    ),
  },
  {
    id: "sign-in-providers",
    title: "Sign-in providers",
    content: (
      <>
        <P>You can sign in with email, Google or Apple.</P>
        <List>
          <li>
            When you choose Google or Apple, that provider authenticates you and
            tells us who you are. Their handling of your information is governed
            by their own privacy policies.
          </li>
          <li>
            You can stop {app} from using Google or Apple at any time in your
            Google Account or Apple ID settings, but you may lose access to your{" "}
            {app} account if it relies on that sign-in method.
          </li>
        </List>
      </>
    ),
  },
  {
    id: "service-providers",
    title: "Service providers we use",
    content: (
      <>
        <P>
          We share information only with companies that help us run {app}, and
          only what they need to do their job:
        </P>
        <div className="flex flex-col gap-2">
          <InfoRow title="Supabase">
            Authentication, database and storage
          </InfoRow>
          <InfoRow title="PowerSync">
            Syncing data between your device and the cloud
          </InfoRow>
          <InfoRow title="Google">
            Sign in with Google; Google Play distribution
          </InfoRow>
          <InfoRow title="Apple">
            Sign in with Apple; App Store distribution
          </InfoRow>
          <InfoRow title="Vercel">Hosting for this website</InfoRow>
        </div>
      </>
    ),
  },
  {
    id: "sharing-and-disclosure",
    title: "Sharing and disclosure",
    content: (
      <>
        <P>
          <strong>We do not sell your personal information</strong> and we do
          not share it with advertisers. We may disclose information only:
        </P>
        <List>
          <li>to the service providers listed above, under contract;</li>
          <li>to other members of workspaces you choose to join;</li>
          <li>
            when required by law, or to protect the rights, safety and security
            of our users or the service;
          </li>
          <li>
            as part of a merger or sale of the business, in which case we will
            tell you and this policy will keep applying to your data.
          </li>
        </List>
      </>
    ),
  },
  {
    id: "retention-and-deletion",
    title: "Retention and deletion",
    content: (
      <>
        <P>
          We keep your information for as long as your account is active. You
          can delete your account from the app’s settings or by emailing{" "}
          <SupportEmail />.
        </P>
        <P>
          When an account is deleted we remove your profile and personal
          workspaces. Expenses you added to workspaces shared with others may be
          kept in those workspaces without your profile details. Backups and
          logs are cleared on a rolling schedule, normally within 30 days.
        </P>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights and choices",
    content: (
      <>
        <P>
          Depending on where you live (for example under the GDPR, UK GDPR or
          California law) you may have the right to:
        </P>
        <List>
          <li>access the personal information we hold about you;</li>
          <li>correct information that is wrong;</li>
          <li>delete your information;</li>
          <li>receive a copy of your data in a portable format;</li>
          <li>object to or restrict certain processing;</li>
          <li>withdraw consent where we rely on it.</li>
        </List>
        <P>
          To use any of these rights, email <SupportEmail />. We may need to
          verify it is really you first. If you are unhappy with how we handle
          your request you can complain to your local data protection authority.
        </P>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International transfers",
    content: (
      <P>
        Our providers may process data in countries outside your own. Where we
        transfer personal information from the EEA or UK, we rely on approved
        safeguards such as Standard Contractual Clauses or adequacy decisions.
      </P>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <P>
        We use industry-standard measures including encryption in transit,
        access controls and secure authentication. No system is perfectly
        secure, so please use a strong, unique password, keep your device
        locked, and tell us straight away if you think your account has been
        accessed without permission.
      </P>
    ),
  },
  {
    id: "children",
    title: "Children",
    content: (
      <P>
        {app} is not directed at children under 13 (or the minimum age required
        in your country). We do not knowingly collect their information. If you
        believe a child has given us personal information, contact us and we
        will delete it.
      </P>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <P>
        We may update this policy as the app evolves. When we make important
        changes we will let you know in the app or by email, and we will update
        the date at the top of this page.
      </P>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    content: (
      <P>
        Questions about privacy? Email <SupportEmail /> or visit our{" "}
        <TextLink href="/support">Help Centre</TextLink>.
      </P>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader
        icon={ShieldCheck}
        eyebrow="Legal"
        title={
          <>
            Privacy Policy
            <br />
            <span className="text-primary">your money, your data</span>
          </>
        }
        description="Plain-language answers to what we collect, where it lives, and who can see it."
        meta={`Last updated ${AppUtil.legalUpdated}`}
      />

      <SummaryCards />

      <LegalDocument sections={sections} />
    </PageShell>
  );
}

/* ----------------------------- at-a-glance cards ----------------------------- */

function SummaryCards() {
  return (
    <section aria-label="Summary" className="px-4">
      <div className="grid gap-2 md:grid-cols-3">
        <SummaryCard
          icon={Database}
          title="What we keep"
          className={cn(
            "bg-[#a5f5cc] text-[#012d20]",
            "rounded-t-4xl rounded-b-sm",
            "md:rounded-l-4xl md:rounded-r-sm",
          )}
        >
          Your email, sign-in details and the expenses and workspaces you
          create. Nothing from your bank.
        </SummaryCard>

        <SummaryCard
          icon={EyeOff}
          title="What we never do"
          className={cn("bg-violet-200 text-violet-950", "rounded-sm")}
        >
          We don’t sell your data, show ads, or use your spending to profile
          you.
        </SummaryCard>

        <SummaryCard
          icon={SlidersHorizontal}
          title="What you control"
          className={cn(
            "bg-[#ffe1b8] text-[#441606]",
            "rounded-b-4xl rounded-t-sm",
            "md:rounded-r-4xl md:rounded-l-sm",
          )}
        >
          Who joins your workspaces, what they can do, and whether your account
          exists at all.
        </SummaryCard>
      </div>
    </section>
  );
}

function SummaryCard({
  icon: Icon,
  title,
  className,
  children,
}: {
  icon: ElementType;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <article className={cn("p-6 sm:p-8 space-y-4", className)}>
      <div className="flex items-center gap-2">
        <Icon className="size-6 shrink-0" strokeWidth={2} aria-hidden="true" />
        <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      </div>
      <p className="leading-6">{children}</p>
    </article>
  );
}
