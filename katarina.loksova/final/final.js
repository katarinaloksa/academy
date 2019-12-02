$.getJSON("http://api.openweathermap.org/data/2.5/weather?&lat=48.9984&lon=21.2339&units=metric&APPID=8641355d0bdfa52a49f4e9a42560adf0",spracuj);



             function spracuj(udaje){

                const pocasieText = `

                <div class="container">

                    <div class="row">

                        <h4>${udaje.name}</h4>  

                        <ul>

                            <li>Teplota: ${udaje.main.temp} Celzia</li>

                        </ul>

                    </div>

                </div>

               `;

               $("#pocasie").html(pocasieText);

               }