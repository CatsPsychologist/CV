const clientId = 'gp762nuuoqcoxypju8c569th9wz7q5'; // Замените на ваш Twitch Client ID
const accessToken = 'udakpjv69mvlxovmirk1mws4dd5tka'; // Замените на ваш Twitch Access Token

function getStreamsByCategory(category) {
    let url = 'https://api.twitch.tv/helix/streams?first=4';
    if (category) {
      url += `&game_id=${category}`;
    }
  
    fetch(url, {
      headers: {
        'Client-ID': clientId,
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => response.json())
    .then(data => {
      displayStreams(data.data);
    })
    .catch(error => {
      console.error('Ошибка при получении данных:', error);
    });
  }
  
  function displayStreams(streams) {
    const streamsList = document.getElementById('streams-list');
    streamsList.innerHTML = '';
  
    streams.forEach(stream => {
      const streamElement = document.createElement('div');
      streamElement.classList.add('stream');
      streamElement.innerHTML = `
        <div class="text">
          <h3><span class="bold">Назва:</span> ${stream.title}</h3>
          <p><span class="bold">Канал:</span> ${stream.user_name}</p>
          <p><span class="bold">Перегляди:</span> ${stream.viewer_count}</p>
        </div>
        <iframe src="https://player.twitch.tv/?channel=${stream.user_name}&parent=${window.location.hostname}" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>
      `;
      streamsList.appendChild(streamElement);
    });
  }
  
  document.getElementById('category-select').addEventListener('click', function(event) {

    const buttons = document.querySelectorAll('#category-select button');
                buttons.forEach(button => {
                    button.classList.remove('category_btn_active');
                });

    if (event.target.tagName === 'BUTTON') {
      event.target.classList.add('category_btn_active')
      const category = event.target.value;
      console.log(category)
    getStreamsByCategory(category);
  }
  
  });
  
  document.getElementById('channel-filter').addEventListener('input', function() {
    const channelFilter = this.value.toLowerCase();
    const streams = document.querySelectorAll('.stream');
  
    streams.forEach(stream => {
      const channelName = stream.querySelector('p:nth-child(2)').innerText.toLowerCase();
      if (channelName.includes(channelFilter)) {
        stream.style.display = 'block';
      } else {
        stream.style.display = 'none';
      }
    });
  });
  
  document.getElementById('viewers-filter').addEventListener('input', function() {
    const viewersFilter = parseInt(this.value, 10);
    const streams = document.querySelectorAll('.stream');
  
    streams.forEach(stream => {
      const viewersCount = parseInt(stream.querySelector('p:nth-child(3)').innerText.split(':')[1].trim(), 10);
      if (viewersCount >= viewersFilter || isNaN(viewersFilter)) {
        stream.style.display = 'block';
      } else {
        stream.style.display = 'none';
      }
    });
  });
  
  getStreamsByCategory();
