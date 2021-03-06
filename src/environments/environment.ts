// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//0702280 Annemari Mustonen
//Firebase database configuration
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCGJbDNX50PLOYr3nik6mL5mRHwGfWTKIU",
    authDomain: "cvappfinal-8f854.firebaseapp.com",
    databaseURL: "https://cvappfinal-8f854.firebaseio.com",
    projectId: "cvappfinal-8f854",
    storageBucket: "cvappfinal-8f854.appspot.com",
    messagingSenderId: "828511021657"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
