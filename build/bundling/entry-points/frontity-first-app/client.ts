import client from "@frontity/core/src/client";
import frontity__tiny_router_html from "@frontity/tiny-router/src/html/client";
import frontity__mars_theme_html from "@frontity/mars-theme/src/html/client";
import frontity__wp_source_html from "@frontity/wp-source/src/html/client";

const packages = {
  frontity__tiny_router_html,
  frontity__mars_theme_html,
  frontity__wp_source_html,
};

export default client({ packages });

if (module["hot"]) {
  module["hot"].accept(
    [
      "@frontity/core/src/client",
      "@frontity/tiny-router/src/html/client",
      "@frontity/mars-theme/src/html/client",
      "@frontity/wp-source/src/html/client",
    ],
    () => {
      const client = require("@frontity/core/src/client").default;
      const frontity__tiny_router_html = require("@frontity/tiny-router/src/html/client").default;
      const frontity__mars_theme_html = require("@frontity/mars-theme/src/html/client").default;
      const frontity__wp_source_html = require("@frontity/wp-source/src/html/client").default;
      const packages = {
        frontity__tiny_router_html,
        frontity__mars_theme_html,
        frontity__wp_source_html,
      };
      client({ packages });
    }
  );
}