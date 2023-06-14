import App from "@/app";
import db from "@/models";
import IndexRoute from "@/routes/index.routes";

const main = async () => {
  await db.authenticate();
  const app = new App({
    apiRoutes: [new IndexRoute()],
    generalRoutes: [],
  });

  app.listen();
};

main();
