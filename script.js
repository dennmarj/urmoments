const menu = document.querySelector('[data-menu]');
const nav = document.querySelector('[data-nav]');
if (menu && nav) {
  menu.addEventListener('click', () => nav.classList.toggle('open'));
}

const form = document.querySelector('[data-inquiry-form]');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const lines = [
      'Hi UrMoments,',
      '',
      'I would like to check availability.',
      '',
      `Name: ${data.get('name') || 'Not provided'}`,
      `Email: ${data.get('email') || 'Not provided'}`,
      `Phone: ${data.get('phone') || 'Not provided'}`,
      `Event date: ${data.get('date') || 'Not provided'}`,
      `Event type: ${data.get('type') || 'Not provided'}`,
      `Interested in: ${data.get('service') || 'Not provided'}`,
      `Message: ${data.get('message') || 'Not provided'}`
    ];
    const subject = encodeURIComponent('Photo booth availability request');
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:urmoments@hotmail.com?subject=${subject}&body=${body}`;
  });
}
