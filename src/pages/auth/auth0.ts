import Vue from 'vue';
import createAuth0Client from '@auth0/auth0-spa-js';
import { mapActions, mapGetters } from 'vuex'

//TODO: Improve typescript usage in this file

//@ts-ignore
const DOMAIN: string = process.env.VUE_APP_AUTH_DOMAIN;

//@ts-ignore
const CLIENT_ID: string = process.env.VUE_APP_AUTH_CLIENT_ID;

console.log(DOMAIN, CLIENT_ID, 'credentials');

/** Action adter auth*/
const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

let instance: any;

export const getInstance = () => instance;

export const useAuth0 = ({
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  redirectUri = window.location.origin,
  ...options
}) => {
  if (instance) return instance;

  const Any: any = null;

  instance = new Vue({
    computed: mapGetters(["isAuthenticated"]),
    data() {
      return {
        loading: true,
        isAuthenticated: false, // should come from vuex
        user: {},
        auth0Client: Any,
        popupOpen: false,
        error: null,
      }
    },
    methods: {
      // from vuex store
      ...mapActions(["authUser"]),

      async loginWithPopup(o: any) {
        this.popupOpen = true;

        try {
          await this.auth0Client.loginWithPopup(o);
        } catch (e) {
          // eslint-disable-next-line
          console.error(e);
        } finally {
          this.popupOpen = false;
        }
        this.user = await this.auth0Client.getUser();
        this.isAuthenticated = true;
      },
      /** Handles the callback when logging in using a redirect */
      async handleRedirectCallback() {
        this.loading = true;
        try {
          await this.auth0Client.handleRedirectCallback();
          this.user = await this.auth0Client.getUser();
          this.isAuthenticated = true;
        } catch (e) {
          this.error = e;
        } finally {
          this.loading = false;
        }
      },
      /** Authenticates the user using the redirect method */
      loginWithRedirect(o: any) {
        return this.auth0Client.loginWithRedirect(o);
      },
      /** Returns all the claims present in the ID token */
      getIdTokenClaims(o: any) {
        return this.auth0Client.getIdTokenClaims(o);
      },

      /** Returns the access token. If the token is invalid or missing, a new one is retrieved */
      getTokenSilently(o: number) {
        return this.auth0Client.getTokenSilently(o);
      },
      /** Gets the access token using a popup window */

      getTokenWithPopup(o: any) {
        return this.auth0Client.getTokenWithPopup(o);
      },
      /** Logs the user out and removes their session on the authorization server */
      logout(o: any) {
        return this.auth0Client.logout(o);
      },
    },
    /** Use this lifecycle method to instantiate the SDK client */
    async created() {
      // Create a new instance of the SDK client using members of the given options object
      //@ts-ignore
      this.auth0Client = await createAuth0Client({
        domain: DOMAIN,
        client_id: CLIENT_ID,
        audience: options.audience,
        redirect_uri: redirectUri
      });

      try {
        // If the user is returning to the app after authentication..
        if (
          window.location.search.includes('code=') &&
          window.location.search.includes('state=')
        ) {
          // handle the redirect and retrieve tokens
          const { appState }: any = await this.auth0Client.handleRedirectCallback();

          // Notify subscribers that the redirect callback has happened, passing the appState
          // (useful for retrieving any pre-authentication state)

          //@ts-ignore
          onRedirectCallback(appState);
        }
      } catch (e) {
        this.error = e;
      } finally {
        // Initialize our internal authentication state
        this.isAuthenticated = await this.auth0Client.isAuthenticated();
        this.user = await this.auth0Client.getUser();
        this.loading = false;

        this.authUser()
      }
    }
  });

  return instance;
};

// Create the $auth plugin for the app
export const Auth0Plugin = {

  //@ts-ignore
  install(Vue, options) {
    Vue.prototype.$auth = useAuth0(options);
  }
};

