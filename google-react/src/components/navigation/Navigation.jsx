import { NavigationLeft} from './navigation-left/NavigationLeft';
import { NavigationRight } from './navigation-right/NavigationRight';
export const Navigation = ()=>{    
    return (
        <nav>
            <NavigationLeft/>
            <NavigationRight/>
        </nav>
    )
}