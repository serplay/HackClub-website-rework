// title.js
export function setTitle() {
    let path = window.location.pathname;
    let directories = path.split('/').filter(Boolean);
    let title = directories.length > 0 ? directories[directories.length - 1] : 'ALO HackClub';
    document.title = title;
  }