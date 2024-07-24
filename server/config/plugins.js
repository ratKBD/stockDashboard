module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_HygaHfvK38xYZtiOSenvwBzt83o0/aBaHH1UzuQ",
      apiToken: "wWy7xg3j4LpWEjF4cMUKD67E",
      //   appFilter: "stock-db",
      //   teamFilter: "your-team-id-on-vercel",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
