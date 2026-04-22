function CtaLines({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 240" fill="none" aria-hidden="true">
      <g stroke="white" strokeWidth="1" strokeOpacity="0.3">
        <line x1="240" y1="0" x2="0" y2="0" />
        <line x1="240" y1="0" x2="0" y2="48" />
        <line x1="240" y1="0" x2="0" y2="96" />
        <line x1="240" y1="0" x2="0" y2="144" />
        <line x1="240" y1="0" x2="0" y2="192" />
        <line x1="240" y1="0" x2="0" y2="240" />
        <line x1="240" y1="0" x2="48" y2="240" />
        <line x1="240" y1="0" x2="96" y2="240" />
        <line x1="240" y1="0" x2="144" y2="240" />
        <line x1="240" y1="0" x2="192" y2="240" />
        <line x1="240" y1="0" x2="240" y2="240" />
      </g>
    </svg>
  );
}

export default CtaLines;
