import { map, redirect, Matcher } from 'navi';

import { AuthService } from './auth-service';
import { User } from '../interfaces/user';

export interface Context {
  currentUser: User | null;
  authService: AuthService;
}

export const withAuth = (matcher: Matcher<Context>) =>
  map((_, context: Context) =>
    context.currentUser ? matcher : redirect('/login'),
  );
