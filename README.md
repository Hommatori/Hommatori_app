# Hommatori_app

    Pikaohje

    Seuraavat osoitteet vaihtamalla json/BaseUrl tiedostoon voi vaihtaa softan osoitteet palvelimelle
    Azure palvelin: "https://Serverhommatori.azurewebsites.net"
    Paikallinen: "http://localhost:8080" (jos puhelin tekee yhteysvirheen joutuu localhostin korvaamaan tietokonen ip-osoitteella)

    Softa on testattu paremmin iphone 13 puhelimella joten androidissa voi olla jotain kummallisuuksia.

    Esittely

    Hommatori_app https://github.com/Hommatori/Hommatori_app.git
    Hommatori_server https://github.com/Hommatori/Hommatori_server.git

    Hommatori puhelin äppi on tarkoitettu ns.naapuriavun antamiseen ja tarjoamiseen, sovellus on on yhteydessä tietokantaan palvelimen välityksellä. Sekä palvelin että tietokanta pyörivät azuressa.

    Sovelluksella pystyy lisäämään käyttäjätunnuksen, muokkaamaan ja poistamaan sen. Poistaminen poistaa myös kaikki käyttäjän ilmoitukset.

    Omien ilmoitusten selaaminen, lisääminen, muokkaaminen ja poistaminen onnistuu.
    Ilmoituksia voi hakea tekstin, paikkakunnan tai tyypin perusteella, lisäksi ilmoitukset voi järjestellä haluamaansa järjestykseen.
    Kuvan lisäys ei ei tässävaiheessa toimi, mutta sovellus on käytettävissä.

    Sovellus on tehty käyttäyn expogo sovellusta ja koodauskielenä on käytetty react nativea. Sovelluksen kirjautumisen salaus on tehty webtoken menetelmällä jonka ansiosta vain varmennetut käskyt menevät läpi.
