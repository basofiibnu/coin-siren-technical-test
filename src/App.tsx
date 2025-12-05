import { useEffect, useState } from 'react';

import Homepage, { type MembersData, type BenefitsData } from './components/pages/Home';

function Home() {
  const [members, setMembers] = useState<MembersData | null>(null);
  const [benefits, setBenefits] = useState<BenefitsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [membersRes, benefitsRes] = await Promise.all([fetch('/api/member'), fetch('/api/benefits')]);

        if (!membersRes.ok || !benefitsRes.ok) {
          throw new Error('Failed API response');
        }

        const membersData = await membersRes.json();
        const benefitsData = await benefitsRes.json();

        setMembers(membersData);
        setBenefits(benefitsData);
      } catch (err) {
        setError('Error fetching API');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error || !members || !benefits) return <div>{error}</div>;

  return <Homepage data={members} benefits={benefits} />;
}

export default Home;
