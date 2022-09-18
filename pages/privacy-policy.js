import Head from 'components/head'
import Link from 'next/link'
import SubNav from 'components/SubNav'
import PageTitle from 'components/PageTitle'

import subNavList from 'datastore/Privacy_subNavList'

const Privacy = ({ metaData, brandInfo, externalTracks }) => {
  return (
    <div className="page page-privacy">
      <Head
        {...metaData}
        brandInfo={brandInfo}
        externalTracks={externalTracks}
        noindex
      />
      <SubNav className="page-privacy__nav" list={subNavList} isSticky />
      <div className="page__header container">
        <PageTitle className="page__title">
          <h1>Privacy Policy</h1>
        </PageTitle>
      </div>
      <div className="page__content">
        <div className="page-content container text">
          <p>
            Welcome to our site and Privacy Policy. Thank you for taking the
            time to read it
          </p>
          <h2 className="no-border">Commitment</h2>
          <p>
            At Binerals, your privacy is a top priority. We appreciate that you
            put your trust in us when you provide us with your information and
            we do not take this lightly.
          </p>
          <ul className="text-list">
            <li>We do not compromise with your privacy.</li>
            <li>We strive to be transparent in the way we process your data</li>
            <li>We work hard to keep your information secure</li>
          </ul>
          <p class="text-last-modified">
            This Privacy Policy was last updated on 12 Feb 2021.
          </p>
          <p>
            Binerals Ltd., a limited liability company under Bulgarian law with
            registered office at Triaditsa region Manastirski Livadi Housing
            Estate, bl. 30, entr. A, ap. 4, Sofia, Bulgaria, registered under
            company registration number 205520779, with trade name “Binerals”
            (hereinafter: “Company”, “us”, “we”, or “our”) operates{' '}
            <a href="https://www.binerals.com" className="link">
              https://www.binerals.com
            </a>{' '}
            (the “Site”). This privacy policy applies to all of Binerals
            services and products. You should be aware that Binerals cannot be
            held responsible for the privacy policy of other sites and sources.
          </p>
          <p>
            This privacy policy ("Privacy Policy") describes the information
            collected by us, how that information may be used, with whom it may
            be shared, and your choices about such uses and disclosures. By
            using our site, mobile apps, and/or other services we provide
            (collectively, "Binerals"), you agree to the practices set forth in
            this Privacy Policy. If you do not agree with this policy, then you
            must not access or use Binerals.{' '}
          </p>
          <p>
            This privacy policy applies to all information Binerals collect from
            current and former users and visitors.
          </p>
          <p>
            We will ask you to consent to our use of cookies in accordance with
            the terms of this policy when you first visit our website.
          </p>
          <p>
            We process personal data of individuals (data subjects) in
            accordance with Regulation (EU) 2016/679 of the European Parliament
            and of the Council of 27 April 2016 on the protection of natural
            persons with regard to the processing of personal data and on the
            free movement of such data, and repealing Directive 95/46/EC
            (“GDPR”), the Bulgarian Personal Data Protection Act (“PDPA”), the
            Internal Rules of the Company for personal data protection, as well
            as the information security practices of the ISO 2700 Information
            Security Standard
          </p>
          <p>
            Binerals will act as the data controller in the framework of this
            Privacy Policy. The Company has appointed a designated data
            protection officer (“DPO”) that data subjects can contact directly
            with any inquiries relating to data protection at email:{' '}
            <a className="link" href="mailto:dpo@binerals.com">
              dpo@binerals.com
            </a>
            .
          </p>
          <h2>Introduction</h2>
          <p>
            <b>PERSONAL DATA:</b> any information relating to an identified or
            identifiable natural person (‘data subject’); an identifiable
            natural person is one who can be identified, directly or indirectly,
            in particular by reference to an identifier such as a name, an
            identification number, location data, an online identifier or to one
            or more factors specific to the physical, physiological, genetic,
            mental, economic, cultural or social identity of that natural
            person;
          </p>
          <p>
            <b>PERSONAL DATA PROCESSING:</b> any operation or set of operations
            which is performed on personal data or on sets of personal data,
            whether or not by automated means, such as collection, recording,
            organization, structuring, storage, adaptation or alteration,
            retrieval, consultation, use, disclosure by transmission,
            dissemination or otherwise making available, alignment or
            combination, restriction, erasure or destruction;
          </p>
          <p>
            <b>PERSONAL DATA SUBJECT/USER:</b> Every physical person whose
            Personal Data is being processed.
          </p>
          <p>
            <b>PLATFORM:</b> Software or software modules that operate jointly,
            being Company ownership that service the website{' '}
            <a href="www.binerals.com" className="link">
              www.binerals.com
            </a>{' '}
            .
          </p>
          <h2>Categories of Data Subjects and Data we process</h2>
          <p>
            In connection with its services and business activities, the Company
            processes personal data of the following categories of data
            subjects:
          </p>
          <ul className="text-list">
            <li>
              Existing, former and prospective clients, suppliers, agents, and
              representatives, as well as other professional experts and
              commercial counterparties, with whom we have business relations;.
            </li>
            <li>
              Complainants and enquirers, as well as individuals who contact us
              in any way, including via mail, phone, or via the contact form
              provided on our website, or provide review or feedback on our
              website;
            </li>
            <li>
              Individuals who have fallen within the scope of the video
              surveillance performed by the Company for safety and security
              purposes, as well as for the protection of property;
            </li>
            <li>Employees and job applicants.</li>
          </ul>
          <p>
            One and the same person could file simultaneously in more than one
            of the abovementioned sub-divisions.
          </p>
          <p>
            We process personal data of the above categories of data subjects.
            This data may include:
          </p>
          <ul className="text-list">
            <li>
              Personal details, such as the name of the person, contact
              information (email, phone, and address);
            </li>
            <li>
              Business activities of the data subject, information about his or
              her relationship with us or with other data subjects
            </li>
            <li>Services provided;</li>
            <li>Financial details;</li>
            <li>Education details;</li>
            <li>Employment details.</li>
            <li>
              Comments. When visitors leave comments on the site we collect the
              data shown in the comments form, and also the visitor’s IP address
              and browser user agent string to help spam detection.
            </li>
            <li>
              Media. If you upload images to the website, you should avoid
              uploading images with embedded location data (EXIF GPS) included.
              Visitors to the website can download and extract any location data
              from images on the website.
            </li>
          </ul>
          <p>
            We may also collect other information regarding your use of our
            website through cookies and other similar technologies. You can find
            out more about this below.
          </p>
          <p>
            We take seriously the protection of your privacy and
            confidentiality. We understand that you are entitled to know that
            your personal data will not be used for any purpose unintended by
            you, and will not accidentally fall into the hands of a third party.
          </p>
          <p>
            We undertake to preserve the confidentiality of all information you
            provide to us and hope that you reciprocate.
          </p>
          <p>
            Except as set out below, we do not share, or sell, or disclose to a
            third party, any information about you.
          </p>
          <h2>The basis on which we process information about you</h2>
          <p>
            We aim to process data, whether personal data or not, only to the
            extent necessary for us to provide our clients with our services and
            for other agreed purposes.
          </p>
          <p>
            Often we may aggregate information in a general way and use it to
            provide class information. If we use it for this purpose, you as an
            individual will not be personally identifiable.
          </p>
          <p>
            We process data on the basis of legitimate interests for purposes
            that include:
          </p>
          <ul className="text-list">
            <li>Managing and developing our business or services</li>
            <li>
              Informing clients and prospective clients about our services
            </li>
            <li>
              Determining relationships between clients and our partners and
              employees
            </li>
            <li>
              Analyzing whether we provide clients with a high level of service
            </li>
            <li>
              Information we process for the purposes of legitimate interests.
              We may process the information on the basis there is a legitimate
              interest, either to you or to us, in doing so. Where we process
              your information on this basis, we do after having given careful
              consideration to:
              <ul className="text-list">
                <li>
                  Whether the same objective could be achieved through other
                  means
                </li>
                <li>
                  Whether processing (or not processing) might cause you harm
                </li>
                <li>
                  Whether you would expect us to process your data, and whether
                  you would, in the round, consider it reasonable to do so
                </li>
              </ul>
            </li>
          </ul>
          <p>
            For example, we may process your data on this basis for the purposes
            of:
          </p>
          <ul className="text-list">
            <li>
              Record-keeping for the proper and necessary administration of our
              business.
            </li>
            <li>
              Responding to unsolicited communication from you to which we
              believe you would expect a response
            </li>
            <li>Protecting and asserting the legal rights of any party</li>
            <li>
              Insuring against or obtaining professional advice that is required
              to manage business risk, protecting your interests where we
              believe we have a duty to do so.
            </li>
            <li>
              Information we process because we have a legal obligation in the
              field of labor, accounting, tax, and social security legislation,
              as well as any other legal obligations applicable to the business
              activity of the Company;
            </li>
            <li>
              Sometimes, we must process your information in order to comply
              with a statutory obligation. For example, we may be required to
              give information to legal or tax authorities if they so request or
              if they have the proper authorization such as a search warrant or
              court order. This may include your personal information.
            </li>
          </ul>
          <h2>Specific uses of information</h2>
          <h3>Job application and employment</h3>
          <p>
            If you send us information in connection with a job application, we
            may keep it for up to one year in case we decide to contact you at a
            later date.
          </p>
          <p>
            If we employ you, we collect information about you and your work
            from time to time throughout the period of your employment. This
            information will be used only for purposes directly relevant to your
            employment and will be retained for six years after the end of your
            employment. Thereafter, we will retain only minimal information to
            satisfy reference requests where we believe that there is a
            legitimate interest to provide these.
          </p>
          <p>
            If we employ you, we collect information about you and your work
            from time to time throughout the period of your employment. This
            information will be used only for purposes directly relevant to your
            employment and will be retained for six years after the end of your
            employment. Thereafter, we will retain only minimal information to
            satisfy reference requests where we believe that there is a
            legitimate interest to provide these.
          </p>
          <h3>Office visitors</h3>
          <p>
            To ensure the security of customers, employees, visitors, and
            company’s property through video surveillance, and access control;
          </p>
          <p>
            If you visit our office you will be required to sign in at
            reception. We keep a record of your visit in order to maintain the
            security of our premises, your safety and the safety of other
            visitors. We keep the record of your visit only for as long as
            necessary, and in any case, for less than one year.
          </p>
          <p>
            Closed-circuit television (CCTV) may be used at our premises and the
            surrounding area in order to deter and to help investigate a crime.
          </p>
          <p>
            We may process personal information captured from CCTV, including
            images and behaviors, on the basis of legitimate interests.
          </p>
          <p>
            This information may be shared with the data subject, our employees
            and agents, and the police. Our landlords and their agents may also
            use CCTV.
          </p>
          <h3>Communicating with you</h3>
          <p>
            When you contact us, whether by telephone, through our website, or
            by e-mail, we collect the data you have given to us in order to
            reply with the information you need.
          </p>
          <p>
            have given to us in order to reply with the information you need. We
            record your request and our reply in order to increase the
            efficiency of our business
          </p>
          <p>
            We keep personally identifiable information associated with your
            messages, such as your name and email address so as to be able to
            track our communications with you to provide a high-quality service.
          </p>
          <h3>Dealing with complaints</h3>
          <p>
            When we receive a complaint, we record all the information you have
            given to us.
          </p>
          <p>We use that information to resolve your complaint.</p>
          <p>
            If your complaint reasonably requires us to contact some other
            person, we may decide to give to that other person some of the
            information contained in your complaint. We do this as infrequently
            as possible, but it is a matter for our sole discretion as to
            whether we do share this information, and if we do, what that
            information is.
          </p>
          <p>
            We may also compile statistics showing information obtained from
            complaints to assess the level of service we provide, but not in a
            way that could identify you or any other person.
          </p>
          <h3>More specific purposes</h3>
          <p>
            The data subject has given their explicit consent to the processing
            of his or her personal data for one or more specific purposes, such
            as for direct marketing, participation in activities organized by
            the Company, etc. Please, note, that any consent granted may be
            withdrawn by the data subject at any time;
          </p>
          <h2>
            Use of information we collect through automated systems when you
            visit our website
          </h2>
          <h3>Cookies</h3>
          <p>
            Cookies are small text files that are placed on your computer’s hard
            drive by your web browser when you visit any website. They allow
            information gathered on one web page to be stored until it is needed
            for use on another, allowing a website to provide you with a
            personalized experience and the website owner with statistics about
            how you use the website so that it can be improved.
          </p>
          <p>
            Some cookies may last for a defined period of time, such as one day
            or until you close your browser. Others last indefinitely.
          </p>
          <p>We use cookies in the following ways:</p>
          <ul className="text-list">
            <li>to track how you use our website</li>
            <li>
              to record whether you have seen specific messages we display on
              our website
            </li>
            <li>
              to record your answers to surveys and questionnaires on our site
              while you complete them
            </li>
          </ul>
          <p>
            You may read our{' '}
            <Link href="/cookies-policy">
              <a className="link">Cookie Policy</a>
            </Link>{' '}
            for more information on why we use them
          </p>
          <h3>Personal identifiers from your browsing activity</h3>
          <p>
            Requests by your web browser to our servers for web pages and other
            content on our website are recorded.
          </p>
          <p>
            We record reported information such as your geographical location
            and your IP address. We also record reported information about the
            software you are using to browse our website, such as the type of
            computer or device and the screen resolution.
          </p>
          <p>
            We use this information in aggregate to assess the popularity of the
            webpages on our website and how we perform in providing content to
            you.
          </p>
          <p>This data cannot be used to identify you personally.</p>
          <h3>Our use of re-marketing</h3>
          <p>
            Re-marketing involves placing a cookie on your computer when you
            browse our website in order to be able to serve to you an advert for
            our products or services when you visit some other website.
          </p>
          <p>
            We may use a third party to provide us with re-marketing services
            from time to time. If so, then if you have consented to our use of
            cookies, you may see advertisements for our products and services on
            other websites.
          </p>
          <h3>Embedded content from other websites</h3>
          <p>
            Articles on this site may include embedded content (e.g. videos,
            images, articles, etc.). Embedded content from other websites
            behaves in the exact same way as if the visitor has visited the
            other website.
          </p>
          <p>
            These websites may collect data about you, use cookies, embed
            additional third-party tracking, and monitor your interaction with
            that embedded content, including tracking your interaction with the
            embedded content if you have an account and are logged in to that
            website.
          </p>
          <h2>Links</h2>
          <p>
            We may keep track of how you interact with links available on
            Binerals including third party services and clients by redirecting
            clicks or through other means. We may share aggregate click
            statistics such as how many times a particular link was clicked on.
          </p>
          <h3>Third-Party Sites</h3>
          <p>
            Binerals may contain links to other websites and services. If you
            choose to click on a third-party link, you will be directed to that
            third party's website or service. The fact that we link to a website
            or service is not an endorsement, authorization, or representation
            of our affiliation with that third party, nor is it an endorsement
            of their privacy or information security policies or practices. We
            do not exercise control over third-party websites or services. These
            third parties may place their own cookies or other files on your
            computer, collect data or solicit personal information from you.
            Other websites and services follow different rules regarding the use
            or disclosure of the personal information you submit to them. We
            encourage you to read the privacy policies or statements of the
            other websites and services you visit.
          </p>
          <h2>Disclosure and sharing of your information</h2>
          <p>
            At no moment in time will we directly sell or rent out your personal
            data to third parties.
          </p>
          <p>
            We may share your personal data with third parties who process your
            data on our behalf when they provide services to us, such as video
            surveillance services, insurance, legal services, audit,
            consultancy, development, and maintenance of IT systems (including
            but not limited to data storage), or other services necessary for
            our business activities. In the performance of these services the
            third-party suppliers may have access to your personal data but are
            only authorized to process such data strictly on our behalf and in
            accordance with our instructions.
          </p>
          <p>
            We may also disclose your personal data to third parties, if we
            reasonably believe that disclosure of such personal data is
            necessary to comply with valid legal obligations such as court
            orders, governmental requests, and as otherwise authorized by law,
            to protect our rights or property, or the safety of our customers or
            employees, to advance or defend against complaints or legal claims
            or proceedings, as well as during mergers & acquisitions, provided
            that the prospective buyer or seller agrees to respect your personal
            data in a manner consistent with GDPR and PDPA.
          </p>
          <p>
            You share your personal data with third parties when you publish
            reviews and feedback on our website. Within Binerals, personal data
            is only available to people who need to have access to it in
            relation to their job.
          </p>
          <h2>Transfer of Personal Data</h2>
          <p>
            We do not transfer your personal data outside the European Economic
            Area (“EEA”). In case we are required to undertake any transfer of
            personal data outside the EEA, we take all reasonable necessary
            steps to ensure that your personal data is treated securely and in
            accordance with this Privacy Policy and an adequate level of
            protection is applied to it, in particular through the
            implementation of standard contractual clauses approved by European
            Commission or contractual clauses previously authorized by the
            relevant authority.
          </p>
          <h2>How long we keep your data</h2>
          <p>
            Except as otherwise mentioned in this privacy policy, we keep your
            personal information only for as long as we need it for legitimate
            business purposes (as set out below) and as permitted by applicable
            law
          </p>
          <ul className="text-list">
            <li>to provide you with the services you have requested;</li>
            <li>
              to comply with applicable law, including for the period demanded
              by our tax authorities (for instance, some "traffic data" is kept
              for one year to comply with statutory data retention obligations);
            </li>
            <li>
              to evidence our compliance with applicable law (for instance,
              records of consents to our Terms, Privacy Policy, and other
              similar consents are kept for five years);
            </li>
            <li>
              there is an outstanding issue, claim, or dispute requiring us to
              keep the relevant information until it is resolved; or
            </li>
            <li>
              the information must be kept for our legitimate business
              interests, such as fraud prevention and enhancing users' safety
              and security. For example, information may need to be kept to
              prevent a user who was banned for unsafe behavior or security
              incidents.
            </li>
          </ul>
          <p>
            Please note: If you leave a comment, the comment and its metadata
            are retained indefinitely. This is so we can recognize and approve
            any follow-up comments automatically instead of holding them in a
            moderation queue.
          </p>
          <p>
            We do regular status checks to review when personal data needs to be
            deleted and have strict data retention periods determined in our
            Internal rules for personal data protection.
          </p>
          <p>
            Keep in mind that even though our systems are designed to carry out
            data deletion processes according to the above guidelines, we cannot
            promise that all data will be deleted within a specific time frame
            due to technical constraints.
          </p>
          <h2>Security of Processing</h2>
          <p>
            As the Controller, the Company has implemented technical and
            organizational measures to ensure personal data processed remains
            secure and is certified under the ISO 2700 information security
            standard. However, absolute security cannot be guaranteed, but we
            maintain security and incident response plans in the event of a
            physical or technical incident to handle this in a timely manner and
            limit any negative effect of such incident.
          </p>
          <h2>Rights of the Data Subjects</h2>
          <p>
            GDPR and PDPA afford data subjects the following rights summarized
            below:
          </p>
          <ul className="text-list">
            <li>
              Right to access your personal data: you have the right to obtain
              confirmation from us as to whether or not personal data concerning
              you are being processed, and, where that is the case, access to
              the personal data and information.
            </li>
            <li>
              Right to rectification of personal data: if you find that personal
              data that we process about you is inaccurate, you have the right
              to have us correct such personal data.
            </li>
            <li>
              Right to erasure of personal data (right to be forgotten): under
              certain circumstances, such as if your personal data has been
              unlawfully processed or you have withdrawn your consent (if the
              processing of your personal data is based on consent), you have
              the right to request and obtain the erasure of your personal data
              from us.
            </li>
            <li>
              Right to restriction of processing: under certain circumstances,
              such as if you question the accuracy of your personal data or you
              have objected to our legitimate purpose to process your personal
              data, you have the right to request that we restrict the
              processing of your personal data until a solution has been found.
            </li>
            <li>
              Right to object to processing: under certain circumstances, such
              as if you question our legitimate interest to process your
              personal data, you have the right to object, on grounds relating
              to your particular situation, to such processing.
            </li>
            <li>
              Right to data portability: if your personal data is processed by
              automated means based on your consent or for the fulfillment of
              our contractual relationship, you have the right to request that
              we provide you with personal data in a machine-readable format for
              transmission to another data controller.
            </li>
            <li>
              Right to lodge a complaint with a supervisory authority: you have
              the right to lodge a complaint regarding our processing of your
              personal data with the supervisory authority, which is the
              Bulgarian Commission for Personal Data Protection with address: 2
              Prof. Tsvetan Lazarov Blvd., Sofia 1592, Website:{' '}
              <a className="link" href="www.cpdp.bg" target="_blank">
                www.cpdp.bg
              </a>
              , Е-mail:{' '}
              <a className="link" href="mailto:kzld@cpdp.bg">
                kzld@cpdp.bg
              </a>
              .
            </li>
          </ul>
          <p>
            In order to assert any of the above rights, data subjects can
            contact our DPO using the contact details provided above, or any
            other employee of the Company at any time. We will use commercially
            reasonable efforts to respond to your request within 30 days of
            receiving such a request. If we cannot honor your request within the
            30-day period, we will let you know the reasons why and when we
            expect to be able to fulfill your request.
          </p>
          <h2>
            How You Can Access, Erase, Correct, or Restrict Your Personal Data
          </h2>
          <p>
            All requests to access, erase, correct, or restrict your Personal
            Data should be made in writing to:{' '}
            <a className="link" href="mailto:dpo@binerals.com">
              dpo@binerals.com
            </a>
          </p>
          <p>
            When we receive any request to access, edit or delete personal
            identifiable information we shall first take reasonable steps to
            verify your identity before granting you access or otherwise taking
            any action. This is important to safeguard your information.
          </p>
          <p>
            When we receive any request to obtain a copy of your personal
            information, we will tell you when we expect to provide you with the
            information, and whether we require any fee for providing it to you.
          </p>
          <h2>Case of Data Breach</h2>
          <p>
            In the case of a personal data breach, the controller shall without
            undue delay and, where feasible, not later than 72 hours after
            having become aware of it, notify the personal data breach to the
            supervisory authority competent in accordance with Article 55 of
            GDPR, unless the personal data breach is unlikely to result in a
            risk to the rights and freedoms of natural persons (in Binerals’
            sole opinion). Where the notification to the supervisory authority
            is not made within 72 hours, it shall be accompanied by reasons for
            the delay.
          </p>
          <h2>Compliance with the law</h2>
          <p>
            Our privacy policy has been compiled so as to comply with the law of
            every country or legal jurisdiction in which we aim to do business.
            If you think it fails to satisfy the law of your jurisdiction, we
            should like to hear from you.
          </p>
          <p>
            However, ultimately it is your choice as to whether you wish to use
            our website.
          </p>
          <h2>How you can complain</h2>
          <p>
            If you are not happy with our privacy policy or if you have any
            complaints, then you should inform us by email. Our address is{' '}
            <a className="link" href="mailto:dpo@binerals.com">
              dpo@binerals.com
            </a>
          </p>
          <p>
            If a dispute is not settled then we hope you will agree to attempt
            to resolve it by engaging in good faith with us in a process of
            mediation or arbitration.
          </p>
          <p>
            If you are in any way dissatisfied with how we process your personal
            information, you have a right to lodge a complaint with the
            Information Commissioner’s Office. This can be done at
            <a
              className="link"
              href="https://ico.org.uk/concerns/"
              target="_blank"
            >
              https://ico.org.uk/concerns/
            </a>
          </p>
          <h2>Review of our privacy policy</h2>
          <p>
            We may update this privacy notice from time to time as necessary.{' '}
          </p>
          <p>
            The most current version of the policy will govern our use of your
            information and will always be at{' '}
            <Link href="/privacy-policy">
              <a className="link">https://binerals.com/privacy-policy</a>
            </Link>{' '}
          </p>
          <p>
            By continuing to access or use our services after those changes
            become effective, you agree to be bound by the revised Privacy
            Policy.{' '}
          </p>
          <p>
            When we post changes to this Privacy Policy, we will revise the
            "last updated" date at the top of this Privacy Policy.{' '}
          </p>
          <p>
            We recommend that you check our Website from time to time to inform
            yourself of any changes in this Privacy Policy or any of our other
            policies.
          </p>
          <p>
            If you have any questions regarding our privacy policy, please email{' '}
            <a className="link" href="mailto:dpo@binerals.com">
              dpo@binerals.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

import InitialDataLoader from 'lib/InitialDataLoader'

export async function getStaticProps(_) {
  const data = await InitialDataLoader()
  return {
    revalidate: 3600, // revalidate every one hour
    props: {
      ...data,
    },
  }
}

export default Privacy
