import { useStore, component$, Host } from '@builder.io/qwik';
import { Logo } from '../logo/logo';

export const App = component$(() => {
  const state = useStore({ name: 'World' });
  return (
    <Host>
      <Logo />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '35rem' }}>
        <h1 class="text-3xl mb-2">Hi!</h1>
      </div>
    </Host>
  );
});
