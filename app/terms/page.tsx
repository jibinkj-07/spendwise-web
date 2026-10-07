import type { Metadata } from "next";
import { Scale } from "lucide-react";
import { AppUtil } from "@/lib/app_util";
import PageShell from "@/components/legal/page-shell";
import PageHeader from "@/components/legal/page-header";
import LegalDocument, {
  List,
  Note,
  P,
  SupportEmail,
  TextLink,
  type LegalSection,
} from "@/components/legal/legal-document";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The rules for using ${AppUtil.appName}: accounts, shared workspaces, roles and more.`,
  alternates: { canonical: "/terms" },
};

const app = AppUtil.appName;

const sections: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement to these terms",
    content: (
      <>
        <P>
          These Terms & Conditions (“Terms”) are an agreement between you and{" "}
          {AppUtil.legalName} (“we”, “us”) covering your use of the {app} mobile
          app and website (together, the “Service”).
        </P>
        <P>
          By creating an account or using the Service you agree to these Terms
          and to our <TextLink href="/privacy">Privacy Policy</TextLink>. If you
          do not agree, please do not use {app}.
        </P>
      </>
    ),
  },
  {
    id: "your-account",
    title: "Your account",
    content: (
      <>
        <List>
          <li>
            You must be at least 13 years old (or the minimum age in your
            country) to use {app}. If you are under the age of majority where
            you live, you need a parent or guardian’s permission.
          </li>
          <li>
            You can sign up with email, Google or Apple. Give us accurate
            information and keep it up to date.
          </li>
          <li>
            You are responsible for keeping your sign-in details secure and for
            activity on your account. Tell us promptly at <SupportEmail /> if
            you suspect unauthorised access.
          </li>
          <li>One person per account; please don’t share your login.</li>
        </List>
      </>
    ),
  },
  {
    id: "workspaces-and-roles",
    title: "Workspaces, roles and invite links",
    content: (
      <>
        <P>
          {app} lets you create workspaces and share them with other people.
          Each member has one of three roles:
        </P>
        <List>
          <li>
            <strong>Admin</strong> can manage everything in the workspace,
            including members, roles, invite links and its expenses.
          </li>
          <li>
            <strong>Editor</strong> can add and edit expenses.
          </li>
          <li>
            <strong>Viewer</strong> can see the workspace but not change it.
          </li>
        </List>
        <P>
          Anyone who opens a valid invite link can join with the role set on
          that link, so only share links with people you trust. Admins are
          responsible for the members they invite and for the roles they assign,
          and can remove members or links at any time.
        </P>
        <Note>
          Everything you add to a shared workspace is visible to its other
          members. Don’t add anything you wouldn’t want them to see.
        </Note>
      </>
    ),
  },
  {
    id: "your-content",
    title: "Your content",
    content: (
      <>
        <P>
          “Your content” means the expenses, categories, workspace names and
          other information you add to {app}.
        </P>
        <List>
          <li>You own your content. We don’t claim ownership of it.</li>
          <li>
            You give us a limited licence to store, sync, display and process it
            as needed to run the Service, including showing it to the people in
            your workspaces.
          </li>
          <li>
            You are responsible for your content and for having the right to add
            it. Please keep it lawful and respectful.
          </li>
        </List>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    content: (
      <>
        <P>When using {app} you agree not to:</P>
        <List>
          <li>break the law or infringe anyone’s rights;</li>
          <li>
            upload harmful, abusive or deceptive content, or harass other
            members;
          </li>
          <li>
            try to access accounts, workspaces or data that aren’t yours, or
            bypass roles and permissions;
          </li>
          <li>
            probe, overload, reverse engineer or disrupt the Service or its
            security, or use bots to scrape it;
          </li>
          <li>
            use the Service to send spam or pursue unauthorised commercial
            activity.
          </li>
        </List>
      </>
    ),
  },
  {
    id: "offline-and-sync",
    title: "Offline use and syncing",
    content: (
      <>
        <P>
          {app} keeps a local copy of your data on your device so it works
          offline, then syncs with our cloud when you reconnect. This means:
        </P>
        <List>
          <li>
            Changes made offline appear for other members only after your device
            syncs.
          </li>
          <li>
            If two people change the same expense while offline, one change may
            replace the other when they sync.
          </li>
          <li>
            Uninstalling the app or clearing its data removes the local copy.
            Anything not yet synced at that point may be lost, so reconnect
            before you uninstall.
          </li>
        </List>
      </>
    ),
  },
  {
    id: "not-financial-advice",
    title: "Not financial advice",
    content: (
      <P>
        {app} is a tool for recording and organising spending. It does not
        provide financial, tax, accounting or legal advice. Totals and summaries
        are only as accurate as the information entered, so please check
        anything important before relying on it.
      </P>
    ),
  },
  {
    id: "third-party-services",
    title: "Third-party services",
    content: (
      <P>
        The Service relies on providers such as Google and Apple (sign-in),
        Supabase (data storage) and PowerSync (syncing). Their own terms apply
        to your use of their services, and we are not responsible for outages or
        changes outside our control.
      </P>
    ),
  },
  {
    id: "free-service",
    title: "Free service and changes",
    content: (
      <>
        <P>
          {app} is free to start. We may add paid features in the future; if we
          do, we will tell you clearly before you are charged and the free
          features you already use won’t suddenly become paid without notice.
        </P>
        <P>
          We may update, add or remove features over time, and may suspend the
          Service for maintenance. We’ll try to give notice of significant
          changes.
        </P>
      </>
    ),
  },
  {
    id: "termination",
    title: "Suspension and termination",
    content: (
      <>
        <P>
          You can stop using {app} and delete your account at any time from the
          app’s settings or by contacting us. See the{" "}
          <TextLink href="/privacy#retention-and-deletion">
            Privacy Policy
          </TextLink>{" "}
          for what happens to your data.
        </P>
        <P>
          We may suspend or close accounts that break these Terms, put others or
          the Service at risk, or where we are required to by law. Where
          reasonable we will tell you why.
        </P>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    content: (
      <P>
        The Service is provided “as is” and “as available”. We work hard to keep
        it reliable and your data safe, but we do not promise it will be
        uninterrupted, error-free or free from data loss. Please keep your own
        records of anything critical. Nothing in these Terms limits rights you
        have under consumer law that cannot be excluded.
      </P>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    content: (
      <>
        <P>
          To the fullest extent permitted by law, we are not liable for indirect
          or consequential losses, lost profits, or lost data arising from your
          use of the Service. Our total liability for any claim relating to the
          Service is limited to the greater of the amount you paid us in the
          previous 12 months or €50.
        </P>
        <P>
          Nothing in these Terms excludes liability that cannot be excluded by
          law, such as for death or personal injury caused by negligence, or for
          fraud.
        </P>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    content: (
      <P>
        We may update these Terms from time to time. If a change is material we
        will notify you in the app or by email before it takes effect.
        Continuing to use {app} after that means you accept the updated Terms.
      </P>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    content: (
      <P>
        These Terms are governed by the laws of {AppUtil.governingLaw}, and its
        courts will have jurisdiction over disputes, except where the law of
        your country gives you the right to bring a claim locally.
      </P>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    content: (
      <P>
        Questions about these Terms? Email <SupportEmail /> or visit the{" "}
        <TextLink href="/support">Help Centre</TextLink>.
      </P>
    ),
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <PageHeader
        icon={Scale}
        eyebrow="Legal"
        chipClassName="bg-violet-200 text-violet-950"
        title={
          <>
            Terms & Conditions
            <br />
            <span className="text-primary">simple ground rules</span>
          </>
        }
        description={`What you can expect from ${app}, and what we ask from you in return.`}
        meta={`Last updated ${AppUtil.legalUpdated}`}
      />

      <LegalDocument sections={sections} />
    </PageShell>
  );
}
