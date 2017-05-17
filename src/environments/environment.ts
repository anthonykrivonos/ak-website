// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
        apiKey: "AIzaSyCCiw_JekRmKojYUemQzlWGdYxIAzj0i8Q",
        authDomain: "anthony-krivonos-website.firebaseapp.com",
        databaseURL: "https://anthony-krivonos-website.firebaseio.com",
        projectId: "anthony-krivonos-website",
        storageBucket: "anthony-krivonos-website.appspot.com",
        messagingSenderId: "165032369522"
  }
};
