import React, { useState } from 'react';
import './MultiStepForm.css';

const PersonalInfo = ({ formData, setFormData, nextStep }) => {
  const handleNext = () => {
    if (formData.firstName && formData.lastName && formData.email) {
      nextStep();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="form-step">
      <h2>Step 1: Personal Information</h2>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

const AddressInfo = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleNext = () => {
    if (formData.address && formData.city && formData.zip) {
      nextStep();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="form-step">
      <h2>Step 2: Address Information</h2>
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      <input
        type="text"
        placeholder="ZIP Code"
        value={formData.zip}
        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

const ReviewSubmit = ({ formData, prevStep, handleSubmit }) => {
  return (
    <div className="form-step">
      <h2>Step 3: Review and Submit</h2>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Address:</strong> {formData.address}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>ZIP Code:</strong> {formData.zip}</p>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });

  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const handleSubmit = () => {
    alert('Form Submitted Successfully!');
    console.log(formData);
    setStep(1);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      zip: '',
    });
  };

  return (
    <div className="app">
      <h1>Multi-Step Form</h1>
      {step === 1 && <PersonalInfo formData={formData} setFormData={setFormData} nextStep={nextStep} />}
      {step === 2 && <AddressInfo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <ReviewSubmit formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} />}
    </div>
  );
};

export default MultiStepForm;
