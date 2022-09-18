import ArrowsIncreaseIcon from 'components/Icons/ArrowsIncrease'
import DiamondIcon from 'components/Icons/Diamond'
import SpecialistIcon from 'components/Icons/Specialist'
import WindowCheckedIcon from 'components/Icons/WindowChecked'
import DiamondQuoteIcon from 'components/Icons/DiamondQuote'
import MidsIcon from 'components/Icons/Mids'
import PrototypesIcon from 'components/Icons/Prototypes'
import GraphicsIcon from 'components/Icons/Graphics'
import PlanFactIcon from 'components/Icons/PlanFact'
import WireframeIcon from 'components/Icons/Wireframe'
import DesignIcon from 'components/Icons/Design'
import PrototypeIcon from 'components/Icons/Prototype'
import DesignKitIcon from 'components/Icons/DesignKit'
import IntegrationIcon from 'components/Icons/Integration'
import ShoutWithLetterIcon from 'components/Icons/ShoutWithLetter'
import ManagementIcon from 'components/Icons/Management'
import CampaignManagementIcon from 'components/Icons/CampaignManagement'
import DocumentationIcon from 'components/Icons/Documentation'
import SoftwareDevelopmentIcon from 'components/Icons/SoftwareDevelopment'
import QualityControlIcon from 'components/Icons/QualityControl'
import TechnologiesIcon from 'components/Icons/Technologies'
import ProductAdaptationIcon from 'components/Icons/ProductAdaptation'

import ProcessStep1 from 'components/Process/ui/ProcessStep1'
import ProcessStep2 from 'components/Process/ui/ProcessStep2'
import ProcessStep3 from 'components/Process/ui/ProcessStep3'
import ProcessStep4 from 'components/Process/ui/ProcessStep4'

