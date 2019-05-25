const settings = {
  "name": "frontity-first-app",
  "state": {
    "frontity": {
      "url": "https://test.frontity.io",
      "title": "Code for My Life Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    "@frontity/tiny-router",
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            ["Home","/"],
            ["Coding","/category/technical-things/coding/"],
            ["Technical Things","/category/technical-things/"],
            ["WordPress","/category/technical-things/wordpress-en/"],
            ["Contact","/contact/"],
            ["About Me","/me-and-my-blog/"]
          ]
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "apiUrl": "https://codeformylife.com/wp-json"
        }
      }
    }
  ]
};

module.exports = settings;
