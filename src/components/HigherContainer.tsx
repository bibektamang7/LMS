'use client'
import React,{useEffect, useState} from 'react'
import { useRouter } from 'next/router';
import Loader from './ui/Loader';

const HigherContainer = ({children}:{children:React.ReactNode}) => {
    const [loadingRoute, setLoadingRoute] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleRouteChangeStart = () => {
          setLoadingRoute(true); // Show loader when route starts changing
        };
    
        const handleRouteChangeComplete = () => {
          setLoadingRoute(false); // Hide loader when route change is complete
        };
    
        router.events.on("routeChangeStart", handleRouteChangeStart);
        router.events.on("routeChangeComplete", handleRouteChangeComplete);
        router.events.on("routeChangeError", handleRouteChangeComplete); // Handle errors
    
        // Cleanup event listeners when the component unmounts
        return () => {
          router.events.off("routeChangeStart", handleRouteChangeStart);
          router.events.off("routeChangeComplete", handleRouteChangeComplete);
          router.events.off("routeChangeError", handleRouteChangeComplete);
        };
      }, [router]);
    if (loadingRoute) {
        return <Loader/>
    }
  return (
      <>
      {children}
      </>
  )
}

export default HigherContainer