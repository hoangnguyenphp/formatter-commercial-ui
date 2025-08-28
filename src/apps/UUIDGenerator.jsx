// src/pages/UUIDGenerator.jsx
import React, { useState } from 'react';
import AppLayout from '../layouts/AppLayout';
import { v4 as uuidv4 } from 'uuid';

export default function UUIDGenerator() {
	const [uuid, setUuid] = useState();
	const [copied, setCopied] = useState(false);

	const generateUUID = () => {
		setUuid(uuidv4());
		setCopied(false); // reset copy status
	};

	const copyToClipboard = () => {
		navigator.clipboard.writeText(uuid).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000); // reset after 2s
		});
	};

	return (
		<AppLayout>
			<div style={{ padding: '2rem', textAlign: 'center' }}>
				<h2>UUID Generator</h2>
				<input
				  type="text"
				  value={uuid}
				  readOnly
				  placeholder="New UUID..."
				  style={{
				    width: '60%',
				    padding: '0.6rem',
				    fontSize: '1rem',
				    borderRadius: '8px',
				    border: '1px solid #ccc',
					textAlign: 'center',
					marginTop: '20px',
					marginBottom: '20px',
				  }}
				/>

				{/* Buttons */}
				<div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
					<button
						onClick={generateUUID}
						style={{ 
							padding: '0.6rem 1.2rem', 
							borderRadius: '8px', 
							border: 'none', 
							cursor: 'pointer', 
							fontSize: '1rem', }}
						className="uuid-generate-btn"
					>
						Generate New UUID
					</button>

					<button
						onClick={copyToClipboard}
						style={{
							padding: '0.6rem 1.2rem',
							borderRadius: '8px',
							border: 'none',
							cursor: 'pointer',
							fontSize: '1rem',
							background: copied ? '#2196F3' : '#555',
							color: 'white',
						}}
					>
						{copied ? 'Copied!' : 'Copy'}
					</button>
				</div>
			</div>
		</AppLayout>
	);
}
