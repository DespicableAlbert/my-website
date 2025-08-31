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
      <style>
        {`
          @keyframes cyberGlow {
            0% { border-color: #ff00ff; box-shadow: 0 0 20px #ff00ff, 0 0 40px #ff00ff inset; }
            25% { border-color: #00ffff; box-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff inset; }
            50% { border-color: #ff007f; box-shadow: 0 0 20px #ff007f, 0 0 40px #ff007f inset; }
            75% { border-color: #8a2be2; box-shadow: 0 0 20px #8a2be2, 0 0 40px #8a2be2 inset; }
            100% { border-color: #ff00ff; box-shadow: 0 0 20px #ff00ff, 0 0 40px #ff00ff inset; }
          }
          .cyber-glow {
            animation: cyberGlow 5s linear infinite;
          }
        `}
      </style>

      <h1 className="flicker">Get in Touch</h1>

      <p style={{ fontSize: '18px', marginBottom: '40px' }}>
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
          <p style={{ fontWeight: 'bold', fontSize: '16px', textShadow: '0 0 6px #0ff' }}>kuangshenalbert@gmail.com</p>
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
            <CyberButton
              type="submit"
              style={{
                padding: '12px',
                fontSize: '16px',
                cursor: 'pointer',
                borderRadius: '8px',
                border: '2px solid #0ff',
                backgroundColor: 'transparent',
                color: '#0ff',
                fontWeight: 'bold',
                boxShadow: '0 0 15px #0ff, 0 0 25px #0ff',
                transition: '0.3s',
              }}
              onMouseOver={(e) => {
                e.target.style.boxShadow = '0 0 20px #0ff, 0 0 40px #0ff';
              }}
              onMouseOut={(e) => {
                e.target.style.boxShadow = '0 0 15px #0ff, 0 0 25px #0ff';
              }}
            >
              Send
            </CyberButton>
          </form>
        </div>
      </div>

      <BackButton />
    </div>
  );
}