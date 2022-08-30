import React, { useState } from 'react';

const SearchForm = ({ onCompanyFilter, onRoleFilter, onLocationFilter }) => {
  const [filters, setFilters] = useState({
    company: '',
    role: '',
    location: '',
  });
  const handleInput = (field) => (event) => {
    const { value } = event.target;
    setFilters({
      ...filters,
      [field]: value,
    });
    switch (field) {
      case 'company':
        onCompanyFilter(value);
        break;
      case 'role':
        onRoleFilter(value);
        break;
      case 'location':
        onLocationFilter(value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="  mx-12 my-16 flex flex-row gap-x-3">
      <div class="mb-3 pt-0">
        <label>Company</label>
        <input
          type="text"
          placeholder="Search Company Name "
          value={filters.company}
          onChange={handleInput('company')}
          class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
      </div>
      <div class="mb-3 pt-0">
        <label>Role</label>
        <input
          type="text"
          placeholder="Role :frontend,fullstack"
          value={filters.role}
          onChange={handleInput('role')}
          class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
      </div>
      <div class="mb-3 pt-0">
        <label>Location</label>
        <input
          type="text"
          placeholder="remote/worldwide/usa"
          value={filters.languages}
          onChange={handleInput('location')}
          class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
      </div>
    </div>
  );
};
export default SearchForm;
