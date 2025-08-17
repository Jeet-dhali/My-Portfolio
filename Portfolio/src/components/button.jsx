import './button.css'

export function Button({children}) {

    const playHoverSound = () => {
        const audio = new Audio('/soundfx/hover.wav');
        audio.volume = 0.5;
        audio.play();
    };
    
    return (
        <button className="button"
        onMouseEnter={playHoverSound}>
            {children}
        </button>
    )
}