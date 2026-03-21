// Twinkling Stars Component
import { useState, useEffect } from 'react'

export default function Stars() {
    // State to store star positions and twinkling states
    const [stars, setStars] = useState([])
    
    useEffect(() => {
        // Create 20 stars with random positions
        const createStars = () => {
            const newStars = []
            for (let i = 0; i < 20; i++) {
                newStars.push({
                    id: i,
                    left: Math.random() * 100, // Random horizontal position (0-100%)
                    top: Math.random() * 100,  // Random vertical position (0-100%)
                    size: Math.random() * 10 + 5, // Random size (5-15px)
                    delay: Math.random() * 2, // Random animation delay
                    duration: Math.random() * 3 + 2 // Random twinkle speed (2-5s)
                })
            }
            setStars(newStars)
        }
        
        createStars()
        
        // Resize handler to recreate stars when window size changes
        const handleResize = () => {
            createStars()
        }
        
        window.addEventListener('resize', handleResize)
        
        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []) // Empty dependency array means this runs once on mount

    return (
        <div className="stars-container">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDelay: `${star.delay}s`,
                        animationDuration: `${star.duration}s`
                    }}
                />
            ))}
        </div>
    )
}