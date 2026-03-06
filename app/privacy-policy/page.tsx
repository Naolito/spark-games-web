import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Spark Games mobile applications and services. Learn how we collect, use, and protect your personal information. Commercial name of Naolito Games SL.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="March 6, 2026">

      <p><strong>Effective date: March 6, 2026</strong></p>

      <p>
        Welcome to Spark Games! This Privacy Policy explains how we collect, use, and protect your information when you play any of our mobile games and use our related services (collectively, the &quot;Games&quot; or &quot;Services&quot;).
      </p>

      <p>
        Our priority is that you have fun, which is why we only collect the strictly necessary data to provide you with the best possible experience. By downloading, accessing, or playing our Games, you agree to the data processing described in this policy.
      </p>

      <h2>1. Who is responsible for processing your data?</h2>

      <p>The data controller responsible for the personal data collected through our Games and Services is:</p>
      <ul>
        <li>Legal name: Naolito Games S.L., operating under the commercial name &quot;Spark Games&quot;</li>
        <li>Tax ID: B75552836</li>
        <li>Postal address: Avenida de Sor Teresa Prat, 15 (Polo de contenidos digitales), 29003, Málaga, Málaga, España.</li>
        <li>Contact email: <a href="mailto:contact@naolito.com">contact@naolito.com</a></li>
      </ul>

      <p><strong>Data Protection Officer (DPO):</strong></p>
      <p>
        To ensure full respect for your privacy and compliance with regulations such as the GDPR, we have designated a Data Protection Officer (DPO). If you have any legal questions or wish to exercise your privacy rights, you can contact our DPO directly:
      </p>
      <ul>
        <li>DPO email: <a href="mailto:belen@privacidadglobal.com">belen@privacidadglobal.com</a></li>
        <li>Postal attention: Marked for the attention of the &quot;Data Protection Officer&quot; at the following address: Calle Suertes Nº3 A Bajo, Villanueva del Trabuco C.P 29.313, Málaga</li>
      </ul>

      <h2>2. The data we collect</h2>

      <p>The information we obtain depends on the Services you use and falls into three categories:</p>

      <h3>A. Data you provide to us directly</h3>
      <ul>
        <li><strong>Contact information:</strong> If you reach out to our technical support, we will collect your email address and the content of your message in order to assist you.</li>
        <li><strong>Player content:</strong> Your in-game username, preferences, or avatar.</li>
      </ul>

      <h3>B. Data we collect automatically</h3>
      <p>When you play, we collect technical data to ensure the game works correctly and to save your progress:</p>
      <ul>
        <li><strong>Device data:</strong> Device model, operating system, language, and screen size.</li>
        <li><strong>Device identifiers:</strong> Your IP address and mobile advertising identifiers (such as IDFA on Apple iOS or GAID on Google Android).</li>
        <li><strong>Game usage data:</strong> Your level progress, in-app purchases, playtime, and in-game interactions.</li>
        <li><strong>Performance and error data:</strong> Application crash logs and performance data to detect and fix bugs.</li>
      </ul>

      <h3>C. Data we receive from third parties</h3>
      <ul>
        <li><strong>App stores (App Store / Google Play):</strong> When you make in-game purchases, we receive payment confirmations to deliver virtual items to you. We never have access to your banking or credit card details.</li>
        <li><strong>Social platforms (optional):</strong> If you choose to link your game account with third-party platforms (such as Apple or Google), we will receive basic information according to your privacy settings on those platforms.</li>
        <li><strong>Attribution and analytics partners:</strong> We receive aggregated and install attribution data through our MMP provider (Singular) to understand the effectiveness of our user acquisition campaigns.</li>
      </ul>

      <h2>3. Why we collect your data</h2>

      <p>We use your information for very specific purposes and under the following legal bases:</p>
      <ul>
        <li><strong>To operate the Game (Performance of contract):</strong> To create your profile, save your progress (even if you change devices), and process your in-app purchases.</li>
        <li><strong>To improve your experience (Legitimate interest):</strong> To understand how our users play, fix technical bugs, optimize performance, and provide support.</li>
        <li><strong>To measure and attribute installs (Legitimate interest):</strong> To understand which marketing channels drive game installs, so we can allocate our resources efficiently, using mobile attribution tools (MMP).</li>
        <li><strong>To keep the Game safe and fair (Legitimate interest):</strong> To detect fraud, prevent cheating (hacks), and ensure a safe environment for all players.</li>
        <li><strong>To show personalized ads (Consent):</strong> To offer our games for free, we work with advertising networks. Only with your consent do we use device identifiers to show you ads that may be relevant to you.</li>
      </ul>

      <h2>4. Who we share your data with</h2>

      <p>Besides Spark Games, your data may be securely processed by the following third parties, organized by their function:</p>

      <h3>A. Analytics and user attribution</h3>
      <p>We use these services to understand player behavior and measure the effectiveness of our acquisition campaigns:</p>
      <ul>
        <li><strong>Singular (MMP – Mobile Measurement Partner):</strong> Mobile marketing attribution and analytics platform.<br />Privacy policy: <a href="https://www.singular.net/privacy-policy/" target="_blank" rel="noopener noreferrer">https://www.singular.net/privacy-policy/</a></li>
        <li><strong>Firebase Analytics (Google):</strong> In-app user behavior analytics.<br />Privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
        <li><strong>Google Analytics (Google):</strong> Complementary usage and performance analytics.<br />Privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
      </ul>

      <h3>B. Error tracking and performance</h3>
      <p>We use these services to detect and fix technical issues in our games:</p>
      <ul>
        <li><strong>Firebase Crashlytics (Google):</strong> Detection and reporting of app errors and unexpected crashes.<br />Privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
      </ul>

      <h3>C. Advertising and monetization</h3>
      <p>We work with the following advertising networks to serve ads within the game. Only with your prior consent may these networks use device identifiers to show personalized ads. We encourage you to review their privacy policies:</p>
      <ul>
        <li><strong>AdMob (Google):</strong> Google&apos;s advertising network.<br />Privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
        <li><strong>Unity LevelPlay (Unity Technologies)</strong> — includes Unity Ads and ironSource: Unified ad mediation and monetization platform.<br />Privacy policy: <a href="https://unity.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://unity.com/legal/privacy-policy</a></li>
        <li><strong>Meta Audience Network (Meta Platforms):</strong> Meta&apos;s advertising network (Facebook/Instagram).<br />Privacy policy: <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/privacy/policy/</a></li>
        <li><strong>AppLovin:</strong> Advertising network and mobile marketing platform.<br />Privacy policy: <a href="https://www.applovin.com/privacy/" target="_blank" rel="noopener noreferrer">https://www.applovin.com/privacy/</a></li>
        <li><strong>Mintegral (Mobvista):</strong> Global advertising network.<br />Privacy policy: <a href="https://www.mintegral.com/en/privacy/" target="_blank" rel="noopener noreferrer">https://www.mintegral.com/en/privacy/</a></li>
      </ul>

      <h3>D. Platform infrastructure</h3>
      <ul>
        <li><strong>Google Play Services (Google):</strong> Platform services on Android, required for the game to function on Android devices.<br />Privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
      </ul>

      <h3>E. Legal authorities</h3>
      <p>We will share your data if formally required by law to investigate fraud, protect our rights, or comply with legal requests.</p>

      <h2>5. International data transfers</h2>

      <p>
        Most of the providers listed in the section above (including Google, Meta, AppLovin, Unity, Mintegral, and Singular) have their servers located outside the European Economic Area (EEA), primarily in the United States and, in the case of Mintegral, also in Asia.
      </p>
      <p>
        When your data is transferred outside the EEA, we ensure that appropriate safeguards are in place to protect it, in accordance with Article 46 of the GDPR. These safeguards include:
      </p>
      <ul>
        <li>Standard Contractual Clauses (SCCs) approved by the European Commission, which contractually require the recipient to protect your data to standards equivalent to those in Europe.</li>
        <li>The EU-U.S. Data Privacy Framework, where the recipient is certified under that framework.</li>
        <li>Other adequate safeguards recognized by the competent data protection authorities.</li>
      </ul>
      <p>
        You can request further information about the safeguards applicable to each transfer by contacting us at <a href="mailto:contact@naolito.com">contact@naolito.com</a> or through our DPO.
      </p>

      <h2>6. Children&apos;s privacy and parental responsibility</h2>

      <p>
        Our Games are intended for users aged 13 and over (or the equivalent minimum legal age in your jurisdiction, such as 16 in certain European countries under the GDPR). They are not designed or specifically directed at users below that age, and we do not knowingly collect personal information from them.
      </p>
      <p>
        We do not currently have an age verification system (age-gate) within the Game. It is therefore the responsibility of parents or legal guardians to supervise their children&apos;s use of mobile devices and to configure appropriate parental controls in the app stores (App Store or Google Play).
      </p>
      <p>
        If you are a parent or legal guardian and discover that your minor child has been playing and has provided us with personal information without your consent, please contact us immediately at <a href="mailto:contact@naolito.com">contact@naolito.com</a>. We will take the necessary steps to delete that information from our servers as soon as possible.
      </p>

      <h2>7. Your rights and choices (How to control your data)</h2>

      <p>You have full control over your information. Depending on your location (such as under the European GDPR), you have the right to:</p>
      <ul>
        <li><strong>Delete your account and data (Right to erasure):</strong> You can request the complete deletion of your data at any time from within the Game (Settings &gt; Privacy &gt; Delete account) or by writing to us. Please note that this will permanently delete all your progress.</li>
        <li><strong>Access, rectify, and data portability:</strong> Request a copy of the data we hold about you or correct any data that is inaccurate.</li>
        <li><strong>Opt out of personalized ads (Withdraw consent):</strong> On Apple devices (iOS), go to Settings &gt; Privacy &amp; Security &gt; Tracking and disable permission for the Game. On Android devices, go to Settings &gt; Google &gt; Ads and select &quot;Delete advertising ID&quot; or &quot;Opt out of ads personalization&quot;.</li>
        <li><strong>Lodge a complaint:</strong> If you believe we have not handled your data appropriately, you have the right to lodge a complaint with the Spanish Data Protection Agency (AEPD) or another competent supervisory authority.</li>
      </ul>

      <h2>8. Data retention and security</h2>

      <p>We maintain commercially reasonable technical and organizational measures to protect your data against unauthorized access, loss, or alteration.</p>
      <p>Data retention periods are as follows:</p>
      <ul>
        <li><strong>Account and game progress data:</strong> Retained while your account is active or the Game is installed. If you delete your account or request erasure, we will delete your data within a maximum of 30 days.</li>
        <li><strong>Technical support data (emails):</strong> Retained for a maximum of 2 years from the last contact, to handle recurring issues.</li>
        <li><strong>Billing and purchase data:</strong> Retained for the period legally required to fulfill tax and accounting obligations (generally 5 years in Spain under tax regulations).</li>
        <li><strong>Error and crash logs (Crashlytics):</strong> Retained for a maximum of 90 days, after which they are automatically deleted or aggregated.</li>
        <li><strong>Campaign attribution data (Singular):</strong> Retained in accordance with the provider&apos;s retention policy, for a maximum of 24 months.</li>
        <li><strong>Anonymized or aggregated data (usage statistics):</strong> May be retained indefinitely, as it cannot be used to identify any individual.</li>
      </ul>
      <p>Once the above periods have elapsed, or when the data is no longer necessary for the purposes described, we will securely delete or anonymize it.</p>

      <h2>9. Changes to this policy</h2>

      <p>
        We may update this Privacy Policy periodically to reflect changes in our Services or applicable laws. If we make material changes, we will update the &quot;Effective date&quot; at the top and notify you within the Game or through appropriate channels. We recommend reviewing this page from time to time.
      </p>

      <h2>10. Contact us</h2>

      <p>If you have any questions, suggestions, or wish to exercise your rights over your personal data, we are here to help:</p>
      <ul>
        <li>General Support Email: <a href="mailto:contact@naolito.com">contact@naolito.com</a></li>
        <li>Data Protection Officer (DPO) Email: <a href="mailto:belen@privacidadglobal.com">belen@privacidadglobal.com</a></li>
      </ul>

    </LegalLayout>
  );
}
