import { useState } from 'react';
import './AnonymousNote.css'; // Import the CSS

export default function AnonymousNote() {
    const [note, setNote] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (note.trim()) {
            try {
                const response = await fetch(
                    'https://script.google.com/macros/s/AKfycby40peBljgZWp4jpD332yeCUXDlaIU-87tZ2_t2M42UoedMEcNvapv_BtHgOg-bdqzBeQ/exec',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ message: note }),
                    }
                );
                const result = await response.json();
                if (result.status === 'Success') {
                    alert('Note submitted!');
                    setNote('');
                } else {
                    alert('Failed to submit note.');
                }
            } catch (error) {
                console.error('Error submitting note:', error);
                alert('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Leave your anonymous note..."
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
}