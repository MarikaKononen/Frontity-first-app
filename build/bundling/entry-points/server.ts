import server from "@frontity/core/src/server";
import frontity__tiny_router_html from "@frontity/tiny-router/src/html/server";
import frontity__mars_theme_html from "@frontity/mars-theme/src/html/server";
import frontity__wp_source_html from "@frontity/wp-source/src/html/server";

const packages = {
  frontity__tiny_router_html,
  frontity__mars_theme_html,
  frontity__wp_source_html,
};

export default server({ packages });

