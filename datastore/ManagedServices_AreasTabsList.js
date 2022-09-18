import Web from 'components/Icons/WebMini'
import Mobile from 'components/Icons/MobileEmpty'
import Network from 'components/Icons/Network'
import AreasTabsContent from 'components/ManagedServices/ui/AreaTabContent'

export default [
  {
    Icon: Web,
    title: 'Web',
    tabComponent: AreasTabsContent,
    checkboxes: [
      [
        'Website',
        'Web Application',
        'Bookings Website',
        'Online Store',
        'Corporate Website',
      ],
      [
        'Integration with third-party services',
        'Social services',
        'Website improvement and modification',
        'Analytics & report',
      ],
    ],
  },
  {
    Icon: Mobile,
    title: 'Mobile',
    tabComponent: AreasTabsContent,
    checkboxes: [
      [
        'iOS',
        'Android',
        'Service or website mobile app',
        'Game app',
        'Payment systems integration',
        'Publishing & maintenance',
      ],
    ],
  },
  {
    Icon: Network,
    title: 'Other',
    tabComponent: AreasTabsContent,
    checkboxes: [
      [
        'Big Data',
        'Security',
        'Business Intelligence',
        'ERP systems',
        'CMS',
        'CRM',
      ],
      [
        'DevOps',
        'Analytics',
        'DeepFake',
        'AI & Machine Learning',
        'Analytics',
        'Other',
      ],
    ],
  },
]
