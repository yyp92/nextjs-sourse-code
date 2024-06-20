"use client"

export default function Page() {
    return (
        <div>
            <div className="container">text</div>
    
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: repeat(1, minmax(0, 1fr));
                    gap: 1.5rem /* 24px */;
                    color: red;
                }
        
                @media (min-width: 1024px) {
                    .container {
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    }
                }
            `}</style>
        </div>
    );
  }
  