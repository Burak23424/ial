async function sendMessage() {
  const input = document.getElementById('input').value;
  const responseDiv = document.getElementById('response');

  responseDiv.innerHTML = 'Yükleniyor...';

  const res = await fetch('/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: input })
  });

  const data = await res.json();
  responseDiv.innerHTML = data.reply;
}
