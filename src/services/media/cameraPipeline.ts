export async function requestCameraAccess() {
  return navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
}

export function createGalleryInput() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*,video/*';
  return input;
}
