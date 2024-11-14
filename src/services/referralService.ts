import api from './api';
import axios from 'axios'

export interface ReferralResponse {
  message: string;
  data: {
    referrals: string[];
    referrer: string | null;
  };
}

export interface CreateReferralResponse {
  message: string;
  data: {
    userId: string;
    referrerId: string | null;
  };
}

export interface ApiError {
  message: string;
  error: string;
}

export const referralService = {
  async getReferralData(userId: string): Promise<ReferralResponse> {
    try {
      const { data } = await api.get<ReferralResponse>(`/referrals?userId=${userId}`);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        throw new Error((error.response.data as ApiError).message);
      }
      throw new Error('Failed to fetch referral data');
    }
  },

  async createReferral(userId: string, referrerId: string): Promise<CreateReferralResponse> {
    try {
      const { data } = await api.post<CreateReferralResponse>('/referrals', {
        userId,
        referrerId,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        throw new Error((error.response.data as ApiError).message);
      }
      throw new Error('Failed to create referral');
    }
  },
};