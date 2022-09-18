import Head from 'components/head'
import Link from 'next/link'
import SubNav from 'components/SubNav'
import PageTitle from 'components/PageTitle'

import subNavList from 'datastore/Privacy_subNavList'

const Cookies = ({ metaData, brandInfo, externalTracks }) => {
  return (
    <div className="page page-cookies">
      <Head
        {...metaData}
        brandInfo={brandInfo}
        externalTracks={externalTracks}
        noindex
      />
      <SubNav className="page-cookies__nav" list={subNavList} isSticky />
      <div className="page__header container">
        <PageTitle className="page__title">
          <h1>Cookies Policy</h1>
        </PageTitle>
      </div>
      <div className="page__content">
        <div className="page-content container text">
          <p class="text-last-modified">Last modified: 12 Feb 2021</p>
          <p>
            Binerals is committed to protecting your privacy. We aim to provide
            trustworthy, industry-leading services and products so that you can
            focus on your projects and business objectives. Our approach to
            privacy is to provide you with clear information about our data
            practices. That’s why we've tried to keep legal and technical jargon
            to a minimum.
          </p>
          <p>
            This Cookie Policy explains what cookies are, what types of cookies
            are placed on your device when you visit our website and how we use
            them.
          </p>
          <p>
            This Cookie Policy does not address how we deal with your personal
            information generally. To learn more about how we process your
            personal information, please see our Privacy Policy{' '}
            <Link href="/privacy-policy">
              <a className="link">here.</a>
            </Link>
          </p>
          <h2>What are cookies’?</h2>
          <p>
            “Cookies” are very small files placed on your computer, and they
            allow us to count the number of visitors to our Website and
            distinguish repeat visitors from new visitors. They also allow us
            and third parties we work with to save user preferences, track user
            trends, and advertise to you.
          </p>
          <p>
            Cookies cannot execute programs or infect your device with computer
            viruses.
          </p>
          <p>
            A cookie typically contains the name of the domain (internet
            location) from which the cookie originated, the “lifetime” of the
            cookie (i.e., when it expires), and a randomly generated unique
            number or similar identifier that does not collect information that
            identifies the person individually, however personal information
            that we store about you may be linked to the information stored in
            and obtained from cookies.
          </p>
          <h2>What cookies do we use?</h2>
          <p>
            When you visit our site, a session ID cookie is placed on your
            computer that only lasts while you’re visiting. We also place
            persistent cookies (also known as local storage devices), so that
            Binerals remembers users and makes their login experience faster and
            easier. We may use persistent tracking cookies on your mobile
            device, mainly for security protection purposes, such as to prevent
            phishers, scammers, unauthorized login attempts and to help you
            access your hacked account. We do not use any information whilst you
            are logged o
          </p>
          <h2>Our cookies fall into these categories</h2>
          <ul className="text-list">
            <li>
              <b>Absolutely Necessary Cookies:</b> those that are strictly
              necessary to deliver the services you have requested. This
              category only includes cookies that ensure the basic
              functionalities and security features of the website.
            </li>
            <li>
              <b>Performance Cookies:</b> These cookies collect information
              about how you use Binerals' site. Such analytics help us determine
              how our site performs and ensure a smooth and trouble-free
              experience for our clients and visitors. Information collected
              includes, for example, browsers and operating systems used, the
              domain name of the website previously visited, number of visits,
              the average duration of visit, and pages viewed.
            </li>
            <li>
              <b>Functionality Cookies:</b> These Cookies allow the website to
              remember choices you make (such as your username or ID, language
              preferences, or the region you are in) and provide more
              personalized features. These Cookies can also be used to remember
              changes you have made to text size, fonts, and other customizable
              parts of web pages. They may also be used to provide services you
              have asked for, such as watching a video or commenting on a blog
              post. The information these Cookies collect may be anonymized, and
              they cannot track your browsing activity on other websites.
            </li>
            <li>
              <p>
                <b>Third-Party Cookies:</b> Binerals may also allow third-party
                service performance and retargeting Cookies such as LinkedIn
                Insight Tag, cookies which you requested via social plugins,
                Google Adwords, Facebook Pixel, etc.
              </p>
              This information can be used to improve and target advertising to
              you based on what’s relevant to you, to improve reporting on any
              advertising campaign and to avoid showing you ads you have already
              seen.
            </li>
            <li>
              <b>Other Technologies:</b> Other technologies such as web beacons
              (also calls pixel tags or clear gifs), tracking URLs or software
              development kits (SDKs) are used for similar purposes. Web beacons
              are tiny graphics files that contain a unique identifier that
              enable us to recognize when someone has visited our service or
              opened an e-mail that we have sent them. Tracking URLs are custom
              generated links that help us understand where the traffic to our
              webpages comes from. SDKs are small pieces of code included in
              apps, which function like cookies and web beacons. For simplicity,
              we also refer to these technologies as “cookies” in this Cookie
              Policy.
            </li>
          </ul>
          <h2>How can you control cookies?</h2>
          <p>There are several cookie management options available to you:</p>
          <ul className="text-list">
            <li>
              <p>
                <b>Browser and device controls:</b> Some web browsers provide
                settings that allow you to control or reject cookies or to alert
                you when a cookie is placed on your computer. The procedure for
                managing cookies is slightly different for each internet
                browser. You can check the specific steps in your particular
                browser help menu.
              </p>
              You also may be able to reset device identifiers by activating the
              appropriate setting on your mobile device. The procedure for
              managing device identifiers is slightly different for each device.
              You can check the specific steps in the help or settings menu of
              your particular device.
            </li>
            <li>
              <p>
                <b>Interest-based advertising tools:</b> You can opt-out of
                seeing online interest-based advertising from participating
                companies through the Digital Advertising Alliance, the
                Interactive Digital Advertising Alliance, or Appchoices (apps
                only).
              </p>
              Opting out does not mean you will not see advertising - it means
              you won’t see personalized advertising from the companies that
              participate in the opt-out programs. Also, if you delete cookies
              on your device after you opted out, you will need to opt-out
              again.
            </li>
            <li>
              <p>
                <b>Social Cookies:</b> to allow you to share content on social
                media, some features of this website use social media plug-ins
                (e.g., Twitter™ “Share to Twitter” or LinkedIn™ “in” buttons).
                Depending on your social media account settings, we
                automatically receive information from the social media platform
                when you use the corresponding button on our website.{' '}
              </p>
              To learn more about social media cookies, we suggest you refer to
              your social media platform’s cookie policy and privacy policy.
            </li>
          </ul>
          <p>
            <b>Google™ Cookies</b> Stuff Google Wants to Make Sure You Know
            about Google’s Data Collection Technology
          </p>
          <ul className="text-list">
            <li>
              <p>
                <b>Google™ Maps API:</b> Cookies Some features of our website
                and some of the Binerals' services rely on the use of Google™
                Maps API Cookies. Such cookies will be stored on your device.
              </p>

              <p>
                When browsing this website and using the services relying on
                Google™ Maps API cookies, you consent to the storage, collection
                of such cookies on your device, and to the access, usage, and
                sharing by Google of the data collected thereby.
              </p>

              <p>
                Google™ manages the information and your choices pertaining to
                Google™ Maps API Cookies via an interface separate from that
                supplied by your browser. For more information, please see
                <a
                  className="link"
                  trget="_blank"
                  href="https://www.google.com/policies/technologies/cookies/"
                >
                  https://www.google.com/policies/technologies/cookies/
                </a>
                .
              </p>
            </li>
            <li>
              <p>
                <b>Google Analytics:</b> We use Google Analytics, which is a
                Google service that uses cookies and other data collection
                technologies to collect information about your use of the
                website and services in order to report website trends.
              </p>
              <p>
                GA privacy policy is available at:{' '}
                <a
                  className="link"
                  target="_blank"
                  href="http://www.google.com/policies/privacy/"
                >
                  http://www.google.com/policies/privacy/
                </a>
                <br />
                You can opt-out of Google Analytics by visiting
                <a
                  className="link"
                  target="_blank"
                  href="www.google.com/settings/ads"
                >
                  www.google.com/settings/ads
                </a>{' '}
                or by downloading the Google Analytics opt-out browser add-on at{' '}
                <a
                  className="link"
                  target="_blank"
                  href="https://tools.google.com/dlpage/gaoptout"
                >
                  https://tools.google.com/dlpage/gaoptout
                </a>
                .
              </p>
            </li>
          </ul>
          <p>
            <b>You can delete cookies</b> already stored on your computer;
            however, this will have a negative impact on the usability of many
            websites.
          </p>
          <h2>Changes in cookies</h2>
          <p>
            Our use of cookies and local storage devices, including the specific
            cookie names, may change over time but will generally fall into the
            above categories. Please visit this page regularly so that you are
            aware of any changes.
          </p>
          <h2>More Info on Cookies</h2>
          <p>
            If you would like to know more about cookies, including flash
            cookies/local storage devices, the following websites provide useful
            information:
          </p>
          <ul className="text-list">
            <li>
              <a
                className="link"
                target="_blank"
                href="www.allaboutcookies.org"
              >
                www.allaboutcookies.org
              </a>
            </li>
            <li>
              <a
                className="link"
                target="_blank"
                href="https://optout.aboutads.info"
              >
                https://optout.aboutads.info
              </a>
            </li>
            <li>
              <a
                className="link"
                target="_blank"
                href="https://www.youronlinechoices.com"
              >
                https://www.youronlinechoices.com
              </a>
            </li>
            <li>
              <a
                className="link"
                target="_blank"
                href="https://youradchoices.com/appchoices"
              >
                https://youradchoices.com/appchoices
              </a>
            </li>
            <li>
              <a
                className="link"
                target="_blank"
                href="http://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html"
              >
                http://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html
              </a>
            </li>
            <li>
              <a
                className="link"
                target="_blank"
                href="https://adssettings.google.com/authenticated"
              >
                https://adssettings.google.com/authenticated
              </a>
            </li>
          </ul>
          <h2>How to contact us?</h2>
          <p>
            If you have questions about this Cookie Policy, here’s how you can
            reach us:
          </p>
          <ul className="text-list">
            <li>using our website contact form;</li>
            <li>
              by telephone, on the contact number published on our website from
              10 am to 8 pm;
            </li>
            <li>by email, using the email address published on our website.</li>
          </ul>
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

export default Cookies
