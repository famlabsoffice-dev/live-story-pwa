interface AccessibilityControlsProps {
  onIncreaseText?: () => void;
  onDecreaseText?: () => void;
}

export function AccessibilityControls({
  onIncreaseText,
  onDecreaseText,
}: AccessibilityControlsProps) {
  return (
    <nav aria-label="Lesbarkeit Einstellungen" className="flex gap-4">
      <button className="min-h-12 min-w-12 rounded-xl border text-lg" onClick={onDecreaseText}>
        A-
      </button>
      <button className="min-h-12 min-w-12 rounded-xl border text-lg" onClick={onIncreaseText}>
        A+
      </button>
    </nav>
  );
}
