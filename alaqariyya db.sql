-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 02 oct. 2024 à 09:32
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
-- Structure de la table `clickcount_state`
--

CREATE TABLE `clickcount_state` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `click_count` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `clickcount_stats`
--

CREATE TABLE `clickcount_stats` (
  `id` int(11) NOT NULL,
  `property_id` int(11) DEFAULT NULL,
  `click_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `clickcount_stats`
--

INSERT INTO `clickcount_stats` (`id`, `property_id`, `click_time`) VALUES
(1, 68, '2024-09-30 07:37:41'),
(2, 120, '2024-09-30 07:37:51'),
(3, 118, '2024-09-30 07:38:11'),
(4, 68, '2024-09-30 08:56:49'),
(5, 68, '2024-09-30 15:01:28'),
(6, 115, '2024-09-30 15:01:33'),
(7, 61, '2024-09-30 15:27:13'),
(8, 58, '2024-09-30 15:30:06'),
(9, 123, '2024-09-30 17:43:27'),
(10, 103, '2024-09-30 17:43:37'),
(11, 120, '2024-09-30 17:43:47'),
(12, 113, '2024-09-30 17:43:55'),
(13, 101, '2024-09-30 17:44:00'),
(14, 67, '2024-10-01 07:52:42'),
(15, 124, '2024-10-01 14:56:31'),
(16, 107, '2024-10-01 14:56:43'),
(17, 101, '2024-10-01 15:03:47');

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
(21, 'fgfgd', 'fhgdffh@gmail.com', 'dfhghh', 'ss', 'fdhfg', '2024-08-28 18:52:51');

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
(25, 'كتاب', 'book', 'livre', 'libro', 'Buch', 'boek', 'كتاب', 'book', 'livre', 'libro', 'Buch', 'boek', 'IMG_6515.jpg', '2024-09-29 08:58:15'),
(26, 'كتاب', 'book', 'livre', 'libro', 'Buch', 'boek', 'كتاب', 'book', 'livre', 'libro', 'Buch', 'boek', '1.jpg', '2024-09-29 09:08:35');

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
  `old_price` decimal(10,2) DEFAULT NULL,
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

INSERT INTO `properties` (`property_id`, `title_ar`, `title_en`, `title_es`, `title_fr`, `title_de`, `title_nl`, `description_ar`, `description_en`, `description_es`, `description_fr`, `description_de`, `description_nl`, `price`, `old_price`, `location_ar`, `location_en`, `location_es`, `location_fr`, `location_de`, `location_nl`, `bedrooms`, `salon`, `bathrooms`, `area`, `type`, `available`, `availability_date`, `floors`, `kitchen`) VALUES
(58, 'شقة ', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 2500.00, NULL, 'فاس', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 90, 'rent', 1, '0000-00-00', 0, 1),
(61, 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 2500.00, NULL, 'فاس', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 90, 'rent', 1, NULL, NULL, 1),
(65, 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 2500.00, NULL, 'فاس', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 90, 'rent', 1, NULL, NULL, 1),
(67, 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 2500.00, NULL, 'فاس', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 10, 'rent', 1, '0000-00-00', 0, 1),
(68, 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 'شقة مفروشة واسعة', 'Wide furnished apartment', 'Apartamento amueblado', 'Appartement largement meublé', 'Weit eingerichtete Wohnung', 'Wijd ingericht appartement', 2500.00, NULL, 'فاس', 'Pasture', 'Pastar', 'Pâturage', 'Weide', 'Weiland', 1, 1, 1, 90, 'rent', 1, NULL, NULL, 1),
(82, 'ارض', 'land', 'tierra', 'atterrir', 'Land', 'land', 'ارض', 'land', 'tierra', 'atterrir', 'Land', 'land', 10.00, 554515.00, 'الناضور', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', 1, 1, 1, 144, 'rent', 1, '0000-00-00', 0, 1),
(83, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 9.00, NULL, 'بني انصار، الطريق الرئيسية حي عبد المومن', 'Bani Ansar, the main road, Abdul Mumin neighborhood', 'Bani Ansar, el camino principal, Abdul Mumin Barrio', 'Bani Ansar, la route principale, quartier Abdul Mumin', 'Bani Ansar, die Hauptstraße, Abdul Mumin Viertel', 'Bani Ansar, The Main Road, Abdul Mumin Neighborhood', 1, 1, 1, 90, 'regularRent', 0, NULL, 1, 1),
(93, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 4.00, 11.00, 'بني انصارحي عبد ', 'Bani Insahi Abd Bani', 'Bani insahi abd bani', 'Bani insahi Abd Bani', 'Bani Insahi Abd Bani', 'Bani Insahi Abd Bani', 0, 0, 0, 11, 'Commercialgarages', 0, '0000-00-00', 0, 0),
(100, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 1, 1, 1, 11, 'regularRent', 0, NULL, 5, 1),
(101, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 111, 1, 1, 11, 'buy', 0, '0000-00-00', 1, 1),
(102, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 8.00, 11.00, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 1, 1, 1, 11, 'rent', 1, '0000-00-00', 0, 1),
(103, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', NULL, NULL, NULL, 11, 'floorplots', 0, NULL, NULL, NULL),
(104, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', NULL, NULL, NULL, 11, 'floorplots', 0, NULL, NULL, NULL),
(105, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء ليس في المغرب', 'Apartment for rental is not in Morocco', 'El apartamento para alquiler no está en Marruecos', 'L\'appartement pour la location n\'est pas au Maroc', 'Wohnung für die Miete ist nicht in Marokko', 'Appartement voor huur is niet in Marokko', 11.00, NULL, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 1, 1, 1, 11, 'rent', 1, '0000-00-00', 0, 1),
(106, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 11.00, NULL, 'بني انصارحي عبد المومن', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', 'Bani Insahi Abdul Mumin', NULL, NULL, NULL, 11, 'floorplots', 0, NULL, NULL, NULL),
(107, 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zum Verkauf', 'Huis te koop', 'منزل للبيع', 'House for sale', 'Casa en venta', 'Maison à vendre', 'Haus zum Verkauf', 'Huis te koop', 4.00, NULL, '1', '1', '1', '1', '1', '1', NULL, NULL, NULL, 1, 'floorplots', 0, NULL, NULL, NULL),
(113, 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 89.00, 90.00, 'الناظور', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', 0, 0, 0, 50, 'Commercialgarages', 0, '0000-00-00', 0, 0),
(114, 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 1.00, NULL, 'الناظور', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', NULL, NULL, NULL, 50, 'Commercialgarages', 0, NULL, NULL, NULL),
(115, 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 1.00, NULL, 'الناظور', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', NULL, NULL, NULL, 50, 'floorplots', 0, NULL, NULL, NULL),
(118, 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 'كاراج للكراء', 'Garage', 'Cochera', 'Garage', 'Garage', 'Garage', 99.00, NULL, 'الناظور', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', 99, 99, 99, 99, 'Commercialgarages', 0, NULL, 99, 99),
(120, 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 'كتاب', 'book', 'libro', 'livre', 'Buch', 'boek', 1.00, NULL, 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', NULL, NULL, NULL, 1, 'Commercialgarages', 0, NULL, NULL, NULL),
(122, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 7.00, NULL, 'الناظور', 'Nador', 'Nador', 'Nador', 'Nador', 'Nador', 7, 7, 7, 7, 'rent', 1, NULL, NULL, 7),
(123, 'شقة للكراء', 'Apartment for rent', 'Apartamento para el alquiler', 'Appartement à louer', 'Wohnung zur Miete', 'Appartement te huur', 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 1999.00, NULL, 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', NULL, NULL, NULL, 1999, 'Commercialgarages', 0, NULL, NULL, NULL),
(124, 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 7777.00, NULL, 'شقة', 'apartment', 'departamento', 'appartement', 'Wohnung', 'appartement', 1, 1, 1, 1, 'buy', 0, NULL, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `property_images`
--

CREATE TABLE `property_images` (
  `image_id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `is_main` tinyint(1) DEFAULT 0,
  `display_order` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `property_images`
--

INSERT INTO `property_images` (`image_id`, `property_id`, `image_url`, `created_at`, `is_main`, `display_order`) VALUES
(156, 58, '1724088025382.jpg', '2024-08-19 17:20:25', 1, 0),
(160, 61, '1724142558436.jpg', '2024-08-20 08:29:18', 1, 0),
(164, 65, '1724152559928.jpg', '2024-08-20 11:16:00', 1, 0),
(166, 67, '1724154819302.jpg', '2024-08-20 11:53:39', 1, 0),
(167, 68, '1724154819377.jpg', '2024-08-20 11:53:39', 1, 0),
(181, 82, '1724176325590.png', '2024-08-20 17:52:05', 1, 0),
(182, 83, '1724176708531.png', '2024-08-20 17:58:28', 1, 0),
(202, 93, '1724842218730.PNG', '2024-08-28 10:50:18', 1, 0),
(209, 100, '1725263467191.jpg', '2024-09-02 07:51:07', 1, 0),
(210, 101, '1725272809289.jpg', '2024-09-02 10:26:49', 1, 0),
(211, 102, '1725295610418.jpg', '2024-09-02 16:46:50', 1, 0),
(212, 102, '1725295610471.jpg', '2024-09-02 16:46:50', 0, 1),
(213, 102, '1725295610511.jpg', '2024-09-02 16:46:50', 0, 2),
(214, 102, '1725295610551.jpg', '2024-09-02 16:46:50', 0, 3),
(215, 103, '1725298567926.jpg', '2024-09-02 17:36:07', 1, 0),
(216, 104, '1725351811385.jpg', '2024-09-03 08:23:31', 1, 0),
(217, 104, '1725351811449.jpg', '2024-09-03 08:23:31', 0, 1),
(218, 104, '1725351811495.jpg', '2024-09-03 08:23:31', 0, 2),
(219, 105, '1725448061944.jpg', '2024-09-04 11:07:42', 1, 0),
(220, 105, '1725448062102.jpg', '2024-09-04 11:07:42', 0, 1),
(221, 105, '1725448062164.jpg', '2024-09-04 11:07:42', 0, 2),
(222, 105, '1725448062220.jpg', '2024-09-04 11:07:42', 0, 3),
(223, 105, '1725448062277.jpg', '2024-09-04 11:07:42', 0, 4),
(224, 105, '1725448062333.jpg', '2024-09-04 11:07:42', 0, 5),
(225, 105, '1725448062391.jpg', '2024-09-04 11:07:42', 0, 6),
(226, 105, '1725448062445.jpg', '2024-09-04 11:07:42', 0, 7),
(227, 106, '1726133473343.jpg', '2024-09-12 09:31:13', 1, 0),
(228, 107, '1726143730119.jpg', '2024-09-12 12:22:10', 1, 0),
(235, 113, '1726826994659.jpg', '2024-09-20 10:09:54', 1, 0),
(236, 114, '1727004582788.jpg', '2024-09-22 11:29:42', 1, 0),
(237, 115, '1727277433257.png', '2024-09-25 15:17:13', 1, 0),
(238, 115, '1727277433339.png', '2024-09-25 15:17:13', 0, 1),
(249, 118, '1727432010353.jpg', '2024-09-27 10:13:30', 1, 0),
(250, 118, '1727432010456.jpg', '2024-09-27 10:13:30', 0, 1),
(251, 118, '1727432010558.jpg', '2024-09-27 10:13:30', 0, 2),
(252, 118, '1727432010667.jpg', '2024-09-27 10:13:30', 0, 3),
(261, 120, '1727600882532.jpg', '2024-09-29 09:08:02', 1, 0),
(262, 120, '1727600882585.jpg', '2024-09-29 09:08:02', 0, 1),
(263, 120, '1727600882662.jpg', '2024-09-29 09:08:02', 0, 2),
(264, 120, '1727600882732.jpg', '2024-09-29 09:08:02', 0, 3),
(267, 122, '1727601295342.png', '2024-09-29 09:14:55', 1, 0),
(268, 123, '1727718198186.png', '2024-09-30 17:43:18', 1, 0),
(269, 124, '1727794573443.jpg', '2024-10-01 14:56:13', 1, 0),
(270, 124, '1727794573538.jpg', '2024-10-01 14:56:13', 0, 1);

-- --------------------------------------------------------

--
-- Structure de la table `share_stats`
--

CREATE TABLE `share_stats` (
  `id` int(11) NOT NULL,
  `property_id` int(11) DEFAULT NULL,
  `share_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `share_stats`
--

INSERT INTO `share_stats` (`id`, `property_id`, `share_time`) VALUES
(1, 58, '2024-09-30 15:30:07'),
(2, 67, '2024-10-01 07:52:43');

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

-- --------------------------------------------------------

--
-- Structure de la table `visitor_details`
--

CREATE TABLE `visitor_details` (
  `id` int(11) NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `country` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `visit_count` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `visitor_details`
--

INSERT INTO `visitor_details` (`id`, `ip_address`, `country`, `city`, `visit_count`) VALUES
(1, '::1', 'Unknown', 'Unknown', 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `clickcount_state`
--
ALTER TABLE `clickcount_state`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_id` (`property_id`);

--
-- Index pour la table `clickcount_stats`
--
ALTER TABLE `clickcount_stats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_id` (`property_id`);

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
-- Index pour la table `share_stats`
--
ALTER TABLE `share_stats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_id` (`property_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `visitor_details`
--
ALTER TABLE `visitor_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `clickcount_state`
--
ALTER TABLE `clickcount_state`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `clickcount_stats`
--
ALTER TABLE `clickcount_stats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `contact_submissions`
--
ALTER TABLE `contact_submissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT pour la table `properties`
--
ALTER TABLE `properties`
  MODIFY `property_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;

--
-- AUTO_INCREMENT pour la table `property_images`
--
ALTER TABLE `property_images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=271;

--
-- AUTO_INCREMENT pour la table `share_stats`
--
ALTER TABLE `share_stats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `visitor_details`
--
ALTER TABLE `visitor_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `clickcount_state`
--
ALTER TABLE `clickcount_state`
  ADD CONSTRAINT `clickcount_state_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties` (`property_id`);

--
-- Contraintes pour la table `clickcount_stats`
--
ALTER TABLE `clickcount_stats`
  ADD CONSTRAINT `clickcount_stats_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties` (`property_id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `property_images`
--
ALTER TABLE `property_images`
  ADD CONSTRAINT `property_images_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties` (`property_id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `share_stats`
--
ALTER TABLE `share_stats`
  ADD CONSTRAINT `share_stats_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties` (`property_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
