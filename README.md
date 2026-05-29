Content Research & Sourcing - Joe's Plumbing Services
Research Sources
Organisation Website: N/A (fictional prototype). Used proposal specs for services/products.

Social Media (Simulated realistic):

Facebook/Instagram: Posts about emergency fixes, customer testimonials ("Fixed leak in 1hr!"), service promos (20% off drains).
Twitter: Quick tips ("Frozen pipes? Call now!"), 24/7 alerts.
Public Domain/CC Resources:

Images: Unsplash.com ("plumber tools", "water leak", "water heater") - CC0 free (e.g. unsplash.com/photos/plumbing-pipe-wrench).
Icons: Font Awesome free (fa-wrench, fa-tools).
Fonts: Google Fonts (Roboto fallback Arial) - open license.
Original Content: Created for prototype:

Product descriptions (pipes R50/m, heaters R5000).
Testimonials, about story.
File Organisation
joes-plumbing-project/
├── images/
│   ├── hero-home.jpg (Unsplash leak repair)
│   ├── service-drain.jpg
│   ├── product-pipe.jpg
│   └── team-joe.jpg
├── documents/
│   ├── license.pdf
│   └── testimonials.txt
└── text/
    ├── services.txt
    ├── products.txt
    └── about.txt
All names: lowercase-kebab-case, prefixed (hero-, service-).

Content sourced ethically, attributed in README.md.

Changelog - Part2 Updates from Part1 Feedback
Based on lecturer feedback: "Structure website proposal according to POE structure from pages 7-11"

Restructured entire website to match POE template from pages 7-11 of module guide
Added <meta name="viewport" content="width=device-width, initial-scale=1.0"> to all HTML pages for mobile responsiveness
Implemented responsive design with media queries @768px tablet and @480px mobile breakpoints
Changed navigation from horizontal to vertical stack on mobile screens for better usability
Converted all font sizes and spacing from px to rem for accessibility and scalability
Added CSS reset * { margin: 0; padding: 0; box-sizing: border-box; } for consistent base styling
Added :hover, :focus, and :active pseudo-classes for buttons and navigation links
Implemented contact form with HTML5 validation using required, type="email", type="tel"
Tested layout on desktop, tablet, and mobile using Chrome DevTools Device Toolbar
Fixed image paths and confirmed all images have descriptive alt text for accessibility
Maintained consistent semantic HTML structure: header, nav, main, section, footer across all 5 pages
Testing Evidence - POE Requirements
Tested on Chrome DevTools Device Toolbar:

Desktop 1920x1080

Multi-column grid layout displays correctly
All content visible without scrolling issues
Images and cards align properly
Tablet 768px

Layout adjusts to 2-column grid where applicable
Images resize proportionally with max-width: 100%
Navigation remains horizontal but more compact
Mobile 480px

Navigation stacks vertically for easy thumb access
Single column layout, no horizontal scroll
All text readable, buttons large enough to tap
Images scale to 100% width of screen
All Devices

No content cut off or overlapping
Pages scroll smoothly from top to bottom
Meta viewport ensures proper scaling on all devices
Form validation works: empty required fields show browser error
