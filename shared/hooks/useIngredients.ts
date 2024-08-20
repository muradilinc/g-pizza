import { useEffect, useState } from 'react';
import { Ingredient } from '@prisma/client';
import { Api } from '@/shared/services/api-client';

export const useIngredients = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(false);
  const getIngredients = async () => {
    try {
      setLoading(true);
      const response = await Api.ingredients.getAll();
      setIngredients(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getIngredients();
  }, []);

  return {
    ingredients,
    loading
  };
};