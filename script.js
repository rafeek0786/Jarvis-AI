const bars = document.querySelectorAll(".bar");

function animateBars() {

    bars.forEach((bar) => {

        const randomHeight = Math.floor(Math.random() * 120) + 20;

        bar.style.height = `${randomHeight}px`;

    });

}

setInterval(animateBars, 180);

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {

    const recognition = new SpeechRecognition();

    recognition.continuous = true;

    recognition.lang = "en-US";

    recognition.start();

    recognition.onstart = () => {

        console.log("Jarvis Listening...");

    };

    recognition.onresult = (event) => {

        const transcript =
        event.results[event.results.length - 1][0].transcript.toLowerCase();

        console.log("You Said:", transcript);

        speak(`You said ${transcript}`);

        if (transcript.includes("youtube")) {

            speak("Opening YouTube");

            window.open("https://youtube.com");

        }

        else if (transcript.includes("google")) {

            speak("Opening Google");

            window.open("https://google.com");

        }

        else if (transcript.includes("time")) {

            const time = new Date().toLocaleTimeString();

            speak(`The time is ${time}`);

        }

        else if (transcript.includes("hello")) {

            speak("Hello sir. Jarvis online and ready.");

        }

    };

}

function speak(text) {

    const speech = new SpeechSynthesisUtterance(text);

    speech.rate = 1;

    speech.pitch = 1;

    speech.volume = 1;

    window.speechSynthesis.speak(speech);

}
