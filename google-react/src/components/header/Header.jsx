import './styles.css';
import { Logo } from './Logo/Logo';
import { Button } from '../button/Button';

const letters = [
    {
        class:"g",
        title:"G"
    },
    {
        class:"o",
        title:"O"
    },
    {
        class:"o2",
        title:"O"
    },
    {
        class:"g2",
        title:"G"
    },
    {
        class:"l",
        title:"L"
    },
    {
        class:"e",
        title:"E"
    }
];
export const Header = ()=>{
    return (
        <header>
        <h1 class="header-title">
            <Logo letters={letters}/>
        </h1>
        <div class="input-form">
          <input type="search" />
        </div>
        <div class="header-btn">
            <Button title="Google Search"/>
            <Button title="I'm Feeling Lucky"/>
        </div>
      </header>
    );
}