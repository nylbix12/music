# Utiliser l'image officielle PHP 8.3 avec Apache
FROM php:8.3-apache

# Installer les extensions PHP nécessaires
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libzip-dev \
    zip \
    git \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd zip pdo pdo_mysql

# Activer le module mod_rewrite d'Apache pour les URL réécrites
RUN a2enmod rewrite

# gestion des headers pour le CORS
RUN a2enmod headers

# Copier le code source dans le dossier /var/www/html
COPY . /var/www/html/

# Définir le répertoire de travail pour Apache
WORKDIR /var/www/html/

# Exposer le port 80 pour Apache
EXPOSE 80

# Démarrer Apache en mode non détaché
CMD ["apache2-foreground"]
