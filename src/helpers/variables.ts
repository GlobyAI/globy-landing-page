export const pricingOptions = [
  {
    id: 1,
    forBusiness: false,
    name: 'Standard',
    price: '100 kr',
    description: 'For those who want to let Globy kick-start the journey.',
    subscribeUrl: '/#',
    benefits: [
      {
        title: 'Globy assistans',
        isSupported: true,
      },
      {
        title: 'Content creation',
        isSupported: false,
      },
      {
        title: 'Unlimited changes',
        isSupported: false,
      },
      {
        title: 'Social media coverage',
        isSupported: false,
      },
    ],
  },
  {
    id: 2,
    forBusiness: false,
    name: 'PRO',
    price: '200 kr',
    description: 'For those who want to take their business to the next level.',
    subscribeUrl: '/#',
    benefits: [
      {
        title: 'Globy assistans',
        isSupported: true,
      },
      {
        title: 'Content creation',
        isSupported: true,
      },
      {
        title: 'Unlimited changes',
        isSupported: false,
      },
      {
        title: 'Social media coverage',
        isSupported: false,
      },
    ],
  },
  {
    id: 3,
    forBusiness: true,
    name: 'BUSINESS',
    price: '300 kr',
    description: 'For those who want to become a global star.',
    subscribeUrl: '/#',
    benefits: [
      {
        title: 'Globy assistans',
        isSupported: true,
      },
      {
        title: 'Content creation',
        isSupported: true,
      },
      {
        title: 'Unlimited changes',
        isSupported: true,
      },
      {
        title: 'Social media coverage',
        isSupported: true,
      },
    ],
  },
]

export const industries = [
  { label: 'Ha', value: 'Ha' },
  { label: 'Consultancy', value: 'Consultancy' },
  { label: 'Construction', value: 'Construction' },
  { label: 'Events', value: 'Events' },
  { label: 'Education', value: 'Education' },
  { label: 'Marketing', value: 'Marketing' },
  { label: 'Art', value: 'Art' },
  { label: 'Restaurants', value: 'Restaurants' },
  { label: 'Manufacturing industry', value: 'Manufacturing industry' },
  { label: 'Traveling', value: 'Traveling' },
  { label: 'Real estate brokers', value: 'Real estate brokers' },
  { label: 'Food', value: 'Food' },
  { label: 'It consultancy', value: 'It consultancy' },
  { label: 'Beauty', value: 'Beauty' },
  { label: 'Music', value: 'Music' },
  { label: 'Sport', value: 'Sport' },
  { label: 'Fashion', value: 'Fashion' },
  { label: 'Healthcare', value: 'Healthcare' },
  { label: 'Finance', value: 'Finance' },
  { label: 'Law', value: 'Law' },
  { label: 'Design', value: 'Design' },
  { label: 'Other', value: 'Other' },
]
