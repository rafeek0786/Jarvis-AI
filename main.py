import speech_recognition as sr
import pyttsx3
import webbrowser
import datetime
import os

engine = pyttsx3.init()

voices = engine.getProperty('voices')

engine.setProperty('voice', voices[0].id)

engine.setProperty('rate', 170)

def speak(text):

    print("Jarvis:", text)

    engine.say(text)

    engine.runAndWait()

def listen():

    recognizer = sr.Recognizer()

    with sr.Microphone() as source:

        print("Listening...")

        recognizer.adjust_for_ambient_noise(source)

        audio = recognizer.listen(source)

    try:

        command = recognizer.recognize_google(audio)

        print("You:", command)

        return command.lower()

    except:

        return ""

speak("Hello sir. Jarvis online.")

while True:

    command = listen()

    if "youtube" in command:

        speak("Opening YouTube")

        webbrowser.open("https://youtube.com")

    elif "google" in command:

        speak("Opening Google")

        webbrowser.open("https://google.com")

    elif "time" in command:

        current = datetime.datetime.now().strftime("%I:%M %p")

        speak(f"The time is {current}")

    elif "open chrome" in command:

        speak("Opening Chrome")

        os.system("start chrome")

    elif "hello" in command:

        speak("Hello sir. How can I help you today")

    elif "stop" in command:

        speak("Goodbye sir")

        break

    elif command != "":

        speak("I heard you")
