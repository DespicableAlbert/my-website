import BackButton from './components/BackButton'; // Import the Back Button

export default function Contact() {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1 className="flicker">Get in Touch</h1>
        <p>Email: kuangs@andrew.cmu.edu</p>
        <BackButton />
      </div>
    );
  }