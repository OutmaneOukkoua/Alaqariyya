-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 27 juil. 2024 à 11:55
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
  `location_ar` varchar(255) NOT NULL,
  `location_en` varchar(255) DEFAULT NULL,
  `location_es` varchar(255) DEFAULT NULL,
  `location_fr` varchar(255) DEFAULT NULL,
  `location_de` varchar(255) DEFAULT NULL,
  `location_nl` varchar(255) DEFAULT NULL,
  `bedrooms` int(11) DEFAULT NULL,
  `salon` int(11) DEFAULT NULL,
  `bathrooms` int(11) DEFAULT NULL,
  `area` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `available` tinyint(1) DEFAULT 1,
  `availability_date` date DEFAULT NULL,
  `floors` int(11) DEFAULT NULL,
  `kitchen` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `properties`
--

INSERT INTO `properties` (`property_id`, `title_ar`, `title_en`, `title_es`, `title_fr`, `title_de`, `title_nl`, `description_ar`, `description_en`, `description_es`, `description_fr`, `description_de`, `description_nl`, `price`, `location_ar`, `location_en`, `location_es`, `location_fr`, `location_de`, `location_nl`, `bedrooms`, `salon`, `bathrooms`, `area`, `type`, `available`, `availability_date`, `floors`, `kitchen`) VALUES
(29, 'شقة1', 'Apartment 1', 'Apartamento 1', 'Appartement 1', 'Wohnung 1', 'Appartement 1', 'شقة1', 'Apartment 1', 'Apartamento 1', 'Appartement 1', 'Wohnung 1', 'Appartement 1', 44.00, 'بني انصار,حي عبد المومن', 'Bani Ansar, Abdul Mumin neighborhood', 'Bani Ansar, barrio de Abdul Mumin', 'Bani Ansar, quartier Abdul Mumin', 'Bani Ansar, Abdul Mumin Viertel', 'Bani Ansar, Abdul Mumin -buurt', 7, 2, 2, 286, 'rent', 1, '0000-00-00', 0, 2),
(30, 'فيلا للبيع', 'Villa for sale', 'Villa en venta', 'Villa à vendre', 'Villa zum Verkauf', 'Villa te koop', 'فيلا للبيع', 'Villa for sale', 'Villa en venta', 'Villa à vendre', 'Villa zum Verkauf', 'Villa te koop', 350.00, 'بني انصار,حي عبد المومن', 'Bani Ansar, Abdul Mumin neighborhood', 'Bani Ansar, barrio de Abdul Mumin', 'Bani Ansar, quartier Abdul Mumin', 'Bani Ansar, Abdul Mumin Viertel', 'Bani Ansar, Abdul Mumin -buurt', 7, 2, 2, 286, 'buy', 0, '0000-00-00', 2, 2),
(31, 'شقة1', 'Apartment 1', 'Apartamento 1', 'Appartement 1', 'Wohnung 1', 'Appartement 1', 'شقة1', 'Apartment 1', 'Apartamento 1', 'Appartement 1', 'Wohnung 1', 'Appartement 1', 44.00, 'بني انصار,حي عبد المومن', 'Bani Ansar, Abdul Mumin neighborhood', 'Bani Ansar, barrio de Abdul Mumin', 'Bani Ansar, quartier Abdul Mumin', 'Bani Ansar, Abdul Mumin Viertel', 'Bani Ansar, Abdul Mumin -buurt', 7, 2, 2, 286, 'rent', 1, '0000-00-00', 0, 2),
(32, 'شقة11', 'Apartment 11', 'Apartamento 11', 'Appartement 11', 'Wohnung 11', 'Appartement 11', 'شقة11', 'Apartment 11', 'Apartamento 11', 'Appartement 11', 'Wohnung 11', 'Appartement 11', 44.00, 'بني انصار,حي عبد المومن', 'Bani Ansar, Abdul Mumin neighborhood', 'Bani Ansar, barrio de Abdul Mumin', 'Bani Ansar, quartier Abdul Mumin', 'Bani Ansar, Abdul Mumin Viertel', 'Bani Ansar, Abdul Mumin -buurt', 7, 2, 2, 286, 'rent', 1, '0000-00-00', 0, 2),
(33, 'ارض', 'Land', 'Tierra', 'Atterrir', 'Land', 'Land', 'ارض', 'Land', 'Tierra', 'Atterrir', 'Land', 'Land', 1.00, '1', '1', '1', '1', '1', '1', 0, 0, 0, 1, 'floorplots', 0, '0000-00-00', 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `property_images`
--

CREATE TABLE `property_images` (
  `image_id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `property_images`
--

INSERT INTO `property_images` (`image_id`, `property_id`, `image_url`, `created_at`) VALUES
(172, 29, '1722065556550.jpg', '2024-07-27 07:32:37'),
(173, 29, '1722065556700.jpg', '2024-07-27 07:32:37'),
(174, 29, '1722065556857.jpg', '2024-07-27 07:32:37'),
(175, 29, '1722065556995.jpg', '2024-07-27 07:32:37'),
(176, 30, '1722065621020.jpg', '2024-07-27 07:33:42'),
(177, 30, '1722065621181.jpg', '2024-07-27 07:33:42'),
(178, 30, '1722065621330.jpg', '2024-07-27 07:33:42'),
(179, 30, '1722065621471.jpg', '2024-07-27 07:33:42'),
(180, 30, '1722065621622.jpg', '2024-07-27 07:33:42'),
(181, 30, '1722065621758.jpg', '2024-07-27 07:33:42'),
(182, 30, '1722065621913.jpg', '2024-07-27 07:33:42'),
(183, 30, '1722065621980.jpg', '2024-07-27 07:33:42'),
(184, 31, '1722070694763.jpg', '2024-07-27 08:58:15'),
(185, 31, '1722070694883.jpg', '2024-07-27 08:58:15'),
(186, 31, '1722070694985.jpg', '2024-07-27 08:58:15'),
(187, 31, '1722070695091.jpg', '2024-07-27 08:58:15'),
(188, 31, '1722070695204.jpg', '2024-07-27 08:58:15'),
(189, 31, '1722070695307.jpg', '2024-07-27 08:58:15'),
(190, 31, '1722070695414.jpg', '2024-07-27 08:58:15'),
(191, 31, '1722070695539.jpg', '2024-07-27 08:58:15'),
(192, 31, '1722070695645.jpg', '2024-07-27 08:58:15'),
(193, 31, '1722070695744.jpg', '2024-07-27 08:58:15'),
(194, 32, '1722072959268.png', '2024-07-27 09:36:00'),
(195, 32, '1722072959415.png', '2024-07-27 09:36:00'),
(196, 32, '1722072959617.png', '2024-07-27 09:36:00'),
(197, 32, '1722072959828.png', '2024-07-27 09:36:00'),
(198, 32, '1722072960038.png', '2024-07-27 09:36:00'),
(199, 33, '1722073138861.jpg', '2024-07-27 09:38:58');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pour la table `properties`
--
ALTER TABLE `properties`
  MODIFY `property_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT pour la table `property_images`
--
ALTER TABLE `property_images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=200;

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
