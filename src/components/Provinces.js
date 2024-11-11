import React from 'react';

const provinces = [
  "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador",
  "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"
];

const Provinces = ({ selectedProvince, handleProvinceChange }) => {
  return (
    <div>
      <label htmlFor="province">Province:</label>
      <select
        id="province"
        name="province"
        value={selectedProvince}
        onChange={handleProvinceChange}
        required
      >
        <option value="">Select Province</option>
        {provinces.map((province, index) => (
          <option key={index} value={province}>
            {province}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Provinces;
