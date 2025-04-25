# Deployment Checklist

## Performance
- [ ] Run Lighthouse audit to check performance, accessibility, SEO, and best practices
- [ ] Verify all images are properly optimized and sized
- [ ] Check for any unused CSS or JavaScript
- [ ] Ensure tree-shaking is working properly
- [ ] Verify code splitting is working correctly

## Responsiveness
- [ ] Test on multiple screen sizes (mobile, tablet, desktop)
- [ ] Test on different browsers (Chrome, Safari, Firefox, Edge)
- [ ] Verify touch interactions work on mobile devices
- [ ] Check orientation changes (portrait/landscape)
- [ ] Verify fonts are loading correctly and consistently

## Content
- [ ] Check for spelling and grammar issues
- [ ] Ensure all links work correctly
- [ ] Verify all external links have `rel="noopener noreferrer"`
- [ ] Make sure all images have proper alt text
- [ ] Ensure form validation works correctly

## Accessibility
- [ ] Verify proper heading structure
- [ ] Check that all interactive elements are keyboard accessible
- [ ] Ensure proper color contrast ratios
- [ ] Verify screen reader compatibility
- [ ] Check for proper focus indicators

## SEO
- [ ] Verify meta tags are set correctly
- [ ] Check that the site has a sitemap
- [ ] Ensure robots.txt is configured properly
- [ ] Verify structured data is valid
- [ ] Check canonical URLs

## PWA
- [ ] Test offline functionality
- [ ] Verify app manifest is correct
- [ ] Check service worker registration
- [ ] Test installation on mobile devices
- [ ] Verify app icons are displaying correctly

## Analytics & Monitoring
- [ ] Ensure analytics tracking is working
- [ ] Set up error monitoring
- [ ] Configure performance monitoring
- [ ] Test event tracking
- [ ] Verify correct data is being collected

## Security
- [ ] Ensure all APIs are using HTTPS
- [ ] Check that sensitive data is protected
- [ ] Verify CSP headers are set correctly
- [ ] Test for XSS vulnerabilities
- [ ] Check for CSRF protection

## Final Steps
- [ ] Run a final build with production settings
- [ ] Test the production build locally
- [ ] Verify all environment variables are set correctly
- [ ] Ensure CI/CD pipeline is working correctly
- [ ] Create a backup of the current site before deployment
