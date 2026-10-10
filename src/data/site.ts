export const siteData = {
  name: 'Rithin Kumar',
  title: 'QA Engineer | Test Automation',
  siteName: 'Rithin Kumar | QA Engineer',
  tagline: 'Quality engineering through thoughtful automation',
  description:
    'Rithin Kumar is a QA Engineer with 6.5+ years of experience in manual and automation testing across retail, banking, financial services, and enterprise software.',
  url: 'https://rithinkumar.in',
  email: 'rithinkumar79@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/1ddgUH0qjIaiNqwBCbVIx5LWl3GiFq6vu/view?usp=drivesdk',
  phone: '8792937072',
  location: 'Mangalore, India',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rithin-kumar-95771916b?utm_source=share_via&utm_content=profile&utm_medium=member_android', ariaLabel: 'Rithin Kumar on LinkedIn' },
    { label: 'Email', href: 'mailto:rithinkumar79@gmail.com', ariaLabel: 'Email Rithin Kumar' },
  ],
  navigation: [
    { label: 'Home', href: '/#intro' },
    { label: 'About', href: '/#about' },
    { label: 'Work', href: '/#capabilities' },
    { label: 'Art', href: '/art' },
    { label: 'Resume', href: '/resume/' },
    { label: 'Contact', href: '/#contact' },
  ],
  profile: {
    status: 'QA Engineer · Test Automation',
    summary:
      'Result-driven QA Engineer with 6.5+ years of experience in manual and automation testing. Builds API and UI automation frameworks with Java, Rest Assured, TestNG, and Playwright, supported by Azure DevOps CI/CD. Uses AI tooling to speed up test design and log analysis across banking, financial services, retail, and enterprise software.',
    note:
      'Specializes in maintainable test automation, API quality, deployment confidence, and practical quality engineering across web, mobile, and retail systems.',
  },
  quickFacts: [
    { label: 'Experience', value: '6.5+ years in QA' },
    { label: 'Specialty', value: 'API and UI test automation' },
    { label: 'Based in', value: 'Mangalore, India' },
  ],
  skillGroups: [
    {
      title: 'Test automation',
      items: ['Rest Assured', 'TestNG', 'Cucumber (BDD)', 'Playwright (Java, TypeScript)', 'Playwright MCP', 'Selenium (Java)', 'Page Object Model', 'Allure Reporting', 'Maven', 'Data-driven and payload-templated testing'],
    },
    {
      title: 'Azure & DevOps',
      items: ['Microsoft Azure', 'Azure DevOps YAML pipelines', 'Test result and artifact publishing', 'Azure AD / OAuth2 client credentials', 'Azure Data Studio', 'Post-release monitoring'],
    },
    {
      title: 'Testing & tools',
      items: ['Manual testing', 'API testing', 'Database testing', 'Mobile testing', 'Postman', 'Swagger', 'JMeter', 'JIRA', 'Zephyr Scale', 'TestRail', 'BrowserStack', 'MySQL', 'SQL Server (SSMS)', 'Core Java', 'Git'],
    },
    {
      title: 'AI-assisted QA',
      items: ['Claude Code', 'Claude Skills', 'Playwright MCP'],
    },
  ],
  workHighlights: [
    {
      title: 'API automation framework',
      description: 'Built a layered, reusable API automation framework from scratch using Java 21, Rest Assured, TestNG, Maven, Jackson, and AssertJ. It separates configuration, authentication, HTTP transport, payload templating, scenario context, validation, and domain services, so new API domains can be added without changing core components.',
      meta: 'Layered · Domain-oriented · Reusable',
    },
    {
      title: 'Cross-industry testing experience',
      description: 'Testing experience across banking, financial services, retail, and enterprise software. Coverage spans web, mobile, API, database, functional, regression, and end-to-end testing, from requirements-based test design through defect reporting and release sign-off.',
      meta: 'Banking · Financial services · Retail · Enterprise',
    },
    {
      title: 'Release confidence with CI/CD',
      description: 'Quality workflows across Azure DevOps, Jenkins, and GitHub Actions. Azure DevOps pipelines provision JDK 21, run parameterized suites, publish TestNG results and Allure reports, and read secrets from pipeline variables.',
      meta: 'CI/CD · Quality engineering',
    },
  ],
  projects: [
    {
      title: 'Retail point-of-sale and payments',
      category: 'Retail · Jun 2024–Present',
      description: 'Built API automation for retail workflows with 45+ test classes. Added OAuth2 client-credentials authentication, cached tokens, token-based JSON payload templates, and state chaining across multi-step cart flows.',
    },
    {
      title: 'Banking accounts web application',
      category: 'Banking · Feb 2023–Mar 2024',
      description: 'Designed test cases from business requirements and user stories; performed functional, sanity, regression, end-to-end, API, and database testing. Automated lead form and account creation flows with Selenium and Java, and provided QA sign-off for production releases.',
    },
    {
      title: 'Mutual fund web and mobile products',
      category: 'Financial services · Nov 2019–Feb 2023',
      description: 'Led a four-member QA team across test planning, traceability, and estimation. Designed test scenarios, performed end-to-end, mobile, and API testing, and created test and defect reports.',
    },
    {
      title: 'R&D compliance platform',
      category: 'Enterprise software · Apr–May 2024',
      description: 'Tested a research and development project management and compliance platform.',
    },
  ],
  experience: [
    {
      role: 'QA Engineer',
      period: 'Jun 2024–Present',
      domain: 'Retail · Point-of-sale systems and APIs',
      sections: [
        {
          title: 'Test automation',
          items: [
            'Designed and built a retail API automation framework from scratch using Java 21, Rest Assured, TestNG, Maven, Jackson, and AssertJ. Its layered structure covers configuration, authentication, HTTP client, payload templating, scenario context, validators, and per-domain services, allowing new domains without core changes.',
            'Automated item-sale and payment API domains with 45+ test classes covering regression, discount, loyalty, bonus-payment, and negative cases. Smoke, regression, and domain suites run from TestNG.',
            'Implemented OAuth2 client-credentials authentication with token caching, token-based JSON payload templates, and state chaining across multi-step cart flows.',
            'Automated hosted-checkout payments end to end with a reusable headless Playwright browser layer, testing full and partial capture-on-delivery against sandbox checkouts.',
            'Added a production safety guard to skip write-group tests in production and retry handling for flaky tests.',
            'Produced Allure reports with per-assertion steps and request/response attachments; added run-summary notifications and automated report email delivery.',
            'Developed and maintained UI automation using Playwright and Playwright MCP; wrote regression tests documenting known API validation gaps.',
            'Contributed to an earlier Rest Assured and Cucumber BDD suite through feature files, JSON data files, and reusable step definitions.',
          ],
        },
        {
          title: 'Cloud, CI/CD & quality engineering',
          items: [
            'Built a YAML pipeline parameterized by environment and suite. It provisions JDK 21, runs tests, publishes TestNG results and Allure report artifacts, and reads secrets from pipeline variables.',
            'Participated in on-premises and cloud deployment of a desktop application and cloud deployment of its APIs.',
            'Monitored post-release activity in cloud environments and delivery pipelines to confirm deployment stability and resolve issues quickly.',
            'Validated data flows with SQL Server Management Studio and Azure Data Studio; tested APIs with Postman and Swagger.',
            'Developed AI assistant skills for test case creation and production log analysis to speed up test design and defect troubleshooting.',
          ],
        },
      ],
    },
    {
      role: 'Quality Assurance Test Engineer',
      period: 'Apr 2024–May 2024',
      domain: 'Enterprise software · R&D project management and compliance',
      sections: [{ title: 'Quality assurance', items: ['Tested a research and development project management and compliance platform.'] }],
    },
    {
      role: 'Cloud Engineer - QA',
      period: 'Feb 2023–Mar 2024',
      domain: 'Banking · Accounts web application',
      sections: [{
        title: 'Quality assurance',
        items: [
          'Designed test cases and scenarios from business requirements and user stories.',
          'Performed functional, sanity, regression, and end-to-end testing; reported bugs in a defect tracking system.',
          'Tested APIs with Postman and Swagger and databases with SQL queries.',
          'Automated lead form and account creation flows using Selenium with Java.',
          'Provided QA sign-off for production releases.',
        ],
      }],
    },
    {
      role: 'Test Engineer',
      period: 'Nov 2019–Feb 2023',
      domain: 'Financial services · Mutual fund web and mobile products',
      sections: [{
        title: 'Quality assurance',
        items: [
          'Led a team of four QA members across test planning, traceability matrix, and estimations.',
          'Designed test cases and scenarios for web and mobile products from business requirements.',
          'Performed end-to-end testing, mobile app testing, and API testing.',
          'Created test and defect reports and delivered product presentations.',
        ],
      }],
    },
  ],
  education: {
    degree: 'Bachelor of Engineering in Electronics and Communication',
    institution: 'Nitte Meenakshi Institute of Technology, Bangalore',
    period: '2015–2019',
    result: '8.13 CGPA',
  },
};
