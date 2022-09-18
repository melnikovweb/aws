import WhatsAppIcon from 'components/Icons/Whatsapp'
import SkypeIcon from 'components/Icons/SkypeMono'

import FacebookIcon from 'components/Icons/Fb'
import GitHubIcon from 'components/Icons/GithubMini'
import BehanceIcon from 'components/Icons/Behance'
import MediumIcon from 'components/Icons/Medium'
import LinkedInIcon from 'components/Icons/LinkedIn'
import DribbleIcon from 'components/Icons/Dribble'
import InstaIcon from 'components/Icons/Insta'
import TwitterIcon from 'components/Icons/Twitter'

export default {
  sections: [
    {
      links: [
        {
          title: 'Services',
          link: '/services',
          items: [
            { title: 'Business support', link: '/services#business' },
            { title: 'Technical help', link: '/services#technical' },
            { title: 'Interface design services', link: '/services#interface' },
            { title: 'Web development', link: '/services#web' },
            { title: 'IOS development', link: '/services#ios' },
            { title: 'Andriod development', link: '/services#android' },
            { title: 'Other', link: '/services#other' },
            { title: 'SEO/ASO', link: '/services#seo' },
            { title: 'Online marketing', link: '/services#marketing' },
          ],
        },
      ],
    },
    {
      links: [
        {
          title: 'Process',
          link: '/process',
          items: [
            { title: 'Idea Evaluation', link: '/process/idea' },
            { title: 'UX / UI Design Concept', link: '/process/design' },
            {
              title: 'Management and Development',
              link: '/process/management',
            },
            { title: 'Product Growth', link: '/process/growth' },
          ],
        },
        {
          title: 'Glossary',
          link: '/glossary',
        },
      ],
    },
    {
      links: [
        /* {
          title: "Services 3",
          link: "/",
          items: [
            { title: "Business support", link: "/" },
            { title: "Technical help", link: "/" },
            { title: "Interface design services", link: "/" },
            { title: "Web development", link: "/" },
            { title: "iOS development", link: "/" },
            { title: "Android development", link: "/" },
            { title: "DevOps services", link: "/" },
          ],
        }, */
      ],
    },
  ],
  tagsList: [
    {
      title: 'WhatsApp',
      Icon: WhatsAppIcon,
      href: 'whatsapp://send?text=Hello&phone=+3805096729888',
    },
    { title: 'Skype', Icon: SkypeIcon, href: 'skype:[dmitrii.zhabokritskii]' },
  ],
  socialLinks: [
    {
      Icon: FacebookIcon,
      name: 'facebook',
      link: 'https://www.facebook.com/binerals',
    },
    /* {
      Icon: TwitterIcon,
      name: "twitter",
      link: "https://www.facebook.com/binerals",
    },
    {
      Icon: InstaIcon,
      name: "instagram",
      link: "https://www.facebook.com/binerals",
    },
    {
      Icon: DribbleIcon,
      name: "dribble",
      link: "https://www.facebook.com/binerals",
    }, */
    {
      Icon: LinkedInIcon,
      name: 'linkedin',
      link: 'https://www.linkedin.com/company/69779077',
    },
    /* {
      Icon: MediumIcon,
      name: "medium",
      link: "https://www.facebook.com/binerals",
    },
    {
      Icon: BehanceIcon,
      name: "behance",
      link: "https://www.facebook.com/binerals",
    }, */
    {
      Icon: GitHubIcon,
      name: 'github',
      link: 'https://github.com/Binerals',
    },
  ],
}
