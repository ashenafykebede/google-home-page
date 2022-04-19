import './styles.css';
export const Logo = ({letters})=>{
    return (
       letters.map((letter)=>(
        <span className={letter.class}>{letter.title}</span>
       ))
    );
}