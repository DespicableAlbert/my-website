import BackButton from './components/BackButton';
import CyberButton from './components/CyberButton';

export default function Contact() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '50px',
        color: '#0ff',
        fontFamily: '"Courier New", Courier, monospace',
      }}
    >
      <h1 className="flicker">Get in Touch</h1>

      <p className="intro">
        Welcome to the digital frontier — where ideas flicker and connections ignite.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '50px',
        }}
      >
        {/* Option 1: Email directly */}
        <div
          className="cyber-glow"
          style={{
            flex: '1 1 300px',
            maxWidth: '400px',
            padding: '30px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: 'transparent',
          }}
        >
          <h2 style={{ marginBottom: '20px', textShadow: '0 0 8px #0ff' }}>Email Me</h2>
          <p style={{ marginBottom: '20px' }}>Reach me directly at:</p>
          <p style={{ fontWeight: 'bold', fontSize: '16px', textShadow: '0 0 6px #0ff' }}>
            kuangshenalbert@gmail.com
          </p>
        </div>

        {/* Option 2: Leave a note */}
        <div
          className="cyber-glow"
          style={{
            flex: '1 1 300px',
            maxWidth: '400px',
            padding: '30px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: 'transparent',
          }}
        >
          <h2 style={{ marginBottom: '20px', textShadow: '0 0 8px #0ff' }}>Leave a Note</h2>
          <form
            action="https://formspree.io/f/xeolkegj"
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {['name', 'email'].map((field) => (
              <input
                key={field}
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                placeholder={field === 'email' ? 'Your Email' : 'Your Name'}
                required
                style={{
                  width: '100%',
                  marginBottom: '15px',
                  padding: '12px',
                  fontSize: '16px',
                  backgroundColor: 'transparent',
                  border: '2px solid #0ff',
                  borderRadius: '8px',
                  color: '#0ff',
                  outline: 'none',
                  boxShadow: '0 0 8px #0ff inset, 0 0 12px #0ff',
                  fontFamily: '"Courier New", Courier, monospace',
                  transition: '0.3s',
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = '0 0 12px #0ff inset, 0 0 20px #0ff';
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = '0 0 8px #0ff inset, 0 0 12px #0ff';
                }}
              />
            ))}
            <textarea
              name="message"
              placeholder="Your Note"
              required
              rows="5"
              style={{
                width: '100%',
                marginBottom: '15px',
                padding: '12px',
                fontSize: '16px',
                backgroundColor: 'transparent',
                border: '2px solid #0ff',
                borderRadius: '8px',
                color: '#0ff',
                outline: 'none',
                boxShadow: '0 0 8px #0ff inset, 0 0 12px #0ff',
                fontFamily: '"Courier New", Courier, monospace',
                transition: '0.3s',
              }}
              onFocus={(e) => {
                e.target.style.boxShadow = '0 0 12px #0ff inset, 0 0 20px #0ff';
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = '0 0 8px #0ff inset, 0 0 12px #0ff';
              }}
            />
            <CyberButton>
              Send
            </CyberButton>
          </form>
        </div>
      </div>

      <BackButton />
    </div>
  );
}