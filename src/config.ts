export const siteConfig = {
	name: 'Boburjon Allayorov',
	title: 'Strong Junior Software Engineer',
	description: 'Portfolio website of Boburjon Allayorov',
	accentColor: '#1d4ed8',
	social: {
		email: 'boburallayorov@mail.ru',
		linkedin: 'https://linkedin.com/in/boburallayorov',
		telegram: 'https://t.me/boburallayorov',
		github: 'https://github.com/bobur22',
	},
	aboutMe:
		'Passionate full-stack developer with hands-on experience building scalable web applications using Python, Django, and modern frontend technologies. Proven leadership as Engineering Manager and Frontend Mentor, driving both product development and technical education. Focused on clean architecture, automation, and continuous learning.',

	skills: [
		'Python',
		'Django',
		'REST API (DRF)',
		'JavaScript',
		'Bootstrap 5',
		'SQL (MySQL, PostgreSQL)',
		'Docker',
		'Git / GitHub',
		'Swagger',
		'Postman',
		'OOP',
		'Algorithms',
		'Data Structures',
	],

	projects: [
		{
			name: 'ICMA',
			description:
				'Developed the official website for the International Molecular Allergy Center, providing information about services, news, and contact options integrated with Telegram bot support.',
			link: 'https://icma.uz/en/',
			skills: ['Python', 'Django', 'HTML/CSS', 'JavaScript', 'Bootstrap5'],
		},
		{
			name: 'iService',
			description:
				'Full-stack CRM system for client management, attendance tracking, and performance statistics with Excel export and Django filters/validators.',
			link: 'https://crm-iservice.uz/',
			skills: ['Python', 'Django', 'Bootstrap5', 'JavaScript'],
		},
		{
			name: 'Global TUIT',
			description:
				'Built the official website for Tashkent University of Information Technologies’ International Affairs Department, with multilingual support and responsive UI.',
			link: 'https://global-tuit.uz/en/',
			skills: ['Python', 'Django', 'Bootstrap5', 'JavaScript'],
		},
		{
			name: 'M Company Audit',
			description:
				'Created a three-phase audit wizard integrated with a Telegram bot that automates business data collection and reporting.',
			link: 'https://mcompany.uz/audit/starter/',
			skills: ['Python', 'Django (Wizard)', 'Bootstrap5', 'JavaScript'],
		},
	],

	experience: [
		{
			company: 'M Company',
			title: 'Engineering Manager',
			dateRange: 'May 2025 – Present',
			bullets: [
				'Led the full development lifecycle for multiple company and client projects.',
				'Oversaw projects such as Falco.uz, StudentUnion.uz, Fresh-line.uz, MCompany.uz, MPrototype.uz, and AlgoSchool.uz.',
				'Ensured high-quality code, system performance, and timely delivery through best practices and reviews.',
			],
		},
		{
			company: 'Evolution Technology Academy',
			title: 'Frontend Mentor',
			dateRange: 'June 2024 – April 2025',
			bullets: [
				'Taught HTML, CSS, Bootstrap 5, and JavaScript to students aged 12+.',
				'Guided learners in building responsive and interactive web applications.',
				'Created structured lessons to ensure strong foundations in frontend development.',
			],
		},
	],

	education: [
		{
			school: 'Bobir Akilkhanov Tech Academy',
			degree: 'Full Stack Web Development',
			dateRange: 'Apr 2023 – Apr 2024',
			achievements: [
				'Built and optimized full-stack web applications using Python and Django.',
			],
		},
		{
			school: 'Tashkent University of Information Technologies',
			degree: 'Bachelor’s in Economics and Management in ICT',
			dateRange: 'Sep 2023 – May 2027',
			achievements: [
				'Focused on ICT management, economics, and digital innovation.',
			],
		},
	],
}
