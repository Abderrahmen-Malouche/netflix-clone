import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function AuthLayout({ children, authentication = false }) {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (
      (authentication && !auth.loggedIn) ||
      (!authentication && auth.loggedIn)
    ) {
      navigate(authentication ? "/login" : "/");
    } else {
      setLoader(false);
    }
  }, [auth.loggedIn, navigate, authentication]);
  return loader ? <div>Loading...</div> : <>{children}</>;
}

export default AuthLayout;
