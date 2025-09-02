chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = new URL(details.url);

    // Replace "m.wikipedia.org" with "wikipedia.org"
    if (url.hostname.endsWith(".m.wikipedia.org")) {
      const newUrl = url.href.replace(".m.wikipedia.org", ".wikipedia.org");
      return { redirectUrl: newUrl };
    }
  },
  { urls: ["*://*.m.wikipedia.org/*"] },
  ["blocking"]
);