import Head from 'components/head'
import Link from 'next/link'
import SubNav from 'components/SubNav'
import PageTitle from 'components/PageTitle'

import subNavList from 'datastore/Privacy_subNavList'

const Terms = ({ metaData, brandInfo, externalTracks }) => {
  return (
    <div className="page page-terms">
      <Head
        {...metaData}
        brandInfo={brandInfo}
        externalTracks={externalTracks}
        noindex
      />
      <SubNav className="page-terms__nav" list={subNavList} isSticky />
      <div className="page__header container">
        <PageTitle className="page__title">
          <h1>Terms and Conditions</h1>
        </PageTitle>
      </div>
      <div className="page__content">
        <div className="page-content container text">
          <ol className="numeric-list">
            <li className="numeric-list-item">
              Introduction
              <ol className="numeric-list">
                <li className="numeric-list-item">
                  These terms and conditions govern your use of this website; by
                  using this website, you accept these terms and conditions in
                  full. If you disagree with these terms and conditions or any
                  part of these terms and conditions, you must not use this
                  website
                </li>
                <li className="numeric-list-item">
                  You must be at least 18 years of age to use this website. By
                  using this website and by agreeing to these terms and
                  conditions you warrant and represent that you are at least 18
                  years of age.
                </li>
                <li className="numeric-list-item">
                  This website uses cookies. By using this website and agreeing
                  to these terms and conditions, you consent to our Binerals’
                  use of cookies in accordance with the terms of Binerals’{' '}
                  <Link href="/cookies-policy">
                    <a className="link">cookies policy</a>
                  </Link>
                  .
                </li>
              </ol>
            </li>
            <li className="numeric-list-item">
              License to use website
              <ol className="numeric-list">
                <li className="numeric-list-item">
                  Unless otherwise stated, Binerals and/or its licensors own the
                  intellectual property rights in the website and material on
                  the website. Subject to the license below, all these
                  intellectual property rights are reserved
                </li>
                <li className="numeric-list-item">
                  You may view, download for caching purposes only, and print
                  pages from the website for your own personal use, subject to
                  the restrictions set out below and elsewhere in these terms
                  and conditions.
                </li>
                <li className="numeric-list-item">
                  This website uses cookies. By using this website and agreeing
                  to these terms and conditions, you consent to our Binerals’
                  use of cookies in accordance with the terms of Binerals'
                  cookies policy.
                </li>
                <li className="numeric-list-item">
                  You must not:
                  <ol type="a" className="literal-list">
                    <li className="literal-list-item">
                      republish material from this website (including
                      republication on another website) without active, dofollow
                      link on this web page of Binerals's website
                    </li>
                    <li className="literal-list-item">
                      sell, rent or sub-license material from the website
                      without active, dofollow link on this web page of
                      Binerals' website
                    </li>
                    <li className="literal-list-item">
                      show any material from the website in public without
                      active, dofollow link on this web page of Binerals'
                      website
                    </li>
                    <li className="literal-list-item">
                      reproduce, duplicate, copy or otherwise exploit material
                      on this website for a commercial purpose without active,
                      dofollow link on this web page of Binerals' website
                    </li>
                  </ol>
                </li>
                <li className="numeric-list-item">
                  Where content is specifically made available for
                  redistribution, it may only be redistributed.
                </li>
              </ol>
            </li>
            <li className="numeric-list-item">
              Acceptable use
              <ol className="numeric-list">
                <li className="numeric-list-item">
                  You must not use this website in any way that causes or may
                  cause, damage to the website or impairment of the availability
                  or accessibility of the website; or in any way which is
                  unlawful, illegal, fraudulent or harmful, or in connection
                  with any unlawful, illegal, fraudulent or harmful purpose or
                  activity.
                </li>
                <li className="numeric-list-item">
                  You must not use this website to copy, store, host, transmit,
                  send, use, publish or distribute any material which consists
                  of (or is linked to) any spyware, computer virus, Trojan
                  horse, worm, keystroke logger, rootkit, or other malicious
                  computer software.
                </li>
                <li className="numeric-list-item">
                  You must not conduct any systematic or automated data
                  collection activities (including without limitation scraping,
                  data mining, data extraction, and data harvesting) on or in
                  relation to this website without Binerals' express written
                  consent.
                </li>
              </ol>
            </li>
            <li className="numeric-list-item">
              Restricted access
              <ol className="numeric-list">
                <li className="numeric-list-item">
                  Access to certain areas of this website is restricted.
                  Binerals reserves the right to restrict access to other areas
                  of this website, or indeed this entire website, at Binerals'
                  discretion.
                </li>
                <li className="numeric-list-item">
                  If Binerals provides you with a user ID and password to enable
                  you to access restricted areas of this website or other
                  content or services, you must ensure that the user ID and
                  password are kept confidential.
                </li>
              </ol>
            </li>
            <li className="numeric-list-item">
              User content
              <ol className="numeric-list">
                <li className="numeric-list-item">
                  In these terms and conditions, “your user content” means
                  material (including without limitation text, images, audio
                  material, video material, and audio-visual material) that you
                  submit to this website, for whatever purpose.
                </li>
                <li className="numeric-list-item">
                  You grant to Binerals a worldwide, irrevocable, non-exclusive,
                  royalty-free license to use, reproduce, adapt, publish,
                  translate and distribute your user content in any existing or
                  future media. You also grant Binerals the right to sub-license
                  these rights, and the right to bring an action for
                  infringement of these rights.
                </li>
                <li className="numeric-list-item">
                  Your user content must not be illegal or unlawful, must not
                  infringe any third party's legal rights, and must not be
                  capable of giving rise to legal action whether against you or
                  Binerals or a third party(in each case under any applicable
                  law).
                </li>
                <li className="numeric-list-item">
                  You must not submit any user content to the website that is or
                  has ever been the subject of any threatened or actual legal
                  proceedings or other similar complaints.
                </li>
                <li className="numeric-list-item">
                  Binerals reserves the right to edit or remove any material
                  submitted to this website, or stored on Binerals' servers, or
                  hosted or published upon this website.
                </li>
              </ol>
            </li>
            <li className="numeric-list-item">
              No warranties
              <ol className="numeric-list">
                <li className="numeric-list-item">
                  This website is provided “as is” without any representations
                  or warranties, express or implied. Binerals makes no
                  representations or warranties in relation to this website or
                  the information and materials provided on this website.
                </li>
                <li className="numeric-list-item">
                  Without prejudice to the generality of the foregoing
                  paragraph, Binerals does not warrant that:
                  <ol type="a" className="literal-list">
                    <li className="literal-list-item">
                      this website will be constantly available, or available at
                      all; or
                    </li>
                    <li className="literal-list-item">
                      the information on this website is complete, true,
                      accurate, or non-misleading.
                    </li>
                  </ol>
                </li>
                <li className="numeric-list-item">
                  Nothing on this website constitutes or is meant to constitute,
                  advice of any kind.
                </li>
              </ol>
            </li>
            <li className="numeric-list-item">
              Limitations of liability
              <ol className="numeric-list">
                <li className="numeric-list-item">
                  Binerals will not be liable to you (whether under the law of
                  contact, the law of torts, or otherwise) in relation to the
                  contents of, or use of, or otherwise in connection with, this
                  website
                </li>
                <ol type="a" className="literal-list">
                  <li className="literal-list-item">
                    for any indirect, special, or consequential loss; or
                  </li>
                  <li className="literal-list-item">
                    for any business losses, loss of revenue, income, profits or
                    anticipated savings, loss of contracts or business
                    relationships, loss of reputation or goodwill, or loss or
                    corruption of information or data.
                  </li>
                </ol>
                <li className="numeric-list-item">
                  These limitations of liability apply even if Binerals has been
                  expressly advised of the potential loss.
                </li>
              </ol>
            </li>
            <li className="numeric-list-item">
              Exceptions
              <ol className="numeric-list">
                <li className="numeric-list-item">
                  Nothing in this website disclaimer will exclude or limit any
                  warranty implied by law that it would be unlawful to exclude
                  or limit, and nothing in this website disclaimer will exclude
                  or limit Binerals' liability in respect of any:
                </li>
                <li className="numeric-list-item">
                  Without prejudice to the generality of the foregoing
                  paragraph, Binerals does not warrant that:
                  <ol type="a" className="literal-list">
                    <li className="literal-list-item">
                      death or personal injury caused by Binerals' negligence
                    </li>
                    <li className="literal-list-item">
                      fraud or fraudulent misrepresentation on the part of
                      Binerals; or
                    </li>
                    <li className="literal-list-item">
                      matter which it would be illegal or unlawful for Binerals
                      to exclude or limit, or to attempt or purport to exclude
                      or limit, its liability
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li className="numeric-list-item">
              Reasonableness
              <ol className="numeric-list">
                <li className="numeric-list-item">
                  By using this website, you agree that the exclusions and
                  limitations of liability set out in this website disclaimer
                  are reasonable.
                </li>
                <li className="numeric-list-item">
                  If you do not think they are reasonable, you must not use this
                  website.
                </li>
              </ol>
            </li>
            <li className="numeric-list-item">
              Unenforceable provisions
              <ol className="numeric-list">
                <li className="numeric-list-item">
                  You hereby indemnify Binerals and undertake to keep Binerals
                  indemnified against any losses, damages, costs, liabilities,
                  and expenses (including without limitation legal expenses and
                  any amounts paid by Binerals to a third party in settlement of
                  a claim or dispute on the advice of Binerals's legal advisers)
                  incurred or suffered by Binerals arising out of any breach by
                  you of any provision of these terms and conditions.
                </li>
              </ol>
            </li>
            <li className="numeric-list-item">
              Indemnity
              <ol className="numeric-list">
                <li className="numeric-list-item">
                  If any provision of this website disclaimer is, or is found to
                  be, unenforceable under applicable law, that will not affect
                  the enforceability of the other provisions of this website
                  disclaimer.
                </li>
              </ol>
            </li>
            <li className="numeric-list-item">
              Breaches of these terms and conditions
              <ol className="numeric-list">
                <li className="numeric-list-item">
                  Without prejudice to Binerals' other rights under these terms
                  and conditions, if you breach these terms and conditions in
                  any way, Binerals may take such action as Binerals deems
                  appropriate to deal with the breach, including suspending your
                  access to the website, prohibiting you from accessing the
                  website, blocking computers using your IP address from
                  accessing the website, contacting your internet service
                  provider to request that they block your access to the website
                  and/ or bringing court proceedings against you.
                </li>
              </ol>
            </li>
            <li className="numeric-list-item">
              Variation
              <ol className="numeric-list">
                <li className="numeric-list-item">
                  Binerals may revise these terms and conditions from
                  time-to-time. Revised terms and conditions will apply to the
                  use of this website from the date of the publication of the
                  revised terms and conditions on this website. Please check
                  this page regularly to ensure you are familiar with the
                  current version.
                </li>
              </ol>
            </li>
            <li className="numeric-list-item">
              Assignment
              <ol className="numeric-list">
                <li className="numeric-list-item">
                  Binerals may transfer, sub-contract, or otherwise deal with
                  Binerals' rights and/or obligations under these terms and
                  conditions without notifying you or obtaining your consent.
                </li>
                <li className="numeric-list-item">
                  You may not transfer, sub-contract, or otherwise deal with
                  your rights and/or obligations under these terms and
                  conditions.
                </li>
              </ol>
            </li>
            <li className="numeric-list-item">
              Severability
              <ol className="numeric-list">
                <li className="numeric-list-item">
                  If a provision of these terms and conditions is determined by
                  any court or other competent authority to be unlawful and/or
                  unenforceable, the other provisions will continue in effect.
                </li>
                <li className="numeric-list-item">
                  If any unlawful and/or unenforceable provision would be lawful
                  or enforceable if part of it were deleted, that part will be
                  deemed to be deleted, and the rest of the provision will
                  continue in effect.
                </li>
              </ol>
            </li>
            <li className="numeric-list-item">
              Entire agreement
              <ol className="numeric-list">
                <li className="numeric-list-item">
                  These terms and conditions constitute the entire agreement
                  between you and Binerals in relation to your use of this
                  website and supersede all previous agreements in respect of
                  your use of this website
                </li>
              </ol>
            </li>
            <li className="numeric-list-item">
              Law and jurisdiction
              <ol className="numeric-list">
                <li className="numeric-list-item">
                  You and Binerals Ltd agree that any claim or dispute relating
                  to the Website shall be governed by the law of Bulgaria and
                  brought before the courts of Sofia Bulgaria.
                </li>
              </ol>
            </li>
          </ol>
          <h2>Binerals's details</h2>
          <p>
            The full name of Binerals is Binerals LTD.
            <br />
            You can contact Binerals by email at{' '}
            <a href="mailto:hello@binerals.com" className="link">
              hello@binerals.com
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

export default Terms
