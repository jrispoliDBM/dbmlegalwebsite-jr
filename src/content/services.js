import {
    corporateDetails,
    financeDetails,
    regulatoryAndComplianceDetails,
    intellectualPropertyDetails,
    technologyDetails,
    realEstateDetails,
    employmentAndLaborLawDetails,
    trustsAndEstateDetails,
    taxDetails,
    familyOfficeDetails,
    specialEconomicZonesDetails
} from './services-details';
//chf

export const services = [
    {
        image: '/images/services/finance2024.png',
        description: 'Streamline your business with our comprehensive corporate services.                                       ',
        title: 'Corporate',
        details: corporateDetails
    },
    {
        image: '/images/services/general_counsel2024.png',
        description: 'Maximize your financial potential with our expert legal guidance.',
        title: 'Finance',
        details: financeDetails
    },
    {
        image: '/images/services/startup2024.png',
        description: 'Maximize your investment potential with our sophisticated legal solutions and personalized approach.',
        title: 'Family Office',
        details: familyOfficeDetails
    },
    {
        image: '/images/services/startup2024.png',
        description: 'Stay compliant and ahead of regulations with our trusted legal advice. ',
        title: 'Regulatory & Compliance',
        details: regulatoryAndComplianceDetails
    },
    {
        image: '/images/services/startup2024.png',
        description: 'Protect and maximize the value of your intellectual property with our legal expertise.',
        title: 'Intellectual Property',
        details: intellectualPropertyDetails
    },
    {
        image: '/images/services/startup2024.png',
        description: 'Innovate and grow your business with our technology-focused legal solutions.',
        title: 'Technology',
        details: technologyDetails
    },
    {
        image: '/images/services/startup2024.png',
        description: 'Navigate complex real estate transactions with our experienced legal team.',
        title: 'Real Estate',
        details: realEstateDetails
    },
    {
        image: '/images/services/startup2024.png',
        description: 'Protect your business and employees with our comprehensive employment law services.',
        title: 'Employment & Labor',
        details: employmentAndLaborLawDetails
    },
    {
        image: '/images/services/startup2024.png',
        description: 'Secure your legacy and protect your assets with our expert estate planning services.',
        title: 'Trusts & Estates',
        details: trustsAndEstateDetails
    },
    {
        image: '/images/services/startup2024.png',
        description: 'Optimize your tax strategy and minimize risk with our knowledgeable tax attorneys.',
        title: 'Tax',
        details: taxDetails
    }

    // {
    //     image: '/images/services/handwithballs2.png',
    //     description: 'Facilitate rapid economic growth by leverating tax incentives to attract foreign investment and spark technological innovation.',
    //     title: 'Special Economic Zones',
    //     details: specialEconomicZonesDetails
    // }
];

export const services2 = [
    {
        title: 'Corporate',
        subtitle: 'Streamline your business with our comprehensive corporate services.',
        order: 1
    }
];
