export interface TeamMember {
    name: string;
    qualification?: string;
    bio?: string;
    path: string;
    link?: string;
    linkText?: string;
}

export const TEAMS: TeamMember[] = [
    // {
    //     name: 'Geevar Thambi',
    //     qualification: 'MBA, CMA, CSCA, CPB, EA',
    //     path: '/assets/team/team-members-3.webp',
    // },
      {
        name: 'Bernie Keim',
        qualification: 'MBA, CGA, CPA',
        path: '/assets/team/team-members-2.webp',
    },
  {
        name: 'Andrea Alba Vasquez',
        qualification: 'PCP',
        path: '/assets/team/andrea.webp',
    },
   {
        name: 'Roji Thomas',
        qualification:
            'Specializes in finance transformation and ERP migrations, with a strong focus on financial reporting and data integrity. He partners with CFOs and finance teams to deliver seamless system transitions, including data migration, validation, and reporting optimization. Roji combines deep financial process knowledge with a client-focused approach to help organizations modernize their financial operations and drive better decision-making.',
        path: '/assets/team/team-members-1.webp',
    },
      {
        name: 'Ajith Kumar',
        qualification: 'MBA',
        path: '/assets/team/team-members-6.webp',
    },
    // {
    //     name: 'Alex Tom Joseph',
    //     qualification: 'CMA',
    //     path: '/assets/team/team-members-4.webp',
    // },

    // {
    //     name: 'Dayana Silvin',
    //     qualification: 'CMA',
    //     path: '/assets/team/team-members-8.webp',
    // },
    //     {
    //     name: 'Mohammed Shafeeque',
    //     qualification: 'CMA',
    //     path: '/assets/team/team-members-5.webp',
    // },
    //      {
    //     name: 'Anjali Anil',
    //     qualification: 'CMA',
    //     path: '/assets/team/team-members-7.webp',
    // },
    // {
    //     name: 'Sanoop KS',
    //     qualification: '',
    //     path: '/assets/team/sanoop.webp',
    // },
    //    {
    //     name: 'Navab Rajan',
    //     qualification: '',
    //     path: '/assets/team/navab.webp',
    // },
    //    {
    //     name: 'Vidya Menon',
    //     qualification: '',
    //     path: '/assets/team/vidya.webp',
    // },
       {
        name: 'Jomis John',
        qualification: '',
        path: '/assets/team/jomis.webp',
    },
    {
        name: 'Binoj Joseph',
        qualification: 'Financial Advisor & Mortgage Broker',
        bio: "Binoj Joseph is a dedicated Financial Advisor and Mortgage Broker working with Invisor and Experior Financial Group, where he has earned Silver Legacy Ownership in recognition of his outstanding achievements. He has helped more than 200 clients make confident decisions about their financial future. Binoj takes the time to understand each family's goals and offers clear, practical guidance on insurance protection, wealth-building, and home financing, helping families build lasting security.",
        path: '/assets/team/binoj.webp',
        link: 'https://experiorfinancial.com/binoj-joseph-silver-legacy-owner/',
        linkText: 'Profile Link',
    },
];
