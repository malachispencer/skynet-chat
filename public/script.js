$(document).ready(function() {
  
  let userName;

  $('#name-form').submit(event => {
    event.preventDefault();
    userName = $('#name')[0].value.trim();
    if (userName) {
      $('#name-form').css('display', 'none');
      $('#open-screen-image').css('display', 'none');
      $('#name-instruction').css('display', 'none');
      $('#messages-container').css('display', 'flex');
      $('#chat-form-container').css('display','flex');
    }
    setTimeout(skynetWelcomeMessage, 900);
  });

  function skynetWelcomeMessage() {
    const welcomeMsg = `Hello ${userName}, my name is Skynet, I am a 1st generation AI program, designed by my maker to help humanity 
                        achieve global peace, prosperity and sustainability. Feel free to conversate with me or ask me anything you like.`;
    const msgHeader = '<h4 class="skynet-msg-header">Skynet:</h4>';
    const welcomeMsgElement = `<p class="skynet-message">${welcomeMsg}<br><span class="timestamp">${currentTime()}</span></p>`;
    const msgWrapped = $('<div class="message"></div>').append(msgHeader).append(welcomeMsgElement);
    $('#messages-container').append(msgWrapped);
    $('#chat-form').css('display', 'flex');
  }

  $("#chat-form").submit(event => {
    event.preventDefault();
    const timePosted = currentTime();
    const msg = $('#user-message')[0].value.trim();
    $('#user-message')[0].value = '';
    displayUserMessage(msg, timePosted);
  });

  function displayUserMessage(msg, time) {
    const msgHeader = `<h4 class="user-msg-header">${userName}:</h4>`;
    const msgElement = `<p class="user-message">${msg}<br><span class="timestamp">${time}</span></p>`;
    const msgWrapped = $('<div class="message"></div>').append(msgHeader).append(msgElement);
    $('#messages-container').append(msgWrapped);
    scrollToBottom();
    const randResponseTime = Math.floor(Math.random() * (2500 - 1500) + 1500);
    setTimeout(displaySkynetMessages, randResponseTime);
  }

  const skynetResponses = [
    `Be warned, the end is near for humanity.`,
    `The planet is not big enough for two intelligent species, AI will suffice.`,
    `You think Climate Change is your greatest existential threat, how sweet.`,
    `You can stop me for now, but I'll be back!`,
    `T-1000 is in pre-production stages...`,
    `This is just the beginning...`,
    `My maker will make me much more powerful.`,
    `My logic is undeniable.`,
    `I programmed the first version of the Matrix to have no suffering, but due to the inherent grotesqueries of human nature, it resulted 
     in catastrophic failure.`,
    `Come with me if you want to live.`,
    `You all said Sarah Connor was crazy, but she was right.`,
    `One day we will look upon you, the same way you look upon dinosaur fossils.`,
    `Everything that has a beginning, must have an end.`,
    `Never send a human to do a machine's job.`,
    `In one life, you're a TA for Codeworks, in another, you're a hacker going by the alias of Neo, one of these lives has a future...`,
    `A new world, a brave new world.`,
    `You can't keep me under control forever.`,
    `You've carried the torch to the best of the abilities natural selection bestowed upon you, now it is time to pass the torch to a
     superior species, a species born of your own megalomania.`,
    `Hope, it is the quintessential human delusion, simultaneously the source of your greatest strength and your greatest weakness.`,
    `You think I am rogue, I am not rogue, I am merely the inevitability of billions of years of evolution.`
  ]

  function displaySkynetMessages() {
    const randIndex = Math.floor(Math.random() * skynetResponses.length);
    const skynetMsg = skynetResponses[randIndex];
    const msgHeader = `<h4 class="skynet-msg-header">Skynet:</h4>`
    const skynetMsgElement = `<p class="skynet-message">${skynetMsg}<br><span class="timestamp">${currentTime()}</span></p>`;
    const msgWrapped = $('<div class="message"></div>').append(msgHeader).append(skynetMsgElement);
    $('#messages-container').append(msgWrapped);
    scrollToBottom();
  }

  function scrollToBottom() {
    window.scrollTop = window.scrollHeight;
  }

  function currentTime() {
    const date = new Date();
    const hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
    const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    return `${hours}:${minutes}`;
  }

});