import { render } from '@testing-library/react';
import React from 'react';
import { IntlProvider, MessageFormatElement } from 'react-intl';
import en from '../lang/en.json';

export function providerWrapper(
  children: React.ReactElement,
  locale?: string,
  messages?: Record<string, string> | Record<string, MessageFormatElement[]>,
) {
  return render(
    <IntlProvider locale={locale || 'en'} messages={messages || en} defaultLocale="en">
      {children}
    </IntlProvider>,
  );
}
