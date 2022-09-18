import PrototypesIcon from 'components/Icons/Prototypes'
import DailyMeetingIcon from 'components/Icons/DailyMeeting'
import SoftwareDevelopmentIcon from 'components/Icons/SoftwareDevelopment'
import IntegrationIcon from 'components/Icons/Integration'
import TestingIcon from 'components/Icons/Testing'
import QualityControlIcon from 'components/Icons/QualityControl'
import JiraIcon from 'components/Icons/Jira'
import GitHubIcon from 'components/Icons/GithubMini'

export default [
  {
    title: 'Joint Work',
    isDisabled: true,
  },
  {
    Icon: DailyMeetingIcon,
    title: 'Daily Meeting',
    description:
      'This is a key inspect and adapt meeting. We use these regular daily meetings to provide a report on the previous day’s achievements and a plan for the next day. They help to identify impediments and to clarify any issues.',
  },
  {
    Icon: PrototypesIcon,
    title: 'Estimation',
    description:
      'We estimate development time in blocks of 4-16 hours to make the process simple, more precise and transparent.',
  },
  {
    Icon: SoftwareDevelopmentIcon,
    title: 'Software\n' + 'Development',
  },
  {
    Icon: IntegrationIcon,
    title: 'Code Review',
  },
  {
    Icon: TestingIcon,
    title: 'Testing',
  },
  {
    Icon: QualityControlIcon,
    title: 'Security\n' + 'control',
    children: [
      {
        title: 'Jira',
        Icon: JiraIcon,
      },
      {
        title: 'GitHub',
        Icon: GitHubIcon,
      },
    ],
  },
  {
    title: 'Superb Result',
    isDisabled: true,
  },
]
