import NewsletterSubscriptionForm from './NewsletterSubscriptionForm.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'Example/Newsletter Subscription Form',
  component: NewsletterSubscriptionForm,
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'submit' },
  },
};

export const Default = {
  args: {
    label: 'NewsletterSubscriptionForm'
  },
};