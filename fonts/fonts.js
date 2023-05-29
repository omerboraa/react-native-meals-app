import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();


function Fonts() {
    const [fontsLoaded] = useFonts({
        'Kanit-Bold': require('../fonts/Kanit-Bold.ttf'),
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }
}



export default Fonts;
