import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const handleChallengeClick = (challengeNum) => {
    setSelectedChallenge(challengeNum);
    setPage(`challenge${challengeNum}`);
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo-section">
          <img src="/logo.png" alt="logo" className="logo-img" />
          <span>BYKAZ CyberCare Team</span>
        </div>

        <div className="links">
          <button
            className={page === "home" ? "active" : ""}
            onClick={() => setPage("home")}
          >
            Home
          </button>

          <button
            className={page === "contacts" ? "active" : ""}
            onClick={() => setPage("contacts")}
          >
            Contacts
          </button>

          <button
            className={page === "team" ? "active" : ""}
            onClick={() => setPage("team")}
          >
            Team members
          </button>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="page-content">
        {page === "home" && (
          <Home 
            page={page}
            setPage={setPage}
            onChallengeClick={handleChallengeClick}
          />
        )}
        {page === "contacts" && <Contacts />}
        {page === "team" && <TeamMembers />}
        {page.startsWith("challenge") && selectedChallenge && (
          <ChallengeDetail challengeNum={selectedChallenge} setPage={setPage} />
        )}
      </div>
    </div>
  );
}

/* HOME PAGE */
function Home({ page, setPage, onChallengeClick }) {
  const challenges = [
    { num: 1, title: "Clarify values", difficulty: "Easy" },
    { num: 2, title: "Set the example", difficulty: "Medium" },
    { num: 3, title: "Envision the future", difficulty: "Hard" },
    { num: 4, title: "Enlist others", difficulty: "Medium" },
    { num: 5, title: "Search for opportunitie", difficulty: "Hard" },
    { num: 6, title: "Experiment and take risks", difficulty: "Medium" },
    { num: 7, title: "Foster collaboration", difficulty: "Easy" },
    { num: 8, title: "Strengthen others", difficulty: "Hard" },
    { num: 9, title: "Recognize contributions", difficulty: "Medium" },
    { num: 10, title: "Celebrate the values and victories", difficulty: "Hard" },
  ];

  return (
    <div className="container">
      <h1>Welcome to BYKAZ CyberCare team</h1>
      <p className="subtitle">
        Protecting Digital Systems. Fighting Cyber Threats.
      </p>

      <h2 className="challenges-title">10 SLC Challenges</h2>
      <div className="challenges-grid">
        {challenges.map((challenge) => (
          <div key={challenge.num} className="challenge-card">
            <h3>Challenge {challenge.num}</h3>
            <p className="challenge-name">{challenge.title}</p>
            
            <button 
              className="challenge-btn"
              onClick={() => onChallengeClick(challenge.num)}
            >
              Start Challenge
            </button>
          </div>
        ))}
      </div>

      <h2 className="team-title">Our Team</h2>
      <div className="team">
        <div className="card">
          <h3>Alibek</h3>
          <p></p>
        </div>

        <div className="card">
          <h3>Aitore</h3>
          <p></p>
        </div>

        <div className="card">
          <h3>Mansur</h3>
          <p></p>
        </div>
        <div className="card">
          <h3>Azamat</h3>
          <p></p>
        </div>
        <div className="card">
          <h3>Ilyias</h3>
          <p></p>
        </div>
      </div>
    </div>
  );
}

/* TEAM MEMBERS PAGE */
function TeamMembers() {
  return (
    <div className="container">
      <h1>Welcome to BYKAZ CyberCare team</h1>
      <p className="subtitle">
        Protecting Digital Systems. Fighting Cyber Threats.
      </p>

      <div className="team">
        <div className="card">
          <h3>Alibek</h3>
          <p></p>
        </div>

        <div className="card">
          <h3>Aitore</h3>
          <p></p>
        </div>

        <div className="card">
          <h3>Mansur</h3>
          <p></p>
        </div>
        <div className="card">
          <h3>Azamat</h3>
          <p></p>
        </div>
        <div className="card">
          <h3>Ilyias</h3>
          <p></p>
        </div>
      </div>
    </div>
  );
}

