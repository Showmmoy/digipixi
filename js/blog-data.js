/**
 * DigiPixi Blog Data
 * Shared blog posts data used across blog.html, blog-post.html, and admin.html
 * Posts are stored in localStorage under DP_BLOG_KEY.
 * If localStorage is empty the DEFAULT_POSTS array is used as fallback.
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
    content: "Most business owners don't realise their website is actively turning customers away. Here are the 5 most common mistakes we see — and how to fix them fast.\n\n1. Slow Loading Speed\nIf your website takes more than 3 seconds to load, you're losing customers. Studies show that 53% of mobile users abandon a site that takes longer than 3 seconds. Compress images, use a fast host, and cut unnecessary scripts.\n\n2. Not Mobile-Friendly\nOver 60% of web traffic now comes from mobile devices. If your site isn't optimised for phones and tablets, you're losing more than half your potential customers. Google also ranks mobile-friendly sites higher in search results.\n\n3. No Clear Call to Action\nVisitors need to know what to do next. Whether it's 'Book a free consultation' or 'Get a quote' — make it obvious and easy to find on every page. Don't make people hunt for your contact details.\n\n4. Outdated Design\nTrust is built visually. An outdated website makes customers question whether your business is still active or professional. First impressions count — you have roughly 3 seconds to convince a visitor to stay.\n\n5. Missing or Hard-to-Find Contact Information\nMake your phone number, email, and location easy to find. Put them in the header and footer on every page. If customers can't reach you easily, they'll go straight to a competitor who makes it simple.\n\nThe Good News\nAll of these problems are fixable — often quickly and affordably. If your website has any of these issues, get in touch with us at DigiPixi and we'll help you turn it into a customer-generating machine.",
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
    content: "Google My Business (now called Google Business Profile) is one of the most powerful free tools available for local businesses. Here's how to set it up properly.\n\nStep 1: Create or Claim Your Listing\nGo to business.google.com and sign in with your Google account. Search for your business name — if it already exists, you can claim it. If not, create a brand new listing from scratch.\n\nStep 2: Fill In All Your Details\nAdd your business name, address, phone number, website, opening hours, and a compelling description. The more complete your profile, the better you'll rank in local search. Don't leave anything blank.\n\nStep 3: Add High-Quality Photos\nBusinesses with photos receive 42% more requests for directions and 35% more website clicks. Add professional photos of your premises, team, products, and services. Aim for at least 10 photos to start.\n\nStep 4: Collect and Respond to Reviews\nAsk every happy customer to leave you a Google review — it makes a huge difference to your ranking and credibility. Always respond to all reviews, positive and negative, professionally and promptly.\n\nStep 5: Post Regular Updates\nUse Google Posts to share news, special offers, and updates. Aim to post at least once per week. This keeps your profile active and signals to Google that your business is current.\n\nStep 6: Add Your Services and Products\nList all your services or products with descriptions and prices if possible. This helps Google match your business to more relevant searches.\n\nPro Tip\nUse the Q&A section to pre-answer common customer questions. This saves you time and helps potential customers make decisions faster.",
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
    content: "Both Google Ads and Facebook Ads can deliver excellent results — but they work in fundamentally different ways. Understanding the difference will help you make smarter decisions with your marketing budget.\n\nGoogle Ads: Capture Existing Demand\nGoogle Ads shows your business to people who are actively searching for what you offer. This is called intent-based advertising. When someone types 'web designer near me' or 'plumber in Manchester', you can appear right at the top of the results.\n\nBest for: Service businesses, local businesses, B2B, high-intent purchases where people are already aware they need something.\n\nFacebook (and Instagram) Ads: Create New Demand\nFacebook Ads target people based on their interests, demographics, behaviour, and life events — not what they're searching for. You're interrupting their scroll with something relevant, rather than appearing when they ask for it.\n\nBest for: E-commerce products, brand awareness campaigns, reaching very specific demographics, retargeting website visitors.\n\nCost Comparison\nGoogle Ads typically has a higher cost-per-click but higher intent. Facebook Ads are cheaper per impression but require more creative testing to find what works.\n\nWhich Should You Choose?\nFor most small UK service businesses, Google Ads delivers faster, more measurable results because you're reaching people who are already looking. Facebook is better for longer-term brand building and product-based businesses.\n\nOur Recommendation\nStart with Google Ads if you need leads quickly and have a clear service to offer. Once you have budget to invest in brand awareness, layer in Facebook Ads to reach new audiences before they even start searching.",
    date: 'February 2025',
    featured: false,
    published: true,
    bg: 'linear-gradient(135deg,#1A0D0D,#200A0A)'
  },
  {
    id: '4',
    title: "What Makes a Good Logo? The 5 Rules Every Business Should Know",
    slug: 'what-makes-a-good-logo',
    category: 'Branding',
    icon: '🎨',
    excerpt: "Your logo is the first thing customers judge you on. Here's what separates great logos from forgettable ones.",
    content: "Your logo is often the very first impression customers have of your business. Get it right, and it builds instant trust. Get it wrong, and it can cost you customers before you've even had a chance to speak to them.\n\nRule 1: Keep It Simple\nThe most iconic logos in the world are simple. Think Apple, Nike, McDonald's golden arches. Simple logos are easier to remember, work at any size — from a business card to a billboard — and tend to stand the test of time.\n\nRule 2: Make It Memorable\nA great logo should be instantly recognisable after seeing it just once. Ask yourself: would someone remember it tomorrow? If the answer is no, simplify further.\n\nRule 3: Make It Timeless\nAvoid following design trends. A logo that looks fashionable in 2024 may look dated by 2026. Focus on clean, classic design principles that will hold up for 10+ years without needing a rebrand.\n\nRule 4: Make It Versatile\nYour logo needs to work in black and white, full colour, on light backgrounds, on dark backgrounds, large and tiny. Always test in all these scenarios before finalising. A logo that only works in one context is a weak logo.\n\nRule 5: Make It Appropriate\nYour logo should reflect your industry, your customers, and your brand personality. A children's toy company and a law firm should have very different logos — different colours, fonts, and visual styles. Know your audience.\n\nBonus Tip: Typography Matters\nIf your logo includes text, choose fonts carefully. The typography should complement the mark and be legible at small sizes. Avoid trendy fonts that will date quickly.",
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
    content: "Instagram can be a powerful customer-acquisition channel for small businesses — even without spending money on ads. Here's what's actually working for UK businesses in 2025.\n\nPost Consistently (Not Just Frequently)\nAim for 3–5 posts per week. Consistency beats frequency. It's better to post 3 times a week every week than 7 times one week and nothing for two weeks after. Use a content calendar to plan ahead.\n\nLead with Reels\nInstagram's algorithm heavily promotes Reels over static images. Even simple 30-second videos showing your work, behind-the-scenes moments, or quick tips can reach thousands of people who don't follow you yet.\n\nOptimise Your Bio\nYour bio is your homepage. It should clearly state: what you do, who you help, and include a strong call to action with a link. Use keywords your potential customers would search for.\n\nEngage Genuinely\nReply to every comment on your posts. Respond to DMs and story replies promptly. Leave genuine, thoughtful comments on posts by local businesses and potential customers. Instagram rewards accounts that spark real conversations.\n\nUse Location and Niche Hashtags\nFor UK businesses, location-specific hashtags (#ManchesterBusiness, #LondonEats, #BirminghamCreatives) help you reach local customers who can actually buy from you. Combine these with niche-specific tags.\n\nShare Customer Stories\nAsk satisfied customers to share photos tagging your business. User-generated content is the most trusted form of social proof and reaches new audiences for free.\n\nShow the People Behind the Brand\nPeople buy from people they trust. Share team photos, day-in-the-life content, and the story behind your business. Authenticity outperforms polished corporate content every time.",
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
    content: "One of the most common questions we get from new clients is: 'How much does a website cost?' The honest answer is: it depends. Here's a full, transparent breakdown of what you can expect to pay.\n\nDIY Website Builders — £0–£50/month\nPlatforms like Wix, Squarespace, and WordPress.com let you build a basic site yourself using drag-and-drop tools. The monthly cost is low, but the time investment is significant, and the results often look generic. Best for: absolute beginners with no budget.\n\nFreelancer — £500–£3,000\nHiring a freelance web designer gives you a custom design at a lower cost than an agency. Quality varies enormously — always check their portfolio and references before committing. Watch out for freelancers who disappear after delivery with no ongoing support.\n\nSmall Agency — £1,500–£10,000\nA small specialist agency like DigiPixi offers the best balance of quality, reliability, and value. You get a professional, fully custom-built website with a real team behind it offering ongoing support.\n\nLarge Agency — £10,000+\nEnterprise-level agencies charge premium prices for complex websites with advanced functionality, multiple integrations, and large teams. Suitable for corporate clients with significant budgets.\n\nWhat's Typically Included\nDesign, development, mobile responsiveness, basic SEO setup, contact forms, Google Analytics integration, and content upload. Always get a detailed quote and specification document before signing anything.\n\nOngoing Costs to Budget For\nDomain name: £10–£30/year. Web hosting: £50–£300/year. Maintenance and updates: £50–£200/month. SSL certificate: usually included with hosting. These are all on top of the initial build cost.",
    date: 'January 2025',
    featured: false,
    published: true,
    bg: 'linear-gradient(135deg,#1A1A0D,#20200A)'
  }
];

/**
 * Returns all posts — from localStorage if saved, otherwise defaults.
 */
function dpGetPosts() {
  try {
    const stored = localStorage.getItem(DP_BLOG_KEY);
    return stored ? JSON.parse(stored) : [...DP_DEFAULT_POSTS];
  } catch (e) {
    return [...DP_DEFAULT_POSTS];
  }
}

/**
 * Returns only published posts, featured first.
 */
function dpGetPublishedPosts() {
  const posts = dpGetPosts();
  const published = posts.filter(p => p.published !== false);
  return published.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
}

/**
 * Returns a single post by id.
 */
function dpGetPostById(id) {
  return dpGetPosts().find(p => p.id === id) || null;
}

/**
 * Saves posts array to localStorage.
 */
function dpSavePosts(posts) {
  localStorage.setItem(DP_BLOG_KEY, JSON.stringify(posts));
}
