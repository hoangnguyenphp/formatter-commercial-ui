import { useEffect, useRef, useState } from 'react';

export default function AdsBanner({ slot, layout = 'horizontal', style = {} }) {
  const adRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.warn('AdSense error:', e);
      }

      // Detect ad load failure (blocked or empty)
      const timer = setTimeout(() => {
        if (adRef.current && adRef.current.offsetHeight === 0) {
          setVisible(false);
        }
      }, 3000); // wait for ad to attempt to render

      return () => clearTimeout(timer);
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

  if (!visible) return null;

  return (
    <ins
      ref={adRef}
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