/* CONTACTS PAGE */
function Contacts() {
  return (
    <div className="container">
      <h1>Our contacts</h1>
      <h2>Instagram: <a href="https://www.instagram.com/bykaz_cybercare?igsh=MXZ2dGcwdXp4aGdlbQ==">@bykaz_cybercare</a></h2>
      <h2>Telegram: <a href="https://t.me/+dlwB-YHKNFkzNGFi">@BYKAZ_CyberCare</a></h2>
    </div>
  );
}

/* CHALLENGE DETAIL PAGE */
function ChallengeDetail({ challengeNum, setPage }) {
  const challengeData = {
    1: {
      title: "Challenge 1: Password Security",
      description: "Learn about secure password practices and encryption",
      details: "In this challenge, we demonstrated our personal and shared values through a video.",

      subtitle1: "Personal values of each team member",
      objectives: [
        "Aitore: Justice",
        "Alibek: Empowerment",
        "Mansur: Empathy",
        "Iliyas: Integrity",
        "Azamat: Responsibility"
      ],

      subtitle2: "Team's shared values",
      hints: [
        "Justice: A safe internet requires strong laws and enforcement.",
        "Empowement: Education turns victims into protectors.",
        "Empathy: Scammers exploit emotions — empathy restores them.",
        
      ],
      resources: [
        "OWASP Password Storage Cheat Sheet",
        "bcrypt Documentation",
        "Understanding Salted Password Hashing",
      ],
    },
    2: {
      title: "Challenge 2: SQL Injection Prevention",
      difficulty: "",
      description: "",
      details: "",
      objectives: [
        "Understand how SQL injection attacks work",
        "Learn about parameterized queries and prepared statements",
        "Implement input validation and sanitization",
        "Use ORM frameworks to prevent SQL injection",
      ],
      hints: [
        "Always use parameterized queries instead of string concatenation",
        "Validate and sanitize all user inputs",
        "Use least privilege principle for database accounts",
        "Implement Web Application Firewalls (WAF)",
      ],
      resources: [
        "OWASP SQL Injection Prevention Cheat Sheet",
        "SQL Injection Tutorial",
        "Parameterized Queries Guide",
      ],
    },
    3: {
      title: "Challenge 3: Cryptography Basics",
      difficulty: "Hard",
      description: "Learn encryption, decryption, and key management",
      details: "",
      objectives: [
        "Understand symmetric encryption (AES, DES)",
        "Learn about asymmetric encryption (RSA, ECC)",
        "Implement key derivation functions",
        "Understand digital signatures and certificates",
      ],
      hints: [
        "Use established libraries like OpenSSL",
        "Never implement crypto from scratch",
        "Understand key derivation functions",
        "Always use authenticated encryption",
      ],
      resources: [
        "Cryptography Basics Guide",
        "OpenSSL Documentation",
        "Key Management Best Practices",
      ],
    },
    4: {
      title: "Challenge 4: XSS Attack Prevention",
      difficulty: "Medium",
      description: "Prevent Cross-Site Scripting attacks",
      details: "",
      objectives: [
        "Understand stored and reflected XSS attacks",
        "Learn about DOM-based XSS",
        "Implement proper input validation",
        "Use output encoding correctly",
      ],
      hints: [
        "Always encode user input for output context",
        "Use Content Security Policy (CSP) headers",
        "Validate and sanitize all user inputs",
        "Use security-focused templating engines",
      ],
      resources: [
        "OWASP XSS Prevention Cheat Sheet",
        "Content Security Policy Guide",
        "XSS Prevention Techniques",
      ],
    },
    5: {
      title: "Challenge 5: Network Security",
      difficulty: "Hard",
      description: "Secure network infrastructure and communications",
      details: "",
      objectives: [
        "Configure firewalls and access control lists",
        "Implement VPN solutions",
        "Set up intrusion detection systems",
        "Understand network protocols and security",
      ],
      hints: [
        "Use defense in depth strategy",
        "Monitor network traffic regularly",
        "Implement proper segmentation",
        "Use encryption for all communications",
      ],
      resources: [
        "Network Security Best Practices",
        "Firewall Configuration Guide",
        "VPN Implementation Guide",
      ],
    },
    6: {
      title: "Challenge 6: API Security",
      difficulty: "Medium",
      description: "Secure REST and GraphQL APIs",
      details: "",
      objectives: [
        "Implement OAuth 2.0 and JWT",
        "Prevent API rate limiting attacks",
        "Validate API inputs properly",
        "Implement proper error handling",
      ],
      hints: [
        "Always use HTTPS for API communication",
        "Implement rate limiting",
        "Use strong authentication mechanisms",
        "Validate all API inputs",
      ],
      resources: [
        "OWASP API Security Top 10",
        "JWT Best Practices",
        "OAuth 2.0 Implementation Guide",
      ],
    },
    7: {
      title: "Challenge 7: Phishing Detection",
      difficulty: "Easy",
      description: "Identify and prevent phishing attacks",
      details: "",
      objectives: [
        "Identify phishing email characteristics",
        "Understand social engineering tactics",
        "Implement email security controls",
        "Recognize malicious URLs and domains",
      ],
      hints: [
        "Check sender email addresses carefully",
        "Hover over links to see actual URLs",
        "Look for urgency and threats in emails",
        "Verify requests through official channels",
      ],
      resources: [
        "Phishing Prevention Guide",
        "Email Security Best Practices",
        "Social Engineering Awareness",
      ],
    },
    8: {
      title: "Challenge 8: Malware Analysis",
      difficulty: "Hard",
      description: "Analyze and understand malware behavior",
      details: "",
      objectives: [
        "Perform static malware analysis",
        "Conduct dynamic malware analysis",
        "Understand malware families and signatures",
        "Implement detection mechanisms",
      ],
      hints: [
        "Use isolated environments for analysis",
        "Understand common malware techniques",
        "Use reverse engineering tools carefully",
        "Document findings thoroughly",
      ],
      resources: [
        "Malware Analysis Guide",
        "Reverse Engineering Basics",
        "Sandbox Analysis Tools",
      ],
    },
    9: {
      title: "Challenge 9: Secure Coding Practices",
      difficulty: "Medium",
      description: "Write secure and robust code",
      details: "",
      objectives: [
        "Understand OWASP Top 10",
        "Implement secure coding standards",
        "Perform code reviews for security",
        "Use static analysis tools",
      ],
      hints: [
        "Follow OWASP guidelines",
        "Use security libraries and frameworks",
        "Perform regular code reviews",
        "Implement automated testing",
      ],
      resources: [
        "OWASP Secure Coding Practices",
        "Code Review Checklist",
        "Security Testing Tools",
      ],
    },
    10: {
      title: "Challenge 10: Incident Response",
      difficulty: "Hard",
      description: "Respond to security incidents effectively",
      details: "",
      objectives: [
        "Develop incident response plans",
        "Perform digital forensics",
        "Implement containment strategies",
        "Execute recovery procedures",
      ],
      hints: [
        "Have an incident response plan ready",
        "Preserve evidence properly",
        "Communicate clearly during incidents",
        "Document all actions taken",
      ],
      resources: [
        "Incident Response Framework",
        "Digital Forensics Guide",
        "Crisis Communication Plan",
      ],
    },
  };

  const challenge = challengeData[challengeNum];

  if (!challenge) {
    return (
      <div className="container">
        <h1>Challenge not found</h1>
        <button onClick={() => setPage("home")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="container challenge-detail">
      <button className="back-btn" onClick={() => setPage("home")}>
        ← Back to Home
      </button>
      
      <h1>{challenge.title}</h1>
      

      <section className="challenge-section">
        {challenge.details !== "" && (
          <h2>Overview</h2>
        )}
        {challenge.details === "" && (
          <h2>Coming soon</h2>
        )}
        <p>{challenge.details}</p>
      </section>
      {challenge.details !== "" && (
          <>
            <section className="challenge-section">
              <h2>{challenge.subtitle1}</h2>
              <ul className="objectives-list">
                {challenge.objectives.map((obj, idx) => (
                  <li key={idx}>✓ {obj}</li>
                ))}
              </ul>
            </section>

            <section className="challenge-section">
              <h2>{challenge.subtitle2}</h2>
              <ul className="hints-list">
                {challenge.hints.map((hint, idx) => (
                  <li key={idx}>• {hint}</li>
                ))}
              </ul>
            </section>
          </>
      )}
      

      

     
    </div>
  );
}
