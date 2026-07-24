interface SeniorNavigationProps {
  onHome?: () => void;
  onStory?: () => void;
  onMedia?: () => void;
}

export function SeniorNavigation({ onHome, onStory, onMedia }: SeniorNavigationProps) {
  return (
    <nav aria-label="Hauptnavigation" className="grid grid-cols-3 gap-4">
      <button className="min-h-12 rounded-xl border text-lg" onClick={onHome}>Start</button>
      <button className="min-h-12 rounded-xl border text-lg" onClick={onStory}>Geschichte</button>
      <button className="min-h-12 rounded-xl border text-lg" onClick={onMedia}>Bilder</button>
    </nav>
  );
}
