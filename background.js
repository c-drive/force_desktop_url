chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [
      {
        id: 1,
        priority: 1,
        action: {
          type: "redirect",
          redirect: { regexSubstitution: "https://\\1.wikipedia.org/\\2" }
        },
        condition: {
          regexFilter: "^https://([a-z]+)\\.m\\.wikipedia\\.org/(.*)",
          resourceTypes: ["main_frame"]
        }
      }
    ]
  });
});
