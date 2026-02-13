const translations = {
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.skills': 'Compétences',
        'nav.experience': 'Expérience',
        'nav.projects': 'Projets',
        'nav.contact': 'Contact',

        // Hero Section
        'hero.greeting': 'Bonjour, je suis',
        'hero.description': 'Expert en infrastructure IT, virtualisation et sécurité réseau. Je transforme les défis techniques en solutions robustes et évolutives.',
        'hero.btn.projects': 'Voir mes projets',
        'hero.btn.contact': 'Me contacter',

        // Typing texts
        'typing.0': 'Administrateur Système & Réseau',
        'typing.1': 'Expert Infrastructure IT',
        'typing.2': 'Spécialiste Virtualisation',
        'typing.3': 'DevOps Engineer',

        // About Section
        'about.tag': 'Qui suis-je',
        'about.title': 'À propos de moi',
        'about.subtitle': 'Passionné par l\'infrastructure IT et la sécurité',
        'about.desc1': 'Actuellement en Mastère MICSI au CESI de Châteauroux (2025-2027) en alternance au Conseil départemental d\'Eure-et-Loir, après un Bachelor ASR dans la même école. Je me spécialise dans l\'administration système et réseau avec une expertise croissante en infrastructure IT, virtualisation et sécurité réseau.',
        'about.desc2': 'Titulaire d\'un BTS SIO option SISR, mon parcours m\'a permis de développer des compétences solides en gestion d\'infrastructure, migration de postes, veille technologique et développement d\'outils avec PowerShell. Passionné par les nouvelles technologies, je m\'épanouis dans la résolution de problèmes complexes.',
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
        'skills.tag': 'Expertise',
        'skills.title': 'Compétences Techniques',
        'skills.os': 'Systèmes d\'exploitation',
        'skills.network': 'Réseaux & Sécurité',
        'skills.cloud': 'Cloud & Virtualisation',
        'skills.scripting': 'Scripting & Automation',
        'skills.monitoring': 'Monitoring & Sauvegarde',
        'skills.database': 'Bases de données',

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
        'exp.bachelor.desc': 'Bachelor Administrateur Systèmes et Réseaux en alternance. Administration et maintenance de l\'infrastructure IT du Conseil départemental. Projet majeur : remplacement de la solution EDR existante par un XDR avec tests et évaluation de plusieurs solutions du marché. Travail sur diverses solutions de sécurité et d\'infrastructure incluant WAF, Protection Serveur, gestion de projets et participation à la sécurisation du SI.',

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
        'project.edr-xdr.title': 'Remplacement EDR par XDR',
        'project.edr-xdr.desc': 'Projet de remplacement de la solution EDR existante par une solution XDR au sein du Conseil départemental. Réalisation de phases de tests et d\'évaluation comparative sur plusieurs solutions leaders du marché.',
        'project.vmware.title': 'Cluster de Virtualisation',
        'project.vmware.desc': 'Mise en place d\'un cluster d\'hyperviseurs avec vMotion, DRS et HA pour optimiser l\'utilisation des ressources et la disponibilité.',
        'project.powershell.title': 'Automatisation PowerShell',
        'project.powershell.desc': 'Développement de scripts PowerShell pour automatiser la gestion des utilisateurs AD, le provisioning de VMs et les rapports de conformité.',
        'project.backup.title': 'Système de Sauvegarde Centralisé',
        'project.backup.desc': 'Implémentation d\'une solution de sauvegarde centralisée pour 200+ serveurs virtuels et physiques.',
        'project.monitoring.title': 'Monitoring & Supervision',
        'project.monitoring.desc': 'Déploiement d\'une plateforme de monitoring complète pour surveiller l\'infrastructure réseau, les serveurs et les applications critiques.',
        'project.rpi-ansible.title': 'Cluster Ansible sur Raspberry Pi 5',
        'project.rpi-ansible.desc': 'Mise en place d\'un environnement Home Lab sur Raspberry Pi 5 avec Raspberry Pi OS Lite. Installation de Docker et Portainer pour la gestion de conteneurs. Déploiement de 3 conteneurs Debian Trixie et configuration d\'Ansible pour l\'orchestration, le test de playbooks et l\'apprentissage des solutions d\'automatisation.',
        'project.portfolio.title': 'Portfolio Personnel',
        'project.portfolio.desc': 'Conception et développement de ce portfolio interactif pour présenter mes compétences et projets. Utilisation de HTML5, CSS3, JavaScript (ES6+), et intégration de Canvas pour l\'animation d\'arrière-plan. Hébergé sur GitHub Pages.',
        'project.unity-game.title': 'Jeu Vidéo RPG - Unity & AI',
        'project.unity-game.desc': 'Développement d\'un RPG sur Unity assisté par l\'IA Google Antigravity. Gestion complète backend : base de données SQL, authentification sécurisée et hébergement pour accès multijoueur. Collaboration avec un graphiste professionnel pour la direction artistique.',

        // Contact
        'contact.tag': 'Restons en contact',
        'contact.title': 'Contactez-moi',
        'contact.subtitle': 'Discutons de votre projet',
        'contact.text': 'Vous avez un projet d\'infrastructure IT, besoin de conseils en sécurité réseau, ou simplement envie d\'échanger sur les technologies ? N\'hésitez à me contacter !',

        'contact.location': 'Localisation',
        'contact.form.name': 'Nom complet',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Sujet',
        'contact.form.message': 'Message',
        'contact.form.placeholder.name': 'Jean Dupont',
        'contact.form.placeholder.email': 'jean.dupont@example.com',
        'contact.form.placeholder.subject': 'Projet de migration cloud',
        'contact.form.placeholder.message': 'Décrivez brièvement votre projet ou vos besoins...',
        'contact.form.submit': 'Envoyer le message',
        'contact.form.success': 'Message envoyé avec succès ! Je vous répondrai bientôt.',
        'contact.form.sending': 'Envoi en cours...',

        // Footer
        'footer.tagline': 'Expert en infrastructure IT et sécurité réseau',
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
        'nav.contact': 'Contact',

        // Hero Section
        'hero.greeting': 'Hello, I am',
        'hero.description': 'IT infrastructure, virtualization, and network security expert. I transform technical challenges into robust and scalable solutions.',
        'hero.btn.projects': 'View my projects',
        'hero.btn.contact': 'Contact me',

        // Typing texts
        'typing.0': 'System & Network Administrator',
        'typing.1': 'IT Infrastructure Expert',
        'typing.2': 'Virtualization Specialist',
        'typing.3': 'DevOps Engineer',

        // About Section
        'about.tag': 'Who am I',
        'about.title': 'About me',
        'about.subtitle': 'Passionate about IT infrastructure and security',
        'about.desc1': 'Currently pursuing a Master\'s in MICSI at CESI Châteauroux (2025-2027) as a work-study at the Conseil départemental d\'Eure-et-Loir, after a Bachelor\'s in ASR at the same school. I specialize in system and network administration with growing expertise in IT infrastructure, virtualization, and network security.',
        'about.desc2': 'Holder of a BTS SIO SISR option, my journey has allowed me to develop strong skills in infrastructure management, workstation migration, technology watch, and tool development with PowerShell. Passionate about new technologies, I thrive in solving complex problems.',
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
        'skills.os': 'Operating Systems',
        'skills.network': 'Networks & Security',
        'skills.cloud': 'Cloud & Virtualization',
        'skills.scripting': 'Scripting & Automation',
        'skills.monitoring': 'Monitoring & Backup',
        'skills.database': 'Databases',

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
        'exp.bachelor.desc': 'Bachelor\'s in System and Network Administration as work-study. Administration and maintenance of the Departmental Council\'s IT infrastructure. Major project: replacement of the existing EDR solution with an XDR through testing and evaluation of several market solutions. Work on various security and infrastructure solutions including WAF, Server Protection, project management and participation in IS security.',

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
        'project.edr-xdr.title': 'EDR to XDR Replacement',
        'project.edr-xdr.desc': 'Project to replace the existing EDR solution with an XDR solution within the Departmental Council. Conducting testing and comparative evaluation phases on several leading market solutions.',
        'project.vmware.title': 'Virtualization Cluster',
        'project.vmware.desc': 'Implementation of a hypervisor cluster with vMotion, DRS and HA to optimize resource utilization and availability.',
        'project.powershell.title': 'PowerShell Automation',
        'project.powershell.desc': 'Development of PowerShell scripts to automate AD user management, VM provisioning and compliance reports.',
        'project.backup.title': 'Centralized Backup System',
        'project.backup.desc': 'Implementation of a centralized backup solution for 200+ virtual and physical servers.',
        'project.monitoring.title': 'Monitoring & Supervision',
        'project.monitoring.desc': 'Deployment of a complete monitoring platform to monitor network infrastructure, servers and critical applications.',
        'project.rpi-ansible.title': 'Ansible Cluster on Raspberry Pi 5',
        'project.rpi-ansible.desc': 'Setup of a Home Lab environment on Raspberry Pi 5 with Raspberry Pi OS Lite. Installation of Docker and Portainer for container management. Deployment of 3 Debian Trixie containers and Ansible configuration for orchestration, playbook testing, and automation learning.',
        'project.portfolio.title': 'Personal Portfolio',
        'project.portfolio.desc': 'Design and development of this interactive portfolio to showcase my skills and projects. Using HTML5, CSS3, JavaScript (ES6+), and Canvas integration for background animation. Hosted on GitHub Pages.',
        'project.unity-game.title': 'RPG Video Game - Unity & AI',
        'project.unity-game.desc': 'Development of an RPG on Unity assisted by Google Antigravity AI. Full backend management: SQL database, secure authentication, and hosting for multiplayer access. Collaboration with a professional graphic designer for art direction.',

        // Contact
        'contact.tag': 'Get in touch',
        'contact.title': 'Contact me',
        'contact.subtitle': 'Let\'s discuss your project',
        'contact.text': 'Do you have an IT infrastructure project, need advice on network security, or simply want to talk about technology? Feel free to contact me!',

        'contact.location': 'Location',
        'contact.form.name': 'Full name',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Message',
        'contact.form.placeholder.name': 'John Doe',
        'contact.form.placeholder.email': 'john.doe@example.com',
        'contact.form.placeholder.subject': 'Cloud migration project',
        'contact.form.placeholder.message': 'Briefly describe your project or needs...',
        'contact.form.submit': 'Send message',
        'contact.form.success': 'Message sent successfully! I will get back to you soon.',
        'contact.form.sending': 'Sending...',

        // Footer
        'footer.tagline': 'IT infrastructure and network security expert',
        'footer.nav': 'Navigation',
        'footer.projects': 'Projects',
        'footer.all.projects': 'All projects',
        'footer.copyright': 'All rights reserved.',

        // Scroll
        'scroll': 'Scroll'
    }
};
