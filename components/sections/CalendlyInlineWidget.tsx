'use client';

import { useEffect } from 'react';

export default function CalendlyInlineWidget() {
  useEffect(() => {
    const scriptId = 'calendly-widget-script';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/geevar-invisorstaffing/tax-consultation"
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}