export const SITE = {
  name: 'eDesigr.com',
  title: 'eDesigr.com • Premium Domain for Sale — Buy for $195,000',
  description:
    'edesigr.com is a premium .com domain for sale — ideal for AI art platforms, electronic designers and creative studios. Escrow-protected transfer.',
  url: 'https://edesigr.com',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Arizona',
  googleSiteVerification: 'rvPhidgR-4L-dMMne5chKntAnakqGsNxMwqVQv-b6CA',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: 'fb7221d2-dd3f-4e87-8831-df2f1bc06b00',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const PRICE = '195,000';

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('eDesigr.com Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring eDesigr.com.\n\nIntended use:\nBudget range:\n\nThank you.')}`;

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: 'Is the $195,000 asking price for edesigr.com negotiable?',
    a: 'The listed price of $195,000 reflects the domain’s premium .com positioning, instant brand relevance, and the strength of the AI creative category it maps to. Reasonable offers from serious, qualified buyers will be considered — use the inquiry form above and include your intended use and budget range.',
  },
  {
    q: 'How does the domain transfer and payment process work?',
    a: 'Every transaction is protected by a licensed escrow provider such as Escrow.com or Dan.com. You fund escrow, the registrar transfer is initiated, and funds are released only after the domain has successfully moved into your account. Most transfers complete in 3–10 business days with full guidance provided at every step.',
  },
  {
    q: 'Why buy a .com instead of a newer domain extension?',
    a: '.com remains the global standard for trust, type-in traffic, email deliverability, and resale value. Newer extensions can be creative, but they rarely match .com on credibility with clients, investors, and partners — and they resell far more slowly. edesigr.com gives you timeless brand equity plus category relevance today.',
  },
  {
    q: 'Can I use edesigr.com for a personal brand, portfolio, or startup?',
    a: 'Absolutely. Artists, designers, AI toolmakers, and creative technologists all use premium .com domains for personal brands and product launches. edesigr.com is short, spellable, and easy to say aloud — so it works as well in a pitch deck as it does in a search bar.',
  },
  {
    q: 'What makes edesigr.com worth a five-figure-plus investment?',
    a: 'Three factors compound: it is a real .com (finite, appreciating supply), it is a natural spelling of "electronic designer" that reads instantly in English, and it sits directly on the fastest-growing creative category — generative AI art and copy. Comparable short, category-defining .com names have sold in the mid-six and seven figures.',
  },
  {
    q: 'Do you offer payment plans or brokered transactions?',
    a: 'Yes. For qualified buyers we can arrange installment structures through an escrow provider, or run the sale through a licensed domain broker of your choosing. Confidentiality is standard on every inquiry.',
  },
];
