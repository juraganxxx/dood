// src/molecules/SortSelect.js
import React from 'react';

const SortSelect = ({ onSortChange }) => (
  <select onChange={onSortChange} className="border rounded px-2 py-1">
    <option value="latest">Terbaru</option>
    <option value="popular">Paling Populer</option>
    <option value="oldest">Terlama</option>
  </select>
);

export default SortSelect;
