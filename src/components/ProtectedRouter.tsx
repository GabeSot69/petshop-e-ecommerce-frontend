//import { useAuth } from "../context/AuthProvider";
import { CircularProgress } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRouter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //const { isLoggedIn, isAuthChecked } = true;
  const isAuthChecked = false;
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname !== "/signup") {
      router.push("/login");
    }
  }, [router, pathname]);

  if (!isAuthChecked) {
    return (
      <CircularProgress
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      />
    );
  }

  return <>{children}</>;
}