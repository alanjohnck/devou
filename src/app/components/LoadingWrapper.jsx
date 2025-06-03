// app/loading-provider.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "./spinner"
const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // Next 13+ App Router uses `router.events` only in Pages Router,
    // So use workaround (like loading UI or custom route listener if needed)

    // Optional delay to simulate loading
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 100); // simulate short loading

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {children}
    </>
  );
};

export default LoadingProvider;
