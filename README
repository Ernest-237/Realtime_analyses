# Analyse Musicale en Temps Réel

Ce projet permet d'analyser des fichiers audio ou de capturer et analyser des sons en temps réel à partir d'un microphone, pour identifier les notes musicales présentes. L'application est développée avec Flask pour le backend, utilisant `sounddevice` pour la capture audio et `librosa` pour l'analyse musicale.

## Fonctionnalités

- **Analyse de fichiers audio** : Téléchargez des fichiers audio (WAV ou MP3) et obtenez les notes musicales analysées.
- **Analyse en temps réel** : Capturez l'audio en direct à partir du microphone et analysez les notes musicales en temps réel.
- **Interface utilisateur moderne** : Interface web simple et intuitive pour l'interaction.

## Prérequis

- Python 3.x
- Flask
- SoundDevice
- NumPy
- Librosa

Assurez-vous d'avoir un microphone fonctionnel pour la capture audio en temps réel.

## Installation

1. Clonez le dépôt GitHub :
    ```bash
    git clone https://github.com/votre-utilisateur/analyse-musicale-temps-reel.git
    cd analyse-musicale-temps-reel
    ```

2. Créez et activez un environnement virtuel Python :
    ```bash
    python -m venv env
    source env/bin/activate   # Sur Windows, utilisez `env\Scripts\activate`
    ```

3. Installez les dépendances nécessaires :
    ```bash
    pip install -r requirements.txt
    ```

## Démarrage de l'Application

1. **Lancez le serveur Flask** :
    ```bash
    python app.py
    ```

2. **Accédez à l'application dans votre navigateur** en ouvrant `http://127.0.0.1:5000`.

3. **Utilisez les fonctionnalités d'analyse** :
    - **Analyse de fichiers** : Téléchargez un fichier audio en utilisant le formulaire sur la page d'accueil et cliquez sur "Analyser le fichier".
    - **Analyse en temps réel** : Cliquez sur "Analyse en temps réel" pour démarrer l'enregistrement audio pendant 8 secondes. Les notes détectées s'afficheront après l'analyse.

## Structure du Projet

- `app.py` : Le point d'entrée de l'application Flask, contenant les routes pour l'analyse de fichiers et l'analyse en temps réel.
- `audio_analysis/` : Dossier contenant les modules pour l'analyse audio.
  - `analyze_file.py` : Contient la logique pour analyser les fichiers audio téléchargés.
  - `realtime_analysis.py` : Contient la logique pour capturer l'audio en temps réel et analyser les notes.
- `templates/` : Contient les fichiers HTML pour l'interface utilisateur.
- `static/` : Contient les fichiers CSS et JavaScript pour le frontend.
- `requirements.txt` : Liste des dépendances Python nécessaires au projet.

## Développement

### Fonctionnalités

- **Analyse de fichiers** : Implémentez dans `analyze_file.py` l'analyse des fichiers audio en utilisant `librosa` pour identifier les notes.
- **Analyse en temps réel** : Capture et analyse audio en utilisant `sounddevice` et `librosa` dans `realtime_analysis.py`.

### Lancement en Développement

Pour lancer l'application en mode développement avec rechargement automatique :
```bash
FLASK_ENV=development flask run
```

## Déploiement

Pour déployer l'application, assurez-vous de configurer un environnement de production sécurisé, par exemple en utilisant un serveur comme Gunicorn pour servir l'application Flask.

## Contributions

Les contributions sont les bienvenues. Pour des changements majeurs, veuillez ouvrir d'abord une issue pour discuter de ce que vous aimeriez changer.

Merci de vous assurer de mettre à jour les tests au besoin.

## Auteurs

- **Votre Nom** - Développeur principal

## License

Ce projet est sous licence Music_school_developement 
