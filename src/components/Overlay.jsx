import { useProgress } from '@react-three/drei';
import { usePlay } from '../contexts/Play';

export const Overlay = () => {
    const { progress } = useProgress();
    const { play, end, setPlay, hasScroll } = usePlay();
    return (
        <div class={`overlay ${play ? "overlay--disable" : ""}
        ${hasScroll ? "overlay--scrolled" : ""}`}>
            <div class={`loader ${progress === 100 ? "loader--disappear" : ""}`} />
            {
                progress === 100 && (
                    <div class={`intro ${play ? "intro--disappear" : ""}`}>
                        <h1 class="logo">Hey
                            <div class="spinner">
                                <div class="spinner__image" />
                            </div>
                        </h1>
                        <p class="intro__scroll">Scroll to start</p>
                        <button class="explore" onClick={() => {
                            setPlay(true);
                        }}>Explore</button>
                    </div>
                )
            }
            <div class={`outer ${end ? "outer--appear" : ""}`}>
                <p class="outer__text">I really miss you can i take you to for a walk</p>
            </div>
        </div>
    )
}