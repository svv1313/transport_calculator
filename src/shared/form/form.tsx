import React from 'react';

interface FormProps {
  onSubmit: () => void
}

export const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};