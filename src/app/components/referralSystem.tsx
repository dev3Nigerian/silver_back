import { useEffect } from 'react';
import { useReferralSystem } from '../../hooks/useReferralSystem';
import { initUtils } from '@telegram-apps/sdk'
import { ErrorMessage } from './errorMessage';
import { LoadingSpinner } from './loadingSpinner';
import { ReferralList } from './referralList';

interface ReferralSystemProps {
  initData: string;
  userId: string;
  startParam?: string;
}

export const ReferralSystem: React.FC<ReferralSystemProps> = ({
  userId,
  startParam,
}) => {
  const {
    referrals,
    referrer,
    isLoading,
    error,
    isSaving,
    fetchReferralData,
    handleCreateReferral,
  } = useReferralSystem({ userId, startParam });

  const INVITE_URL = "https://t.me/referral_showcase_bot/start";

  useEffect(() => {
    fetchReferralData();
  }, [fetchReferralData]);

  useEffect(() => {
    if (startParam && !isSaving) {
      handleCreateReferral(startParam);
    }
  }, [startParam, handleCreateReferral, isSaving]);

  const handleInviteFriend = () => {
    const utils = initUtils();
    const inviteLink = `${INVITE_URL}?startapp=${userId}`;
    const shareText = `Join me on this awesome Telegram mini app!`;
    const fullUrl = `https://t.me/share/url?url=${encodeURIComponent(inviteLink)}&text=${encodeURIComponent(shareText)}`;
    utils.openTelegramLink(fullUrl);
  };

  const handleCopyLink = async () => {
    const inviteLink = `${INVITE_URL}?startapp=${userId}`;
    try {
      await navigator.clipboard.writeText(inviteLink);
      alert('Invite link copied to clipboard!');
    } catch (error) {
      // Fallback for browsers that don't support clipboard API
      const textarea = document.createElement('textarea');
      textarea.value = inviteLink;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('Invite link copied to clipboard!');
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      {referrer && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          You were referred by user {referrer}
        </div>
      )}
      
      <div className="flex flex-col space-y-4">
        <button
          onClick={handleInviteFriend}
          disabled={isSaving}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
            disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {isSaving ? 'Processing...' : 'Invite Friend'}
        </button>
        
        <button
          onClick={handleCopyLink}
          disabled={isSaving}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded
            disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          Copy Invite Link
        </button>
      </div>

      <ReferralList referrals={referrals} />
    </div>
  );
};