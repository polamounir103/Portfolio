import React from 'react';

function SkillCircle({ boxWidth, percentage, radius }) {
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - percentage / 100);

  return (
    <div className='circle-box'>
      <svg width={boxWidth} height={boxWidth} viewBox={`0 0 ${boxWidth} ${boxWidth}`}>
      <defs>
        <linearGradient id="progressGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#e149a5" />  
            <stop offset="100%" stopColor="#5839e1" />
        </linearGradient>
      </defs>

        <circle
          cx={boxWidth / 2}
          cy={boxWidth / 2}
          r={radius}
          fill='#a2a2a2'
          stroke='#a2a2a2'
          strokeWidth="10"
          className="skill-circle-background"
        />
        <circle
          cx={boxWidth / 2}
          cy={boxWidth / 2}
          r={radius}
          strokeWidth="25"
          fill='#a2a2a2'
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="url(#progressGradient)" 
          className="skill-circle-progress"
        />
      </svg>
      <span className="percentage-no">{percentage}%</span>
    </div>
  );
}

export default SkillCircle;
