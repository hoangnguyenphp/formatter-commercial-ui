import { useEffect } from 'react';

export default function AdsBanner({ slot, layout = 'horizontal', style = {} }) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.warn('AdSense error:', e);
      }
    }
  }, []);

  if (process.env.NODE_ENV === 'development') {
    return (
      <div
        style={{
          background: '#f4f4f4',
          border: '1px dashed #aaa',
          textAlign: 'center',
          padding: '1rem',
          margin: '1rem 0',
          fontSize: '0.9rem',
          color: '#666',
          ...style,
        }}
      >
        [Simulated Ad Slot {slot} - {layout}]
      </div>
    );
  }

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', ...style }}
      data-ad-client="ca-pub-XXXXXXXXXX"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
      data-ad-layout={layout}
    ></ins>
  );
}
