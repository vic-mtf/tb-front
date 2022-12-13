import { Platform } from "react-native";
import { 
    NativeRouter,
    Link as ReactNativeLink,
    Route as ReactNativeRoute,
    Router as ReactNativeRouter,
    Routes as ReactNativeRoutes,
} from "react-router-native";

import {
    BrowserRouter,
    Link as ReactLink,
    Route as ReactRoute,
    Router as ReactRouter,
    Routes as ReactRoutes,
} from "react-router-dom";

export const Router = Platform.OS === 'web' ? ReactRouter :  ReactNativeRouter;
export const Routes = Platform.OS === 'web' ? ReactRoutes :  ReactNativeRoutes;
export const Route = Platform.OS === 'web' ? ReactRoute : ReactNativeRoute;
export const Link = Platform.OS === 'web' ? ReactLink : ReactNativeLink;
export const ProviderRouter = Platform.OS === 'web' ? BrowserRouter : NativeRouter;