import { useQuery } from '@tanstack/react-query';

import api from '../lib/axios';
import type { MenuResponse } from '../types/menu';

async function fetchMenu(): Promise<MenuResponse> {
  const { data } = await api.get<MenuResponse>('/menu');
  return data;
}

export function useMenu() {
  return useQuery({
    queryKey: ['menu'],
    queryFn: fetchMenu,
  });
}
