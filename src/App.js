import React, { useState } from 'react';
import Form from './components/Form';

const App = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  // filter agreement
  const filterAgreement = submittedData
    ? Object.entries(submittedData).filter(([key]) => key !== 'agreeTerms')
    : [];

  return (
    <div className="container">
      <h1>Data Entry Form</h1>

      <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />

      {submittedData && (
    <div className="submittedData">
      <h2>Submitted Data:</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Imformation</th>
          </tr>
        </thead>
        <tbody>
          
        {filterAgreement.map(([key, value]) => (
              <tr key={key}>
                <td><strong>{key}</strong></td>
                <td>{value ? value : 'N/A'}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
)}

    </div>
  );
};

export default App;
