document.addEventListener('DOMContentLoaded', function () {
// Sample book data (replace with actual data)
const books = [
  { id: 1, title: 'Software Architecture and Design', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Software Architecture Design.pdf', imageUrl: 'images/book187.png' },
  { id: 2, title: 'Cryptography', author: 'Tutorialspoint', category: 'Cybersecurity', downloadLink: '/books/Cybersecurity/Cryptography.pdf', imageUrl: 'images/book28.png' },
  { id: 3, title: 'Computer Security', author: 'Tutorialspoint', category: 'Cybersecurity', downloadLink: '/books/Cybersecurity/Computer Security.pdf', imageUrl: 'images/book27.png' },
  { id: 4, title: 'Deep Learning in Python', author: 'Tutorialspoint', category: 'AI & ML', downloadLink: '/books/AI & ML/Python Deep Learning.pdf', imageUrl: 'images/book10.png' },
  { id: 5, title: 'Data Warehousing', author: 'Tutorialspoint', category: 'Database', downloadLink: '/books/Database/Data Warehousing.pdf', imageUrl: 'images/book54.png' },
  { id: 6, title: 'Web Developer\'s Guide', author: 'Tutorialspoint', category: 'Web Development', downloadLink: '/books/Web Development/Web Developer_s Guide.pdf', imageUrl: 'images/book218.png' },
  { id: 7, title: 'Azure', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Azure.pdf', imageUrl: 'images/book151.png' },
  { id: 8, title: 'MVC Framework', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/MVC Framework.pdf', imageUrl: 'images/book174.png' },
  { id: 9, title: 'Batch Script', author: 'Tutorialspoint', category: 'Microsoft Technologies', downloadLink: '/books/Microsoft Office/Batch Script.pdf', imageUrl: 'images/book117.png' },
  { id: 10, title: 'Swift', author: 'Tutorialspoint', category: 'App Development', downloadLink: '/books/App Development/Swift.pdf', imageUrl: 'images/book21.png' },
  { id: 11, title: 'Objective C', author: 'Tutorialspoint', category: 'Programming Languages', downloadLink: '/books/Programming Languages/Objective C.pdf', imageUrl: 'images/book142.png' },
  { id: 12, title: 'Scala', author: 'Tutorialspoint', category: 'Programming Languages', downloadLink: '/books/Programming Languages/Scala.pdf', imageUrl: 'images/book147.png' },
  { id: 13, title: 'Python OOP', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Python OOP.pdf', imageUrl: 'images/book180.png' },
  { id: 14, title: 'Mobile Testing', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Mobile Testing.pdf', imageUrl: 'images/book173.png' },
  { id: 15, title: 'Web Services', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Web Services.pdf', imageUrl: 'images/book220.png' },
  { id: 16, title: 'Joomla', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Joomla.pdf', imageUrl: 'images/book167.png' },
  { id: 17, title: 'Online Marketing', author: 'Tutorialspoint', category: 'Digital Marketing', downloadLink: '/books/Digital Marketing/Online Marketing.pdf', imageUrl: 'images/book80.png' },
  { id: 18, title: 'HTML', author: 'Tutorialspoint', category: 'Web Development', downloadLink: '/books/Web Development/HTML.pdf', imageUrl: 'images/book205.png' },
  { id: 19, title: 'Content Marketing', author: 'Tutorialspoint', category: 'Digital Marketing', downloadLink: '/books/Digital Marketing/Content Marketing.pdf', imageUrl: 'images/book73.png' },
  { id: 20, title: 'Software Engineering', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Software Engineering.pdf', imageUrl: 'images/book189.png' },
  { id: 21, title: 'Functional Programming', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Functional Programming.pdf', imageUrl: 'images/book163.png' },
  { id: 22, title: 'BeautifulSoup', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/BeautifulSoup.pdf', imageUrl: 'images/book152.png' },
  { id: 23, title: 'Wireless Communication', author: 'Tutorialspoint', category: 'Networking', downloadLink: '/books/Networking/Wireless Communication.pdf', imageUrl: 'images/book127.png' },
  { id: 24, title: 'Ubuntu', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Ubuntu.pdf', imageUrl: 'images/book192.png' },
  { id: 25, title: 'JQuery', author: 'Tutorialspoint', category: 'Web Development', downloadLink: '/books/Web Development/JQuery.pdf', imageUrl: 'images/book211.png' },
  { id: 26, title: 'Django', author: 'Tutorialspoint', category: 'Frameworks', downloadLink: '/books/Frameworks/Django.pdf', imageUrl: 'images/book90.png' },
  { id: 27, title: 'Metasploit', author: 'Tutorialspoint', category: 'Cybersecurity', downloadLink: '/books/Cybersecurity/Metasploit.pdf', imageUrl: 'images/book33.png' },
  { id: 28, title: 'SQL', author: 'Tutorialspoint', category: 'Database', downloadLink: '/books/Database/SQL.pdf', imageUrl: 'images/book70.png' },
  { id: 29, title: 'Kali Linux', author: 'Tutorialspoint', category: 'Cybersecurity', downloadLink: '/books/Cybersecurity/Kali Linux.pdf', imageUrl: 'images/book32.png' },
  { id: 30, title: 'PyGame', author: 'Tutorialspoint', category: 'GUI', downloadLink: '/books/GUI/Pygame.pdf', imageUrl: 'images/book116.png' },
  { id: 31, title: 'C++', author: 'Tutorialspoint', category: 'Programming Languages', downloadLink: '/books/Programming Languages/C++.pdf', imageUrl: 'images/book131.png' },
  { id: 32, title: 'Kubernetes', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Kubernetes.pdf', imageUrl: 'images/book169.png' },
  
  { id: 33, title: 'OpenNLP', author: 'Tutorialspoint', category: 'AI & ML', downloadLink: '/books/AI & ML/OpenNLP.pdf', imageUrl: 'images/book9.png' },
  { id: 34, title: 'PHP 7', author: 'Tutorialspoint', category: 'Web Development', downloadLink: '/books/Web Development/PHP 7.pdf', imageUrl: 'images/book213.png' },
  { id: 35, title: 'Python Penetration Testing', author: 'Tutorialspoint', category: 'Cybersecurity', downloadLink: '/books/Cybersecurity/Python Penetration Testing.pdf', imageUrl: 'images/book37.png' },
  { id: 36, title: 'MS Powerpoint', author: 'Tutorialspoint', category: 'Microsoft Technologies', downloadLink: '/books/Microsoft Office/MS Powerpoint.pdf', imageUrl: 'images/book119.png' },
  { id: 37, title: 'Mobile Security', author: 'Tutorialspoint', category: 'Cybersecurity', downloadLink: '/books/Cybersecurity/Mobile Security.pdf', imageUrl: 'images/book34.png' },
  { id: 38, title: 'Social Media Marketing', author: 'Tutorialspoint', category: 'Digital Marketing', downloadLink: '/books/Digital Marketing/Social Media Marketing.pdf', imageUrl: 'images/book83.png' },
  { id: 39, title: 'Computer Graphics', author: 'Tutorialspoint', category: 'AI & ML', downloadLink: '/books/AI & ML/Compter Graphics.pdf', imageUrl: 'images/book2.png' },
  { id: 40, title: 'IPV4', author: 'Tutorialspoint', category: 'Networking', downloadLink: '/books/Networking/IPV4.pdf', imageUrl: 'images/book125.png' },
  { id: 41, title: 'Electron', author: 'Tutorialspoint', category: 'App Development', downloadLink: '/books/App Development/Electron.pdf', imageUrl: 'images/book15.png' },
  { id: 42, title: 'Data Mining', author: 'Tutorialspoint', category: 'Database', downloadLink: '/books/Database/Data Mining.pdf', imageUrl: 'images/book53.png' },
  { id: 43, title: 'Network Security', author: 'Tutorialspoint', category: 'Cybersecurity', downloadLink: '/books/Cybersecurity/Network Security.pdf', imageUrl: 'images/book35.png' },
  { id: 44, title: 'Drupal', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Drupal.pdf', imageUrl: 'images/book160.png' },
  { id: 45, title: 'Database Testing', author: 'Tutorialspoint', category: 'Database', downloadLink: '/books/Database/Database Testing.pdf', imageUrl: 'images/book55.png' },
  { id: 46, title: 'Java AWT', author: 'Tutorialspoint', category: 'GUI', downloadLink: '/books/GUI/Java AWT.pdf', imageUrl: 'images/book109.png' },
  { id: 47, title: 'Java Swing', author: 'Tutorialspoint', category: 'GUI', downloadLink: '/books/GUI/Java Swing.pdf', imageUrl: 'images/book110.png' },
  { id: 48, title: 'Basic Electronics', author: 'Tutorialspoint', category: 'Automation', downloadLink: '/books/Automation/Basic Electronics.pdf', imageUrl: 'images/book24.png' },
  { id: 49, title: 'International Marketing', author: 'Tutorialspoint', category: 'Digital Marketing', downloadLink: '/books/Digital Marketing/International Marketing.pdf', imageUrl: 'images/book78.png' },
  { id: 50, title: 'WordPress', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/WordPress.pdf', imageUrl: 'images/book199.png' },
  { id: 51, title: 'Software Testing', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Sofware Testing.pdf', imageUrl: 'images/book190.png' },
  { id: 52, title: 'VB.Net', author: 'Tutorialspoint', category: 'GUI', downloadLink: '/books/GUI/VB.Net.pdf', imageUrl: 'images/book114.png' },
  { id: 53, title: 'IPV6', author: 'Tutorialspoint', category: 'Networking', downloadLink: '/books/Networking/IPV6.pdf', imageUrl: 'images/book126.png' },
  { id: 54, title: 'Laravel', author: 'Tutorialspoint', category: 'Frameworks', downloadLink: '/books/Frameworks/Laravel.pdf', imageUrl: 'images/book96.png' },
  { id: 55, title: 'Extreme Programming', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Extreme Programming.pdf', imageUrl: 'images/book162.png' },
  { id: 56, title: 'Instagram Marketing', author: 'Tutorialspoint', category: 'Digital Marketing', downloadLink: '/books/Digital Marketing/Instagram Marketing.pdf', imageUrl: 'images/book77.png' },
  { id: 57, title: 'Perl', author: 'Tutorialspoint', category: 'Programming Languages', downloadLink: '/books/Programming Languages/Perl.pdf', imageUrl: 'images/book143.png' },
  { id: 58, title: 'Python Requests', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Python Requests.pdf', imageUrl: 'images/book181.png' },
  { id: 59, title: 'E-Commerce', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/E-Commerce.pdf', imageUrl: 'images/book161.png' },
  { id: 60, title: 'Javascript ES6', author: 'Tutorialspoint', category: 'Web Development', downloadLink: '/books/Web Development/Javascript ES6.pdf', imageUrl: 'images/book209.png' },
  { id: 61, title: 'MS SQL', author: 'Tutorialspoint', category: 'Database', downloadLink: '/books/Database/MS SQL.pdf', imageUrl: 'images/book64.png' },
  { id: 62, title: 'Embedded Systems', author: 'Tutorialspoint', category: 'Automation', downloadLink: '/books/Automation/Embedded Systems.pdf', imageUrl: 'images/book25.png' },
  { id: 63, title: 'Bootstrap', author: 'Tutorialspoint', category: 'Web Development', downloadLink: '/books/Web Development/Bootstrap.pdf', imageUrl: 'images/book201.png' },
  { id: 64, title: 'Adaptive Software Development', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Adaptive Software Development.pdf', imageUrl: 'images/book148.png' },
  
  { id: 65, title: 'ExpressJS', author: 'Tutorialspoint', category: 'Frameworks', downloadLink: '/books/Frameworks/ExpressJS.pdf', imageUrl: 'images/book91.png' },
  { id: 66, title: 'Python Blockchain', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Python Blockchain.pdf', imageUrl: 'images/book178.png' },
  { id: 67, title: 'Agile', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Agile.pdf', imageUrl: 'images/book150.png' },
  { id: 68, title: 'Spring Boot', author: 'Tutorialspoint', category: 'Frameworks', downloadLink: '/books/Frameworks/Spring Boot.pdf', imageUrl: 'images/book104.png' },
  { id: 69, title: 'Python Digital Forensics', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Python Forensics.pdf', imageUrl: 'images/book179.png' },
  { id: 70, title: 'MariaDB', author: 'Tutorialspoint', category: 'Database', downloadLink: '/books/Database/MariaDB.pdf', imageUrl: 'images/book62.png' },
  { id: 71, title: 'Selenium', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Selenium.pdf', imageUrl: 'images/book185.png' },
  { id: 72, title: 'UNIX', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/UNIX.pdf', imageUrl: 'images/book193.png' },
  { id: 73, title: 'ReactJS', author: 'Tutorialspoint', category: 'Frameworks', downloadLink: '/books/Frameworks/ReactJS.pdf', imageUrl: 'images/book63.png' },
  { id: 74, title: 'Firebase', author: 'Tutorialspoint', category: 'Database', downloadLink: '/books/Database/Firebase.pdf', imageUrl: 'images/book60.png' },
  { id: 75, title: 'Distributed Database', author: 'Tutorialspoint', category: 'Database', downloadLink: '/books/Database/Distributed Database.pdf', imageUrl: 'images/book57.png' },
  { id: 76, title: 'MySQL', author: 'Tutorialspoint', category: 'Database', downloadLink: '/books/Database/MySQL.pdf', imageUrl: 'images/book65.png' },
  { id: 77, title: 'Youtube Marketing', author: 'Tutorialspoint', category: 'Digital Marketing', downloadLink: '/books/Digital Marketing/Youtube Marketing.pdf', imageUrl: 'images/book85.png' },
  { id: 78, title: 'Software Development Life Cycle', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Software Development Life Cycle.pdf', imageUrl: 'images/book188.png' },
  { id: 79, title: 'Digital Communication', author: 'Tutorialspoint', category: 'Networking', downloadLink: '/books/Networking/Digital Communication.pdf', imageUrl: 'images/book124.png' },
  { id: 80, title: 'Mobile Computing', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Mobile Computing.pdf', imageUrl: 'images/book172.png' },
  { id: 81, title: 'Visual Basic Script', author: 'Tutorialspoint', category: 'Microsoft Technologies', downloadLink: '/books/Microsoft Office/VBscript.pdf', imageUrl: 'images/book122.png' },
  { id: 82, title: 'Machine Learning in Python', author: 'Tutorialspoint', category: 'AI & ML', downloadLink: '/books/AI & ML/ML(Python).pdf', imageUrl: 'images/book7.png' },
  { id: 83, title: 'Arduino', author: 'Tutorialspoint', category: 'Automation', downloadLink: '/books/Automation/Arduino.pdf', imageUrl: 'images/book23.png' },
  { id: 84, title: 'Amazon Web Services', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/Database/AWS.pdf', imageUrl: 'images/book51.png' },
  { id: 85, title: 'C Programming', author: 'Tutorialspoint', category: 'Programming Languages', downloadLink: '/books/Programming Languages/C .pdf', imageUrl: 'images/book129.png' },
  { id: 86, title: 'OpenCV', author: 'Tutorialspoint', category: 'AI & ML', downloadLink: '/books/AI & ML/OpenCV.pdf', imageUrl: 'images/book8.png' },
  { id: 87, title: 'Internet Security', author: 'Tutorialspoint', category: 'Cybersecurity', downloadLink: '/books/Cybersecurity/Internet Security.pdf', imageUrl: 'images/book31.png' },
  { id: 88, title: 'Design Thinking', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Design Thinking.pdf', imageUrl: 'images/book157.png' },
  { id: 89, title: 'Object Oriented Analysis Design', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Object Oriented Analysis Design.pdf', imageUrl: 'images/book176.png' },
  { id: 90, title: 'Digital Marketing', author: 'Tutorialspoint', category: 'Digital Marketing', downloadLink: '/books/Digital Marketing/Digital Marketing.pdf', imageUrl: 'images/book74.png' },
  { id: 91, title: 'Kanban', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Kanban.pdf', imageUrl: 'images/book168.png' },
  { id: 92, title: 'Python', author: 'Tutorialspoint', category: 'Programming Languages', downloadLink: '/books/Programming Languages/Python.pdf', imageUrl: 'images/book145.png' },
  { id: 93, title: 'Computer Programming', author: 'Tutorialspoint', category: 'Programming Languages', downloadLink: '/books/Programming Languages/Computer Programming.pdf', imageUrl: 'images/book134.png' },
  { id: 94, title: 'Database Management System', author: 'Tutorialspoint', category: 'Database', downloadLink: '/books/Database/DBMS.pdf', imageUrl: 'images/book56.png' },
  { id: 95, title: 'Web Services', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/Web Development/Web Services.pdf', imageUrl: 'images/book220.png' },
  { id: 96, title: 'Fortran', author: 'Tutorialspoint', category: 'Programming Languages', downloadLink: '/books/Programming Languages/Fortran.pdf', imageUrl: 'images/book137.png' },
  
  { id: 97, title: 'CodeIgniter', author: 'Tutorialspoint', category: 'Frameworks', downloadLink: '/books/Frameworks/CodeIgniter.pdf', imageUrl: 'images/book89.png' },
  { id: 98, title: 'PostgreSQL', author: 'Tutorialspoint', category: 'Database', downloadLink: '/books/Database/PostgreSQL.pdf', imageUrl: 'images/book67.png' },
  { id: 99, title: 'PHP', author: 'Tutorialspoint', category: 'Web Development', downloadLink: '/books/Web Development/PHP.pdf', imageUrl: 'images/book215.png' },
  { id: 100, title: 'PL-SQL', author: 'Tutorialspoint', category: 'Database', downloadLink: '/books/Database/PL_SQL.pdf', imageUrl: 'images/book66.png' },
  { id: 101, title: 'Windows 10', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Windows 10.pdf', imageUrl: 'images/book198.png' },
  { id: 102, title: 'Web Scraping', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Web Scraping.pdf', imageUrl: 'images/book195.png' },
  { id: 103, title: 'HTTP', author: 'Tutorialspoint', category: 'Web Development', downloadLink: '/books/Web Development/HTTP.pdf', imageUrl: 'images/book207.png' },
  { id: 104, title: 'Ruby', author: 'Tutorialspoint', category: 'Programming Languages', downloadLink: '/books/Programming Languages/Ruby.pdf', imageUrl: 'images/book146.png' },
  { id: 105, title: 'Flutter', author: 'Tutorialspoint', category: 'App Development', downloadLink: '/books/App Development/Flutter.pdf', imageUrl: 'images/book16.png' },
  { id: 106, title: 'Data Structures and Algorithms', author: 'Tutorialspoint', category: 'Database', downloadLink: '/books/Database/DSA (C & C++).pdf', imageUrl: 'images/book58.png' },
  { id: 107, title: 'Java', author: 'Tutorialspoint', category: 'Programming Languages', downloadLink: '/books/Programming Languages/Java.pdf', imageUrl: 'images/book139.png' },
  { id: 108, title: 'Redis', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Redis.pdf', imageUrl: 'images/book183.png' },
  { id: 109, title: 'MS Word', author: 'Tutorialspoint', category: 'Microsoft Technologies', downloadLink: '/books/Microsoft Office/MS Word.pdf', imageUrl: 'images/book120.png' },
  { id: 110, title: 'Data Communication Computer Network', author: 'Tutorialspoint', category: 'Networking', downloadLink: '/books/Networking/Data Communication Computer Network.pdf', imageUrl: 'images/book123.png' },
  { id: 111, title: 'Machine Learning', author: 'Tutorailspoint', category: 'AI & ML', downloadLink: '/books/AI & ML/Machine Learning.pdf', imageUrl: 'images/book6.png' },
  { id: 112, title: 'Web Development', author: 'Tutorialspoint', category: 'Web Development', downloadLink: '/books/Web Development/Web Development.pdf', imageUrl: 'images/book219.png' },
  { id: 113, title: 'Scrum', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Scrum.pdf', imageUrl: 'images/book184.png' },
  { id: 114, title: 'Agile Testing', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Agile Testing.pdf', imageUrl: 'images/book149.png' },
  { id: 115, title: 'WxPython', author: 'Tutorialspoint', category: 'GUI', downloadLink: '/books/GUI/wxPython.pdf', imageUrl: 'images/book115.png' },
  { id: 116, title: 'Android', author: 'Tutorialspoint', category: 'App Development', downloadLink: '/books/App Development/Android.pdf', imageUrl: 'images/book12.png' },
  { id: 117, title: 'Tensorflow', author: 'Tutorialspoint', category: 'AI & ML', downloadLink: '/books/AI & ML/Tensorflow.pdf', imageUrl: 'images/book11.png' },
  { id: 118, title: 'Javascript', author: 'Tutorialspoint', category: 'Web Development', downloadLink: '/books/Web Development/JavaScript.pdf', imageUrl: 'images/book210.png' },
  { id: 119, title: 'Facebook Marketing', author: 'Tutorialspoint', category: 'Digital Marketing', downloadLink: '/books/Digital Marketing/Facebook Marketing.pdf', imageUrl: 'images/book76.png' },
  { id: 120, title: 'Operating System', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Operating System.pdf', imageUrl: 'images/book177.png' },
  { id: 121, title: 'HTML5', author: 'Tutorialspoint', category: 'Web Development', downloadLink: '/books/Web Development/HTML5.pdf', imageUrl: 'images/book206.png' },
  { id: 122, title: 'Ionic', author: 'Tutorialspoint', category: 'App Development', downloadLink: '/books/App Development/Ionic.pdf', imageUrl: 'images/book17.png' },
  { id: 123, title: 'Human Computer Interface', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Human Computer Interface.pdf', imageUrl: 'images/book164.png' },
  { id: 124, title: 'Dart', author: 'Tutorialspoint', category: 'App Development', downloadLink: '/books/App Development/Dart.pdf', imageUrl: 'images/book14.png' },
  { id: 125, title: 'Management Information System', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Management Information System.pdf', imageUrl: 'images/book171.png' },
  { id: 126, title: 'Mobile Marketing', author: 'Tutorialspoint', category: 'Digital Marketing', downloadLink: '/books/Digital Marketing/Mobile Marketing.pdf', imageUrl: 'images/book79.png' },
  { id: 127, title: 'Cloud Computing', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Cloud Computing.pdf', imageUrl: 'images/book153.png' },
  { id: 128, title: 'Email Marketing', author: 'Tutorialspoint', category: 'Digital Marketing', downloadLink: '/books/Digital Marketing/Email Marketing.pdf', imageUrl: 'images/book75.png'},
  
  { id: 129, title: 'Docker', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Docker.pdf', imageUrl: 'images/book159.png' },
  { id: 130, title: 'CSS', author: 'Tutorialspoint', category: 'Web Development', downloadLink: '/books/Web Development/CSS.pdf', imageUrl: 'images/book202.png' },
  { id: 131, title: 'Xamarin', author: 'Tutorialspoint', category: 'App Development', downloadLink: '/books/App Development/Xamarin.pdf', imageUrl: 'images/book22.png' },
  { id: 132, title: 'Kotlin', author: 'Tutorialspoint', category: 'App Development', downloadLink: '/books/App Development/Kotlin.pdf', imageUrl: 'images/book19.png' },
  { id: 133, title: 'Web Analytics', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Web Analytics.pdf', imageUrl: 'images/book194.png' },
  { id: 134, title: 'ASP.Net Core', author: 'Tutorialspoint', category: 'Frameworks', downloadLink: '/books/Frameworks/ASP.NET Core.pdf', imageUrl: 'images/book87.png' },
  { id: 135, title: 'Magento', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Magento.pdf', imageUrl: 'images/book140.png' },
  { id: 136, title: 'Artificial Intelligence', author: 'Tutorialspoint', category: 'AI & ML', downloadLink: '/books/AI & ML/Artificial Intelligence.pdf', imageUrl: 'images/book1.png' },
  { id: 137, title: 'AI Python', author: 'Tutorialspoint', category: 'AI & ML', downloadLink: '/books/AI & ML/AI Python.pdf', imageUrl: 'images/book.png' },
  { id: 138, title: 'AngularJS', author: 'Tutorialspoint', category: 'Frameworks', downloadLink: '/books/Frameworks/AngularJS.pdf', imageUrl: 'images/book86.png' },
  { id: 139, title: 'Java Design Pattern', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Design Pattern.pdf', imageUrl: 'images/book156.png' },
  { id: 140, title: 'MS Excel', author: 'Tutorialspoint', category: 'Microsoft Technologies', downloadLink: '/books/Microsoft Office/MS Excel.pdf', imageUrl: 'images/book118.png' },
  { id: 141, title: 'Penetration Testing', author: 'Tutorialspoint', category: 'Cybersecurity', downloadLink: '/books/Cybersecurity/Penetration  Testing.pdf', imageUrl: 'images/book36.png' },
  { id: 142, title: 'Raspberry Pi', author: 'Tutorialspoint', category: 'Automation', downloadLink: '/books/Automation/Raspberry Pi.pdf', imageUrl: 'images/book26.png' },
  { id: 143, title: 'Continuous Integration', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Continuous Integration.pdf', imageUrl: 'images/book154.png' },
  { id: 144, title: 'Assembly Language', author: 'Tutorialspoint', category: 'Programming Languages', downloadLink: '/books/Programming Languages/Assembly Language.pdf', imageUrl: 'images/book128.png' },
  { id: 145, title: 'Jenkins', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Jenkins(CI&CD).pdf', imageUrl: 'images/book166.png' },
  { id: 146, title: 'Digital Signal Processing', author: 'Tutorialspoint', category: 'AI & ML', downloadLink: '/books/AI & ML/Digital Signal Processing.pdf', imageUrl: 'images/book3.png' },
  { id: 147, title: 'COBOL', author: 'Tutorialspoint', category: 'Programming Languages', downloadLink: '/books/Programming Languages/COBOL.pdf', imageUrl: 'images/book133.png' },
  { id: 148, title: 'PyQT', author: 'Tutorialspoint', category: 'GUI', downloadLink: '/books/GUI/PyQt.pdf', imageUrl: 'images/book112.png' },
  { id: 149, title: 'JavaFX', author: 'Tutorialspoint', category: 'GUI', downloadLink: '/books/GUI/JavaFX.pdf', imageUrl: 'images/book111.png' },
  { id: 150, title: 'SEO', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/SEO.pdf', imageUrl: 'images/book186.png' },
  { id: 151, title: 'System Analysis and Design', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/System Analysis Design.pdf', imageUrl: 'images/book187.png' },
  { id: 152, title: 'MongoDB', author: 'Tutorialspoint', category: 'Database', downloadLink: '/books/Database/MongoDB.pdf', imageUrl: 'images/book63.png' },
  { id: 153, title: 'VBA', author: 'Tutorialspoint', category: 'Microsoft Technologies', downloadLink: '/books/Microsoft Office/VBA.pdf', imageUrl: 'images/book121.png' },
  { id: 154, title: 'Git', author: 'Tutorialspoint', category: 'Web Development', downloadLink: '/books/Web Development/Git.pdf', imageUrl: 'images/book203.png' },
  { id: 155, title: 'Internet of Things', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Internet of Things.pdf', imageUrl: 'images/book165.png' },
  { id: 156, title: 'Ethical Hacking', author: 'Tutorialspoint', category: 'Cybersecurity', downloadLink: '/books/Cybersecurity/Ethical Hacking.pdf', imageUrl: 'images/book29.png' },
  { id: 157, title: 'React Native', author: 'Tutorialspoint', category: 'App Development', downloadLink: '/books/App Development/React Native.pdf', imageUrl: 'images/book20.png' },
  { id: 158, title: 'VueJS', author: 'Tutorialspoint', category: 'Frameworks', downloadLink: '/books/Frameworks/VueJS.pdf', imageUrl: 'images/book107.png' },
  { id: 159, title: 'SQLite', author: 'Tutorialspoint', category: 'Database', downloadLink: '/books/Database/SQLite.pdf', imageUrl: 'images/book71.png' },
  { id: 160, title: 'Tkinter', author: 'Tutorialspoint', category: 'GUI', downloadLink: '/books/GUI/Tkinter.pdf', imageUrl: 'images/book113.png'},
  
  { id: 161, title: 'Excel Data Analysis', author: 'Tutorialspoint', category: 'Data Analysis', downloadLink: '/books/Data Analysis/Excel Data Analysis.pdf', imageUrl: 'images/book41.png' },
  { id: 162, title: 'Excel Python', author: 'Tutorialspoint', category: 'Data Analysis', downloadLink: '/books/Data Analysis/Excel Python.pdf', imageUrl: 'images/book42.png' },
  { id: 163, title: 'MatLab', author: 'Tutorialspoint', category: 'Data Analysis', downloadLink: '/books/Data Analysis/MATLAB.pdf', imageUrl: 'images/book43.png' },
  { id: 164, title: 'IOS', author: 'Tutorialspoint', category: 'App Development', downloadLink: '/books/App Development/IOS.pdf', imageUrl: 'images/book18.png' },
  { id: 165, title: 'MatPlotLib', author: 'Tutorialspoint', category: 'Data Analysis', downloadLink: '/books/Data Analysis/MatPlotLib.pdf', imageUrl: 'images/book44.png' },
  { id: 166, title: 'Numpy', author: 'Tutorialspoint', category: 'Data Analysis', downloadLink: '/books/Data Analysis/Numpy.pdf', imageUrl: 'images/book45.png' },
  { id: 167, title: 'Data Science', author: 'Tutorialspoint', category: 'Technology Topics', downloadLink: '/books/TechTopics/Data Science.pdf', imageUrl: 'images/book155.png' },
  { id: 168, title: 'Pandas', author: 'Tutorialspoint', category: 'Data Analysis', downloadLink: '/books/Data Analysis/Pandas.pdf', imageUrl: 'images/book46.png' },
  { id: 169, title: 'R Programming', author: 'Tutorialspoint', category: 'Data Analysis', downloadLink: '/books/Data Analysis/R Programming.pdf', imageUrl: 'images/book47.png' },
  { id: 170, title: 'ScikitLearn', author: 'Tutorialspoint', category: 'Data Analysis', downloadLink: '/books/Data Analysis/ScikitLearn.pdf', imageUrl: 'images/book48.png' },
  { id: 171, title: 'C#', author: 'Tutorialspoint', category: 'Programming Languages', downloadLink: 'books/Programming Languages/C#.pdf', imageUrl: 'images/book130.png' },
  { id: 172, title: 'NodeJS', author: 'Tutorialspoint', category: 'Frameworks', downloadLink: '/books/Frameworks/NodeJS.pdf', imageUrl: 'images/book97.png' },
  { id: 173, title: 'Seaborn', author: 'Tutorialspoint', category: 'Data Analysis', downloadLink: '/books/Data Analysis/Seaborn.pdf', imageUrl: 'images/book49.png' },
  { id: 174, title: 'Tableau', author: 'Tutorialspoint', category: 'Data Analysis', downloadLink: 'book10-tech-topics-download-link', imageUrl: 'images/book50.png'},

  ];
    function downloadBook(downloadLink) {
      window.open(downloadLink, '_blank');
    }
  
    // Function to retrieve the book ID from the URL query parameter
    function getBookIdFromUrl() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('id');
    }
  
    // Function to display the book details
    function displayBookDetails() {
      const bookId = getBookIdFromUrl();
  
      // Retrieve the book details based on the book ID
      const book = books.find(book => book.id.toString() === bookId);
  
      if (book) {
        const bookDetailsContainer = document.querySelector('.book-details');
        bookDetailsContainer.innerHTML = `
          <div class="container">
            <h2>${book.title}</h2>
            <div class="book-info">
            <img src="${book.imageUrl}" alt="Book Cover">
            <div class="details">
              <p><strong>Author:</strong> ${book.author}</p>
              <p><strong>Category:</strong> ${book.category}</p>
              <p><strong>Description:</strong> 
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Consectetur harum reprehenderit provident error dolore accusamus 
              eos saepe nisi explicabo dignissimos libero molestiae esse laudantium 
              ea nostrum aliquam dolorem, nobis, aut, veniam quam cumque at ducimus 
              mollitia voluptates! Ut voluptates magnam perferendis, mollitia illo 
              fugit aspernatur pariatur voluptatibus minus sit rem dolorum id corrupti 
              neque ratione nam eveniet, voluptatem odit laboriosam debitis ad nisi 
              excepturi! Eaque cupiditate laborum placeat nemo quisquam distinctio, 
              repellendus non quidem, ut sed dolorum aut ullam assumenda magni aliquid! 
              Quas recusandae necessitatibus eligendi doloribus voluptas ipsa suscipit 
              saepe, rerum nostrum, minus aspernatur ab cumque! Necessitatibus, aut ad!</p>
              <button class="download-btn" data-download="${book.downloadLink}">Download</button>
            </div>
          </div>
        </div>
        `;

        document.querySelectorAll('.download-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const downloadLink = btn.getAttribute('data-download');
            // Open the download link in a new tab
            window.open(downloadLink, '_blank');
          });
        });

      } else {
        const bookDetailsContainer = document.querySelector('.book-details');
        bookDetailsContainer.innerHTML = '<h1 class="message" >Book details not found.</h1>';
      }
    }
  
    // Call the function to display the book details
    displayBookDetails();
});
  
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  let num = 0;
  
  menuToggle.addEventListener('click', function () {
    if (num == 0) {
      navLinks.className = 'show';
      num += 1;
    } else {
      navLinks.className = 'hide';
      num -= 1;
    }
  });