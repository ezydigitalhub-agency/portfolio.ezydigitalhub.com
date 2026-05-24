import React from 'react';

export default function EzyLogo({ className = "h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="https://ezydigitalhub.com/wp-content/uploads/2026/04/1.png"
        alt="EZY Digital Hub Logo"
        referrerPolicy="no-referrer"
        className="h-full w-auto object-contain"
      />
    </div>
  );
}
