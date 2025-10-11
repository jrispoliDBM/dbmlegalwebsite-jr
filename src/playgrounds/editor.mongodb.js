use('dbm_legal_external');
const serviceName = 'Physician Contract Review';
console.log('Current services in the collection:');
//db.services.find({}).forEach(printjson);
const currentService = db.services.find({ service: serviceName });
console.log(currentService);

const filter = { service: serviceName };

const updateDoc = {
    $set: {
        service: 'Physician Contract Review',
        order: 100,
        show: true,
        headerSection: {
            preTitle: 'Physician',
            title: 'Contract Review Services',
            subtitle: 'Secure Your Next Job on Your Terms',
            detailText:
                'Flat-fee contract reviews led by healthcare attorneys with hospital-side experience. We uncover risks, explain your rights, and show you what’s negotiable—so you sign with confidence.',
            image: 'healthcare_cggfnw',
            contactUsLabel: 'Schedule My Review',
            contactUsLink: 'mailto:shawn.phillips@dbmlegalservices.com?subject=Physician%20Contract%20Review'
        },
        sections: [
            {
                order: 100,
                show: true,
                sectionType: 'catalog',
                title: 'What’s Included in Your Review',
                subtitle: '',
                items: [
                    {
                        order: 100,
                        title: 'Flat-Fee, End-to-End Analysis',
                        detailText: '$995 for contracts ≤20 pages (+$200 per 5 pages).'
                    },
                    {
                        order: 200,
                        title: 'Comprehensive Legal Review',
                        detailText: 'Salary, benefits, malpractice, call duties, non-competes, termination, relocation.'
                    },
                    {
                        order: 300,
                        title: 'Plain-English Findings & Risk Map',
                        detailText: 'Written memo + clear risk map (what’s standard vs. negotiable).'
                    },
                    {
                        order: 400,
                        title: 'Redlines + One Round of Revisions',
                        detailText: 'One round of edits + 60 min consultation.'
                    },
                    {
                        order: 500,
                        title: 'Negotiation Coaching',
                        detailText: 'Talking points, scripts, fallback positions, letter templates.'
                    },
                    {
                        order: 600,
                        title: 'Non-Compete & Mobility Assessment',
                        detailText: 'Protect career flexibility and future moves.'
                    },
                    {
                        order: 700,
                        title: 'Add-Ons (As Needed)',
                        detailText: 'Practical guidance on enforceability and exit strategy to protect future career moves.'
                    }
                ]
            },
            {
                order: 150,
                show: true,
                sectionType: 'checkMarkList',
                title: 'Why DBM for Physician Contracts?',
                subtitle: '',
                items: [
                    {
                        order: 100,
                        title: 'Insider Perspective, Now on Your Side',
                        detailText:
                            'Led by Shawn Phillips, former hospital General Counsel: deep knowledge of institutional priorities and physician leverage points.'
                    },
                    {
                        order: 200,
                        title: 'Proven Track Record',
                        detailText: '100+ physician contracts drafted/negotiated; several hundred reviewed; non-compete matters litigated.'
                    },
                    {
                        order: 300,
                        title: 'Protection First, Practical Always',
                        detailText:
                            'We prevent downstream disputes on compensation structures, call coverage, termination rights, and restrictive covenants—while keeping negotiations efficient and professional.'
                    },
                    {
                        order: 400,
                        title: 'Education that Empowers',
                        detailText:
                            'We explain your agreement in plain language so you sign with confidence—and a clear plan to improve terms.'
                    }
                ]
            },
            {
                order: 200,
                show: true,
                sectionType: 'catalog',
                title: 'Who We Serve',
                subtitle: 'We support physicians at every stage of their careers.',
                items: [
                    {
                        order: 100,
                        title: 'Residents & Fellows Entering Practice',
                        detailText:
                            'Taking your first attending role is exciting—but your first contract can set the tone for your entire career. We help you understand what’s fair, what’s risky, and how to protect your future from day one.',
                        iconBefore: 'CheckSharp'
                    },
                    {
                        order: 200,
                        title: 'Early-Career Physicians',
                        detailText:
                            'Many physicians change jobs within their first five years of practice. We review your next contract with an eye toward stronger compensation, better call schedules, and greater career flexibility.',
                        iconBefore: 'CheckSharp'
                    },
                    {
                        order: 300,
                        title: 'Experienced Physicians Considering a Move',
                        detailText:
                            'Mid-career changes often involve relocation, partnerships, or complex non-competes. We ensure your contract protects both your professional goals and your personal priorities.',
                        iconBefore: 'CheckSharp'
                    },
                    {
                        order: 400,
                        title: 'Physicians Across All Specialties',
                        detailText:
                            'From hospital-employed roles to private practice, academic appointments, and partnership tracks, we tailor our reviews to the unique expectations and standards of your specialty.',
                        iconBefore: 'CheckSharp'
                    }
                ]
            },
            {
                order: 300,
                show: true,
                sectionType: 'carousel',
                title: 'Trusted by Doctors Nationwide',
                items: [
                    {
                        order: 1,
                        quote: 'Working with Shawn helped me navigate the transition between fellowship training and clinical practice. Shawn provided a thorough and assertive approach that succeeded in executing the contract I deserve, and that made all the difference in my job satisfaction. Don’t go to anyone else!',
                        docName: 'Tyler MacRae, DPM, AACFAS',
                        docSpecialty: 'Foot and Ankle Surgery',
                        docLocation: 'St. Jude Orthopedics and Sports Medicine',
                        avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
                        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop'
                    },
                    {
                        order: 2,
                        quote: 'Shawn’s reputation is impeccable for physician contract law. My colleagues and I have benefited from his counsel in the past. There was no question that he was my choice when I needed help with my recent contract review and negotiation. I was very happy with the outcome.',
                        docName: 'Scott Sauer',
                        avatar: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=150&h=150&fit=crop&crop=face',
                        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop'
                    },
                    {
                        order: 3,
                        quote: 'Shawn provided me first-class and timely physician contract analysis that allowed me to confidently accept a new job offer in a new state. I felt well educated and extremely prepared for talks with my future employer. He truly masters the intricacies of health care systems and operations.',
                        docName: 'Brian Goldberg, M.D.',
                        docSpecialty: 'Orthopaedics',
                        docLocation: 'Rothman Orthopaedics Florida',
                        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
                        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop'
                    },
                    {
                        order: 4,
                        quote: 'Shawn brings a rare blend of legal expertise and deep understanding of the healthcare landscape, making complex issues clear and manageable. His thoughtful, physician-centered approach has earned the trust of dozens of physicians I know. He’s exactly the kind of advocate every physician wants in their corner.',
                        docName: 'Eiran Mandelker, M.D.',
                        avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&h=150&fit=crop&crop=face',
                        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop'
                    }
                ]
            },
            {
                order: 400,
                show: true,
                sectionType: 'catalog',
                indentItems: 4,
                indentCharacter: '•',
                title: 'Pricing',
                subtitle: '',
                items: [
                    {
                        order: 100,
                        title: 'Contract Review Package',
                        detailText:
                            '$995 for contracts up to 20 pages\n\nIncludes:\n• Comprehensive legal review\n• Written report with key findings & recommendations\n• One round of revisions\n• 60 minutes of attorney consultation (phone or Zoom)'
                    },
                    {
                        order: 200,
                        title: 'Additional Pages',
                        detailText: '• $200 per 5-page increment'
                    },
                    {
                        order: 300,
                        title: 'Optional Add-Ons',
                        detailText:
                            'Negotiation Support: $395/hour (direct representation or additional revision rounds)\nMultiple Offer Reviews: Custom flat-fee pricing for side-by-side comparisons\nRush Review (1–2 business days): Available upon request'
                    }
                ]
            },
            {
                order: 500,
                show: true,
                sectionType: 'faq',
                title: 'FAQs',
                subtitle: '',
                items: [
                    {
                        order: 100,
                        title: 'My employer says the contract is standard and non-negotiable. Should I still get it reviewed?',
                        detailText:
                            '“Standard” doesn’t always mean fair—or aligned with your specific situation. We identify potential risks, clarify what terms mean in practice, and highlight areas where clarifications or adjustments can still be made without formally redlining the contract.'
                    },
                    {
                        order: 200,
                        title: 'I’m a resident with my first job offer. Can you help me negotiate?',
                        detailText:
                            'Absolutely. We guide you through compensation, malpractice, call coverage, and non-competes—and provide specific talking points and sample language to use with your employer.'
                    },
                    {
                        order: 300,
                        title: 'Do you review all specialties, academic positions, and partnerships?',
                        detailText:
                            'Yes. We routinely handle hospital-employed roles, private practices, academic appointments, and partnership/buy-in agreements across all specialties.'
                    },
                    {
                        order: 400,
                        title: 'I’m not in PA/NJ – can you still help?',
                        detailText:
                            'Yes. While Shawn is licensed in PA and NJ, most contract provisions are business terms that apply nationally. For state-specific questions, we coordinate with local counsel when needed.'
                    },
                    {
                        order: 500,
                        title: 'How soon should I get my contract reviewed?',
                        detailText:
                            'Ideally, as soon as you receive it—so you have time to clarify and negotiate before your start date. We can also accommodate expedited reviews within 1–2 business days.'
                    },
                    {
                        order: 600,
                        title: 'What if I’ve already signed?',
                        detailText:
                            'We can still help—clarify your rights, identify risks, and guide renewal/renegotiation strategy. We’ll also assess enforceability of restrictive covenants.'
                    },
                    {
                        order: 700,
                        title: 'What parts of my contract do you focus on most?',
                        detailText:
                            'Base salary and incentives, call duties, malpractice, termination provisions, and non-competes—areas with the greatest impact on compensation, lifestyle, and mobility.'
                    },
                    {
                        order: 800,
                        title: 'How do you handle non-compete clauses?',
                        detailText:
                            'We assess enforceability under state law, propose ways to narrow scope, and help negotiate terms that protect your ability to practice.'
                    },
                    {
                        order: 900,
                        title: 'Will you explain the contract in plain language?',
                        detailText:
                            'Yes. You’ll receive a written summary and a one-on-one consult where we walk clause-by-clause in clear, practical terms.'
                    },
                    {
                        order: 1000,
                        title: 'What if my employer won’t accept redlines?',
                        detailText:
                            'We often use clarification letters or email confirmations to document key points—small adjustments that can materially change how terms are interpreted later.'
                    },
                    {
                        order: 1100,
                        title: 'Do you provide benchmarking or market comparisons?',
                        detailText:
                            'Yes. We draw on hundreds of reviews to provide context by specialty/region so you understand what’s typical and where you have leverage.'
                    },
                    {
                        order: 1200,
                        title: 'How do you protect confidentiality?',
                        detailText:
                            'All consultations and documents are covered by attorney–client privilege. We use secure upload and communication systems to safeguard your information.'
                    }
                ]
            },
            {
                order: 600,
                show: true,
                sectionType: 'aboutTeamMember',
                title: 'About Shawn Phillips',
                teamMember: 'Shawn Phillips',              
            }
        ],
        showOnMainPage: false,
        route: 'physician-contracts',
        relatedServices: [
            'Healthcare',
            'Startups',
            'Mergers & Acquisitions',
            'Real Estate',
            'Regulatory & Compliance',
            'Business Immigration'
        ],
        tag: 'Healthcare',
        alternateteamtitle: 'Our Team',
        callToAction: {
            title: 'Get in Touch'
        },
        newClientFormSource: 'physician-contracts',
        hideTeamSection: true
    }
};

// Perform the update
const result = db.services.updateOne(filter, updateDoc);

console.log('Update result:');
console.log(`Matched documents: ${result.matchedCount}`);
console.log(`Modified documents: ${result.modifiedCount}`);

console.log('\nPlayground script completed!');
