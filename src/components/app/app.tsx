import { useStore, component$, Host } from '@builder.io/qwik';
import { Logo } from '../logo/logo';

import './global.css';

export const App = component$(() => {
  const state = useStore({ name: 'World' });
  return (
    <Host class="my-app p-20">
      <Logo class="mb-10" />

      <h1 class="text-3xl text-center mb-2">Hi!</h1>

    </Host>
  );
});
