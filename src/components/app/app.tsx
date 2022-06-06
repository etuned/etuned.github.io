import { component$, Host, useStyles$ } from '@builder.io/qwik';
import { Logo } from '../logo/logo';
import GlobalCSS from '../app/global.css'

export const App = component$(() => {
  useStyles$(GlobalCSS);
  return (
    <Host>
      <Logo />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '35rem' }}>
        <h1 class="text-3xl mb-2">Hi!</h1>
      </div>
    </Host>
  );
});
