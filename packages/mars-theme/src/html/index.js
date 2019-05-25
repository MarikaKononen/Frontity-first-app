import Theme from "./components/theme";

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      menu: [["Home", "/"],
      ["Coding","/category/technical-things/coding/"],
      ["Technical Things","/category/technical-things/"],
      ["WordPress","/category/technical-things/wordpress-en/"],
      ["Contact","/contact/"],
      ["About Me","/me-and-my-blog/"]]
    }
  },
  actions: {
    theme: {
      beforeSSR: async ({ state, actions }) => {
        const { path, page } = state.router;
        await actions.source.fetch({ path, page });
      }
    }
  }
};

export default marsTheme;
