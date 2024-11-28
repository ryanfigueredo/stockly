/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "stockly",
      removal: input?.stage === "production" ? "retain" : "remove",
      region: "sa-east-1", // Substitua pela sua região preferida
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("MyWeb");
  },
  defaults: {
    profile: "default", // Perfil configurado com aws configure
  },
});
