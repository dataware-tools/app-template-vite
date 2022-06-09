import packageInfo from "../../package.json";

const serviceWorkerOptions = {
  serviceWorker: {
    // Specify the worker script URL relative to the _root_.
    url: `${packageInfo.basePath}mockServiceWorker.js`,
  },
};

if (typeof window !== "undefined") {
  console.log("Mock Service Worker start!");
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require("../mocks/browser");
  worker.start(serviceWorkerOptions);
  worker.printHandlers();
}