export default [
  {
    path: 'idea',
    ContentComponent: ProcessStep1,
    button: 'Idea Evaluation',
    title: 'Idea analysis, requirement gathering and planning',
    description: [
      'We worked with many startups and evaluated hundreds of ideas. Our analyst works closely with you to understand your business processes. We analyze gathered data, judge an idea against pre-defined criteria that we formed over these years.',
      'At the final stages, we prepare a vision of the solution and specification, so you and the programmers understand how the solution will run. Documentation is an integral part of software engineering. Types of documentation include:',
    ],
    tags: [
      {
        title: 'Market Research',
      },
      {
        title: 'Swot',
      },
      {
        title: 'Business Model Canvas (BMC)',
      },
      {
        title: 'SRS',
      },
      {
        title: 'ERD',
      },
    ],
    experts: [
      {
        description: 'Increase software development speed',
        additionalPercents: '+85%',
      },
      {
        description: 'Reduce the chances of exceeding the project budget',
        additionalPercents: '-72%',
      },
      {
        description:
          'Maximize ROI and increase the probability of product-market fit by',
        additionalPercents: '+68%',
      },
    ],
    workflow: [
      {
        title: 'Initial\n' + 'Negotiations',
      },
      {
        Icon: PrototypesIcon,
        title: 'Requirements\n' + 'gathering',
        description:
          'Everyone on the same page\n' + '100% scope of work defined',
      },
      {
        Icon: GraphicsIcon,
        title: 'Analysis\n' + '& Specs',
        description:
          'Expertise mapping, roadmap development, SRS/DRS creation\n' +
          '100% requirements described',
      },
      {
        Icon: PlanFactIcon,
        title: 'Requirement\n' + 'Visualization',
        description: 'Building diagrams\n' + '100% problem areas defined',
      },
      {
        Icon: WindowCheckedIcon,
        title: 'Project\n' + 'Estimation',
        description:
          'Cost estimation, Resource availability, and allocation\n' +
          '100% resources defined',
      },
    ],
  },
  {
    path: 'design',
    ContentComponent: ProcessStep2,
    button: 'UX / UI Design Concept',
    title: 'UX Strategy',
    description: [
      "Once the idea is validated, we start work on your product's visual aspect based on the info we've got on the first stage. We thoroughly study every user case to design how this software will look and how it will function. We create a wireframe to demonstrate what UI elements will exist on the screen, how they will be arranged, and visualize the navigation path.",
      'On the next step, we put the design on the wireframe to show aesthetics. Finally, we make a full-fledged prototype to test with users and get valuable feedback before committing ideas to code.',
    ],
    tags: [
      {
        title: 'Wireframing',
      },
      {
        title: 'Design',
      },
      {
        title: 'Prototypes',
      },
      {
        title: 'Brand & Identity',
      },
      {
        title: 'UI Design & UI Kit',
      },
      {
        title: 'Navigation Concept',
      },
    ],
    experts: [
      {
        description: 'Increase software development speed',
        additionalPercents: '+30%',
      },
      {
        description: 'Increase CTR and CR by implementing unique designs',
        AdditionalIcon: ArrowsIncreaseIcon,
      },
      {
        description:
          'Reduce the chances of building duplicate or unnecessary content',
        AdditionalIcon: DiamondIcon,
      },
    ],
    workflow: [
      {
        title: 'Design\n' + 'requirements',
      },
      {
        Icon: WireframeIcon,
        title: 'Wireframe',
        description:
          'User navigation, interface arrangement\n' +
          '100% product structure defined',
      },
      {
        Icon: DesignIcon,
        title: 'Design',
        description: 'Wireframe visualization\n' + '100% product look defined',
      },
      {
        Icon: PrototypeIcon,
        title: 'Prototype',
        description:
          'UI / UX prototyping, live feedback\n' + '100% problem areas defined',
      },
      {
        Icon: DesignKitIcon,
        title: 'Design Kit',
        description: 'Branding and identity\n' + '100% UI library defined',
      },
    ],
  },
  {
    path: 'management',
    ContentComponent: ProcessStep3,
    button: 'Management and Development',
    title: 'Project Management & Development',
    description: [
      'Once Product specifications and designs are ready, we can kick off with product development. Our Project managers work closely with engineers to complete a project within the established goals on time, budget, and scope.',
      'Coding undergoes seven phases: analyzing, designing, coding, code review, debugging and testing, implementing, and maintaining application software. Progress tracked in the task tracker, bug tracker, and the project wiki.',
    ],
    tags: [
      {
        title: 'Task tracker',
      },
      {
        title: 'Meetings',
      },
      {
        title: 'Crowd Testing',
      },
      {
        title: 'Feedback & Improvements',
      },
      {
        title: 'Development',
      },
      {
        title: 'Code review',
      },
    ],
    experts: [
      {
        Icon: SpecialistIcon,
        description: 'BEST SPECIALISTS',
        additionalText: '80% of engineers at Binerals are senior level',
      },
      {
        Icon: DiamondQuoteIcon,
        description: 'SUPREME QUALITY',
        additionalText: 'Quality of code is guaranteed',
      },
      {
        Icon: WindowCheckedIcon,
        description: 'COST-EFFICIENT',
        additionalText: 'x2 times cheaper than\n' + 'in-house team',
      },
    ],
    workflow: [
      {
        title: 'Start Working',
      },
      {
        Icon: SoftwareDevelopmentIcon,
        title: 'Software Development',
      },
      {
        Icon: QualityControlIcon,
        title: 'Quality Control',
      },
      {
        Icon: ManagementIcon,
        title: 'Management',
      },
      {
        Icon: TechnologiesIcon,
        title: 'Delivery & Deployment',
      },
      {
        Icon: ProductAdaptationIcon,
        title: 'Payment & Warranty',
      },
    ],
  },
  {
    path: 'growth',
    ContentComponent: ProcessStep4,
    button: 'Product Growth',
    title: 'Product Growth',
    description: [
      'Outsource your marketing to our experts. Our marketing managers contributed to the online success of hundreds of brands: large and small. We offer full service marketing solutuions from marketing strategies, branding to advertising.',
      'We leverage online marketing tactics such as social media marketing, search marketing, app marketing, push, and email marketing.',
    ],
    tags: [
      {
        title: 'Marketing Strategy',
      },
      {
        title: 'White Label',
      },
      {
        title: 'Listing',
      },
      {
        title: 'Affiliate program',
      },
      {
        title: 'Promotion',
      },
      {
        title: 'Branding',
      },
    ],
    experts: [
      {
        Icon: MidsIcon,
        description: 'FULL-SERVICE SOLUTION',
        additionalText: 'We cover all existing\n' + 'grows channels',
      },
      {
        Icon: ArrowsIncreaseIcon,
        description: 'HUGE\n' + 'BUDGETS',
        additionalText: 'We manage 6-figure ad spend budgets',
      },
      {
        Icon: SpecialistIcon,
        description: 'DEDICATED MANAGERS',
        additionalText: 'Fully committed to your cause',
      },
    ],
    workflow: [
      {
        title: 'Start\n' + 'Working',
      },
      {
        Icon: IntegrationIcon,
        title: 'Market research',
        description:
          'Keywords\n' +
          'Ads (banners, videos, etc)\n' +
          'LPs (tours, pre-sells, etc) ',
      },
      {
        Icon: ShoutWithLetterIcon,
        title: 'Promo materials\n' + 'creation',
        description:
          'Tech task, Designing, Build\n' +
          'Texts, Banners, Email creatives, Landers',
      },
      {
        Icon: ManagementIcon,
        title: 'Campaign setup',
        description: 'tools, ad accounts, proxies, etc',
      },
      {
        Icon: CampaignManagementIcon,
        title: 'Campaign Management & Optimization',
        description: 'Split testing\n' + 'KPIs evaluation  \n' + 'Scaling',
      },
      {
        Icon: DocumentationIcon,
        title: 'Reports',
        description: 'Daily, Weekly, Monthly reports and feedback.',
      },
      {
        Icon: ArrowsIncreaseIcon,
        title: 'Goal\n' + '(DAU, MAU,\n' + 'ROI, $$$)',
      },
    ],
  },
]
