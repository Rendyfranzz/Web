import * as React from 'react'

export const useRouteLoad = () => {
    const [routeLoad, setRouteLoad] = React.useState<boolean>(false);

    React.useEffect(() => {
        setTimeout(() => {
            setRouteLoad(true);
        }, 300);
    }, []);

  return routeLoad
}
