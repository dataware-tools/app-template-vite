import packageInfo from "../../package.json";

const serviceWorkerOptions = {
  serviceWorker: {
    // Specify the worker script URL relative to the _root_.
    url: `${packageInfo.basePath}mockServiceWorker.js`,
  },
};

if (typeof window !== "undefined") {
  console.log("Mock Service Worker start!");
  const { worker } = await import("../mocks/browser");
  worker.start(serviceWorkerOptions);
  worker.printHandlers();
}
