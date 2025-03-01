function criarBarra(var_nome, var_avatar, var_urlWhatsapp, var_urlBack, var_mensagem, var_ativarIcon) {

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    
      var varStatus = document.createElement("span");
      varStatus.className = "status";
      var elementoPai = document.querySelector('#__next');
      
      var userBar = document.createElement("div");
      userBar.className = "user-bar";
    
      var backButton = document.createElement("div");
      backButton.className = "back";
      backButton.innerHTML = '<a href="'+var_urlBack+'"><svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg></a>';
    
      var avatar = document.createElement("div");
      avatar.className = "avatar";
      avatar.innerHTML = '<img src="'+var_avatar+'" alt="'+var_nome+'">';
    
      var name = document.createElement("div");
      name.className = "name";
      name.innerHTML = '<span>'+var_nome+'</span>&nbsp<span class="verificado" style="float: right" data-testid="psa-verified" data-icon="psa-verified" class=""><svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18" xml:space="preserve"><polygon id="Star-2" fill="currentColor" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg></span>';
      
      name.appendChild(varStatus)
    
      var moreActions = document.createElement("div");
      moreActions.className = "actions more";
      moreActions.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 88 384"><path fill="white" d="M42.5 107q-17.5 0-30-12.5T0 64t12.5-30.5t30-12.5t30 12.5T85 64T72.5 94.5t-30 12.5zm0 42q17.5 0 30 12.5T85 192t-12.5 30.5t-30 12.5t-30-12.5T0 192t12.5-30.5t30-12.5zm0 128q17.5 0 30 12.5T85 320t-12.5 30.5t-30 12.5t-30-12.5T0 320t12.5-30.5t30-12.5z"/></svg>';
    
      var attachmentAction = document.createElement("div");
      attachmentAction.className = "actions cam-action";
      attachmentAction.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-video"><path stroke="none" d="M0 0h28v28H0z" fill="none" /><path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" /><path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>`;
    
      var phoneAction = document.createElement("div");
      phoneAction.className = "actions phone-action";
      phoneAction.innerHTML = '<a href="'+var_urlWhatsapp+'"><svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg></a>';
    
      userBar.appendChild(backButton);
      userBar.appendChild(avatar);
      userBar.appendChild(name);
      // userBar.appendChild(moreActions);
    
      if (var_ativarIcon === "off") {
        attachmentAction.innerHTML = "";
        phoneAction.innerHTML = "";
      }else{
        userBar.appendChild(phoneAction);
        userBar.appendChild(attachmentAction);
      }
    
      if (elementoPai) {
        elementoPai.insertBefore(userBar, elementoPai.firstChild);
      }
    
    const botBody = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');
    const userAvatar = botBody.querySelector('img[elementtiming="Bot avatar"]');
    const status = varStatus;
    
    const audioNot = document.createElement('audio');
    audioNot.src = 'https://typebotemplates.site/br/dist/audio/audio_whatsapp.mp3';
    let mensagesLength = 0;
    let respostaLength = 0;
    
    createInfoMessage();  
      
    function createInfoMessage() {
    const botBody = document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container');
    const div = document.createElement('div');
    const infoHTML = '<div style="display: flex; align-items: center; gap: 6px; background-color: #d5f4f0; border-radius: 10px; padding: 10px; width: fit-content; max-width: 450px; margin: 4.5rem auto .5rem;" class="info-container"><div><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#4b5e63" fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"></path></svg></div><p style="color: #53676b; font-size: 13px;">'+var_mensagem+'</p></div><div class="hoje">Hoje</div>';
    
    div.innerHTML = infoHTML;    
    const messagesContainer = botBody.querySelector('.typebot-chat-view');    
    messagesContainer.insertBefore(div, messagesContainer.firstChild);
    }
    setInterval(() => {
      const isTyping = botBody.querySelector('.bubble1');
      const sibling = isTyping?.parentElement?.parentElement?.nextSibling;
    
      if(isTyping && sibling.src) {
        status.innerText = 'gravando audio...'
      } else if(isTyping) {      
        status.innerText = 'digitando...'
      } else {
        status.innerText = 'online'
      }
    
    const allMessages = botBody.querySelector('.typebot-chat-view').querySelectorAll('.items-start.typebot-host-bubble');    
          
          if(allMessages.length > mensagesLength) {        
            if(!isTyping) {
              for (let i = mensagesLength; i < allMessages.length; i++) {
                const iconContainer = document.createElement('div');
                now = new Date
                const checkIcon = `<span class="hora">`+ (now.getHours()<10?'0':'') + now.getHours() +`:`+ (now.getMinutes()<10?'0':'') + now.getMinutes() +`</span>`;
                iconContainer.innerHTML = checkIcon;
                
                const currentMsg = allMessages[i];
                currentMsg.append(iconContainer);
              }
              
              mensagesLength = allMessages.length;
              audioNot.play();        
            }
          }
    
    const allResposta = botBody.querySelector('.typebot-chat-view').querySelectorAll('.typebot-guest-bubble');  
    
          if(allResposta.length > respostaLength) {
              for (let i = respostaLength; i < allResposta.length; i++) {
                const iconContainer = document.createElement('div');
                now = new Date
                const checkIcon = `<span class="hora2">`+ (now.getHours()<10?'0':'') + now.getHours() +`:`+ (now.getMinutes()<10?'0':'') + now.getMinutes() +`</span><svg id="checkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.626 24.684" style="position: absolute;bottom: 2px;right: 5px;" height="20" width="18">
                  <g id="Grupo_1" data-name="Grupo 1" transform="translate(-708.9 -601.383)">
                    <path id="Caminho_6" data-name="Caminho 6" d="M728.035,623.468l1.382,1.482,17.929-20.334" transform="translate(-1.937 -1.117)" fill="none" stroke="#29afdf" stroke-linecap="round" stroke-width="3"></path>
                    <path id="Caminho_7" data-name="Caminho 7" d="M712.017,616.07l7.088,8.039,17.757-20.14" transform="translate(-1 -0.469)" fill="none" stroke="#29afdf" stroke-linecap="round" stroke-width="3"></path>
                  </g>
                </svg>`;
                iconContainer.innerHTML = checkIcon;
                
                const currentMsg = allResposta[i];
                currentMsg.append(iconContainer);
              }
              
              respostaLength = allResposta.length; 
            
          }
    
    }, 400)
    
    var cssIdMain = 'myCssMain';
    var cssIdShadow = 'myCssShadow';
    var cssHref = 'https://produto.comunidadeecom.com/chatecom_css_tema_whatsapp_ios_light.css?v=11';
    
    // FunÃ§Ã£o para adicionar o CSS em um determinado head
    function addCssToHead(cssId, head) {
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = cssHref;
        link.media = 'all';
        head.appendChild(link);
    }
    
    // Adiciona o CSS no head principal (se jÃ¡ nÃ£o estiver adicionado)
    if (!document.getElementById(cssIdMain)) {
        addCssToHead(cssIdMain, document.head);
    }
    
    // Adiciona o CSS no shadowRoot do typebot-standard (se jÃ¡ nÃ£o estiver adicionado)
    var typebotContainer = document.getElementsByTagName("typebot-standard")[0];
    if (typebotContainer && typebotContainer.shadowRoot) {
        var shadowHead = typebotContainer.shadowRoot.querySelector('.typebot-container');
        if (shadowHead && !shadowHead.querySelector('#' + cssIdShadow)) {
            addCssToHead(cssIdShadow, shadowHead);
        }
    }
    }else if (/android/i.test(navigator.userAgent) && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    
    
      var varStatus = document.createElement("span");
      varStatus.className = "status";
      var elementoPai = document.querySelector('#__next');
      
      var userBar = document.createElement("div");
      userBar.className = "user-bar";
    
      var backButton = document.createElement("div");
      backButton.className = "back";
      backButton.innerHTML = '<a href="'+var_urlBack+'"><svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg></a>';
    
      var avatar = document.createElement("div");
      avatar.className = "avatar";
      avatar.innerHTML = '<img src="'+var_avatar+'" alt="'+var_nome+'">';
    
      var name = document.createElement("div");
      name.className = "name";
      name.innerHTML = '<span>'+var_nome+'</span>&nbsp<span class="verificado" style="float: right" data-testid="psa-verified" data-icon="psa-verified" class=""><svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18" xml:space="preserve"><polygon id="Star-2" fill="currentColor" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg></span>';
      
      name.appendChild(varStatus)
    
      var moreActions = document.createElement("div");
      moreActions.className = "actions more";
      moreActions.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>';
    
      var attachmentAction = document.createElement("div");
      attachmentAction.className = "actions cam-action";
      attachmentAction.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-video"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" fill="currentColor"/><path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>`;
    
      var phoneAction = document.createElement("div");
      phoneAction.className = "actions phone-action";
      phoneAction.innerHTML = '<a href="'+var_urlWhatsapp+'"><svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg></a>';
    
      userBar.appendChild(backButton);
      userBar.appendChild(avatar);
      userBar.appendChild(name);
      userBar.appendChild(moreActions);
    
      if (var_ativarIcon === "off") {
        attachmentAction.innerHTML = "";
        phoneAction.innerHTML = "";
      }else{
        userBar.appendChild(phoneAction);
        userBar.appendChild(attachmentAction);
      }
    
      if (elementoPai) {
        elementoPai.prepend(userBar);
      }
    
    const botBody = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');
    const userAvatar = botBody.querySelector('img[elementtiming="Bot avatar"]');
    const status = varStatus;
    
    const audioNot = document.createElement('audio');
    audioNot.src = 'https://typebotemplates.site/br/dist/audio/audio_whatsapp.mp3';
    let mensagesLength = 0;
    let respostaLength = 0;
    
    createInfoMessage();  
      
    function createInfoMessage() {
    const botBody = document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container');
    const div = document.createElement('div');
    const infoHTML = '<div style="display: flex; align-items: center; gap: 6px; background-color: #d5f4f0; border-radius: 10px; padding: 10px; width: fit-content; max-width: 450px; margin: 4.5rem auto .5rem;" class="info-container"><div><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#4b5e63" fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"></path></svg></div><p style="color: #53676b; font-size: 13px;">'+var_mensagem+'</p></div><div class="hoje">Hoje</div>';
    
    div.innerHTML = infoHTML;    
    const messagesContainer = botBody.querySelector('.typebot-chat-view');    
    messagesContainer.insertBefore(div, messagesContainer.firstChild);
    }
    setInterval(() => {
      const isTyping = botBody.querySelector('.bubble1');
      const sibling = isTyping?.parentElement?.parentElement?.nextSibling;
    
      if(isTyping && sibling.src) {
        status.innerText = 'gravando audio...'
      } else if(isTyping) {      
        status.innerText = 'digitando...'
      } else {
        status.innerText = 'online'
      }
    
    const allMessages = botBody.querySelector('.typebot-chat-view').querySelectorAll('.items-start.typebot-host-bubble');    
          
          if(allMessages.length > mensagesLength) {        
            if(!isTyping) {
              for (let i = mensagesLength; i < allMessages.length; i++) {
                const iconContainer = document.createElement('div');
                now = new Date
                const checkIcon = `<span class="hora">`+ (now.getHours()<10?'0':'') + now.getHours() +`:`+ (now.getMinutes()<10?'0':'') + now.getMinutes() +`</span>`;
                iconContainer.innerHTML = checkIcon;
                
                const currentMsg = allMessages[i];
                currentMsg.append(iconContainer);
              }
              
              mensagesLength = allMessages.length;
              audioNot.play();        
            }
          }
    
    const allResposta = botBody.querySelector('.typebot-chat-view').querySelectorAll('.typebot-guest-bubble');  
    
          if(allResposta.length > respostaLength) {
              for (let i = respostaLength; i < allResposta.length; i++) {
                const iconContainer = document.createElement('div');
                now = new Date
                const checkIcon = `<span class="hora2">`+ (now.getHours()<10?'0':'') + now.getHours() +`:`+ (now.getMinutes()<10?'0':'') + now.getMinutes() +`</span><svg id="checkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.626 24.684" style="position: absolute;bottom: 2px;right: 5px;" height="20" width="18">
                  <g id="Grupo_1" data-name="Grupo 1" transform="translate(-708.9 -601.383)">
                    <path id="Caminho_6" data-name="Caminho 6" d="M728.035,623.468l1.382,1.482,17.929-20.334" transform="translate(-1.937 -1.117)" fill="none" stroke="#29afdf" stroke-linecap="round" stroke-width="3"></path>
                    <path id="Caminho_7" data-name="Caminho 7" d="M712.017,616.07l7.088,8.039,17.757-20.14" transform="translate(-1 -0.469)" fill="none" stroke="#29afdf" stroke-linecap="round" stroke-width="3"></path>
                  </g>
                </svg>`;
                iconContainer.innerHTML = checkIcon;
                
                const currentMsg = allResposta[i];
                currentMsg.append(iconContainer);
              }
              
              respostaLength = allResposta.length; 
            
          }
    
    }, 400)
    
    var cssIdMain = 'myCssMain';
    var cssIdShadow = 'myCssShadow';
    var cssHref = 'https://produto.comunidadeecom.com/chatecom_css_tema_whatsapp_android_light.css?v=11';
    
    // FunÃ§Ã£o para adicionar o CSS em um determinado head
    function addCssToHead(cssId, head) {
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = cssHref;
        link.media = 'all';
        head.appendChild(link);
    }
    
    // Adiciona o CSS no head principal (se jÃ¡ nÃ£o estiver adicionado)
    if (!document.getElementById(cssIdMain)) {
        addCssToHead(cssIdMain, document.head);
    }
    
    // Adiciona o CSS no shadowRoot do typebot-standard (se jÃ¡ nÃ£o estiver adicionado)
    var typebotContainer = document.getElementsByTagName("typebot-standard")[0];
    if (typebotContainer && typebotContainer.shadowRoot) {
        var shadowHead = typebotContainer.shadowRoot.querySelector('.typebot-container');
        if (shadowHead && !shadowHead.querySelector('#' + cssIdShadow)) {
            addCssToHead(cssIdShadow, shadowHead);
        }
    }
    } else if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    
      var varStatus = document.createElement("span");
      varStatus.className = "status";
      var elementoPai = document.querySelector('#__next');
      
      var userBar = document.createElement("div");
      userBar.className = "user-bar";
    
      var backButton = document.createElement("div");
      backButton.className = "back";
      backButton.innerHTML = '<a href="'+var_urlBack+'"><svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg></a>';
    
      var avatar = document.createElement("div");
      avatar.className = "avatar";
      avatar.innerHTML = '<img src="'+var_avatar+'" alt="'+var_nome+'">';
    
      var name = document.createElement("div");
      name.className = "name";
      name.innerHTML = '<span>'+var_nome+'</span>&nbsp<span class="verificado" style="float: right" data-testid="psa-verified" data-icon="psa-verified" class=""><svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18" xml:space="preserve"><polygon id="Star-2" fill="currentColor" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg></span>';
      
      name.appendChild(varStatus)
    
      var moreActions = document.createElement("div");
      moreActions.className = "actions more";
      moreActions.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 88 384"><path fill="white" d="M42.5 107q-17.5 0-30-12.5T0 64t12.5-30.5t30-12.5t30 12.5T85 64T72.5 94.5t-30 12.5zm0 42q17.5 0 30 12.5T85 192t-12.5 30.5t-30 12.5t-30-12.5T0 192t12.5-30.5t30-12.5zm0 128q17.5 0 30 12.5T85 320t-12.5 30.5t-30 12.5t-30-12.5T0 320t12.5-30.5t30-12.5z"/></svg>';
    
      var attachmentAction = document.createElement("div");
      attachmentAction.className = "actions cam-action";
      attachmentAction.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-video"><path stroke="none" d="M0 0h28v28H0z" fill="none" /><path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" /><path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>`;
    
      var phoneAction = document.createElement("div");
      phoneAction.className = "actions phone-action";
      phoneAction.innerHTML = '<a href="'+var_urlWhatsapp+'"><svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg></a>';
    
      userBar.appendChild(backButton);
      userBar.appendChild(avatar);
      userBar.appendChild(name);
      // userBar.appendChild(moreActions);
    
      if (var_ativarIcon === "off") {
        attachmentAction.innerHTML = "";
        phoneAction.innerHTML = "";
      }else{
        userBar.appendChild(phoneAction);
        userBar.appendChild(attachmentAction);
      }
    
      if (elementoPai) {
        elementoPai.prepend(userBar);
      }
    
    const botBody = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');
    const userAvatar = botBody.querySelector('img[elementtiming="Bot avatar"]');
    const status = varStatus;
    
    const audioNot = document.createElement('audio');
    audioNot.src = 'https://typebotemplates.site/br/dist/audio/audio_whatsapp.mp3';
    let mensagesLength = 0;
    let respostaLength = 0;
    
    createInfoMessage();  
      
    function createInfoMessage() {
    const botBody = document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container');
    const div = document.createElement('div');
    const infoHTML = '<div style="display: flex; align-items: center; gap: 6px; background-color: #161817; border-radius: 10px; padding: 10px; width: fit-content; max-width: 450px; margin: 4.5rem auto .5rem; text-align: center;" class="info-container"><div><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#4b5e63" fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"></path></svg></div><p style="color: #19c064; font-size: 13px;">'+var_mensagem+'</p></div><div class="hoje">Hoje</div>';
    
    div.innerHTML = infoHTML;    
    const messagesContainer = botBody.querySelector('.typebot-chat-view');    
    messagesContainer.insertBefore(div, messagesContainer.firstChild);
    }
    
    setInterval(() => {
      const isTyping = botBody.querySelector('.bubble1');
      const sibling = isTyping?.parentElement?.parentElement?.nextSibling;
    
      if(isTyping && sibling.src) {
        status.innerText = 'gravando audio...'
      } else if(isTyping) {      
        status.innerText = 'digitando...'
      } else {
        status.innerText = 'online'
      }
    
    const allMessages = botBody.querySelector('.typebot-chat-view').querySelectorAll('.items-start.typebot-host-bubble');    
          
          if(allMessages.length > mensagesLength) {        
            if(!isTyping) {
              for (let i = mensagesLength; i < allMessages.length; i++) {
                const iconContainer = document.createElement('div');
                now = new Date
                const checkIcon = `<span class="hora">`+ (now.getHours()<10?'0':'') + now.getHours() +`:`+ (now.getMinutes()<10?'0':'') + now.getMinutes() +`</span>`;
                iconContainer.innerHTML = checkIcon;
                
                const currentMsg = allMessages[i];
                currentMsg.append(iconContainer);
              }
              
              mensagesLength = allMessages.length;
              audioNot.play();        
            }
          }
    
    const allResposta = botBody.querySelector('.typebot-chat-view').querySelectorAll('.typebot-guest-bubble');  
    
          if(allResposta.length > respostaLength) {
              for (let i = respostaLength; i < allResposta.length; i++) {
                const iconContainer = document.createElement('div');
                now = new Date
                const checkIcon = `<span class="hora2">`+ (now.getHours()<10?'0':'') + now.getHours() +`:`+ (now.getMinutes()<10?'0':'') + now.getMinutes() +`</span><svg id="checkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.626 24.684" style="position: absolute;bottom: 2px;right: 5px;" height="20" width="18">
                  <g id="Grupo_1" data-name="Grupo 1" transform="translate(-708.9 -601.383)">
                    <path id="Caminho_6" data-name="Caminho 6" d="M728.035,623.468l1.382,1.482,17.929-20.334" transform="translate(-1.937 -1.117)" fill="none" stroke="#29afdf" stroke-linecap="round" stroke-width="3"></path>
                    <path id="Caminho_7" data-name="Caminho 7" d="M712.017,616.07l7.088,8.039,17.757-20.14" transform="translate(-1 -0.469)" fill="none" stroke="#29afdf" stroke-linecap="round" stroke-width="3"></path>
                  </g>
                </svg>`;
                iconContainer.innerHTML = checkIcon;
                
                const currentMsg = allResposta[i];
                currentMsg.append(iconContainer);
              }
              
              respostaLength = allResposta.length; 
            
          }
    
    }, 400)
    
    var cssIdMain = 'myCssMain';
    var cssIdShadow = 'myCssShadow';
    var cssHref = 'https://produto.comunidadeecom.com/chatecom_css_tema_whatsapp_ios_dark.css?v=11';
    
    // FunÃ§Ã£o para adicionar o CSS em um determinado head
    function addCssToHead(cssId, head) {
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = cssHref;
        link.media = 'all';
        head.appendChild(link);
    }
    
    // FunÃ§Ã£o para adicionar estilos customizados
    function addCustomStyle(head) {
        var style = document.createElement('style'); // Cria o elemento <style>
        style.textContent = `
            input::-moz-placeholder, textarea::-moz-placeholder { color: grey !important; opacity: 1; }
            input::placeholder, textarea::placeholder { color: grey !important; opacity: 1; }
        `; // Define os estilos para os placeholders
        head.appendChild(style); // Adiciona o elemento <style> ao head especificado
    }
    
    
    // Adiciona o CSS no head principal (se jÃ¡ nÃ£o estiver adicionado)
    if (!document.getElementById(cssIdMain)) {
        addCssToHead(cssIdMain, document.head);
    }
    
    // Adiciona o CSS no shadowRoot do typebot-standard (se jÃ¡ nÃ£o estiver adicionado)
    var typebotContainer = document.getElementsByTagName("typebot-standard")[0];
    if (typebotContainer && typebotContainer.shadowRoot) {
        var shadowHead = typebotContainer.shadowRoot.querySelector('.typebot-container');
        if (shadowHead && !shadowHead.querySelector('#' + cssIdShadow)) {
            addCssToHead(cssIdShadow, shadowHead);
        }
        // Adiciona o estilo customizado sempre ao shadowRoot
        if (shadowHead) {
            addCustomStyle(shadowHead);
        }
    }
    } else if (/android/i.test(navigator.userAgent) && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    
    
      var varStatus = document.createElement("span");
      varStatus.className = "status";
      var elementoPai = document.querySelector('#__next');
      
      var userBar = document.createElement("div");
      userBar.className = "user-bar";
    
      var backButton = document.createElement("div");
      backButton.className = "back";
      backButton.innerHTML = '<a href="'+var_urlBack+'"><svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg></a>';
    
      var avatar = document.createElement("div");
      avatar.className = "avatar";
      avatar.innerHTML = '<img src="'+var_avatar+'" alt="'+var_nome+'">';
    
      var name = document.createElement("div");
      name.className = "name";
      name.innerHTML = '<span>'+var_nome+'</span>&nbsp<span class="verificado" style="float: right" data-testid="psa-verified" data-icon="psa-verified" class=""><svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18" xml:space="preserve"><polygon id="Star-2" fill="currentColor" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg></span>';
      
      name.appendChild(varStatus)
    
      var moreActions = document.createElement("div");
      moreActions.className = "actions more";
      moreActions.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>';
    
      var attachmentAction = document.createElement("div");
      attachmentAction.className = "actions cam-action";
      attachmentAction.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-video"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" fill="currentColor"/><path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>`;
    
      var phoneAction = document.createElement("div");
      phoneAction.className = "actions phone-action";
      phoneAction.innerHTML = '<a href="'+var_urlWhatsapp+'"><svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg></a>';
    
      userBar.appendChild(backButton);
      userBar.appendChild(avatar);
      userBar.appendChild(name);
      userBar.appendChild(moreActions);
    
      if (var_ativarIcon === "off") {
        attachmentAction.innerHTML = "";
        phoneAction.innerHTML = "";
      }else{
        userBar.appendChild(phoneAction);
        userBar.appendChild(attachmentAction);
      }
    
      if (elementoPai) {
        elementoPai.prepend(userBar);
      }
    
    const botBody = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');
    const userAvatar = botBody.querySelector('img[elementtiming="Bot avatar"]');
    const status = varStatus;
    
    const audioNot = document.createElement('audio');
    audioNot.src = 'https://typebotemplates.site/br/dist/audio/audio_whatsapp.mp3';
    let mensagesLength = 0;
    let respostaLength = 0;
    
    createInfoMessage();  
      
    function createInfoMessage() {
    const botBody = document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container');
    const div = document.createElement('div');
    const infoHTML = '<div style="display: flex; align-items: center; gap: 6px; background-color: #161817; border-radius: 10px; padding: 10px; width: fit-content; max-width: 450px; margin: 4.5rem auto .5rem; text-align: center;" class="info-container"><div><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#4b5e63" fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"></path></svg></div><p style="color: #19c064; font-size: 13px;">'+var_mensagem+'</p></div><div class="hoje">Hoje</div>';
    
    div.innerHTML = infoHTML;    
    const messagesContainer = botBody.querySelector('.typebot-chat-view');    
    messagesContainer.insertBefore(div, messagesContainer.firstChild);
    }
    setInterval(() => {
      const isTyping = botBody.querySelector('.bubble1');
      const sibling = isTyping?.parentElement?.parentElement?.nextSibling;
    
      if(isTyping && sibling.src) {
        status.innerText = 'gravando audio...'
      } else if(isTyping) {      
        status.innerText = 'digitando...'
      } else {
        status.innerText = 'online'
      }
    
    const allMessages = botBody.querySelector('.typebot-chat-view').querySelectorAll('.items-start.typebot-host-bubble');    
          
          if(allMessages.length > mensagesLength) {        
            if(!isTyping) {
              for (let i = mensagesLength; i < allMessages.length; i++) {
                const iconContainer = document.createElement('div');
                now = new Date
                const checkIcon = `<span class="hora">`+ (now.getHours()<10?'0':'') + now.getHours() +`:`+ (now.getMinutes()<10?'0':'') + now.getMinutes() +`</span>`;
                iconContainer.innerHTML = checkIcon;
                
                const currentMsg = allMessages[i];
                currentMsg.append(iconContainer);
              }
              
              mensagesLength = allMessages.length;
              audioNot.play();        
            }
          }
    
    const allResposta = botBody.querySelector('.typebot-chat-view').querySelectorAll('.typebot-guest-bubble');  
    
          if(allResposta.length > respostaLength) {
              for (let i = respostaLength; i < allResposta.length; i++) {
                const iconContainer = document.createElement('div');
                now = new Date
                const checkIcon = `<span class="hora2">`+ (now.getHours()<10?'0':'') + now.getHours() +`:`+ (now.getMinutes()<10?'0':'') + now.getMinutes() +`</span><svg id="checkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.626 24.684" style="position: absolute;bottom: 2px;right: 5px;" height="20" width="18">
                  <g id="Grupo_1" data-name="Grupo 1" transform="translate(-708.9 -601.383)">
                    <path id="Caminho_6" data-name="Caminho 6" d="M728.035,623.468l1.382,1.482,17.929-20.334" transform="translate(-1.937 -1.117)" fill="none" stroke="#29afdf" stroke-linecap="round" stroke-width="3"></path>
                    <path id="Caminho_7" data-name="Caminho 7" d="M712.017,616.07l7.088,8.039,17.757-20.14" transform="translate(-1 -0.469)" fill="none" stroke="#29afdf" stroke-linecap="round" stroke-width="3"></path>
                  </g>
                </svg>`;
                iconContainer.innerHTML = checkIcon;
                
                const currentMsg = allResposta[i];
                currentMsg.append(iconContainer);
              }
              
              respostaLength = allResposta.length; 
            
          }
    
    }, 400)
    
    var cssIdMain = 'myCssMain';
    var cssIdShadow = 'myCssShadow';
    var cssHref = 'https://produto.comunidadeecom.com/chatecom_css_tema_whatsapp_android_dark.css?v=11';
    
    // FunÃ§Ã£o para adicionar o CSS em um determinado head
    function addCssToHead(cssId, head) {
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = cssHref;
        link.media = 'all';
        head.appendChild(link);
    }
    
    // Adiciona o CSS no head principal (se jÃ¡ nÃ£o estiver adicionado)
    if (!document.getElementById(cssIdMain)) {
        addCssToHead(cssIdMain, document.head);
    }
    
    // Adiciona o CSS no shadowRoot do typebot-standard (se jÃ¡ nÃ£o estiver adicionado)
    var typebotContainer = document.getElementsByTagName("typebot-standard")[0];
    if (typebotContainer && typebotContainer.shadowRoot) {
        var shadowHead = typebotContainer.shadowRoot.querySelector('.typebot-container');
        if (shadowHead && !shadowHead.querySelector('#' + cssIdShadow)) {
            addCssToHead(cssIdShadow, shadowHead);
        }
    }
    } else {
    
    
      var varStatus = document.createElement("span");
      varStatus.className = "status";
      var elementoPai = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');
      
      var userBar = document.createElement("div");
      userBar.className = "user-bar";
    
      var backButton = document.createElement("div");
      backButton.className = "back";
      backButton.innerHTML = '<a href="'+var_urlBack+'"><svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg></a>';
    
      var avatar = document.createElement("div");
      avatar.className = "avatar";
      avatar.innerHTML = '<img src="'+var_avatar+'" alt="'+var_nome+'">';
    
      var name = document.createElement("div");
      name.className = "name";
      name.innerHTML = '<span>'+var_nome+'</span>&nbsp<span class="verificado" style="float: right" data-testid="psa-verified" data-icon="psa-verified" class=""><svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18" xml:space="preserve"><polygon id="Star-2" fill="currentColor" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg></span>';
      
      name.appendChild(varStatus)
    
      var moreActions = document.createElement("div");
      moreActions.className = "actions more";
      moreActions.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>';
    
      var attachmentAction = document.createElement("div");
      attachmentAction.className = "actions cam-action";
      attachmentAction.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-video"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" fill="currentColor"/><path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>`;
    
      var phoneAction = document.createElement("div");
      phoneAction.className = "actions phone-action";
      phoneAction.innerHTML = '<a href="'+var_urlWhatsapp+'"><svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg></a>';
    
      userBar.appendChild(backButton);
      userBar.appendChild(avatar);
      userBar.appendChild(name);
      userBar.appendChild(moreActions);
    
      if (var_ativarIcon === "off") {
        attachmentAction.innerHTML = "";
        phoneAction.innerHTML = "";
      }else{
        userBar.appendChild(phoneAction);
        userBar.appendChild(attachmentAction);
      }
    
      if (elementoPai) {
        elementoPai.prepend(userBar);
      }
    
    const botBody = elementoPai
    const userAvatar = botBody.querySelector('img[elementtiming="Bot avatar"]');
    const status = varStatus;
    
    const audioNot = document.createElement('audio');
    audioNot.src = 'https://typebotemplates.site/br/dist/audio/audio_whatsapp.mp3';
    let mensagesLength = 0;
    let respostaLength = 0;
    
    createInfoMessage();  
      
    function createInfoMessage() {
    const botBody = document.querySelector('typebot-standard').shadowRoot.querySelector('.typebot-container');
    const div = document.createElement('div');
    const infoHTML = '<div style="display: flex; align-items: center; gap: 6px; background-color: #d5f4f0; border-radius: 10px; padding: 10px; width: fit-content; max-width: 450px; margin: 4.5rem auto .5rem;" class="info-container"><div><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#4b5e63" fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"></path></svg></div><p style="color: #53676b; font-size: 13px;">'+var_mensagem+'</p></div><div class="hoje">Hoje</div>';
    
    div.innerHTML = infoHTML;    
    const messagesContainer = botBody.querySelector('.typebot-chat-view');    
    messagesContainer.insertBefore(div, messagesContainer.firstChild);
    }
    setInterval(() => {
      const isTyping = botBody.querySelector('.bubble1');
      const sibling = isTyping?.parentElement?.parentElement?.nextSibling;
    
      if(isTyping && sibling.src) {
        status.innerText = 'gravando audio...'
      } else if(isTyping) {      
        status.innerText = 'digitando...'
      } else {
        status.innerText = 'online'
      }
    
    const allMessages = botBody.querySelector('.typebot-chat-view').querySelectorAll('.items-start.typebot-host-bubble');    
          
          if(allMessages.length > mensagesLength) {        
            if(!isTyping) {
              for (let i = mensagesLength; i < allMessages.length; i++) {
                const iconContainer = document.createElement('div');
                now = new Date
                const checkIcon = `<span class="hora">`+ (now.getHours()<10?'0':'') + now.getHours() +`:`+ (now.getMinutes()<10?'0':'') + now.getMinutes() +`</span>`;
                iconContainer.innerHTML = checkIcon;
                
                const currentMsg = allMessages[i];
                currentMsg.append(iconContainer);
              }
              
              mensagesLength = allMessages.length;
              audioNot.play();        
            }
          }
    
    const allResposta = botBody.querySelector('.typebot-chat-view').querySelectorAll('.typebot-guest-bubble');  
    
          if(allResposta.length > respostaLength) {
              for (let i = respostaLength; i < allResposta.length; i++) {
                const iconContainer = document.createElement('div');
                now = new Date
                const checkIcon = `<span class="hora2">`+ (now.getHours()<10?'0':'') + now.getHours() +`:`+ (now.getMinutes()<10?'0':'') + now.getMinutes() +`</span><svg id="checkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.626 24.684" style="position: absolute;bottom: 2px;right: 5px;" height="20" width="18">
                  <g id="Grupo_1" data-name="Grupo 1" transform="translate(-708.9 -601.383)">
                    <path id="Caminho_6" data-name="Caminho 6" d="M728.035,623.468l1.382,1.482,17.929-20.334" transform="translate(-1.937 -1.117)" fill="none" stroke="#29afdf" stroke-linecap="round" stroke-width="3"></path>
                    <path id="Caminho_7" data-name="Caminho 7" d="M712.017,616.07l7.088,8.039,17.757-20.14" transform="translate(-1 -0.469)" fill="none" stroke="#29afdf" stroke-linecap="round" stroke-width="3"></path>
                  </g>
                </svg>`;
                iconContainer.innerHTML = checkIcon;
                
                const currentMsg = allResposta[i];
                currentMsg.append(iconContainer);
              }
              
              respostaLength = allResposta.length; 
            
          }
    
    }, 400)
    
    var cssId = 'myCss';  
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://produto.comunidadeecom.com/chatecom_css_tema_whatsapp_android_desktop.css?v=3';
        link.media = 'all';
        head.appendChild(link);
    }
    }
    
    // FunÃ§Ã£o para carregar o script do WaveSurfer dinamicamente
    function loadWaveSurferScript(callback) {
        const script = document.createElement('script');
        script.src = 'https://produto.comunidadeecom.com/wavesurfer.min.js';
        script.onload = callback;
        document.head.appendChild(script);
    }
    
    // FunÃ§Ã£o para aplicar CSS no Shadow DOM do typebot-standard
    function injectCSSIntoTypebotShadow() {
        // Encontra o elemento typebot-standard
        const typebotElement = document.querySelector('typebot-standard');
    
        // Verifica se o elemento foi encontrado e se possui um shadowRoot
        if (typebotElement && typebotElement.shadowRoot) {
            const shadowRoot = typebotElement.shadowRoot;
    
            // Cria o elemento <style> com o CSS desejado
            const style = document.createElement('style');
            style.innerHTML = `
    
            * {
                margin: 0;
                padding: 0;
            }
    
            .hero {
                width: 100%;
                height: 100vh;
                background: #a9a9a9;
                display: flex;
                align-items: center;
                justify-content: center;
            }
    
    
            .music {
                width: 90%;
                max-width: 900px;
                padding: 30px;
                box-shadow: 0 0 20px rgb(0,0,0, 0.2);
                background-color: #fff;
            }
    
            .track {
                display: flex;
                align-items: center;
                margin: 10px 10px 20px 10px;
                position: relative;
                width: 260px;
            }
    
            .track .controls {
                width: 20px;
            }
    
            .track .controls {
                margin-right: 10px;
                margin-top: 6px;
                cursor: pointer;
            }
    
            .track .controls button {
                background: transparent;
                border: 0;
                cursor: pointer;    
            }
    
            .track .controls button svg {
                display: none;
                pointer-events: none;
            }
    
            .track .controls button[data-state="play"] svg.pause {
                display: block;
            }
    
            .track .controls button[data-state="pause"] svg.play {
                display: block;
            }
    
            .track .controls svg {
                fill: #a9a9a9;
            }
    
            .track .timeline {
                flex: 1;
                width: 100%;
                margin-left: 10px;
                margin-right: 10px;
            }
    
            .track .icon {
                position: relative; 
                margin-left: 10px;   
            }
    
            .track .icon svg {
                position: absolute;
                bottom: 0;
                left: -15px;
                pointer-events: none;
                user-select: none;
            }
    
            .track .avatar {
                width: 50px;
                height: 50px;
                object-fit: cover;
                border-radius: 50%;
            } 
            .tempo {
                position: absolute;
                float: left;
                left: 42px;
                top: 45px;
                font-size: 13px;
                z-index: 995;
                color: grey;
                animation-name: mostrar;
                animation-duration: 4s;
            }
            `;
    
            // Adiciona o estilo ao shadowRoot
            shadowRoot.appendChild(style);
            console.log('CSS adicionado ao Shadow DOM do typebot-standard.');
        } else {
            console.error('Elemento typebot-standard ou shadowRoot nÃ£o encontrado.');
        }
    }
    
    // Chame a funÃ§Ã£o para injetar o CSS no shadowRoot do typebot-standard
    injectCSSIntoTypebotShadow();
    
    // FunÃ§Ã£o para observar a adiÃ§Ã£o de novos elementos <audio> no Shadow DOM e customizar existentes
    function observeShadowDOMForAudio() {
        const typebotElement = document.querySelector('typebot-standard');
    
        if (typebotElement && typebotElement.shadowRoot) {
            console.log('Shadow DOM detectado. Iniciando observaÃ§Ã£o dentro do Shadow DOM.');
    
            const shadowRoot = typebotElement.shadowRoot;
    
            const existingAudios = shadowRoot.querySelectorAll('audio');
            if (existingAudios.length > 0) {
                existingAudios.forEach(audio => {
                    console.log('Ãudio jÃ¡ existente encontrado no Shadow DOM:', audio);
                    createPlayer(audio, shadowRoot);
                });
            } else {
                console.log('Nenhum Ã¡udio existente encontrado no Shadow DOM.');
            }
    
            const config = { childList: true, subtree: true, attributes: true, characterData: true };
    
            const callback = function (mutationsList) {
                mutationsList.forEach(mutation => {
                    if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach(node => {
                            if (node.tagName === 'AUDIO') {
                                console.log('Novo elemento de Ã¡udio detectado no Shadow DOM:', node);
                                createPlayer(node, shadowRoot);
                            }
                        });
                    } else if (mutation.type === 'attributes' || mutation.type === 'characterData') {
                        if (mutation.target.tagName === 'AUDIO') {
                            console.log('ModificaÃ§Ã£o detectada em elemento de Ã¡udio no Shadow DOM:', mutation.target);
                            createPlayer(mutation.target, shadowRoot);
                        }
                    }
                });
            };
    
            const observer = new MutationObserver(callback);
            observer.observe(shadowRoot, config);
    
            console.log('Observando adiÃ§Ãµes e modificaÃ§Ãµes de elementos <audio> no Shadow DOM...');
        } else {
            console.log('Elemento <typebot-standard> ou Shadow DOM nÃ£o encontrado.');
        }
    }
    
    // FunÃ§Ã£o que customiza o player usando o WaveSurfer
    function createPlayer(audioElement, shadowRoot, ) {
        // Verifica se o player jÃ¡ existe para o Ã¡udio
        if (audioElement.dataset.hasPlayer) return;
    
        const container = document.createElement('div');
        container.classList.add('player');
        container.classList.add('z-20');
        const waveformId = `waveform-${Math.random().toString(36).substr(2, 9)}`;
        const controlId = `control-${Math.random().toString(36).substr(2, 9)}`;
        const timeId = `time-${Math.random().toString(36).substr(2, 9)}`;
        const durationId = `duration-${Math.random().toString(36).substr(2, 9)}`;
    
                container.innerHTML = `
                    <div class="track">
                        <div class="controls">
                            <button id="${controlId}" data-state="play">
                                <svg viewBox="0 0 34 34" height="34" width="34" preserveAspectRatio="xMidYMid meet" class="play" version="1.1" x="0px" y="0px" enable-background="new 0 0 34 34" xml:space="preserve"><path fill="#858a8d" d="M8.5,8.7c0-1.7,1.2-2.4,2.6-1.5l14.4,8.3c1.4,0.8,1.4,2.2,0,3l-14.4,8.3 c-1.4,0.8-2.6,0.2-2.6-1.5V8.7z"></path></svg>
                                <svg viewBox="0 0 34 34" height="34" width="34" preserveAspectRatio="xMidYMid meet" class="pause" version="1.1" x="0px" y="0px" enable-background="new 0 0 34 34" xml:space="preserve"><path fill="#858a8d" d="M9.2,25c0,0.5,0.4,1,0.9,1h3.6c0.5,0,0.9-0.4,0.9-1V9c0-0.5-0.4-0.9-0.9-0.9h-3.6 C9.7,8,9.2,8.4,9.2,9V25z M20.2,8c-0.5,0-1,0.4-1,0.9V25c0,0.5,0.4,1,1,1h3.6c0.5,0,1-0.4,1-1V9c0-0.5-0.4-0.9-1-0.9 C23.8,8,20.2,8,20.2,8z"></path></svg>
                                <div class="tempo">
                                    <span id="${timeId}" style="display:none;">0:00</span>
                                    <span id="${durationId}">0:00</span>
                                </div>
                            </button>
                        </div>
                        <div class="timeline" id="${waveformId}"></div>
                        <div class="icon">
                            <svg width="30px" height="30px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                                <g>
                                    <path fill="#48d44f" d="M75.46,49.16h0.003v-0.098c0-0.006,0-0.013,0-0.019h0V34.787c0-2.088-1.693-3.781-3.782-3.781   c-2.088,0-3.783,1.693-3.783,3.781v14.256c0,9.885-8.013,17.897-17.898,17.897s-17.898-8.013-17.898-17.897h0V34.787   c0-2.088-1.693-3.781-3.782-3.781c-2.088,0-3.783,1.693-3.783,3.781V49.16h0.003c0.058,12.724,9.447,23.243,21.678,25.065v5.438   H32.839v0.003c-2.074,0.018-3.75,1.701-3.75,3.779c0,2.078,1.676,3.761,3.75,3.779v0.003h34.29l0,0   c2.089,0,3.782-1.693,3.782-3.782c0-2.089-1.693-3.782-3.782-3.782l0,0H53.782v-5.438C66.013,72.403,75.403,61.884,75.46,49.16z"></path>
                                    <path fill="#48d44f" d="M37.186,48.941c0,7.088,5.745,12.833,12.833,12.833c7.087,0,12.831-5.746,12.831-12.833   c0-0.096-0.012-0.188-0.014-0.283h0.053V25.322h-0.053c-0.153-6.955-5.826-12.549-12.817-12.549   c-6.992,0-12.666,5.594-12.819,12.549h-0.052v23.336h0.052C37.199,48.753,37.186,48.845,37.186,48.941z"></path>
                                </g>
                            </svg>
                            <img class="avatar" src="`+var_avatar+`" alt="`+var_nome+`">
                        </div>
                    </div>
                `;
    
        // Insere o player dentro do "typebot-host-bubble" correspondente ao Ã¡udio
        let hostBubble = audioElement.closest('.typebot-host-bubble');
        if (hostBubble) {
            hostBubble.insertBefore(container, hostBubble.firstChild); // Adiciona ao "typebot-host-bubble"
        } else {
            console.error('Elemento .typebot-host-bubble correspondente ao Ã¡udio nÃ£o encontrado.');
        }
    
        const playPauseBtn = container.querySelector(`#${controlId}`);
        if (!playPauseBtn) {
            console.error('BotÃ£o de controle nÃ£o encontrado no Shadow DOM.');
            return;
        }
    
        let wavesurfer;
        let playState = false;
    
        // Inicializa o WaveSurfer dentro do Shadow DOM
        wavesurfer = WaveSurfer.create({
            container: container.querySelector(`#${waveformId}`),
            waveColor: "#ddd",
            progressColor: "#25D366",
            height: 25,
            barWidth: 2,
            cursorWidth: 15,
            backend: "MediaElement",
            autoplay: false,
            responsive: true,
            hideScrollbar: true
        });
    
        // Carrega o Ã¡udio apenas uma vez
        wavesurfer.load(audioElement.src);
    
        const formatTime = (seconds) => {
            const minutes = Math.floor(seconds / 60);
            const secondsRemainder = Math.round(seconds) % 60;
            const paddedSeconds = `0${secondsRemainder}`.slice(-2);
            return `${minutes}:${paddedSeconds}`;
        };
    
        const timeEl = container.querySelector(`#${timeId}`);
        const durationEl = container.querySelector(`#${durationId}`);
    
        // Injetar CSS no Shadow DOM do waveform
        const style = document.createElement('style');
        style.innerHTML = `
            #${waveformId} ::part(cursor) {
                background-color: #25d366;
                width: 15px ;
                height: 15px;
                border-radius: 50%;
                top: 50%;
                transform: translateY(-50%);
            }
            .track::after {
                position: absolute;
                content: "";
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0px 10px 10px 0;
                border-color: transparent #fff transparent transparent;
                top: 0;
                left: -10px;
                display: none;
            }
        `;
        container.querySelector(`#${waveformId}`).appendChild(style);
    
        wavesurfer.on('ready', () => {
            // Ãudio estÃ¡ pronto, agora podemos iniciar do comeÃ§o
            wavesurfer.seekTo(0);
            durationEl.textContent = formatTime(wavesurfer.getDuration());
    
            // Certifique-se de que o estado do botÃ£o seja "play" quando o Ã¡udio estiver pronto
            playState = false;
            playPauseBtn.dataset.state = 'play';
            toggleControls(); // Atualiza os Ã­cones conforme o estado atual
        });
    
        wavesurfer.on('audioprocess', () => {
            timeEl.textContent = formatTime(wavesurfer.getCurrentTime());
        });
    
        wavesurfer.on('finish', () => {
            wavesurfer.seekTo(0);
            playState = false;
            playPauseBtn.dataset.state = 'play';
            toggleControls();
            timeEl.style.display = 'none';
            durationEl.style.display = 'block';
        });
    
        playPauseBtn.addEventListener('click', () => {
            if (!playState) {
                const playPromise = wavesurfer.play();
    
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        // A reproduÃ§Ã£o comeÃ§ou corretamente
                        playPauseBtn.dataset.state = 'pause';
                        // Atualiza o estado antes de alternar os controles
                        playState = true;
                        durationEl.style.display = 'none';
                        timeEl.style.display = 'block';
                        toggleControls();
                    }).catch(error => {
                        // Erro durante a reproduÃ§Ã£o (auto-play bloqueado, por exemplo)
                        console.error('Erro ao reproduzir o Ã¡udio:', error);
                    });
                }
            } else {
                wavesurfer.pause();
                playPauseBtn.dataset.state = 'play';
                // Atualiza o estado antes de alternar os controles
                playState = false;
                timeEl.style.display = 'none';
                durationEl.style.display = 'block';
                toggleControls();
            }
            console.log('clicou: ', playState); // Atualizado para refletir o novo estado
        });
    
        function toggleControls() {
            const playIcon = container.querySelector('.play');
            const pauseIcon = container.querySelector('.pause');
    
            if (playState) {
                // Quando o estado Ã© 'play', exibe o Ã­cone de pause e oculta o Ã­cone de play
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'block';
            } else {
                // Quando o estado Ã© 'pause', exibe o Ã­cone de play e oculta o Ã­cone de pause
                playIcon.style.display = 'block';
                pauseIcon.style.display = 'none';
            }
        }
    
        // Marca que o player foi criado para esse Ã¡udio
        audioElement.dataset.hasPlayer = true;
        audioElement.remove();
    }
    
    // Inicia o processo carregando o script do WaveSurfer dinamicamente
    loadWaveSurferScript(() => {
        console.log('WaveSurfer script carregado. Iniciando observaÃ§Ã£o de Ã¡udio no Shadow DOM...');
        observeShadowDOMForAudio();
    });
    
    }