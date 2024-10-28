import BackButton from './components/BackButton'; // Import the Back Button

export default function About() {
    return (
      <div style={{textAlign: 'center', padding: '50px' }}>
        <h1>About Page</h1>
        <p>I specialize in AI and software engineering.</p>
        <BackButton />
      </div>
    );
}