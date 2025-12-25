browser.commands.onCommand.addListener(async (command) => {
  if (command === "toggle-vertical-tabs") {
    try {
      const { value } = await browser.browserSettings.verticalTabs.get({});
      await browser.browserSettings.verticalTabs.set({ value: !value });
    } catch (e) {
      console.error("Vertical tabs API error:", e);
    }
  }
});