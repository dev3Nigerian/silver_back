interface ReferralListProps {
  referrals: string[];
}

export const ReferralList: React.FC<ReferralListProps> = ({ referrals }) => {
  if (referrals.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Referrals</h2>
      <ul className="divide-y divide-gray-200">
        {referrals.map((referral, index) => (
          <li 
            key={index}
            className="bg-gray-50 hover:bg-gray-100 transition-colors duration-150 p-3 rounded"
          >
            User {referral}
          </li>
        ))}
      </ul>
    </div>
  );
};