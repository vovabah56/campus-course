import React from "react";
import useAuth from "../../hooks/useAuth.js";

const RequireAuthComponent = ({
                                  loggedOut = false,
                                  allowedRoles,
                                  children,
                              }) => {
    const { isLoggedIn, roles } = useAuth();
    const isRoleMatch =
        !allowedRoles || roles.find((role) => allowedRoles.includes(role));
    const isAuthStatusMatch = loggedOut ? !isLoggedIn : !!isLoggedIn;

    if (isAuthStatusMatch && isRoleMatch) {
        return <>{children}</>;
    } else {
        return null;
    }
};

export default RequireAuthComponent;
