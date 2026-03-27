/**
 * DigiPixi Blog Data
 * Shared blog posts data used across blog.html, blog-post.html, and admin.html
 */

const DP_BLOG_KEY = 'dp_blog_posts';

const DP_DEFAULT_POSTS = [
  {
    id: '1',
    title: '5 Reasons Your Website Is Losing You Customers Right Now',
    slug: '5-reasons-website-losing-customers',
    category: 'Web Design',
    icon: '🚀',
    excerpt: "Most business owners don't realise their website is actively turning customers away. Here are the 5 most common mistakes we see — and how to fix them fast.",
    content: "Most business owners don't realise their website is actively turning customers away. Here are the 5 most common mistakes we see — and how to fix them fast.\n\n## 1. Slow Loading Speed\nIf your website takes more than 3 seconds to load, you're losing customers. Studies show that 53% of mobile users abandon a site that takes longer than 3 seconds. Compress images, use a fast host, and cut unnecessary scripts.\n\n## 2. Not Mobile-Friendly\nOver 60% of web traffic now comes from mobile devices. If your site isn't optimised for phones and tablets, you're losing more than half your potential customers. Google also ranks mobile-friendly sites higher in search results.\n\n## 3. No Clear Call to Action\nVisitors need to know what to do next. Whether it's 'Book a free consultation' or 'Get a quote' — make it obvious and easy to find on every page. Don't make people hunt for your contact details.\n\n## 4. Outdated Design\nTrust is built visually. An outdated website makes customers question whether your business is still active or professional. First impressions count — you have roughly 3 seconds to convince a visitor to stay.\n\n## 5. Missing or Hard-to-Find Contact Information\nMake your phone number, email, and location easy to find. Put them in the header and footer on every page. If customers can't reach you easily, they'll go straight to a competitor who makes it simple.\n\n## The Good News\nAll of these problems are fixable — often quickly and affordably. If your website has any of these issues, get in touch with us at DigiPixi and we'll help you turn it into a customer-generating machine.",
    date: 'March 2025',
    featured: true,
    published: true,
    bg: 'linear-gradient(135deg,#060E1C,#0A1628)'
  },
  {
    id: '2',
    title: 'How to Set Up Google My Business — Complete Guide for UK Businesses',
    slug: 'google-my-business-guide-uk',
    category: 'SEO',
    icon: '📍',
    excerpt: 'A step-by-step guide to getting your business on Google Maps and appearing in local search results.',
    content: "Google My Business (now called Google Business Profile) is one of the most powerful free tools available for local businesses. Here's how to set it up properly.\n\n## Step 1: Create or Claim Your Listing\nGo to business.google.com and sign in with your Google account. Search for your business name — if it already exists, you can claim it. If not, create a brand new listing from scratch.\n\n## Step 2: Fill In All Your Details\nAdd your business name, address, phone number, website, opening hours, and a compelling description. The more complete your profile, the better you'll rank in local search. Don't leave anything blank.\n\n## Step 3: Add High-Quality Photos\nBusinesses with photos receive 42% more requests for directions and 35% more website clicks. Add professional photos of your premises, team, products, and services. Aim for at least 10 photos to start.\n\n## Step 4: Collect and Respond to Reviews\nAsk every happy customer to leave you a Google review — it makes a huge difference to your ranking and credibility. Always respond to all reviews, positive and negative, professionally and promptly.\n\n## Step 5: Post Regular Updates\nUse Google Posts to share news, special offers, and updates. Aim to post at least once per week. This keeps your profile active and signals to Google that your business is current.",
    date: 'March 2025',
    featured: false,
    published: true,
    bg: 'linear-gradient(135deg,#0D1F0D,#0A1A0A)'
  },
  {
    id: '3',
    title: 'Google Ads vs Facebook Ads — Which Is Better for Your Business?',
    slug: 'google-ads-vs-facebook-ads',
    category: 'Ads',
    icon: '🎯',
    excerpt: 'We break down the pros and cons of both platforms so you can spend your marketing budget wisely.',
    content: "Both Google Ads and Facebook Ads can deliver excellent results — but they work in fundamentally different ways.\n\n## Google Ads: Capture Existing Demand\nGoogle Ads shows your business to people who are actively searching for what you offer. When someone types 'web designer near me' you can appear right at the top of the results.\n\nBest for: Service businesses, local businesses, B2B, high-intent purchases.\n\n## Facebook Ads: Create New Demand\nFacebook Ads target people based on their interests, demographics, and behaviour — not what they're searching for.\n\nBest for: E-commerce products, brand awareness, reaching specific demographics, retargeting website visitors.\n\n## Which Should You Choose?\nFor most small UK service businesses, Google Ads delivers faster, more measurable results. Facebook is better for longer-term brand building and product-based businesses.",
    date: 'February 2025',
    featured: false,
    published: true,
    bg: 'linear-gradient(135deg,#1A0D0D,#200A0A)'
  },
  {
    id: '4',
    title: 'What Makes a Good Logo? The 5 Rules Every Business Should Know',
    slug: 'what-makes-a-good-logo',
    category: 'Branding',
    icon: '🎨',
    excerpt: "Your logo is the first thing customers judge you on. Here's what separates great logos from forgettable ones.",
    content: "Your logo is often the very first impression customers have of your business.\n\n## Rule 1: Keep It Simple\nThe most iconic logos in the world are simple. Think Apple, Nike, McDonald's golden arches. Simple logos are easier to remember and work at any size.\n\n## Rule 2: Make It Memorable\nA great logo should be instantly recognisable after seeing it just once.\n\n## Rule 3: Make It Timeless\nAvoid following design trends. Focus on clean, classic design principles that will hold up for 10+ years.\n\n## Rule 4: Make It Versatile\nYour logo needs to work in black and white, full colour, on light and dark backgrounds, large and tiny.\n\n## Rule 5: Make It Appropriate\nYour logo should reflect your industry, your customers, and your brand personality.",
    date: 'February 2025',
    featured: false,
    published: true,
    bg: 'linear-gradient(135deg,#0D0D1A,#0A0A20)'
  },
  {
    id: '5',
    title: 'How to Get More Customers From Instagram Without Paying for Ads',
    slug: 'instagram-organic-growth-2025',
    category: 'Social Media',
    icon: '📱',
    excerpt: 'Organic growth strategies that actually work for small UK businesses in 2025.',
    content: "Instagram can be a powerful customer-acquisition channel for small businesses — even without spending money on ads.\n\n## Post Consistently\nAim for 3–5 posts per week. Consistency beats frequency.\n\n## Lead with Reels\nInstagram's algorithm heavily promotes Reels over static images. Even simple 30-second videos can reach thousands of people who don't follow you yet.\n\n## Optimise Your Bio\nYour bio should clearly state: what you do, who you help, and include a strong call to action with a link.\n\n## Engage Genuinely\nReply to every comment. Respond to DMs promptly. Instagram rewards accounts that spark real conversations.\n\n## Show the People Behind the Brand\nPeople buy from people they trust. Share team photos and the story behind your business.",
    date: 'January 2025',
    featured: false,
    published: true,
    bg: 'linear-gradient(135deg,#0A1A0A,#051505)'
  },
  {
    id: '6',
    title: 'How Much Does a Website Cost in the UK? — Honest Breakdown',
    slug: 'website-cost-uk-2025',
    category: 'Business',
    icon: '💰',
    excerpt: "We break down the real costs of getting a professional website built in the UK in 2025.",
    content: "One of the most common questions we get: 'How much does a website cost?' The honest answer is: it depends.\n\n## DIY Website Builders — £0–£50/month\nPlatforms like Wix, Squarespace, and WordPress.com let you build a basic site yourself. Best for: absolute beginners with no budget.\n\n## Freelancer — £500–£3,000\nHiring a freelance web designer gives you a custom design at a lower cost. Quality varies enormously — always check their portfolio.\n\n## Small Agency — £1,500–£10,000\nA small specialist agency like DigiPixi offers the best balance of quality, reliability, and value.\n\n## Large Agency — £10,000+\nEnterprise-level agencies charge premium prices for complex websites. Suitable for corporate clients.\n\n## Ongoing Costs to Budget For\nDomain name: £10–£30/year. Web hosting: £50–£300/year. Maintenance: £50–£200/month.",
    date: 'January 2025',
    featured: false,
    published: true,
    bg: 'linear-gradient(135deg,#1A1A0D,#20200A)'
  }
];

function dpGetPosts() {
  try {
    const stored = localStorage.getItem(DP_BLOG_KEY);
    return stored ? JSON.parse(stored) : [...DP_DEFAULT_POSTS];
  } catch (e) {
    return [...DP_DEFAULT_POSTS];
  }
}

function dpGetPublishedPosts() {
  const posts = dpGetPosts();
  const published = posts.filter(p => p.published !== false);
  return published.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
}

function dpGetPostById(id) {
  return dpGetPosts().find(p => p.id === id) || null;
}

function dpSavePosts(posts) {
  localStorage.setItem(DP_BLOG_KEY, JSON.stringify(posts));
}
