const test = {
    _id: {
        $oid: '68d2a77747507c79c234e546'
    },
    service: 'Physician Contract Review',
    order: 100,
    show: false,
    headerSection: {
        title: 'Contract Review Services',
        subtitle: 'Secure Your Next Job On Your Terms',
        detailText:
            'Flat-fee contract reviews led by healthcare attorneys with hospital-side experience. We uncover risks, explain your rights, and show you what’s negotiable—so you sign with confidence.',
        image: 'healthcare_cggfnw',
        preTitle: 'Physician',
        contactUsLabel: 'Schedule My Review',
        contactUsLink: 'https://outlook.office.com/book/ShawnPhillips@dbmlegalservices.com/s/bZQj8jMzz0WU2GByJdozkg2?ismsaljsauthenabled'
    },
    sections: [
        {
            order: 300,
            show: true,
            sectionType: 'checkMarkList',
            title: 'Why DBM?',
            subtitle: '',
            items: [
                {
                    order: 100,
                    title: 'Comprehensive Legal Support',
                    detailText:
                        'Led by Anjali B. Dooley, a seasoned attorney with 20+ years in healthcare law, our team of Big Law-trained attorneys offers tailored legal services for MedSpa, Aesthetic, and Digital Healthcare businesses. We efficiently address legal challenges, ensuring compliance and strategic growth. '
                },
                {
                    order: 200,
                    title: 'Flexible Service Tiers',
                    detailText:
                        'Our three subscription packages cater to businesses at every growth stage. From startups needing foundational support to established companies requiring ongoing counsel, our scalable solutions provide top-tier expertise without stretching your resources. '
                },
                {
                    order: 300,
                    title: 'Proactive Compliance Management',
                    detailText:
                        'Stay ahead with our proactive compliance monitoring. We track regulatory changes in healthcare and aesthetics, ensuring continuous compliance and helping you avoid costly legal issues, so you can focus on serving your clients. '
                },
                {
                    order: 400,
                    title: 'Cost-Effective Solutions',
                    detailText:
                        'Get high-quality legal support without the overhead of in-house counsel. Our subscription model offers expert guidance at a fraction of the cost, allowing you to allocate resources more efficiently. '
                },
                {
                    order: 500,
                    title: 'Strategic Partnership',
                    detailText:
                        "DBM Legal Services is more than just legal advisors—we're strategic partners. Our experienced team understands your business, providing tailored legal and business advice that drives growth and success. "
                },
                {
                    order: 600,
                    title: 'Unmatched Accessibility',
                    detailText:
                        'Access legal support anytime with our flexible communication options. Whether you face a sudden issue or have a minor question, our team is readily available via phone, email, or video consultation. '
                },
                {
                    order: 700,
                    title: 'Transparency & Accountability',
                    detailText:
                        'Enjoy predictable costs and peace of mind with our transparent monthly reports, detailing how your hours were utilized. This ensures clarity and strengthens our partnership,  '
                }
            ]
        },
        {
            order: 100,
            show: true,
            sectionType: 'catalog',
            title: 'How We Support Our Clients',
            subtitle: '',
            items: [
                {
                    order: 100,
                    title: 'Formation and Structuring',
                    detailText:
                        'We guide businesses in choosing the ideal legal structure to align with operational goals, maximize liability protection, and comply with state regulations, including the Corporate Practice of Medicine (CPOM) Doctrine.\n\n\nFor non-physician entrepreneurs and healthcare organizations, we specialize in creating compliant MSO (Friendly) Professional Corporation (PC) structures, enabling engagement in the healthcare industry while adhering to all applicable laws. \n\nWe assist in establishing both the Professional Corporation (PC) and Management Services Organization (MSO) entities, ensuring they meet all legal requirements and align with your business objectives.',
                    headerBefore: '',
                    useCheckmarkBeforeDetailTextParagraphs: true
                },
                {
                    order: 200,
                    title: 'Contract Drafting, Negotiation and Management',
                    detailText:
                        'We create and manage key agreements, such as Management Services Agreements (MSA), Stock Transfer Restriction Agreements (STRA), and Physician Advisor Agreements, ensuring compliance with CPOM laws and defining the PC-MSO relationship. \n\nOur services include drafting and reviewing essential operational documents, policies, and procedures to ensure smooth and compliant business operations. We also craft employment agreements, vendor contracts, and patient consent forms to protect your business interests. Additionally, we provide guidance on financial and tax document preparation and review, ensuring regulatory compliance and optimizing your financial structure. \n',
                    headerBefore: '',
                    useCheckmarkBeforeDetailTextParagraphs: 'true'
                },
                {
                    order: 300,
                    title: 'Risk Management and Compliance',
                    detailText:
                        'We develop and implement compliance programs to mitigate risks associated with fraud, abuse, and regulatory violations, keeping your business protected and up-to-date with regulatory changes. ',
                    headerBefore: '',
                    useCheckmarkBeforeDetailTextParagraphs: 'true'
                },
                {
                    order: 400,
                    title: 'Licensing and Credentialing',
                    detailText:
                        'At DBM Business Services, we aid in obtaining and maintaining necessary licenses for physician owners and corporate entities, crucial for multi-state operations like telehealth services.',
                    headerBefore: '',
                    useCheckmarkBeforeDetailTextParagraphs: 'true'
                }
            ]
        },
        {
            order: 200,
            show: true,
            title: 'Who We Serve',
            subtitle: 'Healthcare Practitioner Organizations',
            items: [
                {
                    order: '100',
                    title: 'Medical Practices and Physicians',
                    detailText:
                        'Private Physician Practices, Group Practices, Independent Contractor Physicians, Management Services Organizations (MSOs), Dental and Orthodontic Practices',
                    headerBefore: '',
                    iconBefore: 'CheckSharp'
                },
                {
                    order: '200',
                    title: 'Specialty Healthcare Practitioners',
                    detailText:
                        'Wellness Centers and Clinics, IV Therapy Clinics, Chronic Care Management Practitioners, Remote Patient Monitoring and Remote Therapeutic Monitoring (RTM) Programs, Mental Health and Behavioral Health Practitioners',
                    iconBefore: 'CheckSharp'
                },
                {
                    order: '300',
                    title: 'Aesthetic and Cosmetic Services ',
                    detailText:
                        'MedSpas and Aesthetic Clinics, Weight Loss Clinics, Cosmetic Dermatology Practices, Anti-Aging and Hormone Therapy Providers ',
                    iconBefore: 'CheckSharp'
                },
                {
                    detailText: 'Home Health Agencies, Hospice Care Providers, Skilled Nursing Facilities, Assisted Living Facilities',
                    order: '400',
                    title: 'Long-Term Care Facilities',
                    iconBefore: 'CheckSharp'
                },
                {
                    order: '500',
                    title: 'Digital and Technology Enabled Services',
                    detailText: 'Telehealth Practitioners, Chronic Disease Management Platforms, Remote Healthcare Startups',
                    iconBefore: 'CheckSharp'
                },
                {
                    order: '600',
                    title: 'Specialized Healthcare Businesses ',
                    detailText:
                        'Surgery Centers and Outpatient Clinics, Diagnostic Imaging Centers, Concierge Medicine Practices, Substance Abuse Treatment Centers',
                    iconBefore: 'CheckSharp'
                }
            ],
            sectionType: 'catalog'
        },
        {
            order: 300,
            show: true,
            sectionType: 'carousel',
            title: 'Trusted by Doctors Nationwide',
            items: [
                {
                    quote: 'DBM Legal Services expertly reviewed my hospital employment contract, identifying crucial clauses about malpractice coverage and call schedules that I had overlooked. Their attention to detail saved me from potential career complications.',
                    docName: 'Dr. Sarah Johnson',
                    docSpecialty: 'Cardiology',
                    docLocation: 'New York, NY',
                    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
                    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop',
                    order: 2
                },
                {
                    quote: 'As a neurologist joining a new practice, I needed thorough contract review. DBM Legal Services identified restrictive non-compete clauses and negotiated better terms for my research opportunities and sabbatical rights.',
                    docName: 'Dr. Michael Chen',
                    docSpecialty: 'Neurology',
                    docLocation: 'San Francisco, CA',
                    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
                    order: 1
                },
                {
                    quote: "DBM Legal Services provided exceptional guidance on my pediatric practice partnership agreement. They ensured fair profit-sharing terms and protected my interests in the practice's expansion plans.",
                    docName: 'Dr. Emily Rodriguez',
                    docSpecialty: 'Pediatrics',
                    docLocation: 'Miami, FL',
                    avatar: 'https://images.unsplash.com/photo-1594824375882-b22aa0ec8543?w=150&h=150&fit=crop&crop=face',
                    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
                    order: 3
                },
                {
                    quote: 'DBM Legal Services helped me navigate the complex terms of my orthopedic surgery center partnership. They identified liability issues and negotiated protective clauses that secured my investment and professional interests.',
                    docName: 'Dr. Emily Rodriguez',
                    docSpecialty: 'Orthopedic Surgery',
                    docLocation: 'Houston, TX',
                    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&h=150&fit=crop&crop=face',
                    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
                    order: 4
                }
            ]
        },
        {
            order: 400,
            show: true,
            sectionType: 'healthcare-membership-pricing',
            title: 'Pricing',
            subtitle: '',
            pricingTable: [
                {
                    package: 'Legal Consultant',
                    monthlySubscriptionRate: '$500',
                    billableAttorneyTimePerMonth: '5 hours',
                    monthlyCost: '$2,500',
                    complianceAnnualReportFiling: 'No',
                    complianceUnlimitedFilings: 'No',
                    complianceBusinessLicensePermitRenewal: 'No',
                    complianceCorporateTransparencyActPortal: 'No',
                    complianceDocumentStorage: 'No',
                    subscriptionRate: '$500/hour'
                },
                {
                    package: 'General Counsel (GC)',
                    monthlySubscriptionRate: '$450',
                    billableAttorneyTimePerMonth: '10 hours',
                    monthlyCost: '$4,500',
                    complianceAnnualReportFiling: 'Yes',
                    complianceUnlimitedFilings: 'Yes',
                    complianceBusinessLicensePermitRenewal: 'Yes',
                    complianceCorporateTransparencyActPortal: 'Yes',
                    complianceDocumentStorage: 'Yes',
                    subscriptionRate: '$450/hour'
                },
                {
                    package: 'GC + Chief Compliance Officer',
                    monthlySubscriptionRate: '$425',
                    billableAttorneyTimePerMonth: '20 hours',
                    monthlyCost: '$8,500',
                    complianceAnnualReportFiling: 'Yes',
                    complianceUnlimitedFilings: 'Yes',
                    complianceBusinessLicensePermitRenewal: 'Yes',
                    complianceCorporateTransparencyActPortal: 'Yes',
                    complianceDocumentStorage: 'Yes',
                    subscriptionRate: '$425/hour'
                }
            ],
            notes: [
                'Filing Costs: Includes service charges for one entity’s compliance filings (Registered Agent, Business License, Annual Reports, CTA). State fees and additional entities billed separately. ',
                'Consistent Billing Rate: Any additional hours beyond your monthly allocation will be billed at your package’s base subscription rate (e.g., $425/hour for the Chief Compliance Officer package). '
            ]
        },
        {
            order: 500,
            show: true,
            sectionType: 'faq',
            title: 'General Questions',
            subtitle: '',
            items: [
                {
                    order: 100,
                    title: 'How do I get started with DBM Legal Services?',
                    detailText:
                        'We make it easy to get started. Schedule a free consultation by contacting our Intake Team at (646)-809-8408, emailing dbmadmin@dbmlegalservices.com, or scheduling using this link. During this consultation, we’ll discuss your specific needs and recommend the most suitable membership package for your business. If we determine the model could be a good fit for your business, the next step will be to arrange an introductory call with the team lead, Anjali B. Dooley. ',
                    headerBefore: ''
                },
                {
                    order: 200,
                    title: 'What is included in the DBM Membership Program?',
                    detailText:
                        'The DBM Membership Program offers a range of legal services tailored specifically for your healthcare business. Depending on your chosen package, you’ll receive billable attorney time each month, compliance services, and strategic business advisory support, all designed to ensure your business remains compliant and well-positioned for growth. ',
                    headerBefore: ''
                },
                {
                    order: 300,
                    title: 'How does the DBM Membership differ from traditional legal services?',
                    detailText:
                        'The DBM Membership Program makes ongoing, continuous legal services more affordable, giving growing businesses all the benefits of having an in-house resource available for questions and more complex issues at a fraction of the price. ',
                    headerBefore: ''
                },
                {
                    order: 400,
                    title: 'What communication options are available for DBM members?',
                    detailText:
                        'We offer flexible communication options to suit your preferences, including phone calls, emails, and video consultations. This ensures that you can easily reach out to your legal team whenever you need support. The DBM team works remotely across the US, but if an attorney you’re working with is in your area, they’re typically happy to meet up in person. ',
                    headerBefore: ''
                },
                {
                    order: 500,
                    title: 'What is the right package for my business?',
                    detailText:
                        'The right package depends on the size and needs of your business. Our Legal Consultant package is ideal for startups or smaller practices, while our General Counsel and Chief Compliance Officer packages provide more comprehensive support for established businesses. We can help you choose the best fit during your consultation. ',
                    headerBefore: ''
                },
                {
                    order: 600,
                    title: 'Can I upgrade my membership package as my business grows?',
                    detailText:
                        'Yes, our membership packages are designed to be flexible and scalable. You can upgrade your package at any time to access additional services and support as your business grows. ',
                    headerBefore: ''
                },
                {
                    order: 700,
                    title: 'What states does DBM Legal Services cover?',
                    detailText:
                        'DBM Legal Services provides support across multiple states. Please contact us to confirm if we offer services in your state. ',
                    headerBefore: ''
                },
                {
                    order: 800,
                    title: 'What makes DBM Legal Services the right choice for my business?',
                    detailText:
                        'DBM Legal Services is led by a team of highly trained attorneys with extensive experience in healthcare law. We offer specialized expertise, a client-centric approach, and transparent billing practices, making us a trusted partner for your business. ',
                    headerBefore: ''
                },
                {
                    order: 900,
                    title: 'Do I need to have my business entity set up before working with DBM Legal Services?',
                    detailText:
                        'No, you do not need to have your business entity set up beforehand. We can assist you with the formation process and ensure that your business is structured optimally from the start. ',
                    headerBefore: ''
                },
                {
                    order: 1000,
                    title: 'How do I know which legal structure (LLC, PLLC, Corp, etc.) is right for my business?',
                    detailText:
                        'The best legal structure depends on your specific business goals and state regulations. During your first attorney consultation, we’ll advise you on the most suitable entity for your business. ',
                    headerBefore: ''
                },
                {
                    order: 1100,
                    title: 'What should I do if I receive a regulatory complaint or investigation notice?',
                    detailText:
                        'Contact DBM Legal Services immediately. We will provide legal representation and guide you through the investigation process to ensure your rights and business are protected. ',
                    headerBefore: ''
                },
                {
                    order: 1200,
                    title: 'Can DBM Legal Services help with trademarking my business name and logo?',
                    detailText: 'Yes, we can assist you with the trademarking process to protect your brand’s intellectual property. ',
                    headerBefore: ''
                }
            ]
        },
        {
            order: 600,
            show: true,
            sectionType: 'faq',
            title: 'Membership Questions',
            subtitle: '',
            items: [
                {
                    order: 100,
                    title: 'How do I contact DBM Legal Services with additional questions about the membership program? ',
                    detailText:
                        'You can reach out to us via phone, email, or through our website with any additional questions about our services or membership program. Contact our Intake Team at (646)-809-8408, email dbmadmin@dbmlegalservices.com, or schedule using this link. ',
                    headerBefore: ''
                },
                {
                    order: 200,
                    title: 'What’s the difference between a retainer and the DBM Membership Program? ',
                    detailText:
                        'A retainer is an upfront fee paid for specific legal services, while the DBM Membership Program offers ongoing access to a range of legal services for a recurring fee. This provides more comprehensive and continuous support, with predictable costs. ',
                    headerBefore: ''
                },
                {
                    order: 300,
                    title: 'What if I need additional legal services beyond my membership hours? ',
                    detailText:
                        'Additional hours can be purchased at your package’s base subscription rate, ensuring consistent and predictable costs. ',
                    headerBefore: ''
                },
                {
                    order: 400,
                    title: 'How are hours calculated and tracked? ',
                    detailText:
                        'Hours are tracked and reported to you regularly. You’ll receive detailed monthly reports outlining how your hours were used, ensuring full transparency. ',
                    headerBefore: ''
                },
                {
                    order: 500,
                    title: 'Does the DBM Membership Program automatically renew? ',
                    detailText:
                        'Yes, the membership program is designed for annual renewal to ensure continuous legal support. You can opt out of auto-renewal if preferred. ',
                    headerBefore: ''
                },
                {
                    order: 600,
                    title: 'Can I split my membership fee into different payment methods? ',
                    detailText:
                        'Yes, we offer flexible payment options, including the ability to split your membership fee across different payment methods. ',
                    headerBefore: ''
                },
                {
                    order: 700,
                    title: 'Can I hire DBM Legal Services for specific projects without a membership? ',
                    detailText:
                        'Yes, we offer project-based legal services for clients who prefer not to subscribe to a membership. However, prices for project-based work will be higher as these rates represent discounts. ',
                    headerBefore: ''
                },
                {
                    order: 800,
                    title: 'What is included in each DBM membership package? ',
                    detailText:
                        'Each package includes a set amount of billable attorney time per month, compliance services, and strategic business advisory support. Detailed information on what’s included in each package can be found above. ',
                    headerBefore: ''
                },
                {
                    order: 900,
                    title: 'How am I billed for the DBM Membership Program? ',
                    detailText:
                        'Our standard billing is monthly based on the selected package, but we are open to discussing discounts for clients that are willing to pay in advance (such as quarterly or annually). All additional hours beyond your monthly allocation are billed at your package’s base subscription rate. ',
                    headerBefore: ''
                },
                {
                    order: '1000',
                    title: 'Can I add more hours to my membership? ',
                    detailText:
                        'Yes, you can purchase additional hours if needed. These will be billed at your package’s base subscription rate. '
                },
                {
                    order: '2000',
                    title: 'What happens if I have unused hours at the end of the month? ',
                    detailText:
                        'Up to 25% of unused hours can roll over to the next month, ensuring you maximize the value of your subscription. '
                },
                {
                    order: '3000',
                    title: 'What should I do if I need more services than what’s included in my package? ',
                    detailText:
                        'You can upgrade your membership at any time to access additional services, or purchase additional hours as needed. '
                },
                {
                    order: '4000',
                    title: 'Can I upgrade or downgrade my membership? ',
                    detailText: 'Yes, you can upgrade or downgrade your membership based on your changing business needs. '
                },
                {
                    order: '5000',
                    title: 'What is the benefit of an annual membership? ',
                    detailText:
                        'An annual membership ensures continuous legal support, allowing us to proactively manage compliance and address new challenges as they arise. It also provides cost savings compared to paying for services on a project-by-project basis. '
                },
                {
                    order: '6000',
                    title: 'Does the DBM Membership Program cover filing costs for compliance services? ',
                    detailText:
                        'Compliance services cover all Registered Agent Service Charges. However, state out-of-pocket fees will be billed separately. '
                }
            ]
        }
    ],
    showOnMainPage: 'false',
    route: 'physician-contracts',
    relatedServices: ['Healthcare', 'Startups', 'Mergers & Acquisitions', 'Real Estate', 'Regulatory & Compliance', 'Business Immigration'],
    tag: 'Healthcare',
    alternateteamtitle: 'Our Team',
    callToAction: {
        title: 'Get in Touch'
    },
    newClientFormSource: 'physician-contracts'
};
