import React from 'react';
import './index.css';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="spinner border-4 border-t-4 rounded-full border-gray-600"></div>
    </div>
  );
};
