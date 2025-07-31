import React, { useEffect, useRef, useState } from 'react';
import { fetchVisits } from '../../utils/apiCall';

export default function PageVisitCounter() {
  const [visits, setVisits] = useState(null);
  const hasFetched = useRef(false); // Track if already fetched

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const getVisits = async () => {
      const count = await fetchVisits();
      if (count) setVisits(count);
    };

    getVisits();
  }, []);

  return (
    <div style={{ fontSize: '0.85em', textAlign: 'center', marginTop: '1em', color: '#777', display: 'none' }}>
      {visits ? `👀 Total Visits: ${visits}` : 'Loading visit counter...'}
    </div>
  );
}
