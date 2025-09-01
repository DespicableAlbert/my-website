import BackButton from './components/BackButton'; // Import the Back Button

export default function About() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px', textAlign: 'left' }}>
      <h1 className="flicker" style={{ textAlign: 'center' }}>About Me</h1>

      {/* Cyberpunk one-line intro */}
      <p className="intro" style={{ textAlign: 'center', marginBottom: '40px' }}>
        Hacking the neon veins of the digital city — code is my conduit.
      </p>
      
      {/* Education */}
      <section style={{ marginBottom: '40px' }}>
        <h2> Education</h2>
        <p>
          Bachelor of Science in <strong>Artificial Intelligence</strong>, 
          Carnegie Mellon University — <em>Graduated May 2025</em>
        </p>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Technical Skills</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h3>Languages</h3>
            <p>Java, Python, C, SQL, JavaScript (Node.js, React), Bash</p>
          </div>
          <div>
            <h3>Platforms & Tools</h3>
            <p>GitHub, Linux, Docker, AWS, Azure, GCP, Kubernetes, Terraform</p>
          </div>
          <div>
            <h3>Libraries & Frameworks</h3>
            <p>Spark, Kafka, Samza, FastAPI, PyTorch, TensorFlow, CUDA, OpenCV, Transformers</p>
          </div>
          <div>
            <h3>Other</h3>
            <p>
              System Design, REST APIs, Prompt Engineering,
              Cloud Computing, Distributed Systems, Computer Systems, Data Structures & Algorithms, Functional Programming, 
              Deep Learning, Machine Learning, Computer Vision, Search Engines
              {/* Modern Regression, Linear Algebra, 3D Calculus, Discrete Math, Probability Theory */}
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section>
        <h2>About</h2>
        <p>
          I specialize in building scalable AI systems and cloud-native applications. 
          My interests span from real-time data processing and distributed systems 
          to machine learning and software engineering best practices. 
          I enjoy solving challenging problems and bringing ideas to life through code.
        </p>
      </section>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <BackButton />
      </div>
    </div>
  );
}