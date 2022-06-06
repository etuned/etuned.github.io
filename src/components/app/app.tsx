import { useStore, component$, Host } from '@builder.io/qwik';
import { Logo } from '../logo/logo';

import './global.css';

export const App = component$(() => {
  const state = useStore({ name: 'World' });
  return (
    <Host class="my-app p-20">
      <Logo class="mb-10" />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '35rem' }}>
        <h1 class="text-3xl mb-2">Hi!</h1>
      </div>
    </Host>
  );
});
