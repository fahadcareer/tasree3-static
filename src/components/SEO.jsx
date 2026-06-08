import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description }) {
  const location = useLocation();

  useEffect(() => {
    document.title = title 
      ? `${title} | Tasree3 Agentic Government Process Intelligence Platform` 
      : 'Tasree3 | Agentic Government Process Intelligence Platform';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content', 
      description || 'Tasree3 is a next-generation Agentic Government Process Intelligence Platform. Accelerate digital transformation and compliance audits.'
    );
  }, [title, description, location]);

  return null;
}
