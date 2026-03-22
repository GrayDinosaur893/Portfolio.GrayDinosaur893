import { useEffect, useState } from 'react';

export default function Stars() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const newStars = [];
        
        for (let i = 0; i < 20; i++) {
            newStars.push({
                id: i,
                x: Math.floor(Math.random() * 100),
                y: Math.floor(Math.random() * 100),
                size: Math.random() * 3 + 2,
                delay: Math.random() * 3 + 1,
            });
        }
        
        setStars(newStars);
        
        const handleResize = () => {
            setStars(newStars);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="stars-container">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDelay: `${star.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}