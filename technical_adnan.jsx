<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DataSphere 2025 | Data Science Club Event</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
    
    <!-- Font Awesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <style>
        /* CSS Reset and Global Styles */
        :root {
            --primary-color: #4f46e5;
            --primary-hover: #4338ca;
            --secondary-color: #111827;
            --text-light: #f9fafb;
            --text-dark: #1f2937;
            --text-muted: #6b7280;
            --bg-light: #ffffff;
            --bg-off-white: #f9fafb;
            --border-color: #e5e7eb;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Inter', sans-serif;
            color: var(--text-dark);
            background-color: var(--bg-light);
            line-height: 1.6;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        section {
            padding: 80px 0;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 40px;
            color: var(--secondary-color);
        }

        .section-subtitle {
            text-align: center;
            font-size: 1.1rem;
            color: var(--text-muted);
            max-width: 600px;
            margin: -30px auto 50px;
        }

        .btn {
            display: inline-block;
            padding: 14px 28px;
            background-color: var(--primary-color);
            color: var(--text-light);
            text-decoration: none;
            font-weight: 700;
            border-radius: 8px;
            transition: background-color 0.3s ease, transform 0.3s ease;
            font-family: 'Inter', sans-serif;
        }

        .btn:hover {
            background-color: var(--primary-hover);
            transform: translateY(-2px);
        }

        /* Navbar */
        .navbar {
            background-color: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--border-color);
            padding: 15px 0;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .nav-logo {
            font-family: 'Poppins', sans-serif;
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--primary-color);
            text-decoration: none;
        }

        .nav-links {
            list-style: none;
            display: flex;
            gap: 30px;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text-dark);
            font-weight: 500;
            position: relative;
            padding-bottom: 5px;
            transition: color 0.3s ease;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--primary-color);
            transition: width 0.3s ease;
        }
        
        .nav-links a:hover {
            color: var(--primary-color);
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        /* Hero Section */
        #hero {
            height: 100vh;
            background: linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.7)), url('https://placehold.co/1920x1080/111827/4f46e5?text=Data+Visualization') no-repeat center center/cover;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: var(--text-light);
            padding-top: 80px; /* Offset for navbar */
        }
        
        .hero-content {
            max-width: 800px;
        }

        .hero-content h1 {
            font-size: 4rem;
            font-weight: 800;
            margin-bottom: 20px;
            line-height: 1.2;
        }

        .hero-content p {
            font-size: 1.25rem;
            margin-bottom: 30px;
            color: rgba(249, 250, 251, 0.9);
        }

        /* About Section */
        #about {
            background-color: var(--bg-off-white);
        }

        .about-content {
            display: flex;
            gap: 50px;
            align-items: center;
        }

        .about-text {
            flex: 1;
        }
        
        .about-text h3 {
            font-size: 1.8rem;
            margin-bottom: 15px;
        }

        .about-text p {
            margin-bottom: 15px;
            color: var(--text-muted);
        }
        
        .about-image {
            flex: 1;
            max-width: 500px;
        }
        
        .about-image img {
            width: 100%;
            border-radius: 12px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        /* Speakers Section */
        .speakers-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }

        .speaker-card {
            background: var(--bg-light);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            text-align: center;
            padding: 30px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .speaker-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .speaker-card img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 20px;
            border: 4px solid var(--border-color);
        }

        .speaker-card h3 {
            font-size: 1.5rem;
            margin-bottom: 5px;
        }

        .speaker-card .title {
            color: var(--primary-color);
            font-weight: 600;
            margin-bottom: 10px;
        }

        .speaker-card .bio {
            font-size: 0.95rem;
            color: var(--text-muted);
        }

        /* Schedule Section */
        #schedule {
            background-color: var(--bg-off-white);
        }
        .schedule-table {
            width: 100%;
            border-collapse: collapse;
            margin: 0 auto;
            max-width: 900px;
            background: var(--bg-light);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        .schedule-table th, .schedule-table td {
            padding: 20px;
            text-align: left;
            border-bottom: 1px solid var(--border-color);
        }
        .schedule-table th {
            background-color: var(--secondary-color);
            color: var(--text-light);
            font-family: 'Poppins', sans-serif;
        }
        .schedule-table tbody tr:last-child td {
            border-bottom: none;
        }
        .schedule-time {
            font-weight: 700;
            color: var(--primary-color);
            width: 150px;
        }
        .schedule-session h4 {
            font-size: 1.1rem;
            margin-bottom: 5px;
        }
        .schedule-session p {
            font-size: 0.9rem;
            color: var(--text-muted);
        }

        /* Registration Section */
        .registration-form-container {
            max-width: 700px;
            margin: 0 auto;
            background: var(--bg-light);
            padding: 40px;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
        }

        .form-group input, .form-group select {
            width: 100%;
            padding: 12px;
            border-radius: 8px;
            border: 1px solid var(--border-color);
            font-size: 1rem;
            font-family: 'Inter', sans-serif;
            transition: border-color 0.3s, box-shadow 0.3s;
        }

        .form-group input:focus, .form-group select:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
        }
        
        .register-btn {
            width: 100%;
            padding: 15px;
            font-size: 1.1rem;
            border: none;
            cursor: pointer;
        }
        
        /* Venue Section */
        #venue {
            background-color: var(--bg-off-white);
        }

        .venue-content {
            display: flex;
            gap: 50px;
            align-items: flex-start;
        }

        .venue-details {
            flex: 1;
        }

        .venue-map {
            flex: 1.5;
            height: 400px;
        }
        
        .venue-map iframe {
            width: 100%;
            height: 100%;
            border: 0;
            border-radius: 12px;
        }

        .venue-details h3 {
            font-size: 1.8rem;
            margin-bottom: 20px;
        }

        .venue-info {
            list-style: none;
        }
        
        .venue-info li {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            font-size: 1.1rem;
        }
        
        .venue-info li i {
            font-size: 1.5rem;
            color: var(--primary-color);
            width: 40px;
        }

        /* Footer */
        footer {
            background-color: var(--secondary-color);
            color: var(--text-light);
            padding: 50px 0;
            text-align: center;
        }

        .footer-socials {
            margin-bottom: 20px;
        }

        .footer-socials a {
            color: var(--text-light);
            font-size: 1.5rem;
            margin: 0 15px;
            transition: color 0.3s ease, transform 0.3s ease;
            display: inline-block;
        }

        .footer-socials a:hover {
            color: var(--primary-color);
            transform: translateY(-3px);
        }

        .footer-copyright {
            font-size: 0.9rem;
            color: var(--text-muted);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .nav-links {
                display: none; /* Simple hiding for mobile, as hamburger menu requires JS */
            }
            .hero-content h1 {
                font-size: 2.8rem;
            }
            .hero-content p {
                font-size: 1.1rem;
            }
            .section-title {
                font-size: 2rem;
            }
            section {
                padding: 60px 0;
            }
            .about-content, .venue-content {
                flex-direction: column;
            }
            .about-image {
                margin-top: 30px;
            }
            .venue-map {
                margin-top: 30px;
                height: 300px;
            }
            .schedule-table th, .schedule-table td {
                padding: 15px;
            }
            .schedule-time {
                font-size: 0.9rem;
            }
        }
    </style>
