/*mpesapay.js this code snippet handles form submission for payform.jsx
it needs you to copy paste it to the paymentform,jsx.it submits the data to the
localhost:5000 backend
*/
import React, { useState } from 'react';

const PaymentForm = () => {
  const [phone, setPhone] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/stkpush", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone: phone, accountNumber: accountNumber, amount: amount }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage('Payment successful!');
      })
      .catch((error) => {
        console.error(error);
        setMessage('Payment failed!');
      });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h1>Mpesa Payment Form</h1>
      {message && <p style={{ color: message.includes('failed') ? 'red' : 'green' }}>{message}</p>}
      <div style={styles.formGroup}>
        <label htmlFor="phone" style={styles.label}>Phone Number</label>
        <input
          type="number"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
          style={styles.input}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="accountNumber" style={styles.label}>Account Number</label>
        <input
          type="text"
          id="accountNumber"
          value={accountNumber}
          onChange={handleAccountNumberChange}
          style={styles.input}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="amount" style={styles.label}>Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          style={styles.input}
          required
        />
      </div>
      <button type="submit" style={styles.button}>Pay Now</button>


    </form>
  );
};

