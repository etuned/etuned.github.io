import { component$, Host } from '@builder.io/qwik';

export const Logo = component$(() => {
  return (
    <Host style={{ 'text-align': 'center' }}>
      <a href="https://semishigure.cloud/">
        <h1>⚡ Semishigure.cloud ⚡</h1>
      </a>
    </Host>
  );
});
