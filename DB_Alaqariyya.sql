-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 16 juil. 2024 à 10:34
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `alaqariyya`
--

-- --------------------------------------------------------

--
-- Structure de la table `contact_submissions`
--

CREATE TABLE `contact_submissions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `contact_submissions`
--

INSERT INTO `contact_submissions` (`id`, `name`, `email`, `phone`, `subject`, `message`, `created_at`) VALUES
(9, 'sa9sa9', 'sa9sa9@gmail.com', '0658941326', 'dd', 'd', '2024-07-01 17:07:59'),
(14, 'zaki', 'zakiyaya@gmail.com', '0658941326', 'شراء', 'ee', '2024-07-15 10:55:36');

-- --------------------------------------------------------

--
-- Structure de la table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title_ar` varchar(255) NOT NULL,
  `title_en` varchar(255) DEFAULT NULL,
  `title_fr` varchar(255) DEFAULT NULL,
  `title_es` varchar(255) DEFAULT NULL,
  `title_de` varchar(255) DEFAULT NULL,
  `title_nl` varchar(255) DEFAULT NULL,
  `content_ar` text NOT NULL,
  `content_en` text DEFAULT NULL,
  `content_fr` text DEFAULT NULL,
  `content_es` text DEFAULT NULL,
  `content_de` text DEFAULT NULL,
  `content_nl` text DEFAULT NULL,
  `image_url` varchar(255) NOT NULL,
  `published_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `news`
--

INSERT INTO `news` (`id`, `title_ar`, `title_en`, `title_fr`, `title_es`, `title_de`, `title_nl`, `content_ar`, `content_en`, `content_fr`, `content_es`, `content_de`, `content_nl`, `image_url`, `published_at`) VALUES
(1, 'عرض محدود', 'limited offer', 'offre limitée', 'oferta limitada', 'Begrenztes Angebot', 'beperkt aanbod', 'عرض محدود سارعو للحجز', 'A limited offer, hurry to reserve', 'Une offre limitée, dépêchez-vous de réserver', 'Una oferta limitada, apresurarse para reservar', 'Ein begrenztes Angebot, beeilen Sie sich, um zu reservieren', 'Een beperkt aanbod, haast je om te reserveren', '1721118647309.jpg', '2024-07-16 08:30:52'),
(2, 'سلالم', 'stairs', 'escaliers', 'escaleras', 'Treppe', 'trap', 'سلام', 'Hello', 'Bonjour', 'Hola', 'Hallo', 'Hallo', '1721118685864.jpg', '2024-07-16 08:31:26');

-- --------------------------------------------------------

--
-- Structure de la table `properties`
--

CREATE TABLE `properties` (
  `property_id` int(11) NOT NULL,
  `title_ar` varchar(255) NOT NULL,
  `title_en` varchar(255) DEFAULT NULL,
  `title_es` varchar(255) DEFAULT NULL,
  `title_fr` varchar(255) DEFAULT NULL,
  `title_de` varchar(255) DEFAULT NULL,
  `title_nl` varchar(255) DEFAULT NULL,
  `description_ar` text NOT NULL,
  `description_en` text DEFAULT NULL,
  `description_es` text DEFAULT NULL,
  `description_fr` text DEFAULT NULL,
  `description_de` text DEFAULT NULL,
  `description_nl` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `location` varchar(255) NOT NULL,
  `bedrooms` int(11) DEFAULT NULL,
  `salon` int(11) DEFAULT NULL,
  `bathrooms` int(11) DEFAULT NULL,
  `area` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `available` tinyint(1) DEFAULT 1,
  `availability_date` date DEFAULT NULL,
  `floors` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `properties`
--

INSERT INTO `properties` (`property_id`, `title_ar`, `title_en`, `title_es`, `title_fr`, `title_de`, `title_nl`, `description_ar`, `description_en`, `description_es`, `description_fr`, `description_de`, `description_nl`, `price`, `location`, `bedrooms`, `salon`, `bathrooms`, `area`, `type`, `available`, `availability_date`, `floors`) VALUES
(1, 'دار للبيع', 'House for sale', 'Casa en venta', 'maison à vendre', 'Haus zu verkaufen', 'huis te koop', 'دار للبيع جميلة', 'Beautiful for sale house', 'Hermosa casa de venta', 'Belle maison à vendre', 'Schönes zum Verkaufshaus', 'Mooi te koop huis', 1.00, 'nador', 1, 1, 1, 1, 'rent', 1, '0000-00-00', 0),
(2, 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 1.00, 'nador', 1, 1, 1, 1, 'rent', 1, '0000-00-00', 0),
(3, 'قطعة ارضية', 'piece of land', 'pedazo de tierra', 'parcelle de terre', 'Stück Land', 'stuk land', 'بني انصار', 'Bani Ansar', 'Bani Ansar', 'Bani Ansar', 'Bani Ansar', 'Bani Ansar', 1.00, 'nador', 1, 1, 1, 1, 'rent', 0, '2024-07-31', 0);

-- --------------------------------------------------------

--
-- Structure de la table `property_images`
--

CREATE TABLE `property_images` (
  `image_id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `image_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `property_images`
--

INSERT INTO `property_images` (`image_id`, `property_id`, `image_url`) VALUES
(1, 1, '1721115244234.jpg'),
(2, 2, '1721116231628.jpg'),
(3, 3, '1721116747900.jpg'),
(4, 3, '1721116747945.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `created_at`) VALUES
(1, 'alaqariyya@gmail.com', '$2a$10$O16UNpO8FdP6DVQGp37E4u4MxAgo9CxsteHYOg3qqQYRskxFPTwb2', '2024-06-06 09:20:10');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `contact_submissions`
--
ALTER TABLE `contact_submissions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`property_id`);

--
-- Index pour la table `property_images`
--
ALTER TABLE `property_images`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `property_id` (`property_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `contact_submissions`
--
ALTER TABLE `contact_submissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `properties`
--
ALTER TABLE `properties`
  MODIFY `property_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `property_images`
--
ALTER TABLE `property_images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `property_images`
--
ALTER TABLE `property_images`
  ADD CONSTRAINT `property_images_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties` (`property_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
