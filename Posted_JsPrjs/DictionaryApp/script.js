const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let inpWord = document.getElementById("input-word").value;

  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      result.innerHTML = ` <div class="word">
                                <h3>${inpWord}</h3>
                                <button onclick = "playSound()">
                                    <i class="ri-volume-up-fill"></i>
                                </button>
                            </div>
                            
                            <div class="details">
                                <p>${data[0].meanings[0].partOfSpeech}</p>
                            </div>
                            
                            <p class="word-meaning">
                                ${data[0].meanings[0].definitions[0].definition}
                            </p>
                            
                            `;

      sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
    })
    .catch(() => {
      result.innerHTML = `<h3 class="error">Couldn't find the word</h3>`;
    });
});

function playSound() {
  sound.play();
}
