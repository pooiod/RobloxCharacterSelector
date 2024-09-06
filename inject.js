if (window.location.search.includes("RobloxCharacterSelector")) {
    document.body.style.opacity = 0; // hide while waiting for script load
    document.title = "Pooiod7's Roblox character selector";

    setTimeout(() => {
        try {
            document.body.style.opacity = 1;
            document.body.style.overflow = 'hidden'; // hide scrollbars
            document.title = "Roblox character selector";
    
            // open character selection
            document.querySelector('#characters-dropdown > span:nth-child(1)').click();
            document.querySelector('li.text:nth-child(2)').click();
    
            // delete elements not related to selection
            const selectors = [
                '.avatar-editor-header1',
                '.left-wrapper',
                '#navigation',
                '.avatar-editor-header',
                '.left-wrapper-placeholder',
                'div.tab-content:nth-child(2) > div:nth-child(2)',
                '.right-wrapper-placeholder',
                '.btn-float-right',
                '#navigation-container',
                '.alert-system-feedback',
                'div.alert-system-feedback:nth-child(2)',
                'div.alert-system-feedback:nth-child(3)',
                'div.alert-system-feedback:nth-child(4)',
                '#chat-container',
                '#footer-container'
            ];
            selectors.forEach(selector => {
                document.querySelectorAll(selector).forEach(element => element.remove());
            });
    
            // hide character config buttons (and backup timers for slow connections)
            setTimeout(() => {
                document.querySelectorAll('.icon-settings-16x16').forEach(el => el.style.display = 'none');
            }, 500);
            setTimeout(() => {
                document.querySelectorAll('.icon-settings-16x16').forEach(el => el.style.display = 'none');
            }, 1000);
            setTimeout(() => {
                document.querySelectorAll('.icon-settings-16x16').forEach(el => el.style.display = 'none');
            }, 2000);
            setTimeout(() => {
                document.querySelectorAll('.icon-settings-16x16').forEach(el => el.style.display = 'none');
            }, 5000);
    
            // close window on character change
            document.addEventListener('click', function(event) {
                if (event.target.classList[0] == "text-overflow" || event.target.classList[0] == "item-card-thumb-container") {
                    setTimeout(function() {
                        const submitButton = document.getElementById('submit');
                        if (submitButton) {
                            submitButton.click();
                            setTimeout(function() {
                                window.close();
                            }, 1000);
                        } else {
                            document.body.style.opacity = 0;
                            setTimeout(function() {
                                window.close();
                            }, 1000);
                        }
                    }, 1000);
                } else {
                    console.log(event.target.classList);
                }
            });
    
            // make character selector fill screen
            document.getElementById('avatar-web-app').style.cssText = 'width: calc(100vw + 275px); height: 100vh; position: fixed; top: 0px; left: 0; overflow: auto;';
        } catch(err) {
            var body = document.body;
            body.innerHTML = '';
            body.style.opacity = 1;
            
            var container = document.createElement('div');
            container.style.position = 'fixed';
            container.style.top = '50%';
            container.style.left = '50%';
            container.style.transform = 'translate(-50%, -50%)';
            container.style.textAlign = 'center';
            container.style.fontFamily = 'Arial, sans-serif';
            container.style.color = '#333';
            
            var title = document.createElement('h1');
            title.textContent = 'Error';
            title.style.fontSize = '4rem';
            title.style.margin = '0';
            
            var message = document.createElement('p');
            message.textContent = 'There was an error while loading your roblox characters';
            message.style.fontSize = '1.5rem';
            message.style.margin = '1rem 0';
            
            var errorIcon = document.createElement('div');
            errorIcon.style.width = '80px';
            errorIcon.style.height = '80px';
            errorIcon.style.margin = '0 auto 1.5rem';
            errorIcon.style.backgroundColor = '#ff4d4d';
            errorIcon.style.borderRadius = '50%';
            errorIcon.style.display = 'flex';
            errorIcon.style.alignItems = 'center';
            errorIcon.style.justifyContent = 'center';
            
            var exclamation = document.createElement('div');
            exclamation.textContent = '!';
            exclamation.style.color = '#fff';
            exclamation.style.fontSize = '3rem';
            exclamation.style.fontWeight = 'bold';
            
            errorIcon.appendChild(exclamation);
            container.appendChild(errorIcon);
            container.appendChild(title);
            container.appendChild(message);
            
            body.style.backgroundColor = '#f9f9f9';
            body.appendChild(container);
            
            function updateVisibility() {
                if (window.innerHeight < 210) {
                    title.style.display = 'none';
                } else {
                    title.style.display = 'block';
                }
                
                if (window.innerHeight < 320) {
                    errorIcon.style.display = 'none';
                } else {
                    errorIcon.style.display = 'flex';
                }
            }
            
            window.addEventListener('resize', updateVisibility);
            updateVisibility();            
        }
    }, 1000);
}