</head>
<body>

    <!-- Header & Navbar -->
    <header>
        <nav class="navbar">
            <div class="nav-container">
                <a href="#" class="nav-logo">DataSphere '25</a>
                <ul class="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#speakers">Speakers</a></li>
                    <li><a href="#schedule">Schedule</a></li>
                    <li><a href="#register">Register</a></li>
                    <li><a href="#venue">Venue</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <!-- Hero Section -->
        <section id="hero">
            <div class="hero-content">
                <h1>DataSphere 2025: Charting the Future with AI</h1>
                <p>Connect, Learn, and Innovate with the Brightest Minds in Data Science. Join us for a full day of insightful talks, hands-on workshops, and networking.</p>
                <a href="#register" class="btn">Register Now</a>
            </div>
        </section>

        <!-- About the Event Section -->
        <section id="about">
            <div class="container">
                <h2 class="section-title">About The Event</h2>
                <p class="section-subtitle">Discover what makes DataSphere 2025 a must-attend event for anyone passionate about data.</p>
                <div class="about-content">
                    <div class="about-text">
                        <h3>Why Should You Attend?</h3>
                        <p>DataSphere 2025 is the premier gathering for students, professionals, and enthusiasts in the field of Data Science and Artificial Intelligence. Our mission is to foster a community of learning and innovation.</p>
                        <p>This year, we focus on the latest trends in generative AI, ethical data practices, and real-world applications of machine learning. You'll leave with actionable insights, a stronger network, and inspiration to tackle your next data challenge.</p>
                        <ul>
                            <li><strong>Learn</strong> from industry experts at the forefront of AI.</li>
                            <li><strong>Network</strong> with peers, mentors, and potential employers.</li>
                            <li><strong>Innovate</strong> through hands-on workshops and challenges.</li>
                        </ul>
                    </div>
                    <div class="about-image">
                        <img src="https://placehold.co/600x400/4f46e5/ffffff?text=Collaboration" alt="People collaborating on a data project">
                    </div>
                </div>
            </div>
        </section>

        <!-- Speakers/Guests Section -->
        <section id="speakers">
            <div class="container">
                <h2 class="section-title">Meet Our Speakers</h2>
                <p class="section-subtitle">We are proud to host a diverse group of thought leaders and pioneers from the world of data science.</p>
                <div class="speakers-grid">
                    <!-- Speaker 1 -->
                    <div class="speaker-card">
                        <img src="https://placehold.co/150x150/e0e7ff/4f46e5?text=AA" alt="Speaker 1 Photo">
                        <h3>Dr. Anya Sharma</h3>
                        <p class="title">Lead AI Researcher, QuantumLeap Inc.</p>
                        <p class="bio">Dr. Sharma is a leading voice in Natural Language Processing. Her keynote will explore the future of conversational AI.</p>
                    </div>
                    <!-- Speaker 2 -->
                    <div class="speaker-card">
                        <img src="https://placehold.co/150x150/e0e7ff/4f46e5?text=RK" alt="Speaker 2 Photo">
                        <h3>Rohan Kumar</h3>
                        <p class="title">Founder & CEO, DataViz Solutions</p>
                        <p class="bio">Rohan turned his passion for data storytelling into a multi-million dollar startup. He'll share his entrepreneurial journey.</p>
                    </div>
                    <!-- Speaker 3 -->
                    <div class="speaker-card">
                        <img src="https://placehold.co/150x150/e0e7ff/4f46e5?text=PD" alt="Speaker 3 Photo">
                        <h3>Prof. Priya Desai</h3>
                        <p class="title">Head of CS, National Institute of Technology</p>
                        <p class="bio">Professor Desai will conduct a deep-dive workshop on ethical frameworks for building responsible AI systems.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Schedule/Agenda Section -->
        <section id="schedule">
            <div class="container">
                <h2 class="section-title">Event Schedule</h2>
                <p class="section-subtitle">A full day packed with learning and networking opportunities. Plan your day with our detailed agenda.</p>
                <table class="schedule-table">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Session Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="schedule-time">09:00 AM - 09:30 AM</td>
                            <td class="schedule-session">
                                <h4>Registration & Welcome Coffee</h4>
                                <p>Check-in and network with fellow attendees.</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="schedule-time">09:30 AM - 10:30 AM</td>
                            <td class="schedule-session">
                                <h4>Keynote: The Future of Conversational AI</h4>
                                <p>By Dr. Anya Sharma</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="schedule-time">10:45 AM - 12:00 PM</td>
                            <td class="schedule-session">
                                <h4>Workshop: Building Ethical AI</h4>
                                <p>By Prof. Priya Desai</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="schedule-time">12:00 PM - 01:00 PM</td>
                            <td class="schedule-session">
                                <h4>Lunch & Networking</h4>
                                <p>Enjoy a catered lunch and connect with speakers and peers.</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="schedule-time">01:00 PM - 02:00 PM</td>
                            <td class="schedule-session">
                                <h4>Talk: The Data-Driven Startup</h4>
                                <p>By Rohan Kumar</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="schedule-time">02:15 PM - 03:30 PM</td>
                            <td class="schedule-session">
                                <h4>Panel Discussion: Data Science Careers in 2025</h4>
                                <p>With all our speakers and special guests.</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="schedule-time">03:30 PM - 04:00 PM</td>
                            <td class="schedule-session">
                                <h4>Closing Remarks & Awards</h4>
                                <p>Announcing winners of the student data challenge.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- Registration Section -->
        <section id="register">
            <div class="container">
                <h2 class="section-title">Join Us!</h2>
                <p class="section-subtitle">Seats are limited. Register now to secure your spot at DataSphere 2025 and be part of the future of data.</p>
                <div class="registration-form-container">
                    <form action="#" method="POST">
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your full name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required>
                        </div>
                        <div class="form-group">
                            <label for="role">I am a...</label>
                            <select id="role" name="role">
                                <option value="student">Student</option>
                                <option value="professional">Working Professional</option>
                                <option value="faculty">Faculty/Researcher</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <button type="submit" class="btn register-btn">Confirm Registration</button>
                    </form>
                </div>
            </div>
        </section>

        <!-- Venue/Contact Section -->
        <section id="venue">
            <div class="container">
                <h2 class="section-title">Venue & Contact</h2>
                <p class="section-subtitle">Find your way to the event and get in touch with our team.</p>
                <div class="venue-content">
                    <div class="venue-details">
                        <h3>Event Location</h3>
                        <ul class="venue-info">
                            <li><i class="fa-solid fa-location-dot"></i> <span>University Auditorium<br>Kothri Kalan, Madhya Pradesh, India</span></li>
                            <li><i class="fa-solid fa-calendar-days"></i> <span>September 27, 2025</span></li>
                            <li><i class="fa-solid fa-envelope"></i> <span>contact@datasphere.club</span></li>
                        </ul>
                    </div>
                    <div class="venue-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117924.58229782594!2d77.3323577747833!3d23.25993330349074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-socials">
                <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
                <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            </div>
            <p class="footer-copyright">&copy; 2025 DataSphere | Organized by the Data Science Club. All rights reserved.</p>
        </div>
    </footer>

</body>
</html>
