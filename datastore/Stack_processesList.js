export default [
  {
    title: 'Requirements gathering',
    descriptionList: [
      { text: 'From initial negotiations to 1 prototype to 1 contract' },
      { text: 'Scope of work is 100% defined' },
    ],
    hasAction: true,
  },
  {
    title: 'Analysis',
    descriptionList: [
      { text: 'Expertise mapping, roadmap development, SRS creation' },
      { text: '100% requirements are described' },
    ],
    hasAction: true,
  },
  {
    title: 'Design',
    descriptionList: [
      { text: 'Architecture creation, UI / UX prototyping' },
      { text: 'Product structure is defined' },
    ],
    hasAction: true,
  },
  {
    title: 'Development',
    descriptionList: [
      {
        text: 'Pull Request Analysis with SonarQube, Code cross review by developers',
      },
      { text: 'Code is 100% valid' },
      { text: 'Code quality is under full control' },
    ],
    hasAction: false,
  },
  {
    title: 'Testing',
    descriptionList: [
      { text: 'Functionality, UX, Performance, and Security testing' },
      { text: '100% of functionality covered with manual tests' },
      { text: 'Up to 70% of code coverage with test automation' },
    ],
    hasAction: true,
  },
  {
    title: 'Deployment',
    descriptionList: [
      {
        text: 'Autodeploy, E2E autotests, daily search for syntax and logical errors',
      },
      { text: '10X lower failure rates' },
    ],
    hasAction: false,
  },
]
