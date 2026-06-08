export const SITE = {
  name: 'eDesigr.com',
  title: 'eDesigr.com • Premium Domain for Sale | Electronic Designer & AI Creative',
  description:
    'eDesigr.com — The definitive premium .com domain for the electronic designer, generative artist, AI art platform, or creative studio using AI for art and copy. Strategic acquisition available.',
  url: 'https://edesigr.com',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Arizona',
  googleSiteVerification: 'rvPhidgR-4L-dMMne5chKntAnakqGsNxMwqVQv-b6CA'
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: 'fb7221d2-dd3f-4e87-8831-df2f1bc06b00',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('eDesigr.com Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring eDesigr.com.\n\nIntended use:\nBudget range:\n\nThank you.')}`;
