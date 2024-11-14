import { useState, useCallback } from 'react';
import { referralService, ReferralResponse, CreateReferralResponse } from '../services/referralService';

interface UseReferralSystemProps {
  userId: string;
  startParam?: string;
}

interface ReferralState {
  referrals: string[];
  referrer: string | null;
  isLoading: boolean;
  error: string | null;
  isSaving: boolean;
}

export const useReferralSystem = ({ userId, startParam }: UseReferralSystemProps) => {
  const [state, setState] = useState<ReferralState>({
    referrals: [],
    referrer: null,
    isLoading: true,
    error: null,
    isSaving: false,
  });

  const fetchReferralData = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      const response = await referralService.getReferralData(userId);
      setState(prev => ({
        ...prev,
        referrals: response.data.referrals,
        referrer: response.data.referrer,
        isLoading: false,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'An error occurred',
        isLoading: false,
      }));
    }
  }, [userId]);

  const handleCreateReferral = useCallback(async (referrerId: string) => {
    try {
      setState(prev => ({ ...prev, isSaving: true, error: null }));
      await referralService.createReferral(userId, referrerId);
      await fetchReferralData(); // Refresh data after creation
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'An error occurred',
      }));
    } finally {
      setState(prev => ({ ...prev, isSaving: false }));
    }
  }, [userId, fetchReferralData]);

  return {
    ...state,
    fetchReferralData,
    handleCreateReferral,
  };
};