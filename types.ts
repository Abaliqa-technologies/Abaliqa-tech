
// Add missing React import for React.ReactNode type reference
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export interface AdvisorResponse {
  analysis: string;
  roadmap: string[];
  recommendedServices: string[];
}
