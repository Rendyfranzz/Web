import { useRouter } from 'next/router';
import * as react from 'react'

export const useLoad = () => {
    const [isLoaded, setIsLoaded] = react.useState<boolean>(false);
  
    const router = useRouter()
    react.useEffect(() => {
        const handleStart = () => {
            setIsLoaded(false)
        }
        const handleStop = () => {
            setIsLoaded(true)
        }
        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleStop)
        router.events.on('routeChangeError', handleStop)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleStop)
            router.events.off('routeChangeError', handleStop)
        }
    }, [router])

    return isLoaded;
}
