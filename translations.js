const translations = {
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.skills': 'Compétences',
        'nav.experience': 'Expérience',
        'nav.projects': 'Projets',
        'nav.goals': 'Objectifs',
        'nav.contact': 'Contact',

        // Hero Section
        'hero.greeting': 'Bonjour, je suis',
        'hero.description': 'Spécialisé dans l\'architecture et la sécurisation des infrastructures IT. J\'allie une solide expertise technique (virtualisation, cybersécurité) au pilotage stratégique de projets. Mon objectif : concevoir, déployer et manager des systèmes d\'information résilients, performants et adaptés aux nouveaux enjeux de sécurité.',
        'hero.btn.projects': 'Voir mes projets',
        'hero.btn.contact': 'Me contacter',

        // Typing texts
        'typing.0': 'Administrateur Système & Réseau',
        'typing.1': 'Infrastructure IT',
        'typing.2': 'Virtualisation',
        'typing.3': 'DevOps Engineer',

        // About Section
        'about.tag': 'Qui suis-je',
        'about.title': 'À propos de moi',
        'about.subtitle': 'Profil orienté Infrastructure IT, Cybersécurité et Pilotage de projets',
        'about.desc1': 'Actuellement en Mastère spécialisé en infrastructure et cybersécurité en alternance au sein du secteur public, mon évolution m\'amène aujourd\'hui à conjuguer expertise système et responsabilités managériales. J\'accompagne la transformation de l\'infrastructure de mon organisation tout en pilotant la planification et la communication de projets IT complexes.',
        'about.desc2': 'Techniquement, je cultive une approche très « hands-on ». Qu\'il s\'agisse d\'automatiser des déploiements avec Ansible, de gérer des architectures conteneurisées sous Docker, ou de concevoir des environnements virtualisés sous Proxmox, j\'aime comprendre les technologies en profondeur. Cette passion s\'illustre au quotidien par la maintenance de mon propre laboratoire (Homelab) pour tester et éprouver de nouvelles solutions de manière autonome.',
        'about.desc3': 'Au-delà de l\'infrastructure pure, je suis animé par la création de bout en bout et le travail en équipe. De la conception d\'applications web collaboratives à des projets plus créatifs en développement ou en électronique, j\'aime décloisonner les compétences. Ouvert sur l\'international et en apprentissage actif de nouvelles langues, j\'ai à cœur de m\'inscrire dans des environnements techniques exigeants et multiculturels.',
        'about.interests': 'Centres d\'intérêt',
        'about.interest.radio': 'Radio modélisme',
        'about.interest.roller': 'Roller freestyle',
        'about.interest.hiking': 'Randonnée',
        'about.interest.triathlon': 'Triathlon',
        'about.tooltip.radio': 'Prise de vue par drone',
        'about.tooltip.roller': '11 ans de club\nParticipation au championnat de France 2018',
        'about.tooltip.hiking': 'Trek en haute montagne',
        'about.tooltip.triathlon': 'Inscrit depuis 1 an en club',
        'about.stat.degree': 'en cours',
        'about.stat.projects': 'Projets réalisés',

        // Skills Section
        'skills.tag': 'Savoir-faire',
        'skills.title': 'Compétences Techniques',
        'skills.network': 'Réseaux & Sécurité',
        'skills.cloud': 'Cloud & Virtualisation',
        'skills.scripting': 'Scripting & Automation',
        'skills.monitoring': 'Monitoring & Sauvegarde',
        'skills.database': 'Bases de données',
        'skills.management': 'Management & Méthodologie',

        // Certifications
        'certs.tag': 'Reconnaissance',
        'certs.title': 'Certifications',
        'certs.view': 'Voir le badge',
        'certs.obtained': 'Obtenu le',

        // Certification cards
        'cert.citoyen.title': 'Citoyen Responsable - Implication',
        'cert.citoyen.issuer': 'CESI - École d\'Ingénieurs',
        'cert.citoyen.date': 'Obtenu le 26 Septembre 2025',
        'cert.psc1.title': 'PSC - Premiers Secours Citoyen',
        'cert.psc1.issuer': 'Croix-Rouge Française',
        'cert.psc1.date': 'Obtenu',

        // Experience Section
        'exp.tag': 'Parcours',
        'exp.title': 'Expérience Professionnelle',
        'exp.show.old': 'Voir les expériences plus anciennes',
        'exp.hide.old': 'Masquer les expériences anciennes',
        'exp.current': '(en cours)',

        // Experience cards
        'exp.micsi.date': '2025 - 2027 (en cours)',
        'exp.micsi.title': 'Mastère MICSI en alternance',
        'exp.micsi.company': 'CESI Châteauroux - Conseil départemental d\'Eure-et-Loir',
        'exp.micsi.desc': 'Formation de niveau Bac+5 en Management des Infrastructures et Cybersécurité.\nCompétences clés :\n- Conception et urbanisation des SI (Design réseaux, infrastructures virtuelles et Cloud).\n- Sécurisation et Audit (DevSecOps, normes cybersécurité, sécurité du Cloud).\n- Management et Gestion de projet (Pilotage de portefeuille, méthodes Agiles, conduite du changement).\n- Alternance : Gestion et sécurisation de l\'infrastructure départementale.',

        'exp.bachelor.date': '2024 - 2025',
        'exp.bachelor.title': 'Bachelor ASR en alternance',
        'exp.bachelor.company': 'CESI Châteauroux - Conseil départemental d\'Eure-et-Loir',
        'exp.bachelor.desc': 'Bachelor Administrateur Systèmes et Réseaux.\nCompétences acquises :\n- Modélisation et déploiement d\'infrastructures (Windows/Linux, Virtualisation, Cloud, Réseaux LAN/WAN).\n- Maintien et sécurisation des SI (Sécurité, Supervision, DevOps).\n- Management de projet (Méthodes Agiles, gestion d\'équipe).\nAlternance : Administration et sécurisation de l\'infrastructure du Conseil départemental (Projet XDR).',

        'exp.tech-hopital.date': '01/06 - 30/08 2024',
        'exp.tech-hopital.title': 'Technicien',
        'exp.tech-hopital.company': 'Hôpital Louis Pasteur - Le Coudray (28)',
        'exp.tech-hopital.desc': 'Migration des postes de Windows 7 vers Windows 10, assurant la mise à jour du parc informatique de l\'hôpital. Réalisation de veille technologique pour rester à jour sur les dernières évolutions du secteur.',

        'exp.stage-hopital.date': '08/01 - 01/03 2024',
        'exp.stage-hopital.title': 'Stagiaire',
        'exp.stage-hopital.company': 'Hôpital Louis Pasteur - Le Coudray (28)',
        'exp.stage-hopital.desc': 'Développement d\'outils graphiques avec PowerShell pour optimiser les tâches administratives. Participation à la veille technologique et sensibilisation aux bonnes pratiques. Organisation de réunions stratégiques et opérationnelles SSI.',

        'exp.misterflat.date': '30/05 - 23/06 2023',
        'exp.misterflat.title': 'Stagiaire',
        'exp.misterflat.company': 'MisterFlat Informatique - Jouy (28)',
        'exp.misterflat.desc': 'Dépannage d\'appareils informatiques et analyse des logs système. Assistance au dépannage d\'entreprises professionnelles. Comparatif d\'applications de dépannage à distance et installation d\'équipements réseau.',

        'exp.xfiles.date': '2018',
        'exp.xfiles.title': 'Stagiaire (1 semaine)',
        'exp.xfiles.company': 'X FILES COMPUTEUR - Chartres (28)',
        'exp.xfiles.desc': 'Stage de découverte : installation de systèmes d\'exploitation sur ordinateurs, nettoyage de fichiers corrompus, et utilisation de composants de récupération pour le montage de PC.',

        // Projects
        'projects.tag': 'Réalisations',
        'projects.title': 'Projets',
        'projects.school': 'Projet Scolaire',
        'projects.pro': 'Projet Pro',
        'projects.homelab': 'Home Lab',

        'projects.coming': 'Projet à venir',
        'projects.coming.desc': 'Emplacement réservé pour un futur projet à ajouter.',

        // Project cards
        'project.doc-bts.title': 'Documentation BTS SIO 2024',
        'project.doc-bts.desc': 'Projet de documentation collaborative réalisé en 2ème année de BTS SIO option SISR. Site web présentant les compétences techniques et projets développés au cours de la formation.',
        'project.doc-bts.desc.short': 'Documentation collaborative des projets et compétences du BTS SIO.',
        'project.edr-xdr.title': 'Remplacement EDR par XDR',
        'project.edr-xdr.desc': 'Projet de remplacement de la solution EDR existante par une solution XDR au sein du Conseil départemental. Réalisation de phases de tests et d\'évaluation comparative sur plusieurs solutions leaders du marché.',
        'project.edr-xdr.desc.short': 'Remplacement EDR par XDR : test et validation de solutions leaders.',

        'project.rpi-ansible.title': 'Homelab : Proxmox & Raspberry Pi',
        'project.rpi-ansible.desc': 'Architecture personnelle avec un Cluster Proxmox et Raspberry Pi 5. Déploiements sous Docker, configurations de passerelles comme Guacamole 1.5.5 et automatisation avec des playbooks Ansible.',
        'project.rpi-ansible.desc.short': 'Homelab Proxmox/RPi5 : Docker, Guacamole et Ansible.',
        'project.portfolio.title': 'Portfolio Personnel',
        'project.portfolio.desc': 'Conception et développement de ce portfolio interactif pour présenter mes compétences et projets. Utilisation de HTML5, CSS3, JavaScript (ES6+), et intégration de Canvas pour l\'animation d\'arrière-plan. Hébergé sur GitHub Pages.',
        'project.portfolio.desc.short': 'Portfolio interactif : HTML5, CSS3, JS et animation Canvas.',
        'project.undercover.title': 'Application Web Multijoueur',
        'project.undercover.desc': 'Lancement récent de l\'application web multijoueur "Best Undercover" en équipe de 3. Gestion d\'une communauté Discord et intégration des retours utilisateurs.',
        'project.undercover.desc.short': 'Web app multijoueur : Undercover, Discord & retours users.',
        'project.unity-game.title': 'Jeu Action-RPG 2D & Hardware',
        'project.unity-game.desc': 'Développement d\'un jeu Action-RPG 2D sur Unity assisté par l\'IA et conceptions hardware sur base d\'ESP32. Une logique algorithmique et curiosité technique au-delà de l\'administration réseau classique.',
        'project.unity-game.desc.short': 'Jeu Unity 2D & conceptions hardware ESP32.',

        // Goals Section
        'goals.tag': 'Perspectives',
        'goals.title': 'Apprentissage & Objectifs',
        'goals.current.title': 'En ce moment',
        'goals.future.title': 'Objectifs 2027',

        'goal.focus.title': 'DevOps & Home Lab',
        'goal.focus.desc': 'Auto-formation approfondie sur les technologies de conteneurisation et d\'automatisation. Mise en place d\'un Home Lab complet pour simuler des environnements de production.',

        'goal.future.title': 'Objectifs 2028',
        'goal.separator': 'OU',
        'goal.uqo.title': 'D.E.S.S. en Cybersécurité',
        'goal.uqo.org': 'UQO - Université du Québec en Outaouais',
        'goal.uqo.desc': 'Programme d\'études supérieures spécialisées axé sur la conception de solutions de cyberdéfense et la gestion des incidents de sécurité.',

        'goal.essi.title': 'Expert SSI (ESSI)',
        'goal.essi.org': 'ANSSI - Agence Nationale de la Sécurité des Systèmes d\'Information',
        'goal.essi.desc': 'Titre d\'expert reconnu par l\'État, visant à former les cadres de la sécurité des systèmes d\'information (audit, analyse de risques, gestion de crise).',

        // Contact
        'contact.tag': 'Restons en contact',
        'contact.title': 'Contactez-moi',
        'contact.subtitle': 'Discutons de votre projet',
        'contact.text': 'Vous recherchez un profil IT compétent dans les domaines de l\'infrastructure, de la sécurité réseau, de l\'administration système et même de la gestion de projet ? N\'hésitez pas à me contacter !',

        'contact.location': 'Localisation',
        'contact.form.name': 'Nom complet',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Sujet',
        'contact.form.message': 'Message',
        'contact.form.placeholder.name': 'Jean Dupont',
        'contact.form.placeholder.email': 'jean.dupont@example.com',
        'contact.form.placeholder.subject': 'Recrutement IT',
        'contact.form.placeholder.message': 'Décrivez brièvement votre projet ou vos besoins...',
        'contact.form.submit': 'Envoyer le message',
        'contact.form.success': 'Message envoyé avec succès ! Je vous répondrai bientôt.',
        'contact.form.sending': 'Envoi en cours...',

        // Footer
        'footer.tagline': 'Administrateur Système & Réseau',
        'footer.nav': 'Navigation',
        'footer.projects': 'Projets',
        'footer.all.projects': 'Tous les projets',
        'footer.copyright': 'Tous droits réservés.',

        // Scroll
        'scroll': 'Scroll'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.goals': 'Goals',
        'nav.contact': 'Contact',

        // Hero Section
        'hero.greeting': 'Hello, I am',
        'hero.description': 'Specialized in the architecture and security of IT infrastructures. I combine strong technical expertise (virtualization, cybersecurity) with strategic project management. My goal: to design, deploy, and manage resilient, high-performance information systems adapted to new security challenges.',
        'hero.btn.projects': 'View my projects',
        'hero.btn.contact': 'Contact me',

        // Typing texts
        'typing.0': 'System & Network Administrator',
        'typing.1': 'IT Infrastructure',
        'typing.2': 'Virtualization',
        'typing.3': 'DevOps Engineer',

        // About Section
        'about.tag': 'Who am I',
        'about.title': 'About me',
        'about.subtitle': 'IT Infrastructure, Cybersecurity and Project Management Oriented Profile',
        'about.desc1': 'Currently pursuing a Master\'s degree specializing in infrastructure and cybersecurity on a work-study basis in the public sector, my evolution leads me today to combine system expertise and managerial responsibilities. I support the transformation of my organization\'s infrastructure while steering the planning and communication of complex IT projects.',
        'about.desc2': 'Technically, I cultivate a very \'hands-on\' approach. Whether it\'s automating deployments with Ansible, managing containerized architectures with Docker, or designing virtualized environments with Proxmox, I like to understand technologies in depth. This passion is illustrated daily by maintaining my own laboratory (Homelab) to independently test and validate new solutions.',
        'about.desc3': 'Beyond pure infrastructure, I am driven by end-to-end creation and teamwork. From designing collaborative web applications to more creative development or electronics projects, I like to break down the silos between skills. Open to the international scene and actively learning new languages, I am eager to integrate into demanding and multicultural technical environments.',
        'about.interests': 'Interests',
        'about.interest.radio': 'RC Modeling',
        'about.interest.roller': 'Freestyle Roller',
        'about.interest.hiking': 'Hiking',
        'about.interest.triathlon': 'Triathlon',
        'about.tooltip.radio': 'Drone photography',
        'about.tooltip.roller': '11 years in club\nFrench Championship 2018 participation',
        'about.tooltip.hiking': 'High mountain trekking',
        'about.tooltip.triathlon': 'Club member for 1 year',
        'about.stat.degree': 'in progress',
        'about.stat.projects': 'Projects completed',

        // Skills Section
        'skills.tag': 'Expertise',
        'skills.title': 'Technical Skills',
        'skills.network': 'Networks & Security',
        'skills.cloud': 'Cloud & Virtualization',
        'skills.scripting': 'Scripting & Automation',
        'skills.monitoring': 'Monitoring & Backup',
        'skills.database': 'Databases',
        'skills.management': 'Management & Methodology',

        // Certifications
        'certs.tag': 'Recognition',
        'certs.title': 'Certifications',
        'certs.view': 'View badge',
        'certs.obtained': 'Obtained on',

        // Certification cards
        'cert.citoyen.title': 'Responsible Citizen - Involvement',
        'cert.citoyen.issuer': 'CESI - Engineering School',
        'cert.citoyen.date': 'Obtained on September 26, 2025',
        'cert.psc1.title': 'PSC - Citizen First Aid',
        'cert.psc1.issuer': 'French Red Cross',
        'cert.psc1.date': 'Obtained',

        // Experience Section
        'exp.tag': 'Journey',
        'exp.title': 'Professional Experience',
        'exp.show.old': 'Show older experiences',
        'exp.hide.old': 'Hide older experiences',
        'exp.current': '(ongoing)',

        // Experience cards
        'exp.micsi.date': '2025 - 2027 (ongoing)',
        'exp.micsi.title': 'Master\'s MICSI Work-Study',
        'exp.micsi.company': 'CESI Châteauroux - Eure-et-Loir Departmental Council',
        'exp.micsi.desc': 'Master\'s Degree in Infrastructure Management and Cybersecurity.\nKey Skills:\n- IS Design & Urbanization (Network design, Virtual & Cloud infrastructures).\n- Security & Audit (DevSecOps, cybersecurity standards, Cloud security).\n- Management & Project Management (Portfolio steering, Agile methods, change management).\n- Work-study: Management and security of the departmental infrastructure.',

        'exp.bachelor.date': '2024 - 2025',
        'exp.bachelor.title': 'Bachelor ASR Work-Study',
        'exp.bachelor.company': 'CESI Châteauroux - Eure-et-Loir Departmental Council',
        'exp.bachelor.desc': 'Bachelor in System and Network Administration.\nAcquired Skills:\n- Infrastructure Modeling & Deployment (Windows/Linux, Virtualization, Cloud, LAN/WAN Networks).\n- IS Maintenance & Security (Security, Monitoring, DevOps).\n- Project Management (Agile Methods, Team Management).\nWork-study: Administration and security of the departmental infrastructure (XDR Project).',

        'exp.tech-hopital.date': '06/01 - 08/30 2024',
        'exp.tech-hopital.title': 'Technician',
        'exp.tech-hopital.company': 'Louis Pasteur Hospital - Le Coudray (28)',
        'exp.tech-hopital.desc': 'Migration of workstations from Windows 7 to Windows 10, ensuring the update of the hospital\'s computer fleet. Technology watch to stay up-to-date on the latest developments in the sector.',

        'exp.stage-hopital.date': '01/08 - 03/01 2024',
        'exp.stage-hopital.title': 'Intern',
        'exp.stage-hopital.company': 'Louis Pasteur Hospital - Le Coudray (28)',
        'exp.stage-hopital.desc': 'Development of graphical tools with PowerShell to optimize administrative tasks. Participation in technology watch and awareness of best practices. Organization of strategic and operational ISS meetings.',

        'exp.misterflat.date': '05/30 - 06/23 2023',
        'exp.misterflat.title': 'Intern',
        'exp.misterflat.company': 'MisterFlat Informatique - Jouy (28)',
        'exp.misterflat.desc': 'Troubleshooting computer equipment and analyzing system logs. Assisting with troubleshooting for professional businesses. Comparison of remote troubleshooting applications and installation of network equipment.',

        'exp.xfiles.date': '2018',
        'exp.xfiles.title': 'Intern (1 week)',
        'exp.xfiles.company': 'X FILES COMPUTEUR - Chartres (28)',
        'exp.xfiles.desc': 'Discovery internship: installing operating systems on computers, cleaning corrupted files, and using recovery components for PC assembly.',

        // Projects
        'projects.tag': 'Achievements',
        'projects.title': 'Projects',
        'projects.school': 'School Project',
        'projects.pro': 'Professional Project',
        'projects.homelab': 'Home Lab',
        'projects.coming': 'Coming soon',
        'projects.coming.desc': 'Placeholder for a future project to be added.',

        // Project cards
        'project.doc-bts.title': 'BTS SIO 2024 Documentation',
        'project.doc-bts.desc': 'Collaborative documentation project completed in the 2nd year of BTS SIO SISR option. Website presenting the technical skills and projects developed during the training.',
        'project.doc-bts.desc.short': 'Collaborative documentation of BTS SIO skills and projects.',
        'project.edr-xdr.title': 'EDR to XDR Replacement',
        'project.edr-xdr.desc': 'Project to replace the existing EDR solution with an XDR solution within the Departmental Council. Conducting testing and comparative evaluation phases on several leading market solutions.',
        'project.edr-xdr.desc.short': 'Replacing EDR with XDR: testing and validating leader solutions.',

        'project.rpi-ansible.title': 'Homelab: Proxmox & Raspberry Pi',
        'project.rpi-ansible.desc': 'Personal architecture with a Proxmox Cluster and Raspberry Pi 5. Docker deployments, gateway configurations like Guacamole 1.5.5, and automation with Ansible playbooks.',
        'project.rpi-ansible.desc.short': 'Homelab Proxmox/RPi5: Docker, Guacamole, and Ansible.',
        'project.portfolio.title': 'Personal Portfolio',
        'project.portfolio.desc': 'Design and development of this interactive portfolio to showcase my skills and projects. Using HTML5, CSS3, JavaScript (ES6+), and Canvas integration for background animation. Hosted on GitHub Pages.',
        'project.portfolio.desc.short': 'Interactive portfolio: HTML5, CSS3, JS, and Canvas animation.',
        'project.undercover.title': 'Multiplayer Web Application',
        'project.undercover.desc': 'Recent launch of the multiplayer web application "Best Undercover" in a team of 3. Management of a Discord community and integration of user feedback.',
        'project.undercover.desc.short': 'Multiplayer web app: Undercover, Discord & user feedback.',
        'project.unity-game.title': '2D Action-RPG Game & Hardware',
        'project.unity-game.desc': 'Development of a 2D Action-RPG game on Unity assisted by AI and hardware designs based on ESP32. An algorithmic logic and technical curiosity beyond classic network administration.',
        'project.unity-game.desc.short': 'Unity 2D Game & ESP32 hardware designs.',

        // Goals Section
        'goals.tag': 'Perspectives',
        'goals.title': 'Learning & Goals',
        'goals.current.title': 'Currently',
        'goals.future.title': '2027 Objectives',

        'goal.focus.title': 'DevOps & Home Lab',
        'goal.focus.desc': 'In-depth self-training on containerization and automation technologies. Setting up a complete Home Lab to simulate production environments.',

        'goal.future.title': 'Goals 2028',
        'goal.separator': 'OR',
        'goal.uqo.title': 'D.E.S.S. in Cybersecurity',
        'goal.uqo.org': 'UQO - University of Quebec in Outaouais',
        'goal.uqo.desc': 'Specialized graduate studies program focused on designing cyber defense solutions and managing security incidents.',

        'goal.essi.title': 'SSI Expert (ESSI)',
        'goal.essi.org': 'ANSSI - National Cybersecurity Agency of France',
        'goal.essi.desc': 'State-recognized expert title, aimed at training information systems security executives (audit, risk analysis, crisis management).',

        // Contact
        'contact.tag': 'Get in touch',
        'contact.title': 'Contact me',
        'contact.subtitle': 'Let\'s discuss your project',
        'contact.text': 'Looking for an IT professional skilled in infrastructure, network security, system administration, and even project management? Feel free to contact me!',

        'contact.location': 'Location',
        'contact.form.name': 'Full name',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Message',
        'contact.form.placeholder.name': 'John Doe',
        'contact.form.placeholder.email': 'john.doe@example.com',
        'contact.form.placeholder.subject': 'IT Recruitment',
        'contact.form.placeholder.message': 'Briefly describe your project or needs...',
        'contact.form.submit': 'Send message',
        'contact.form.success': 'Message sent successfully! I will get back to you soon.',
        'contact.form.sending': 'Sending...',

        // Footer
        'footer.tagline': 'System & Network Administrator',
        'footer.nav': 'Navigation',
        'footer.projects': 'Projects',
        'footer.all.projects': 'All projects',
        'footer.copyright': 'All rights reserved.',

        // Scroll
        'scroll': 'Scroll'
    }
};
