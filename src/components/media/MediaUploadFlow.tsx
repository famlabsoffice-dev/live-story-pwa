"use client";

interface Props {
  onUpload(file: File): void;
}

export function MediaUploadFlow({ onUpload }: Props) {
  return (
    <input
      type="file"
      accept="image/*,video/*,audio/*"
      onChange={(event) => {
        const file = event.target.files?.[0];
        if (file) onUpload(file);
      }}
    />
  );
}
