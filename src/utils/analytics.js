// utils/analytics.js
export const trackEvent = (category, action, label) => {
  if (window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
};

// Usage in components
<button onClick={() => trackEvent("Navigation", "Click", "Free Quote Button")}>
  Get Free Quote
</button>;
