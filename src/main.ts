import plugin from "../plugin.json";

class AcodeAssistant {
   async init() {
      console.log("Acode Assistant");
   }

   async destroy() {}
}

if (window.acode) {
   const acodeAssistant = new AcodeAssistant();
   acode.setPluginInit(plugin.id, async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
      if (!baseUrl.endsWith("/")) {
         baseUrl += "/";
      }
      acodeAssistant.baseUrl = baseUrl;
      await acodeAssistant.init($page, cacheFile, cacheFileUrl);
   });
   acode.setPluginUnmount(plugin.id, () => {
      acodeAssistant.destroy();
   });
}
