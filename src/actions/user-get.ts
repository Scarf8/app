'use server';

import apiError from '@/functions/api-error';
import login from './login';
import { cookies } from 'next/headers';
import userJson from '../app/json-data/user.json';

export type User = {
  id: number;
  name: string;
  username: string;
  isActive: boolean;
};

export default async function userGet() {
  try {
    // const url = 'http://localhost:5001/api/user';

    // const response = await fetch(url, {
    //   method: 'GET',
    //   headers: {
    //     Authorization: 'Bearer',
    //   },
    //   next: {
    //     revalidate: 60,
    //   },
    // });
    // if (!response.ok) throw new Error('Erro ao pegar o usuário.');
    // const data = (await response.json()) as User;
    const data = userJson;
    return { data, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
