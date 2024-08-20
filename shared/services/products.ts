import { axiosInstance } from './instance';
import { Product } from '@prisma/client';
import { ApiRoutes } from '@/shared/services/constants';

export const search = async (query: string): Promise<Product[]> => {
  const {data} = await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCT, {params: {query}});
  return data;
};