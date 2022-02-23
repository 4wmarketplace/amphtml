import {withAmp} from '@ampproject/storybook-addon';

import * as Preact from '#preact';

export default {
  title: 'amp-date-display-1_0',
  decorators: [withAmp],
  parameters: {
    extensions: [
      {name: 'amp-date-display', version: '1.0'},
      {name: 'amp-mustache', version: '0.2'},
    ],
    experiments: ['bento'],
  },
  argTypes: {
    displayIn: {
      name: 'Display in',
      defaultValue: 'utc',
      options: ['utc', 'local'],
      control: {type: 'select'},
    },
    locale: {
      name: 'Locale',
      defaultValue: 'en-US',
      options: ['en-US', 'en-GB', 'fr', 'ru', 'ar', 'he', 'ja'],
      control: {type: 'select'},
    },
    template: {
      name: 'Template',
      defaultValue: 'template1',
      options: [
        'template1',
        'template2',
      ],
      control: {type: 'select'},
    },
  },
};

export const Default = ({dateTime, displayIn, locale, ...args}) => {
  return (
    <amp-date-display
      {...args}
      datetime={'now'}
      display-in={displayIn}
      locale={locale}
      layout="responsive"
      width="100"
      height="100"
    >
      <template type="amp-mustache">
        <div>
          {`UTC in local: {{dayName}} {{day}} {{monthName}} {{year}},
            {{hourTwoDigit}}:{{minuteTwoDigit}}:{{secondTwoDigit}}`}
        </div>
      </template>
    </amp-date-display>
  );
};

export const DefaultRenderer = ({dateTime, displayIn, locale, ...args}) => {
  return (
    <amp-date-display
      {...args}
      datetime={'now'}
      display-in={displayIn}
      locale={locale}
      layout="responsive"
      width="100"
      height="100"
    />
  );
};

export const ExternalTemplate = ({
  dateTime,
  displayIn,
  locale,
  template,
  ...args
}) => {
  return (
    <div>
      <template type="amp-mustache" id="template1">
        <div>{`Template1: {{dayName}} {{day}} {{monthName}} {{year}}`}</div>
      </template>
      <template type="amp-mustache" id="template2">
        <div>{`Template2: {{day}} {{month}} {{year}}`}</div>
      </template>
      <amp-date-display
        {...args}
        datetime={'now'}
        display-in={displayIn}
        locale={locale}
        template={template}
        layout="responsive"
        width="100"
        height="100"
      ></amp-date-display>
    </div>
  );
};
