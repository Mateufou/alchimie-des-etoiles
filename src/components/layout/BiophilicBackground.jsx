export default function BiophilicBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden mix-blend-multiply" style={{ zIndex: 1, opacity: 1 }}>
      {/* Hero section area */}
      <img 
        src="/assets/decorative/botanical-leaf-1.svg" 
        alt="" 
        className="absolute w-[400px] h-auto top-[-5%] left-[-5%] opacity-[0.08]"
        style={{ transform: 'rotate(15deg)' }}
      />
      <img 
        src="/assets/decorative/watercolor-wash-1.svg" 
        alt="" 
        className="absolute w-[600px] h-[600px] top-[-10%] left-[-10%] opacity-[0.06]"
      />
      <img 
        src="/assets/decorative/compass-star.svg" 
        alt="" 
        className="absolute w-[300px] h-[300px] top-[15%] right-[5%] opacity-[0.05]"
      />
      <img 
        src="/assets/decorative/dots-scatter.svg" 
        alt="" 
        className="absolute w-[150px] h-[150px] top-[20%] right-[10%] opacity-[0.3] dot-scatter"
        style={{ animationDelay: '0s' }}
      />

      {/* Between "Qui suis-je" and "Pourquoi me choisir" (approx 30% down the page) */}
      <img 
        src="/assets/decorative/botanical-leaf-2.svg" 
        alt="" 
        className="absolute w-[280px] h-auto top-[35%] right-[-5%] opacity-[0.08]"
        style={{ transform: 'rotate(-20deg)' }}
      />
      <img 
        src="/assets/decorative/watercolor-wash-2.svg" 
        alt="" 
        className="absolute w-[500px] h-[500px] top-[30%] right-[10%] opacity-[0.06]"
      />

      {/* Between "Accompagnements" and "Déroulement" (approx 65% down) */}
      <img 
        src="/assets/decorative/botanical-leaf-1.svg" 
        alt="" 
        className="absolute w-[350px] h-auto top-[65%] left-[-5%] opacity-[0.07]"
        style={{ transform: 'rotate(-30deg) scaleX(-1)' }}
      />
      <img 
        src="/assets/decorative/dots-scatter.svg" 
        alt="" 
        className="absolute w-[120px] h-[120px] top-[60%] left-[8%] opacity-[0.25] dot-scatter"
        style={{ animationDelay: '2s' }}
      />

      {/* Contact/Footer transition area (approx 90% down) */}
      <img 
        src="/assets/decorative/botanical-leaf-2.svg" 
        alt="" 
        className="absolute w-[220px] h-auto bottom-[5%] right-[-2%] opacity-[0.07]"
        style={{ transform: 'rotate(-10deg)' }}
      />
      <img 
        src="/assets/decorative/watercolor-wash-1.svg" 
        alt="" 
        className="absolute w-[400px] h-[400px] bottom-[-2%] right-[5%] opacity-[0.05]"
      />
    </div>
  );
}
