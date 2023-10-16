import { Children, isValidElement, cloneElement } from "react";
import { RouteProps } from "react-router-dom";
import { localizeRoutePath } from "../../localization/languageHelpers";

type LocalizedSwitchProps = {
    children : React.ReactNode
}

function LocalizedSwitch({ children } : LocalizedSwitchProps) {
    /**
     * inject params and formatMessage through hooks, so we can localize the route
     */
    //const { t, i18n } = useTranslation(); //???
  
    /**
     * Apply localization to all routes
     * Also checks if all children elements are <Route /> components
     */
    return (
      Children.map(children, child =>
        isValidElement<RouteProps>(child)
          ? cloneElement(child, {
              ...child.props,
              path: localizeRoutePath(child.props.path)
            })
          : child
      )
    );
  
    /**
     *
     * @param path can be string, undefined or string array
     * @returns Localized string path or path array
     */
    // function localizeRoutePath(path?: string | string[]) {
    //   switch (typeof path) {
    //     case 'undefined':
    //       return undefined;
    //     case 'object':
    //       return path.map(key => `/${locale}` + formatMessage({ id: key }));
    //     default:
    //       // eslint-disable-next-line no-case-declarations
    //       const isFallbackRoute = path === '*';
    //       return isFallbackRoute
    //         ? path
    //         : `/${locale}` + formatMessage({ id: path });
    //   }
    // }
  }

  export default LocalizedSwitch;