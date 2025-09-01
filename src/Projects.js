import BackButton from './components/BackButton'; // Import the Back Button

export default function Projects() {
  const projects = [
    {
      title: "IoT Stream Processing & Real-Time Analytics Platform",
      date: "Apr 2025",
      tech: ["Java", "Kafka", "Samza", "YARN", "AWS"],
      bullets: [
        "Built a real-time driver-matching system using Apache Samza by joining GPS data streams, inspired by Uber.",
        "Developed an IoT-based contextual ad engine by joining live device data with static user and store profiles.",
        "Deployed and monitored distributed Samza jobs on AWS EMR cluster with fault-tolerant Kafka topics.",
        "Practiced Test-Driven Development (TDD) to ensure robust and reliable stream processing pipelines."
      ]
    },
    {
      title: "Large-Scale Data Iterative Processing",
      date: "Feb 2025 – Mar 2025",
      tech: ["Scala", "Azure", "Spark", "Databricks", "HDInsight"],
      bullets: [
        "Developed and optimized Spark applications using RDDs and DataFrames for large-scale data processing.",
        "Implemented the PageRank algorithm to analyze a Twitter social graph, improving graph data processing efficiency.",
        "Deployed and compared Spark applications on Azure Databricks vs. HDInsight, optimizing performance."
      ]
    },
    {
      title: "Container Orchestration",
      date: "Feb 2025",
      tech: ["Java", "YAML", "Terraform", "Kubernetes", "Helm", "GCP", "Azure"],
      bullets: [
        "Containerized microservices with Docker, Kubernetes, ensuring real-time scalability and high availability.",
        "Automated CI/CD with GitHub Actions and integrated Azure Front Door for global routing on multiple clouds.",
        "Refactored monoliths into microservices, improving security, maintainability, and operational efficiency."
      ]
    },
    {
      title: "Auto-Scaling Web Server",
      date: "Jan 2025",
      tech: ["Python", "Terraform", "AWS", "Elastic Load Balancer", "CloudWatch"],
      bullets: [
        "Designed solutions to programmatically manage cloud resources for dynamic loads with cloud APIs.",
        "Configured and deployed Elastic Load Balancer and Auto Scaling Group on AWS EC2.",
        "Analyzed workload patterns and developed elasticity policies to maintain the QoS of web services with CloudWatch.",
        "Orchestrated infrastructure on the cloud using Terraform as part of the deployment process."
      ]
    }
  ];

  return (
    <div style={{ textAlign: 'center', padding: '50px', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <h1 className="flicker">My Projects</h1>
      <p className="intro"> Flickering neon lines and pulsing code — dive into my digital creations. </p>
      {/* Scrollable section */}
      <div style={{ 
        flex: 1, 
        overflowY: 'auto', 
        textAlign: 'left', 
        maxWidth: '1000px', 
        margin: '20px auto', 
        paddingRight: '10px' 
      }}>
        {projects.map((proj, index) => (
          <div key={index} style={{ marginBottom: '40px' }}>
            <h2>{proj.title}</h2>
            <p className="intro">{proj.date}</p>
            <div style={{ marginBottom: '10px' }}>
              {proj.tech.map((t, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-block',
                    marginRight: '8px',
                    marginBottom: '5px',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.85em'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <ul>
              {proj.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ flexShrink: 0, textAlign: 'center', padding: '50px' }}>
        <BackButton />
      </div>
    </div>
  );
}