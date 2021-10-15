import Particles from "react-particles-js";

const Bubbles = ({ amount, size, color, connected }) => (
    <Particles
        className="particle-background" 
        canvasClassName="particle-background"
        params={{
            particles: {
                number: {
                    value: amount
                },
                size: {
                    value: size
                },
                color: {
                    value: color
                },
                line_linked: {
                    enable: connected
                },
            }
        }} 
    />
);

export default Bubbles;