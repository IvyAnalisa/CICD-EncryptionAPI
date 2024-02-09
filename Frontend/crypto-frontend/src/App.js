
import './App.css';
import React, { useState,} from 'react';
import axios from 'axios';
function App() {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleEncrypt = async () => {
    try {
      const response = await axios.post('/api/crypto/encrypt', inputText);
      setEncryptedText(response.data);
    } catch (error) {
      console.error('Error encrypting text:', error);
    }
  };

  const handleDecrypt = async () => {
    try {
      const response = await axios.post('/api/crypto/decrypt', encryptedText);
      setDecryptedText(response.data);
    } catch (error) {
      console.error('Error decrypting text:', error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Enter text to encrypt"
        />
        <button onClick={handleEncrypt}>Encrypt</button>
      </div>
      <div>
        Encrypted Text: {encryptedText}
      </div>
      <div>
        <input
          type="text"
          value={encryptedText}
          onChange={e => setEncryptedText(e.target.value)}
          placeholder="Enter text to decrypt"
        />
        <button onClick={handleDecrypt}>Decrypt</button>
      </div>
      <div>
        Decrypted Text: {decryptedText}
      </div>
    </div>
  );

}

export default App;
