((d) => {

    const $form = d.querySelector("[data-form]");
    const $templateThanyouState = d.querySelector("[data-template]");
    const $ThankyouStateContent = $templateThanyouState.content.cloneNode(true);

    const outputHTML = (numberValue) => {

        $form.innerHTML = "";
        $ThankyouStateContent.querySelector(".rating__thankyou-phrase").textContent = `
        You selected ${numberValue} out of 5`;
        $form.appendChild($ThankyouStateContent);

        setTimeout(() => {

            $form.insertAdjacentHTML("afterbegin", `

                <a class="refresh__btn" href="#" data-reload-btn >
                    <img class="refresh__btn-img"
                    src="./images/update.svg" alt="refresh" >
                </a>

            `);

            $form.querySelector("[data-reload-btn]").addEventListener("click", e => {
                e.preventDefault();
                window.location.reload();
            });

        }, 5000);

    }

    $form.addEventListener("submit", e => {
        e.preventDefault();
        const $radioButtons = d.querySelectorAll('input[name="rating"]');
        $radioButtons.forEach(radio => {
            if(radio.checked) {
                let numberValue = radio.value;
                $form.innerHTML = `
                    <div class="rating__thankyou-container">
                        <h2 class="rating__thankyou-title">Sending...</h2>
                        <img data-loader src="https://samherbert.net/svg-loaders/svg-loaders/tail-spin.svg" alt="loader">
                    </div>
                    `;
                setTimeout(() => {
                    outputHTML(numberValue);
                }, 3000);
                return
            }
        });
    });

    

    
    

})(document);